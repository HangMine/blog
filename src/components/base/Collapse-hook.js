import React, { useState, useEffect, useRef } from "react";
import style from "@css/base/Collapse.module.scss";
import PropTypes from "prop-types";

function Collapse(props) {
  const [isCollapse, setIsCollapse] = useState(false);
  useEffect(() => {
    setStyle();
  });
  const refBody = useRef(null);

  const setStyle = () => {
    let height = getHeight();
    setHeight(height);
    setOpacity();
  };

  const setHeight = (height = 0) => {
    height = isNaN(height) ? height : `${height}px`;
    refBody.current.style.height = height;
  };

  const getHeight = () => {
    let height = refBody.current.scrollHeight; //核心，通过scrollHeight获取元素高度
    let resHeight = isCollapse ? height : 0;
    return resHeight;
  };

  const setOpacity = () => {
    let opacity = isCollapse ? 1 : 0;
    refBody.current.style.opacity = opacity;
  };
  return (
    <div className={style.collapse}>
      <div className={style.header} onClick={() => setIsCollapse(!isCollapse)}>
        {props.header}
      </div>
      <div className={style.body} ref={refBody}>
        {typeof props.children == "function" ? props.children(setIsCollapse) : props.children}
      </div>
    </div>
  );
}
Collapse.propTypes = {
  isCollapse: PropTypes.bool,
};

Collapse.defaultProps = {
  isCollapse: false,
};

export default Collapse;
