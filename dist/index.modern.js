import { Component, createElement } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Replace extends Component {
  renderChildren(children) {
    this.props.replace.forEach(replaceObj => {
      children = children.replace(replaceObj.text, `<span style="${replaceObj.css}" class="${replaceObj.className}">${replaceObj.text}</span>`);
    });
    console.log(children);
    return children;
  }

  parse(children) {
    if (typeof children === 'string') {
      return this.renderChildren(children);
    } else {
      console.log(children);
      return children;
    }
  }

  render() {
    return createElement("div", null, ReactHtmlParser(this.parse(this.props.children)));
  }

}

const Url = ({
  className,
  css
}) => {
  const urlCss = `
    text-decoration: underline;
    cursor: pointer;
  `;
  return {
    text: 'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)',
    css: css || urlCss,
    className: className
  };
};

export default Replace;
export { Url };
//# sourceMappingURL=index.modern.js.map
