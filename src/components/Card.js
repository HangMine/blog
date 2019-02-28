import React, { Component } from "react";
import "@css/Card.scss";

class CardItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let data = this.props.data;
    let typeTrans = {
      0: { name: "Other", logo: "icon-gengduo" },
      1: { name: "Notes", logo: "icon-rizhi" },
      2: { name: "Code", logo: "icon-wulumuqishigongandashujuguanlipingtai-ico-" },
      3: { name: "Game", logo: "icon-youxi" }
    };
    let type = typeTrans[data.type] || typeTrans[0];
    return (
      <div className="h-card-item">
        <div className="main">
          <div className="img" style={{ backgroundImage: `url(${data.img})` }} />
          <div className="info">
            <a href="//" className="title">
              {data.title}
            </a>
            <div className="type">
              <div className="type-logo">
                <svg className="icon" style={{ fontSize: 25 }}>
                  <use xlinkHref={`#${type.logo}`} />
                </svg>
              </div>
              <a href="//" className="type-name">
                {type.name}
              </a>
            </div>
          </div>
          <div className="rotate-shade black" />
          <div className="rotate-shade white" />
          <div className="shade">
            <p>
              上一篇介绍了 Webpack 优化项目的四种技巧，分别是通过 UglifyJS 插件实现对 JavaScript
              文件的压缩，css-loade...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

CardItem.defaultProps = {
  data: {}
};

function Card(props) {
  return <div className="h-card">{props.children}</div>;
}

Card.Item = CardItem;

export default Card;
