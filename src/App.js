
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Suspense, lazy } from "react";
import NotFound from "./components/notFound/NotFound";
import AddEdit from "./features/photo/pages/addEdit/addEdit";
import CartPage from "./features/photo/pages/CartPage/CartPage";
import Loading from "./components/loading/Loading";
import LogIn from "./features/user/pages/logIn/LogIn";
import SignUp from "./features/user/pages/signUp/SignUp";

function App() {
  const Home = lazy(()=> import('./features/home/Home'))
  const Photo = lazy(()=> import('./features/photo/Photo'))
  const [isLogin, SetIsLogin]= useState(false)
  const [accName, SetAccName]= useState(false)

  return (

    <div className="App">
    <Suspense fallback={<Loading />}>
    <BrowserRouter>
          <Header isLogin={isLogin} SetIsLogin={SetIsLogin} accName={accName} />
          <Routes>
          <Route path="/" element={<Home />} />
           
            <Route path="/photo" element={<Photo isLogin={isLogin} accName={accName}/>} />
            <Route path="/photo/add" element={<AddEdit/>} />
            <Route path="/photos/:photoId" element={<AddEdit />} />
            <Route path="/photo/cart/:photoId" element={<CartPage/>} />
            <Route path="/photo/cart" element={<CartPage/>} />

            <Route path="/login" element={<LogIn SetIsLogin={SetIsLogin} SetAccName={SetAccName} />} />
            <Route path="/signup" element={<SignUp />} />




            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
