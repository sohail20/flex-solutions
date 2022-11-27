import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
//Password: Hhk1kv)fgOqjZtjqGY^x

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import AboutPage from "views/examples/AboutPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Registeration from "views/Registeration/Registeration";
import { isLoggedIn } from "Functions/IsloggedIn";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux"
import swal from "sweetalert";
import { Provider } from "react-redux";
import Appointment from "views/examples/Appointment";
import Specialities from "views/examples/Specialities";
import CareerPage from "views/examples/CareerPage";
import config from "config";
import SearchPage from "views/examples/SearchPage";
import OurPrivacy from "views/examples/OurPrivacy";
import Halls from "views/examples/Halls";
import Lawns from "views/examples/Lawns";
import Vendor from "views/examples/Vendor";
import { loadvenues } from "store/venues";
import configureStore from "./store/configureStore";
import { getVenues } from "store/venues";
export const UserData = React.createContext();

const store = configureStore()

// store.dispatch({
//   type:"api/callBegan",
//   payload:{
//     url:"/halls",
//     onStart:"venuesRequested",
//     onSuccess:"venuesReceived",
//     onError:"venuesRequestFailed"
//   }
// })
function App() {
  const [Loading, setLoading] = useState(true);
  const token = localStorage.getItem("hospitalAppToken");
  const [Data, setData] = useState({});
  const dispatch = useDispatch()
  const venues = useSelector(getVenues);  

  useEffect(() => {
    dispatch(loadvenues()) 
    if(venues)
     setLoading(false)
    
  }, []);

  return Loading ? (
    <p>Loading dodo...</p>
  ) : (
    <UserData.Provider value={Data}>
      {
        JSON.stringify(venues)
      }
      <HashRouter>
        <Switch>
          <Switch>
            <Route path="/index" render={(props) => <Index {...props} />} />
            <Route
              path="/nucleo-icons"
              render={(props) => <NucleoIcons {...props} />}
            />
            <Route
              path="/about-page"
              render={(props) => <AboutPage {...props} />}
            />
            <Route
              path="/profile-page"
              render={(props) => <ProfilePage {...props} />}
            />
            <Route
              path="/login-page"
              render={(props) => <LoginPage {...props} />}
            />
            <Route
              path="/registeration-page"
              render={(props) => <Registeration {...props} />}
            />

            <Route
              path="/appointment-page"
              render={(props) => <Appointment {...props} />}
            />

            <Route
              path="/Specialities-page"
              render={(props) => <Specialities {...props} />}
            />

            <Route
              path="/career-page"
              render={(props) => <CareerPage {...props} />}
            />

            <Route
              path="/search-page"
              render={(props) => <SearchPage {...props} />}
            />

            <Route
              path="/privacy-page"
              render={(props) => <OurPrivacy {...props} />}
            />

            <Route
              path="/halls-page"
              render={(props) => <Halls {...props} />}
            />

            <Route
              path="/lawns-page"
              render={(props) => <Lawns {...props} />}
            />

            <Route
              path="/vendor-page"
              render={(props) => <Vendor {...props} />}
            />
            <Redirect from="/" to="/login-page" />
          </Switch>
        </Switch>
      </HashRouter>
    </UserData.Provider>
    
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
