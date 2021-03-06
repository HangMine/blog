import React, { Component } from "react";
import "@css/Maside.scss";
import { Icon, Button, Input, Popover } from "antd";
// import { Icon, Collapse } from "antd";
// const Panel = Collapse.Panel;

import Collapse from "@/components/base/Collapse";

//
const menuData = ["日记本", "随笔"];

const operateList = (
  <ul className="M_Aside_opreate">
    <li>
      <Icon type="form" />
      修改文集
    </li>
    <li>
      <Icon type="delete" />
      删除文集
    </li>
  </ul>
);

const menuList = menuData.map((item, id) => (
  <li key={id}>
    {item}
    <div className="icon-wrap">
      <Popover
        overlayClassName="M_Aside_pop"
        arrowPointAtCenter
        placement="bottomRight"
        content={operateList}
        trigger="click"
      >
        <Icon type="setting" theme="filled" />
      </Popover>
    </div>
  </li>
));

class M_Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    };
  }

  render() {
    return (
      <div className="M_Aside">
        <Collapse
          header={
            <h4>
              <Icon type="plus" />
              <span>新建类型</span>
            </h4>
          }
        >
          {setIsCollapse => (
            <div className="maside-collapse">
              <Input
                className="rm-antd-border"
                value={this.state.type}
                allowClear
                onChange={e => this.setState({ type: e.target.value })}
              />
              <div className="btn-group">
                <Button className="btn-commit" ghost shape="round">
                  提交
                </Button>
                <Button className="btn-cancel" ghost shape="round" onClick={() => setIsCollapse(false)}>
                  取消
                </Button>
              </div>
            </div>
          )}
        </Collapse>

        <ul>{menuList}</ul>
      </div>
    );
  }
}

export default M_Aside;
