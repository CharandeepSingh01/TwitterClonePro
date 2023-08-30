// import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import PostOverview from './pages/PostOverview';
// import Profile from './pages/Profile';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Home() {

  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userReducer);

    useEffect(() => {

      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {//when user has a login active session
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        navigate("/");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);

    return (
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    )
  }


  return (
    <div className='app-bg'>
      <Router>
        <DynamicRouting />
      </Router>
    </div>
  );
}

export default Home;