// SidebarComponent.jsx
import React, { ReactNode } from 'react'
import '@/styles/sidebar.css'
import Link from 'next/link'
type SidebarProps = {
  children: ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <Link href="/about">About</Link>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default Sidebar
