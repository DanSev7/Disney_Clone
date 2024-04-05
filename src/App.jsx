
import Header from './Components/Header.jsx';
import Slider from './Components/Slider.jsx';
import ProductionHouse from './Components/ProductionHouse.jsx';
import GenreMovieList from './Components/GenreMovieList.jsx';
import './App.css'

function App() {

  return (
    <div className=''>
      <h1>

        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </h1>
    </div>
  )
}

export default App
