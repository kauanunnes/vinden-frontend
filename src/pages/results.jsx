import React, { useEffect } from 'react'

export function Results() {
  const [list, useList] = useEffect(() => [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        useList(data)
      })
  }, [])
  return (
    <>
      <p>home</p>
    </>
  )
}
