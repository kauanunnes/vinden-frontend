import { useEffect, useState } from 'react'

export function App() {
  const [list, useList] = useState(() => [])
  useEffect(() => {
    fetch('http://localhost:5000/companies')
      .then(response => response.json())
      .then(data => {
        useList(data)
        console.log(data)
      })
  }, [])

  const listItems = list.map(product =>
    <li className='companyItem' key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </li>
  )
  
  if (list.length === 0) 
    return <p>Loading...</p>
  return (
    <div style={{color: '#fff', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ul>{listItems}</ul>
    </div>
  )
}
