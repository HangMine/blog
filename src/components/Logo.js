import React from "react";
import { Avatar } from "antd";

function Logo(props) {
  //可传入图标或默认显示用户头像
  const Icon = () => {
    return props.icon ? props.icon : <Avatar size={props.size} src={props.src} icon="user" />;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {Icon()}
      <div style={{ color: "white", fontSize: "12px" }}>{props.title}</div>
    </div>
  );
}

Logo.defaultProps = {
  size: 100,
  title: "头像标题"
};

export default Logo;
