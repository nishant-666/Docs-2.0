import "./index.scss";
import { useState } from "react";
import addDoc from "../../assets/addDoc.png";
import EditDoc from "../EditDoc";
import { createDoc } from "../../API/Firestore";
import CommonModal from "../Modal";
import { Input } from "antd";

type isEditType = {
  isEdit: boolean;
  handleEdit: () => void;
  id: string;
};

export default function CreateDoc({ isEdit, handleEdit, id }: isEditType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const createDocument = () => {
    let payload = {
      title: title,
      value: "",
    };
    createDoc(payload);
  };

  if (isEdit) return <EditDoc handleEdit={handleEdit} id={id} />;
  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <p>Start a new document</p>
        <img
          className="start-doc"
          src={addDoc}
          onClick={() => {
            // handleEdit();
            setTitle("");
            setIsModalOpen(true);
          }}
        />
        <p className="title">Blank</p>
      </div>

      <CommonModal
        createDocument={createDocument}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <Input
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
          placeholder="Enter the Title"
        />
      </CommonModal>
    </div>
  );
}
