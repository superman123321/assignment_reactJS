import { useSelector } from "react-redux";
import Banner from "../../../../components/banner/Banner";


function MainPage(){
  const photos = useSelector((state) => state.photoReducer.photos);
  const isLoading = useSelector((state) => state.photoReducer.isLoading);

  console.log('222')
  return (
    <Banner title="choose your photo" />
  )
}

export default MainPage