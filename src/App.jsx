import './App.css';
import NavBar from './components/NavBar'
import Card from './components/Card'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [showMovies, setShowMovies] = useState([])
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=light&apikey=f2b78b85")
      .then(response => response.json())
      .then((data) => {
        let dataMovies = data.Search;
        setMovies(dataMovies);
        setShowMovies(dataMovies);
      })
      .catch(err => console.log(err))
  }, [])

  const search = (text) => {
    let data = movies.filter(e => e.Title.includes(text)); //original
    
    // let moviesTmp;
    // useEffect(() => {
    //   fetch(`https://www.omdbapi.com/?apikey=f2b78b85&s=${text}`)
    //     .then(response => response.json())
    //     .then((data) => {
    //       moviesTmp = data.Search;
    //       //setShowMovies(moviesTmp);
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    setShowMovies(data) //original
    //setShowMovies(moviesTmp);
  }

  return (
    <div className="App">
      <NavBar search={search} />
      <img className='w-100 object-fit-cover' style={{ height: 400 }} src="https://cdn.tatlerasia.com/tatlerasia/i/2022/04/25145150-miami-beach-edition-outdoor-cinema_cover_1165x583.jpeg" alt="banner" />
      <div className='d-flex flex-wrap justify-content-around py-5  gap-2'>
        {showMovies.map((el) => <Card key={el.id} el={el} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
