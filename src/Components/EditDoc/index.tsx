import "./index.scss";
import { useState, useRef, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../Toolbar";
import { editDoc, getCurrentDoc } from "../../API/Firestore";

export default function EditDoc({ handleEdit, id }: functionInterface) {
  let quillRef = useRef<any>(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
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
  }

  const getCurrentDocument = () => {
    getCurrentDoc(id, setCurrentDocument);
  };

  useEffect(() => {
    const debounced = setTimeout(() => {
      editDocument();
    }, 2000);

    return () => clearTimeout(debounced);
  }, [value, title]);

  useEffect(() => {
    getCurrentDocument();
    quillRef.current.focus();
  }, []);

  useEffect(() => {
    setTitle(currentDocument.title);
    setValue(currentDocument.value);
  }, [currentDocument]);

  console.log(currentDocument);
  return (
    <div className="edit-container">
      <BiArrowBack onClick={handleEdit} size={30} className="react-icon" />

      <input
        onChange={(event) => {
          setTitle(event?.target.value);
        }}
        value={title}
        className="title-input"
        placeholder="Untitled"
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
