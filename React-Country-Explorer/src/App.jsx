import { useEffect, useState } from "react"
import Searchbar from "./Components/Searchbar"
import CountryList from "./Components/CountryList"
function App() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [query, setQuery] = useState("")
  // fetch all countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        setFiltered(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to fetch countries")
        setLoading(false)
      })
  }, [])
  // search logic
  useEffect(() => {
    const result = countries.filter(c =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    )
    setFiltered(result)
  }, [query, countries])
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Country Explorer
      </h1>

      <Searchbar onSearch={setQuery} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <CountryList countries={filtered} />
      )}
    </div>
  )
}
export default App
