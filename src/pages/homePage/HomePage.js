import Buttom from './components/buttom/Buttom';
import Header from './components/header/Header';
import Navbar from '../commonComponents/navbar/Navbar';

function HomePage({goToResumePage}) {
  const goToWoelcomePage = (e) => {
    console.log('homePage')
  }
  return (
    <div className="homePage">
      <Navbar logoName={'Saba Fekri'} discription={'Content Writer'} goToWoelcomePage={goToWoelcomePage} goToResumePage={goToResumePage}/>
      <Header/>
      <Buttom goToResumePage={goToResumePage}/>
    </div>
  );
}

export default HomePage;