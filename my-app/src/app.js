import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/loginSignup/login1";
import SignUp from "./component/loginSignup/SignUp1";
import About from "./component/home/About"
import Menu from "./component/menu/Menu2";
import Dashboard from "./component/dashboard/Dashboard";
import Order from "./component/order/Order";

function App(){
return(
<>
  <Router>
    <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/SignUp" element={<SignUp/>}/>
                  <Route path="/Menu" element={<Menu/>}/>
                  <Route path="/Dashboard" element={<Dashboard/>}/>
                  <Route path="/Order" element={<Order/>}/>;
                  
  </Routes>
</Router>
</>
)
}
export default App;

