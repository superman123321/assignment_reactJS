import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/main"
import NotFound from "../../components/notFound/NotFound"


function Photo({
  isLogin,
  accName
}){

  
  return (
    <Routes>
      <Route path="/" element={<MainPage  isLogin={isLogin} accName={accName} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default Photo