import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import SearchBar from '../components/SearchBar';
import FilterByCategory from '../components/FilterByCategory';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editTodo = (updatedTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    setTodos(remainingTodos);
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
  };

  const filteredTodos = todos
    .filter(todo => todo.title.includes(searchTerm) || todo.description.includes(searchTerm))
    .filter(todo => !selectedCategory || todo.category === selectedCategory);

  return (
    <div className="container">
      <h2>To-dos</h2>
      <SearchBar setSearchTerm={setSearchTerm} />
      <FilterByCategory setSelectedCategory={setSelectedCategory} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodosPage;
