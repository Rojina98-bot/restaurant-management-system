import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./component/home/Home";
import Login from "./component/loginSignup/login1";
import SignUp from "./component/loginSignup/SignUp1";
import About from "./component/home/About"
import Menu from "./component/menu/Menu3";
import Dashboard from "./component/dashboard/Dashboard";
import Order from "./component/order/Order";
import Cart from "./component/menu/cart";
import EditProfile from './component/editProfile/editProfile';
import HomeAdmin from "./components_admin/homeAdmin";
import Nav from "./components_admin/nav";
import SidebarAdmin from "./components_admin/Sidebar";
import EditMenu from "./components_admin/menu_edit";
import Users from "./components_admin/users";
import AdminMenu from "./components_admin/menu";
import MenuAdd from "./components_admin/menu_add";
import UserAdd from "./components_admin/user_add";
import EditUser from "./components_admin/user_edit";
import AdminOrders from "./components_admin/orders";
import EditOrder from "./components_admin/order_edit";

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
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/Dashboard" element={<Dashboard/>}/>
                  <Route path="/Order" element={<Order/>}/>;
                  <Route path="/EditProfile" element={<EditProfile/>}/>
                  <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
                  <Route path="/Nav" element={<Nav/>}/>
                  <Route path="/SidebarAdmin" element={<SidebarAdmin/>}/>
                  <Route path="/EditMenu/:id" element={<EditMenu/>}/>
                  <Route path="/Users" element={<Users/>}/>
                  <Route path="/AdminMenu" element={<AdminMenu/>}/>
                  <Route path="/MenuAdd" element={<MenuAdd/>}/>
                  <Route path="/UserAdd" element={<UserAdd/>}/>
                  <Route path="/EditUser/:id" element={<EditUser/>}/>
                  <Route path="/AdminOrders" element={<AdminOrders/>}/>
                  <Route path="/EditOrder/:id" element={<EditOrder/>}/>


                  
                  
  </Routes>
</Router>
</>
)
}
export default App;

