import React, { useEffect, useState } from 'react'

function UseEffect() {
  const[count,setCount] = useState(0);
  const[hover,setHover] = useState(0);
  useEffect (()=>{
    document.title = `You clicked ${count} times `;
  })
  return (
    <div>
        Tutorial of useEffect 
        <button onClick={()=>setCount(count+1)} onMouseMove={()=>setHover(hover+1)}>Click</button>

    </div>
  )
}

export default UseEffect