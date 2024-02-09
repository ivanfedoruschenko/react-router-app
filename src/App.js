import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import HeroesList from './components/HeroesList/HeroesList'
import LocationsList from "./components/LocationsList/LocationsList";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Location from "./components/Location/Location";
import Episode from "./components/Episode/Episode";
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to={'/'}>Главная</NavLink></li>
        <li><NavLink to={'/heroes'}>Герои</NavLink></li>
        <li><NavLink to={'/locations'}>Локации</NavLink></li>
        <li><NavLink to={'/episodes'}>Эпизоды</NavLink></li>
      </ul>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/heroes'} element={<HeroesList />} >
          <Route path={':id'} element={<Hero/>}/>
        </Route>
        <Route path={'/locations'} element={<LocationsList />} >
          <Route path={':id'} element={<Location/>}/>
        </Route>
        <Route path={'/episodes'} element={<EpisodesList />} >
          <Route path={':id'} element={<Episode/>}/>
        </Route>
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
