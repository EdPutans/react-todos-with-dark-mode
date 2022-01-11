function TodoItem(props) {
  const color = props.isDarkMode ? '#eee' : '#333'

  return (
    <li style={{ color }}>
      {props.text}
    </li>
  )
}

export default TodoItem