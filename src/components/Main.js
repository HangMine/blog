import React, { PureComponent } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "@/views/Home";
import Manage from "@/views/Manage";
import Todo from "@/todo/containers/App";

const { Content } = Layout;
//必须使用PureComponent，否则由于layout的sider影响，导致更新
class Main extends PureComponent {
  componentDidUpdate(nextProps) {
    console.log("Main组件更新");
    console.log(nextProps);
  }
  render() {
    return (
      <Router>
        <Content>
          <Route exact path="/" component={Home} />
          <Route path="/manage" component={Manage} />
          <Route path="/todo" component={Todo} />
        </Content>
      </Router>
    );
  }
}

export default Main;
