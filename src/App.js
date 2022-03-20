import React from "react";

import classes from "./App.module.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className={classes.topbar}>
            <span className={classes.topbarElements}>
              <a href="#section1">Home</a>
            </span>
            <span className={classes.topbarElements}>
              <a href="#section2">About</a>
            </span>
            <span className={classes.topbarElements}>
              <a href="#section3">Contact</a>
            </span>
          </div>
        </nav>
      </header>

      <div className={classes.maincontainer} id="section1">
        <img
          src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"
          alt="The sparks foundation"
        />
        <h3>HelpingHands Foundation</h3>
        <p>Come, join our mission to Educate Every Last Child!</p>
        {/* <span><button>Contribute</button></span> */}
        <span>
          <a href="https://rzp.io/l/MB1alvHoOh" type="button" target="blank">
            Contribute
          </a>
        </span>
      </div>

      <div className={classes.aboutSection} id="section2">
        <h2>
          Giving a HelpingHands to the Education of underprivileged children!!
        </h2>
        <div className={classes.aboutDetails}>
          <p>
            Following several discussions with funders of the Poor Child
            Educational Development Foundation, it was determined that
            policy-making and programme implementation in the areas of welfare
            and development are not solely the responsibility of the government.
            People in the country should also come forward to lend a helping
            hand to the government and ensure that they receive effective
            support. The required statutory registration was obtained from the
            Government of India. Experts, educators, technologists, and
            core-hearted Trust and emit restitutions and Management Consultants
            have backed the Trust's founders. The applying trust receives full
            support in terms of technical know-how/feasibility, financial
            feasibility, and socio-economic feasibility of the project based on
            the Sustainable approach.
            <br></br>
            <br></br>HelpingHands Foundation focuses on the empowerment of poor
            child espicially girl child in India because they are
            disproportionately affected by poverty and discrimination, and they
            face abuse and violations in realising their rights, entitlements,
            and control over resources. Literal child also have the power to
            help entire families and communities overcome poverty,
            marginalisation, and social injustice when they are given the
            resources they need.
          </p>

          {/* <h3>HELP KICKSTART A CHILD'S EDUCTAION JOURNEY<br></br>IT WILL BE THE BEST GIFT YOU CAN EVER GIVE </h3> */}

          <img
            src="https://i.pinimg.com/736x/c7/af/37/c7af37e6b00af3ea6c3eeb7b2d858e8a.jpg"
            alt="Childrens"
          />
        </div>
      </div>

      <div className={classes.contactSection} id="section3">
        <h2>Reach To Us</h2>
        <div>
          <a
            href="https://www.thesparksfoundationsingapore.org/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.socialLogo}
              src="https://cdn-icons-png.flaticon.com/128/49/49458.png"
              alt="Official Website"
            />
          </a>
          <a
            href="https://sg.linkedin.com/company/the-sparks-foundation"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.socialLogo}
              src="https://cdn-icons-png.flaticon.com/128/49/49408.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/thesparksfoundation.info/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.socialLogo}
              src="https://cdn-icons-png.flaticon.com/128/49/49364.png"
              alt="Intsgram"
            />
          </a>
          <a
            href="https://www.facebook.com/thesparksfoundation.info/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.socialLogo}
              src="https://cdn-icons-png.flaticon.com/128/49/49354.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://mobile.twitter.com/tsfsingapore"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.socialLogo}
              src="https://cdn-icons-png.flaticon.com/128/49/49351.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
      <footer className={classes.footerSection}>
        Copyright @Kalyani (GRIP Feb 2022)
      </footer>
    </div>
  );
}

export default App;
