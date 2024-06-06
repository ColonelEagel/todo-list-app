
const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.map(todo => (
        <li key={todo.id}>
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p><strong>Category:</strong> {todo.category}</p>
            <p><strong>Reminder Date:</strong> {todo.reminderDate}</p>
          </div>
          <div>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
