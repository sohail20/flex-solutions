import React,{useState} from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Issue from "views/index-sections/Issue";
import OurTeam from "views/index-sections/OurTeam";
import axios from "axios";
import config from "config";
import swal from "sweetalert";

function OurPrivacy() {

  const [Loading, setLoading] = useState(true);
  const [TeamData, setTeamData] = useState([]);


  React.useEffect(() => {

    axios.get("team",config)
    .then((res)=>{
      setTeamData(res.data.team)
      console.log(res.data.team)
      setLoading(false)
    })
    .catch((err)=>{
     // swal("Alert!",err.message,"warning")
      setLoading(false)
    })

    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return Loading?<p>Loading...</p>:(
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader title="Our Privacy"/>
        <div className="section section-about-us">
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                    <div style={{textAlign:"left"}}>
                        <h5 className="description">
                        The FLEX SOLUTIONS is committed to protecting the privacy of our users and customers. 
                        This privacy policy explains how we use any personal information we collect about you when you use this website. 
                        It is also intended to assist you in making informed decisions when using our website and our products and services. 
                        All your personal Information shall be held and used in accordance with the General Data Protection Regulation.
                        </h5>

                        <h1>What Information Do We Collect?</h1>
                        <h5 className="description" >
                        Information is collected from you when you register with us, 
                        or when you contribute to or use some of the advanced features on the site. 
                        The information we collect is explicitly set out on the web page on why we collect it. 
                        Also, we may collect your IP address and use cookies unless you configure your web browser not to accept them. Similar to other commercial websites, 
                        our Website uses a technology called "cookies" (see explanation below, "What Are Cookies?") and web server logs to collect information about how our Website is used. 
                        Information gathered through cookies and web server logs may include the date and time of visits, the pages viewed, time spent at our Website, 
                        and the websites visited just before and just after our Website. 
                        If you configure your web browser not to accept them that some of the features in our website may not function as a result. 
                        Also, we may collect your IP address when you use the website as a result of your browsing.
                        This information will not be shared outside of FLEX SOLUTIONS.
                        </h5>
                    </div>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    What Are Cookies?
                  </h3>
                  <p>
                  A cookie is a very small text file, which often includes a unique anonymous identifier. 
                  When you visit a website, that site's computer asks your computer for 
                  permission to store this file in a part of your hard drive specifically designated for cookies. 
                  Each website can send its own cookie to your browser if your browser's preferences allow it, 
                  but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, 
                  not the cookies sent to you by other sites. 
                  For more information on cookies, please visit www.aboutcookies.org or www.allaboutcookies.org. 
                  </p>

                  <h3>How Do We Use Information We Collect from Cookies?</h3>
                  <p>
                  As you browse on our Website, the website uses cookies to differentiate 
                  you from other users to prevent you from seeing unnecessary advertisements 
                  or requiring you to log in more than is necessary for security or give us your details 
                  more than once. Cookies, in conjunction with our web server's log files, 
                  allow us to calculate the aggregate number of people
                  visiting our Website and which parts of the website are most popular. 
                  This helps us gather feedback so that we can improve our Website and better serve our customers. 
                  </p>

                  <h3>How Do We Use the Information That You Provide to Us?</h3>
                  <p>
                    We collect information about you to process your order for services, manage your account and if you agree, to email you about other products and services we think may be of interest to you. 
                    We use your information collected from the website to personalize your repeat visits to our website. 
                    FLEX SOLUTION will not share your information for marketing purposes with companies outside of the organization.
                    In processing your order, we will only send your data outside of the organization if required to do so by Pakistan’s law by fraud prevention agencies. 
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <OurTeam data={TeamData}/>
        <div className="section section-team text-center" id="OurTeam">
            <Container style={{textAlign:"left"}}>
                <h3>How Do We Protect Your Information?</h3>
                <p>
                We maintain the highest standards of security; however, the transmission of information via the internet is never completely secure. As a result, while we strive to protect your personal information, we cannot ensure or warrant the security of any information which you send to us, and you do so at your own risk. Once we have received your information, we will use strict procedures and security features to prevent unauthorized access or loss. 

                Email is not recognized as a secure medium of communication. For this reason, we request that you ensure that you do not send your confidential data to us via an email.
                
                How Can You Access and Correct Your Information?
                You may instruct us to provide you with details of all of your information that we collect and maintain in our database by submitting a Subject Access Request via post. The address to send a request is; 
                </p>


                <h3>Flex Office Address</h3>

                <p>
                Any request for information is free of charge but Crucial can refuse or charge for requests that are manifestly unfounded or excessive. 
                
                Where We Store Your Personal Data and for How Long
                Data and Information that we collect from you is stored in a local database located at our offices in the Pakistan. We will take all steps reasonably necessary to ensure that your information is treated securely and by this Privacy Policy. We will not keep your data any longer than is necessary and once there are no longer any legitimate grounds for the data to be retained, the data will be deleted. 
                
                How to opt-out of Communication
                If you would like to opt out of any communication please email Admin Email with your name and email address and that you wish to opt out or use the UNSUBSCRIBE option at the bottom of any electronic communication that you may have received.
                
                Your Rights in regards to your personal information
                Individuals now have increased rights in regards to their personal data. Please see below an outline of the new rights and if you wish to contact us to discuss or amend the data we hold, please contact us by email (AdminEmail) or by writing to us at; 
                </p>

                <h4>Right to be Informed:</h4>
                •	The right to be informed encompasses your obligation to provide ‘fair processing information’, typically through a privacy notice.
                •	It emphasizes the need for transparency over how you use personal data.

                <h4>Right of Access:</h4>
                •	Individuals have the right to access their personal data and supplementary information.
                •	The right of access allows individuals to be aware of and verify the lawfulness of the processing.
                •	FLEX SOLUTION will allow individual’s confirmation that their data is being processed;
                •	FLEX SOLUTION will allow individual’s access to their personal data.
                •	FLEX SOLUTION will allow individual’s other supplementary information – this largely corresponds to the information that should be provided in a privacy notice

                <h4>Right to Rectification:</h4>
                •	The FLEX SOLUTION gives individuals the right to have their personal data rectified.
                •	Personal data can be rectified if it is inaccurate or incomplete.
                •	The timeline to comply is one month or two if the rectification is complex.

                <h4>Right to Erasure:</h4>
                •	The right to erasure is also known as ‘the right to be forgotten’.
                •	This right is to enable an individual to request the deletion or removal of personal data where there is no compelling reason for its continued processing.
                •	The right to eraser applies when:
                •	Where the personal data is no longer necessary in relation to the purpose for which it was originally collected/processed.
                •	When the individual withdraws consent.
                •	When the individual objects to the processing and there is no overriding legitimate interest for continuing the processing.
                •	The personal data was unlawfully processed (ie otherwise in breach of the FLEX SOLUTION).
                •	The personal data has to be erased in order to comply with a legal obligation.
                •	The personal data is processed in relation to the offer of information society services to a child.
                •	The right to eraser applies when:
                •	To exercise the right of freedom of expression and information;
                •	To comply with a legal obligation for the performance of a public interest task or exercise of official authority.
                •	For public health purposes in the public interest;
                •	Archiving purposes in the public interest, scientific research historical research or statistical purposes; or
                •	The exercise or defence of legal claims.

                <h4>Right to Restrict Processing:</h4>
                •	Individuals have a right to ‘block’ or suppress processing of personal data.
                •	When processing is restricted, FLEX SOLUTION is permitted to store the personal data, but not further process it.
                •	Processing will be restricted when:
                •	An individual contest the accuracy of the personal data.
                •	When an individual has objected to the processing (where it was necessary for the performance of a public interest task or purpose of legitimate interests), and you are considering whether your organization’s legitimate grounds override those of the individual.
                •	When processing is unlawful and the individual opposes erasure and requests restriction instead.
                •	If you no longer need the personal data but the individual requires the data to establish, exercise or defend a legal claim.

                <h4>Right to Data Portability:</h4>  
                {/* Only applies:  */}
                •	To personal data an individual has provided to a controller.
                •	Where the processing is based on the individual’s consent or for the performance of a contract.
                •	When processing is carried out by automated means.
                •	Personal information requested will be provided in a structured, commonly used, machine-readable form and provided free of charge unless considered manifestly unfounded or excessive.

                <h4>Right to Object:</h4>
                Individuals have the right to object to:
                •	Processing based on legitimate interests or the performance of a task in the public interest/exercise of official authority (including profiling);
                •	Direct marketing (including profiling); and
                •	Processing for purposes of scientific/historical research and statistics.


                <h4>If Individuals object, it must be on “grounds relating to his or her particular situation”. And FLEX SOLUTION will stop processing the personal data unless:</h4>
                •	FLEX SOLUTION can demonstrate compelling legitimate grounds for the processing, which override the interests, rights and freedoms of the individual.
                •	The processing is for the establishment, exercise or defense of legal claims.

                <h4>The Right not to be Subject to Automated Decision-Making Including Profiling:</h4>
                FLEX SOLUTION can only carry out this type of decision-making where the decision is:
                •	Necessary for the entry into or performance of a contract; or
                •	Authorised by Union or Member state law applicable to the controller; or
                •	Based on the individual’s explicit consent.
                •	FLEX SOLUTION must identify whether any of their processing falls under Article 22 and, if so, make sure that they:
                •	Give individuals information about the processing;
                •	Introduce simple ways for them to request human intervention or challenge a decision;
                •	Carry out regular checks to make sure that our systems are working as intended.
                
                <h3>Your Consent</h3>
                <p>
                    By using our website you consent to our collection 
                    and use of your information as described in this Privacy Policy. 
                    If we change our privacy policies and procedures, we will post those 
                    changes on our website to keep you aware of what information we collect, 
                    how we use it and under what circumstances we may disclose it. 
                </p>

                   <p>If you wish to withdraw your consent at any time, please email ADMIN EMAIL and explain that you wish to withdraw your consent.</p> 
            </Container>
        </div>
        <Issue/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default OurPrivacy;
