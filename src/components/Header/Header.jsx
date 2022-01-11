
function Header() {
  const color = isAppUsingDarkMode ? '#eee' : '#333'

  return (
    <header>
      <h1 style={{ color: color }}>{text}</h1>

      <button onClick={() => setIsDarkMode(!isAppUsingDarkMode)}>
        {isAppUsingDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  )
}
export default Header;
