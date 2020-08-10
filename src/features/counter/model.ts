import { createEvent, createStore } from 'effector'

const increment = createEvent()
const decrement = createEvent()

const $counter = createStore(0)
  .on(increment, (count) => count + 1)
  .on(decrement, (count) => count - 1)

export const counter = {
  $counter,
  increment: () => increment(),
  decrement: () => decrement(),
}
