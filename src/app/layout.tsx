import './globals.css'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
}

const Isprofile = true

export default function RootLayout({
  children,
  profile,
}: Readonly<{
  children: React.ReactNode
  profile: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* 引入 Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro"
        />
        <style>{`
          body {
            font-family: 'Crimson Pro', serif;
            font-size: 36px;
          }
        `}</style>
      </head>
      <body>
        <ul className="cute-font-regular">
          <nav>
            <ul className="flex gap-2 justify-between px-4 bg-black-purple">
              <li>Welcome to my Bubble!</li>
            </ul>
          </nav>
          {children}
          {Isprofile && profile}
        </ul>
      </body>
    </html>
  )
}
