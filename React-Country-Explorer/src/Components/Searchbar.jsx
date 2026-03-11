import { useEffect, useRef } from "react"
function Searchbar({ onSearch }) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search country..."
      className="border p-2 w-full mb-6"
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default Searchbar
