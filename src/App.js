import Challenges from "./components/Challenges";
import Footer from "./components/Footer";
import HackerActions from "./components/HackerActions";
import Mentors from "./components/Mentors";
import Navbar from "./components/MainNavbar";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Countdown from "./components/Countdown";
import RelevantRightNow from "./components/RelevantRightNow";
import WelcomeIntro from "./components/WelcomeIntro";

function App() {
  return (
    <div>
      <Navbar />
      <RelevantRightNow />
      <Countdown />
      <WelcomeIntro />
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
