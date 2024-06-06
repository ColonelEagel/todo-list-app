
const CategoryList = ({ categories, editCategory, deleteCategory }) => {
  return (
    <ul className="list">
      {categories.map(category => (
        <li key={category.id}>
          <span>{category.name}</span>
          <div>
            <button onClick={() => editCategory(category)}>Edit</button>
            <button onClick={() => deleteCategory(category.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
