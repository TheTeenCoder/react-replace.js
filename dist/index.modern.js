import { Component, createElement } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Replace extends Component {
  renderChildren(children) {
    this.props.replace.forEach(replaceObj => {
      children = children.replace(replaceObj.text, `<${replaceObj.tag ? replaceObj.tag : 'span'} style="${replaceObj.css}" class="${replaceObj.className}">${replaceObj.text}</${replaceObj.tag ? replaceObj.tag : 'span'}>`);
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
  const regex = RegExp('[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)');
  return {
    text: regex,
    css: css || urlCss,
    className: className || '',
    tag: 'a'
  };
};

export default Replace;
export { Url };
//# sourceMappingURL=index.modern.js.map
