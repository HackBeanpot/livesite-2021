import Challenges from "./components/Challenges";
import Footer from "./components/Footer";
import HackerActions from "./components/HackerActions";
import Mentors from "./components/Mentors";
import Navbar from "./components/MainNavbar";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Countdown from "./components/Countdown";
import RelevantRightNow from "./components/RelevantRightNow";
import WelcomeIntro from "./components/WelcomeIntro";
import Judging from "./components/Judging";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/judging">
          <Judging />
        </Route>
        <Route path="/">
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
            <Sponsors />
            <HackerActions />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
