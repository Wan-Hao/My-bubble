import Link from 'next/link'
import React from 'react'
import { PersonalProfile } from '@/components/selfIntro'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <p className="text-lg">ABOUT page.</p>
      <PersonalProfile />
      <Link href="/">Go back home</Link>
    </div>
  )
}
