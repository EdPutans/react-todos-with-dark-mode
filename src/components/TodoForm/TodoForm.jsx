function TodoForm() {

  const submit = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;

    addTodo(todoText)
    e.target.todoText.value = ''
  };


  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="todoText"
        placeholder="What needs to be done?"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;