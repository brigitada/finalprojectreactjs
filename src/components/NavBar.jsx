import { useState } from "react"

export default function Component({ search }) {
  const [input, setInput] = useState('')
  const submitSearch = (e) => {
    e.preventDefault()
    search(input)
    setInput('')
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body px-2" >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h3 className="m-0">Ayo Nonton</h3>
        <form className="d-flex" role="search" onSubmit={submitSearch}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Cari Judul Film" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}