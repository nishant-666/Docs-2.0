import React from "react";
import "./index.scss";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { logout } from "../../API/Auth";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <p onClick={logout} className="menu-item">
        Log out
      </p>
    ),
  },
];

const CommonDropdown: React.FC<DropdownProps> = ({ children }) => (
  <Dropdown placement="bottomRight" menu={{ items }}>
    {children}
  </Dropdown>
);

export default CommonDropdown;
