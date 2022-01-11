import TodoItem from "../TodoItem/TodoItem"

function TodoList(props) {

  const color = props.isDarkMode ? '#eee' : '#333'

  return (
    <ul style={{ color: color }}>
      {props.todos.map(todo => (
        <TodoItem isDarkMode={props.isDarkMode} key={todo.id} text={todo.text} />
      ))}
    </ul>
  )
}


export default TodoList