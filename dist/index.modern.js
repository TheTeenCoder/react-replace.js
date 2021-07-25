import { Component, createElement } from 'react';
import ReactHtmlParser from 'react-html-parser';

var styles = {"test":"_styles-module__test__3ybTi"};

class Replace extends Component {
  renderChildren(children) {
    this.props.replace.forEach(replaceObj => {
      children = children.replace(replaceObj.text, `<span style="${replaceObj.css}">${replaceObj.text}</span>`);
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

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
const ExampleComponent2 = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export default Replace;
export { ExampleComponent, ExampleComponent2 };
//# sourceMappingURL=index.modern.js.map
