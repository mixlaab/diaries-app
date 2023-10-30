'use client'
 
import { useState } from 'react'
import styles from './page.module.css'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div className={styles.main}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}