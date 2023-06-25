import React, { useContext } from 'react'
import { usercontext } from './App'
function UseContext() {
    const user = useContext(usercontext)
  return (
    <div>
        {user}
    </div>
  )
}

export default UseContext