import './App.css';
import { ComtextApi } from './Context/ComtextApi';
import BannerCompo from './Pages/BannerCompo';
import FootCompo from './Pages/FootCompo';
import HeaderCompo from './Pages/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <ComtextApi>
      <BrowserRouter>
        <div className=' overflow-x-hidden'>
          <HeaderCompo />
          <BannerCompo />
          <FootCompo />
        </div>
      </BrowserRouter>
    </ComtextApi>

  );
}

export default App;
