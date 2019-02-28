import React, { Component } from "react";
import style from "@css/base/Collapse.module.scss";
import PropTypes from "prop-types";
class Collapse extends Component {
  constructor(props) {
    super(props);
    this.refBody = React.createRef(); //body元素
    this.state = {
      isCollapse: false,
    };
  }

  //props和state都在这更新
  static getDerivedStateFromProps(nextProps, prevState) {
    let isRefresh = nextProps.isCollapse === prevState.isCollapse;
    return isRefresh ? { isCollapse: prevState.isCollapse } : null;
  }

  componentDidMount() {
    this.setStyle();
  }

  componentDidUpdate() {
    this.setStyle();
  }

  setStyle = () => {
    let height = this.getHeight();
    this.setHeight(height);
    this.setOpacity();
  };

  setHeight = (height = 0) => {
    height = isNaN(height) ? height : `${height}px`;
    this.refBody.current.style.height = height;
  };

  getHeight = () => {
    let height = this.refBody.current.scrollHeight; //核心，通过scrollHeight获取元素高度
    let resHeight = this.state.isCollapse ? height : 0;
    return resHeight;
  };

  setOpacity = () => {
    let opacity = this.state.isCollapse ? 1 : 0;
    this.refBody.current.style.opacity = opacity;
  };

  toggle = () => {
    this.setState(state => ({ isCollapse: !state.isCollapse }));
  };

  render() {
    return (
      <div className={style.collapse}>
        <div className={style.header} onClick={this.toggle}>
          {this.props.header}
        </div>
        <div className={style.body} ref={this.refBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  isCollapse: PropTypes.bool,
};

Collapse.defaultProps = {
  isCollapse: false,
};

export default Collapse;
