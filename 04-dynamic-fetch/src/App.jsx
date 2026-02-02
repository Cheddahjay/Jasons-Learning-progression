import { useState, useEffect } from "react";

function App(){
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    async function fetchData(){
      setLoading(true)
      setError(null)
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()
        setUsers(data)
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
     
  }
 fetchData()
 },[userId])

  return(
    <div>
      <p>input a number 1-10</p>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}/>

      {loading && <p>Loading</p>}
      {error && <p>Error: {error}</p>}

      {users && (
        <div>
          <p>Name:{users.name}</p>
          <p>Email:{users.email}</p>
          <p>Phone:{users.phone}</p>
        </div>
      )}
    </div>
  )
}
export default App