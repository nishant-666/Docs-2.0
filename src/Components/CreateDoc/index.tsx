import "./index.scss";
import addDoc from "../../assets/addDoc.png";
import EditDoc from "../EditDoc";
import { createDoc } from "../../API/Firestore";

type isEditType = {
  isEdit: boolean;
  handleEdit: () => void;
  id: string;
};

export default function CreateDoc({ isEdit, handleEdit, id }: isEditType) {
  const createDocument = () => {
    let payload = {
      title: "Untitled",
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
            handleEdit();
            createDocument();
          }}
        />
        <p className="title">Blank</p>
      </div>
    </div>
  );
}
