import React,{useState} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import axios from "axios";
import config from "config.js";
import swal from "sweetalert";
import OurDoctors from "./index-sections/OurDoctors.js";

function Index() {

  const [Loading, setLoading] = useState(true);
  const [DocData, setDocData] = useState([]);

  React.useEffect(() => {
    
    axios.get("doctors",config)
    .then((res)=>{
      setDocData(res.data.doctors)
      setLoading(false)
    })
    .catch((err)=>{
      //swal("Alert!",err.message,"warning")
      setLoading(false)
    })

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  },[]);
  return Loading?<p>Loading...</p>:(
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript /> */}
          <Carousel />
          <NucleoIcons />
          <OurDoctors data={DocData}/>
          <CompleteExamples />
          {/* <SignUp /> */}
          <Examples />
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
