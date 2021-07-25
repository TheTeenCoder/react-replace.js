function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactHtmlParser = _interopDefault(require('react-html-parser'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var Replace = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Replace, _React$Component);

  function Replace() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Replace.prototype;

  _proto.renderChildren = function renderChildren(children) {
    this.props.replace.forEach(function (replaceObj) {
      children = children.replace(replaceObj.text, "<span style=\"" + replaceObj.css + "\" class=\"" + replaceObj.className + "\">" + replaceObj.text + "</span>");
    });
    console.log(children);
    return children;
  };

  _proto.parse = function parse(children) {
    if (typeof children === 'string') {
      return this.renderChildren(children);
    } else {
      console.log(children);
      return children;
    }
  };

  _proto.render = function render() {
    return React.createElement("div", null, ReactHtmlParser(this.parse(this.props.children)));
  };

  return Replace;
}(React.Component);

var Url = function Url(_ref) {
  var className = _ref.className,
      css = _ref.css;
  var urlCss = "\n    text-decoration: underline;\n    cursor: pointer;\n  ";
  return {
    text: 'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)',
    css: css || urlCss,
    className: className
  };
};

exports.Url = Url;
exports.default = Replace;
//# sourceMappingURL=index.js.map
