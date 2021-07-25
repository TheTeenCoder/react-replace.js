import * as React from 'react'
import styles from './styles.module.css'
import Replace from './components/Replace'

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export const ExampleComponent2 = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default Replace
