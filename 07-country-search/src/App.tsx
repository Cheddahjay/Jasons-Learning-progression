import {useState} from "react"

interface CountryInfo{
  name: {
    common: string
  },
  capital: string[],
  population: number,
  flags: {
    png: string
  }

}


function App(){

  //fetch states
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  //search states
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchHistory, setSearchHistory] = useState<string[]>([])


const searchCountry = async () => {
  setLoading(true)
  setError(null)

  try{
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
    const data: CountryInfo[] = await response.json()
    setCountryInfo(data[0])
    setSearchHistory([...searchHistory, searchTerm])

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
      {/* search section */}
      <h2>Search for a country</h2>
      <input type="text" value={searchTerm} onChange={((e) => setSearchTerm(e.target.value))}/>
      <button onClick={searchCountry}>
        Search
      </button>


      {/* displaying content */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {countryInfo && (
        <div>
          <p>Name: {countryInfo.name.common}</p>
          <p>Capital: {countryInfo.capital[0]}</p>
          <p>Population {countryInfo.population}</p>
          <img src={countryInfo.flags.png} alt="flag" width="100"/>
        </div>
      )}


      {/* displaying search history */}
      {searchHistory.length > 0 && (
        <div>
          <h3>Search History</h3>
          <ul>
            {searchHistory.map((term, index) => (
              <li key={index}>
                {term}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default App