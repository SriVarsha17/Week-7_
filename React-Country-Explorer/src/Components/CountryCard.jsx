function CountryCard({ country }) {
  return (
    <div className="border rounded p-4 shadow">
      <img
        src={country.flags.png}
        alt="flag"
        className="w-full h-32 object-cover mb-3"
      />

      <h2 className="font-bold text-lg">
        {country.name.common}
      </h2>

      <p><b>Capital:</b> {country.capital?.[0] || "N/A"}</p>
      <p><b>Population:</b> {country.population}</p>
      <p><b>Region:</b> {country.region}</p>
    </div>
  )
}

export default CountryCard