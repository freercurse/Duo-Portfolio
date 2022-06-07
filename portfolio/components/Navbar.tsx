import Link from 'next/link'
import { useContext } from 'react'


export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
      </ul>
    </nav>
    )
}