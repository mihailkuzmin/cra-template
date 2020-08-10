import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const className = classnames(styles.button, props.className)

  return <button {...props} className={className} />
}
