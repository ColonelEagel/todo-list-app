import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, description, category, reminderDate };
    addTodo(newTodo);
    setTitle('');
    setDescription('');
    setCategory('');
    setReminderDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <input 
        type="date" 
        value={reminderDate} 
        onChange={(e) => setReminderDate(e.target.value)} 
        required 
      />
      <button type="submit">Add To-do</button>
    </form>
  );
};

export default TodoForm;
