import React from "react";
import ButtonComponent from "../Components/Button";
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
        <ButtonComponent
          title="Login With Google"
          handleLogin={handleLogin}
        ></ButtonComponent>
      ) : (
        <>
          <Topbar photoURL={userData?.photoURL} />
        </>
      )}
    </div>
  );
};

export default Docs;
