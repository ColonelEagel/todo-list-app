import CategoryList from '../components/CategoryList.jsx';
import CategoryForm from '../components/CategoryForm.jsx';
import { useState,useEffect } from 'react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  const addCategory = (category) => {
    const newCategories = [...categories, category];
    setCategories(newCategories);
    localStorage.setItem('categories', JSON.stringify(newCategories));
  };

  const editCategory = (updatedCategory) => {
    const updatedCategories = categories.map(cat => cat.id === updatedCategory.id ? updatedCategory : cat);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id) => {
    const remainingCategories = categories.filter(cat => cat.id !== id);
    setCategories(remainingCategories);
    localStorage.setItem('categories', JSON.stringify(remainingCategories));
  };

  return (
    <div>
      <CategoryForm addCategory={addCategory} />
      <CategoryList 
        categories={categories} 
        editCategory={editCategory} 
        deleteCategory={deleteCategory} 
      />
    </div>
  );
};

export default CategoriesPage;
