'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log('Error page mounted.')
  }, [error])
  return (
    <div>
      <h1>Something went wrong! {error.message}</h1>
      <button onClick={() => reset()}>
        try again.
      </button>
    </div>
  )
}
