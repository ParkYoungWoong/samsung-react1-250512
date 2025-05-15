import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/movies">Movies</Link>
    </header>
  )
}
