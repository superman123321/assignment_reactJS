import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/main"
import NotFound from "../../components/notFound/NotFound"


function Photo(){

  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default Photo