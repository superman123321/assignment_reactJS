
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Suspense, lazy } from "react";
import NotFound from "./components/notFound/NotFound";
import AddEdit from "./features/photo/pages/addEdit/addEdit";



function App() {
  const Home = lazy(()=> import('./features/home/Home'))
  const Photo = lazy(()=> import('./features/photo/Photo'))

  return (

    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
           
            <Route path="/photo" element={<Photo />} />
            <Route path="/photo/add" element={<AddEdit/>} />



            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
