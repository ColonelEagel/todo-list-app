
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/todos">To-dos</Link></li>
    </ul>
  </nav>
);

export default Navigation;
