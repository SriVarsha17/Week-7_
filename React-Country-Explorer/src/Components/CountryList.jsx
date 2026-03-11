import CountryCard from "./CountryCard"

function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  )
}
export default CountryList 