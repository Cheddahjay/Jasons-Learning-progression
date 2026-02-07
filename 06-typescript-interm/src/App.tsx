import {useState} from 'react'

interface Pokemon{
  id: number,
  name: string,
  height: number,
  weight: number
}


function App(){
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [term, setSearchTerm] = useState<string>('')

  const searchPokemon = async () => {
    setLoading(true)
    setError(null)

    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term}`)
      const data: Pokemon = await response.json()
      setPokemon(data)
    }

    catch(err){
      if(err instanceof Error){
        setError(err.message)
      }
    }

    finally{
      setLoading(false)
      
    }
  }
  




  return(
    <div>
      <h1>Search for your favorite Pokemon!</h1>
      <input type="text" value={term} onChange={((e) => setSearchTerm(e.target.value))}/>
      <button onClick={searchPokemon}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p> Error loading page, please try again {error}</p>}
      {pokemon && (

        <div>
          <p>Name: {pokemon.name}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>
      )}



    </div>
  )
}
export default App