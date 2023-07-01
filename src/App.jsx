import './App.css'
import Principal from './Principal'
import SwiperCard from './SwiperCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  
  AOS.init();
  return (
    <>
      < Principal />
      <SwiperCard/>
    </>
  )
}

export default App
