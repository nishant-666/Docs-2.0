import React from "react";
import ButtonComponent from "../Components/Button";
import { loginWithGoogle } from "../API/Auth";
import useCheckAuth from "../Hooks/useCheckAuth";
import Document from "../Components/Document";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };
  let { isAuthenticated, userData } = useCheckAuth();
  return (
    <div className="docs-container">
      {!isAuthenticated ? (
        <ButtonComponent
          title="Login With Google"
          handleLogin={handleLogin}
        ></ButtonComponent>
      ) : (
        <>
          <Document photoURL={userData?.photoURL} />
        </>
      )}
    </div>
  );
};

export default Docs;
