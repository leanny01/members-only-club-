import logo from './logo.svg';
import './style/App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';

const App = () => (
  <BrowserRouter>
    
      <MainRouter/>
  
  </BrowserRouter>
)

export default App;
