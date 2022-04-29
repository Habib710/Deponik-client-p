import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/components/Home/Home";
import AddItems from "./components/Items/MyItems";
import ManageItems from "../src/components/Items/ManageItems";
import Login from "../src/components/Login/Login";
import  Blogs from './components/Blog/Blogs';
import Header from './components/Header/Header';
import SingUp from "./components/singUp/SingUp"
import MyItems from './components/Items/MyItems';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/menage' element={<ManageItems></ManageItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
