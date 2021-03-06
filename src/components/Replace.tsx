import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'

type ReplaceObject = {
  text: string | RegExp
  css: string
  className?: string
  tag?: string
}

type Props = {
  children: React.ReactNode
  replace: Array<ReplaceObject>
}

export default class Replace extends React.Component<Props, {}> {
  renderChildren(children: string) {
    this.props.replace.forEach((replaceObj) => {
      children = children.replace(
        replaceObj.text,
        `<${replaceObj.tag ? replaceObj.tag : 'span'} style="${
          replaceObj.css
        }" class="${replaceObj.className}">${replaceObj.text}</${
          replaceObj.tag ? replaceObj.tag : 'span'
        }>`
      )
    })
    console.log(children)
    return children
  }

  parse(children: any) {
    if (typeof children === 'string') {
      return this.renderChildren(children)
    } else {
      console.log(children)
      return children
    }
  }

  render() {
    return <div>{ReactHtmlParser(this.parse(this.props.children))}</div>
  }
}
