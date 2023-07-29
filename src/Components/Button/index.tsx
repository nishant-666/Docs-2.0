import React from "react";
import { Button } from "antd";

type ButtonProps = {
  title: string;
  handleLogin: () => void;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  handleLogin,
}: ButtonProps) => {
  return (
    <>
      <Button size="large" type="primary" onClick={handleLogin}>
        {title}
      </Button>
    </>
  );
};

export default ButtonComponent;
