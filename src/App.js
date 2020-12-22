import Challenges from './components/Challenges';
import Footer from './components/Footer';
import Header from './components/Header';
import Mentors from './components/Mentors';
import Navbar from './components/MainNavbar';
import Schedule from './components/Schedule';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Schedule />
      <Challenges />
      <Mentors />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
