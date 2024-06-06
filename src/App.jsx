// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import TodosPage from "./pages/TodosPage";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      {/* <Router>
        <Navigation />
        <div>
          <Switch>
            <Route path="/categories" component={CategoriesPage} />
            <Route path="/todos" component={TodosPage} />
            <Route exact path="/" component={CategoriesPage} />
          </Switch>
        </div>
      </Router> */}
      {/* <Navigation /> */}
      <TodosPage />
      <CategoriesPage />
    </>
  );
}

export default App;
