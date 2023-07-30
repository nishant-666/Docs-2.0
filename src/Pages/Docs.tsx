import React from "react";
import ButtonComponent from "../Components/Button";
import { loginWithGoogle } from "../API/Auth";
import useCheckAuth from "../Hooks/useCheckAuth";
import Document from "../Components/Document";
import Spinner from "../Components/Spinner";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };
  let { isAuthenticated, userData, loading } = useCheckAuth();
  if (loading) return <Spinner />;

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
