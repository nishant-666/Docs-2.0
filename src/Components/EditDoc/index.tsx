import "./index.scss";
import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../Toolbar";
import { editDoc, getCurrentDoc } from "../../API/Firestore";
import { Input } from "antd";

export default function EditDoc({ id }: functionInterface) {
  let quillRef = useRef<any>(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState("");
  const [currentDocument, setCurrentDocument] = useState({
    title: "",
    value: "",
  });
  function editDocument() {
    let payload = {
      value,
      title,
    };
    editDoc(payload, id);
    setIsSaving("Saving..");
  }

  const getCurrentDocument = () => {
    if (id) {
      getCurrentDoc(id, setCurrentDocument);
    }
  };

  useEffect(() => {
    setIsSaving("");
    const debounced = setTimeout(() => {
      editDocument();
    }, 500);

    return () => {
      clearTimeout(debounced);
    };
  }, [value, title]);

  useEffect(() => {
    getCurrentDocument();
    quillRef.current.focus();
  }, []);

  useEffect(() => {
    setTitle(currentDocument?.title);
    setValue(currentDocument?.value);
  }, [currentDocument]);

  return (
    <div className="edit-container">
      {/* <p className="saving-conf">{isSaving}</p> */}
      <Input
        value={title}
        className="title-input"
        onChange={(event) => setTitle(event?.target.value)}
        placeholder="Enter the Title"
      />
      <div className="quill-container">
        <EditorToolbar />
        <ReactQuill
          className="react-quill"
          theme="snow"
          ref={quillRef}
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
}
