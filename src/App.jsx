import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import './App.css';
import ArticleGrid from './grids.jsx';
import NavBar from './navbar.jsx';
import Saras from './saras.jsx';
import Yehchans from './yehchans.jsx';
import ImageS from './saras-img.png';
import ImageY from './yeh-img.jpg';
import Xainabs from './xainabs.jsx';
import ImageX from './xainabs.jpeg';

function App() {
  return (
    <Router>
      <div className="body">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/article/saras" element={<Saras />} />
          <Route path="/article/yehchans" element={<Yehchans />} />
          <Route path="/article/xainabs" element={<Xainabs />} />
          <Route path="/imageUrl/saras" element={<ImageS />} />
          <Route path="/imageUrl/yehchans" element={<ImageY />} />
          <Route path="/imageUrl/xainabs" element={<ImageX />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
