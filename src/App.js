import { useState } from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage'
import ResumePage from './pages/resumePage/ResumePage';


function App() {
  const [page, setPage] = useState('homePage')

  const goToResumePage = () => {
    setPage('resumePage')
  }
  const goToWoelcomePage = () => {
    setPage('homePage')
  }
  return (
    <div className="App">
      {page === 'homePage' && <HomePage goToResumePage={goToResumePage}/>}
      {page === 'resumePage' && <ResumePage goToWoelcomePage={goToWoelcomePage}/>}
    </div>
  );
}

export default App;
