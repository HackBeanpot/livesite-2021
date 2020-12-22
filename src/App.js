import Challenges from './components/Challenges';
import Footer from './components/Footer';
import HackerActions from './components/HackerActions';
import Header from './components/Header';
import Mentors from './components/Mentors';
import Navbar from './components/MainNavbar';
import Resources from './components/Resources';
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
      <Resources />
      <Team />
      <HackerActions />
      <Footer />
    </div>
  );
}

export default App;
