import './Welcome.scss';
import welcome from './welcome.png'
import logo from './logo.png'

import {
  Link
} from "react-router-dom";

function Welcome() {
  return (
    <div className="pr-dashboard-welcome">
      <div className="pr-dashboard-welcome__container">

        <div className="pr-dashboard-welcome__content-wrapper">

          {/* Welcome heading */}
          <h1 className="pr-dashboard-welcome__heading">
            <span className="pr-dashboard-welcome__heading__simple">Explore</span>
            <span className="pr-dashboard-welcome__heading__capital">Fake API</span>
          </h1>
          {/* Welcome heading */}

          {/* Welcome description */}
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          {/* Welcome description */}

          {/* Welcome button wrapper */}
          <div className="pr-dashboard-welcome__btn-wrapper">
            <Link to="/dashboard" className="btn">Visit Dashboard</Link>
            <Link to="/design-system" className="btn btn--bordered">Explore Design System</Link>
          </div>
          {/* Welcome button wrapper */}

        </div>

        <div className="pr-dashboard-welcome__copyright">
          <p>Made with ❤️ by Kelum</p>
        </div>
      </div>

      <span className="pr-dashboard-welcome__bg-image">
        <img src={welcome} className="App-logo" alt="logo" />
      </span>
    </div>
  )
}

export default Welcome;