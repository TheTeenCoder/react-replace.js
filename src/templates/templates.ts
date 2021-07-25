type Template = {
  css?: string
  className: string
}

export const Url = ({ className, css }: Template) => {
  const urlCss = `
    text-decoration: underline;
    cursor: pointer;
  `

  return {
    text: 'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)',
    css: css || urlCss,
    className: className
  }
}
