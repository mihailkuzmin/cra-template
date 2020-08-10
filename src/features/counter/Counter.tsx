import React from 'react'
import { useStore } from 'effector-react'
import { Button } from '@ui/button'
import { counter } from './model'
import styles from './styles.module.scss'

export const Counter = () => {
  const count = useStore(counter.$counter)

  return (
    <div className={styles.counter}>
      <p>Counter</p>
      <span>{count}</span>
      <div className={styles.control}>
        <Button onClick={() => counter.increment()}>+</Button>
        <Button onClick={() => counter.decrement()}>-</Button>
      </div>
    </div>
  )
}
