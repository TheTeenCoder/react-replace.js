type Template = {
  css?: string
  className?: string
}

export const Url = ({ className, css }: Template) => {
  const urlCss = `
    text-decoration: underline;
    cursor: pointer;
  `

  const Regex = new RegExp(
    '[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)'
  )

  return {
    text: new RegExp(
      'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)'
    ),
    css: css || urlCss,
    className: className || '',
    tag: 'a'
  }
}
