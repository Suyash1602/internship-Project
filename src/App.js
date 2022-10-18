import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, NavLink } from 'react-router-dom';
import logo from './logo.png'
import { useSelector, useDispatch } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { clearState } from './store/userLoginSlice';


// importing components
import { Home, AboutUs, SignIn, SignUp, ProductList, AddProduct, Invalid } from './components/AllComponents'

// icon
import { FaSignOutAlt } from "react-icons/fa";

function App() {
  const backgroundImg = "http://mdbootstrap.com/img/Photos/Others/images/91.jpg"


  let { userObj, isSuccess } = useSelector(state => state.userLogin);
  let dispatch = useDispatch();

  const userLogOut = () => {
    localStorage.removeItem("token")
    let actionObj = clearState()
    dispatch(actionObj)
  }


  return (
    <>
      <div className='d-flex flex-column min-vh-100' style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '500px',
      }}>
        {/* navbar start */}
        <Navbar sticky="top" className="" variant='dark' bg="dark" expand="lg">
          {/* <Container> */}
          <div className="container-fluid mx-auto">
            <NavLink className="nav-link" aria-current="page" to='/' end >
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfgTS3DanyDhzb8V6bnpZivIsRxKWzf-Q1Q&usqp=CAU" width="90px" alt="logo" /> */}
              <img src={logo} width="90px" />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

              <ul className="navbar-nav text-center ">

                {/* showing only after successful login */}
                {isSuccess === true ? <>

                  {/* link for ProductList */}
                  {/* <li className="nav-item px-3">
                    <NavLink className="nav-link fw-bold" aria-current="page"
                      to={`/productList/${userObj.username}`} >Product List</NavLink>
                  </li> */}
                  {/* link for ProductList */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page"
                      to="/productList" >Product List</NavLink>
                  </li>
                  {/* link for AddProduct */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to={`/addProduct/${userObj.username}`} >Add Product</NavLink>
                  </li>

                  <NavDropdown className='fw-bold' title={userObj.username} menuVariant="dark">
                    <NavDropdown.Item >
                      <NavLink onClick={userLogOut} className="nav-link " aria-current="page" to="/signin" >Sign Out <FaSignOutAlt /> </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </> : <>

                  {/* link for home */}
                  < li className="nav-item px-3 navHover ">
                    <NavLink className="nav-link fw-bold " aria-current="page" to="/" end>Home</NavLink>
                  </li>

                  {/* link for product list */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page"
                      to="/productList" >Product List</NavLink>
                  </li>


                  {/* link for SignIn */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/signin" >SignIn</NavLink>
                  </li>



                  {/* link for SignUp */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/signup" >SignUp</NavLink>
                  </li>

                  {/* link for About */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/aboutUs" >About</NavLink>
                  </li>

                </>}
              </ul>

            </Navbar.Collapse>
          </div>
          {/* </Container> */}
        </Navbar>

        {/* creating routes */}
        <Routes>
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/productList/' element={<ProductList />} />
          {/* <Route path='/productList/:username' element={<ProductList />} /> */}
          <Route path='/addProduct/:username' element={<AddProduct />} />
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Invalid />} />
        </Routes>


        {/* footer */}
        <footer className="mt-auto bg-dark text-white opacity-50">

          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            2022 © Suyash,Kuldeep,Shreyas
          </div>
          {/* <!-- Copyright --> */}

        </footer>

      </div >
    </>
  );
}

export default App;
