import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/components/Home/Home";
import ManageItems from "../src/components/Items/ManageItems";
import Login from "../src/components/Login/Login";
import  Blogs from './components/Blog/Blogs';
import Header from './components/Header/Header';
import SingUp from "./components/singUp/SingUp"
import MyItems from './components/Items/MyItems';
import Requeir from './components/Requeir/Requeir';
import Inventories from './components/inventori/Inventories'
import Error from './components/404Error/Error';
import Footer from './components/Footer/Footer';
import AddNewItems from './components/Items/AddNewItems';
import About from './components/About/About';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inven/:id' element={

          <Requeir>
            <Inventories></Inventories>

          </Requeir>
        }></Route>
        <Route path='myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/manageitems' element={
          <Requeir>
        
        <ManageItems></ManageItems>
        </Requeir>}>
          
        </Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addnew' element={<AddNewItems></AddNewItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/menage' element={<ManageItems></ManageItems>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
