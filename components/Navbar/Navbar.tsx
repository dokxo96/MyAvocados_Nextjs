import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <menu>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
      </menu>
    </nav>
  )
}
