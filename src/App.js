import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import Sidebar from './component/Sidebar';


//전체상품페이지, 로그인페이지, 상품상세페이지 3개
// 네비바
//전체상품페이지 - 전체상품볼수있다
//로그인페이지- 로그인버튼을 누르면 ㄴ로그인페이지나옴
//상품디테일을 눌렀으나, 로그인이 안되어있을경우 로그인페이지가 먼저 나온다
//로그인이 되어 있을경우에는 상품 디테일 페이지를 볼수 있다
//로그아웃버튼 클릭하면 로그아웃
//로그아웃이 되면 상품디테일페이지를 볼수 없다. 다시 로그인페이지가 보인다.
//로그인을 하면 로그아웃 보임
//상품을 검색할수 있다


function App() {
  const [authenticate, setAuthenticate]=useState(false)
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  useEffect(()=>{
  // console.log("인증",authenticate)
  },[authenticate])
  return (
    <div>
      {/* authenticate 상태와 setAuthenticate 함수를 Navbar에 props로 전달 */}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />

      <button onClick={toggleSidebar} className="sidebar-toggle-btn">
        ☰
      </button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route 
            path='/login' 
            element={<Login setAuthenticate={setAuthenticate} />} />
        <Route 
            path='/product/:id' 
            element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
