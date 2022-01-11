
function Header({ text, isDarkMode, setIsDarkMode }) {

  const color = isDarkMode ? '#eee' : '#333'

  return (
    <header>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  )
}
export default Header;
