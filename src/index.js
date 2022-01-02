import React,{useState,useEffect} from "react";
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
import swal from "sweetalert";
import Appointment from "views/examples/Appointment";
import Specialities from "views/examples/Specialities";
import CareerPage from "views/examples/CareerPage";
import config from "config";
import SearchPage from "views/examples/SearchPage";
import OurPrivacy from "views/examples/OurPrivacy";
import Halls from "views/examples/Halls";
import Lawns from "views/examples/Lawns";
import Vendor from "views/examples/Vendor";

export const UserData = React.createContext();



function App (){
  const [Loading, setLoading] = useState(true);
  const token = localStorage.getItem("hospitalAppToken");
  const [Data, setData] = useState({});
  useEffect(()=>{
    if(isLoggedIn){
      axios.get("user",config).then((response)=>{
          setData(response.data)
          setLoading(false)
      }).catch((err)=>{
          //swal("Alert!!!",err.message,"warning");
          setLoading(false)
      })
    }else{
      setLoading(false)
    }
  },[])

  return Loading?<p>Loading dodo...</p>:(
    <UserData.Provider value={Data}>
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
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </HashRouter>
  </UserData.Provider>
  )
}

ReactDOM.render(
<App/>,
  document.getElementById("root")
);
