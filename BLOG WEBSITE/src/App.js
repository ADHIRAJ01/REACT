
import './App.css';
import Menu from './components/menu';
// import { Outlet , Link } from 'react-router-dom';
// import BlogList from './components/blog-list';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <Menu />
        <Home />

    </div>
  );
}

export default App;
