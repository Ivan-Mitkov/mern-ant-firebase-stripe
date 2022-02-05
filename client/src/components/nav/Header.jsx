import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = React.useState("home");
  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Username"
        className="ml-auto"
      >
        <Item key="setting:1">
          <Link>Option 1 </Link>
        </Item>

        <Item key="setting:2">
          <Link>Option 2</Link>
        </Item>
      </SubMenu>
      <Item key="login" icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Header;
