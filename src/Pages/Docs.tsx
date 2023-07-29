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
    <>
      {!isAuthenticated ? (
        <div className="docs-container">
          <ButtonComponent
            title="Login With Google"
            handleLogin={handleLogin}
          ></ButtonComponent>
        </div>
      ) : (
        <>
          <Document photoURL={userData?.photoURL} />
        </>
      )}
    </>
  );
};

export default Docs;
