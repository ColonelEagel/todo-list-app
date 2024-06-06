import { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { id: Date.now(), name };
    addCategory(newCategory);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Category"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
