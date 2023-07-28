import React from "react";
import ModalComponent from "../Components/Modal";
import { loginWithGoogle } from "../API/Auth";
import useCheckAuth from "../Hooks/useCheckAuth";
import Topbar from "../Components/Topbar";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };
  let { isAuthenticated, userData } = useCheckAuth();
  console.log(userData);
  return (
    <div className="docs-container">
      {!isAuthenticated ? (
        <ModalComponent
          title="Login With Google"
          handleLogin={handleLogin}
        ></ModalComponent>
      ) : (
        <>
          <Topbar photoURL={userData?.photoURL} />
        </>
      )}
    </div>
  );
};

export default Docs;
