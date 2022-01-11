import TodoItem from "../TodoItem/TodoItem"

function TodoList() {
  const color = shouldUseDarkMode ? '#eee' : '#333'

  return (
    <ul style={{ color: color }}>
      create a list of Todos here
    </ul>
  )
}


export default TodoList