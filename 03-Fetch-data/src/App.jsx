import {useState, useEffect} from 'react'

function App(){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
  }, [])

        if(loading){
        return <p>Loading...</p>
      }

      if(error) {
        return <p>Error: {error}</p>

      }

  return(
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App