import React, { Component } from "react";
import { Layout } from "antd";
import Aside from "@/components/Aside";
import Main from "@/components/Main";

class App extends Component {
  render() {
    return (
      <Layout>
        <Aside />
        <Main />
      </Layout>
    );
  }
}

export default App;
