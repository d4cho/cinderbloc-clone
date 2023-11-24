import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import GalleryPage from "./components/Pages/GalleryPage/GalleryPage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import BioStorybookWidget from "bio-storybook-widget";

function App() {
  return (
    <div className='App'>
      <BioStorybookWidget projectSource={"cinderbloc"} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route exact path='/about---contact' element={<AboutPage />}></Route>
          <Route path='/project/:galleryId' element={<GalleryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
