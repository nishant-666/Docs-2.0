import "./index.scss";
import docsIcon from "../../assets/docsIcon.png";

type TopbarProps = {
  photoURL: string;
};

export default function Topbar({ photoURL }: TopbarProps) {
  return (
    <div className="top-bar">
      <div className="topbar-left">
        <img className="docs-icon" src={docsIcon} />
        <p className="top-title">Docs</p>
      </div>
      <img className="top-image" src={photoURL} />
    </div>
  );
}
