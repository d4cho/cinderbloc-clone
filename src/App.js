import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import GalleryPage from './components/Pages/GalleryPage/GalleryPage';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
                <Routes>
                    <Route path='/:galleryId' element={<GalleryPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
