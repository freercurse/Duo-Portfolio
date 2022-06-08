import Link from 'next/link'
import { useContext } from 'react'
import styles from '../styles/navs.module.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className={styles.borderButton}> ⌂ Home</button>
          </Link>
        </li>
      </ul>
    </nav>
    )
}