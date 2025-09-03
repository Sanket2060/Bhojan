import { React, useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

//developer image
import AboutUsCard from "../components/AboutusCard";
import A from "../assets/devImages/sanket.jpg";
import B from "../assets/devImages/suraj.jpg";
import C from "../assets/devImages/manish.jpg";
import D from "../assets/devImages/sulav.jpg";
import E from "../assets/devImages/mitesh.jpg";
import F from "../assets/devImages/manoj.png";

function AboutUsme(props) {
  //first developer
  const [name1, setName1] = useState("Sanket Karki");
  const [desp1, setDesp1] = useState(
    "I'm the hidden hand ensuring your seamless experience here. As Lead Backend Designer, I don't just build the foundation, but flawlessly integrate everything for a smooth and efficient journey. Remember that lightning-fast data processing behind our every feature? That was my handiwork! "
  );
  const [field1, setField1] = useState("Back End");
  const [image1, Image1] = useState(A);
  const facebook1 = "https://www.facebook.com/";
  const instagram1 = "https://www.instagram.com/carkey_sanket/";
  const twitter1 = "/twitterxaina";
  const linkedin1 = "https://www.linkedin.com/in/sanket-karki-942617184";

  const [name2, setName2] = useState("Suraj Adhikari");
  const [desp2, setDesp2] = useState(
    "I wield my design wand to craft intuitive and visually stunning experiences like the one you're enjoying right now (check out that landing page!). If not designing, you might find me brainstorming with my awesome teammates (no cursing involved, promise!). Got a design question, or feedback? I'm all ears!"
  );
  const [field2, setField2] = useState("Front End Designer");
  const [image2, Image2] = useState(B);
  const facebook2 = "https://www.facebook.com/";
  const instagram2 = "https://www.instagram.com/suraj.adk_";
  const twitter2 = "https://www.twitter.com/savvyaye";
  const linkedin2 = "https://www.linkedin.com/in/suraj-adhikari-041667240/";

  const [name3, setName3] = useState("Manish Subedi");
  const [desp3, setDesp3] = useState(
    "If you ever appreciate the ease of managing your profile or want to give a shoutout to the unsung heroes behind the scenes, you're welcome! I make sure everything runs smoothly, and you have the best experience here."
  );
  const [field3, setField3] = useState("Profile Manager");
  const [image3, Image3] = useState(C);
  const facebook3 = "https://www.facebook.com/";
  const instagram3 = "https://www.instagram.com/manishthemanic/";
  const twitter3 = "https://www.twitter.com/";
  const linkedin3 = "https://www.linkedin.com/in/manic-production-10a92420a";

  const [name4, setName4] = useState("Sulav Acharya");
  const [desp4, setDesp4] = useState(
    "Hey there! I'm Sulav, the friendly face behind the scenes. I love keeping things smooth, connecting with folks, and adding a dash of humor along the way. Teamwork? We work as a team, and together, we overcome anything.  Got a question, feedback, or just wanna chat? Don't be shy, come say hi!"
  );
  const [field4, setField4] = useState("Project Manager");
  const [image4, Image4] = useState(D);
  const facebook4 = "https://www.facebook.com/sulav.charya";
  const instagram4 = "https://www.instagram.com/su7av_acharya";
  const twitter4 = "https://www.twitter.com/";
  const linkedin4 = "https://www.linkedin.com/in/sulav-acharya-8b5629169/";

  const [name5, setName5] = useState("Mitesh Lamsal");
  const [desp5, setDesp5] = useState(
    "Hello. I'm Mitesh Lamsal, the one behind that smooth signup/login interface. I didn't just throw together some login fields and call it a day, I crafted every element user-friendly and intuitive. Tthe next time you effortlessly log in and think 'wow, this is smooth!', remember me."
  );
  const [field5, setField5] = useState("Login Page");
  const [image5, Image5] = useState(E);
  const facebook5 = "https://www.facebook.com/";
  const instagram5 = "https://www.instagram.com/";
  const twitter5 = "https://www.twitter.com/";
  const linkedin5 = "https://www.linkedin.com/";

  const [name6, setName6] = useState("Manoj Kumar Singh");
  const [desp6, setDesp6] = useState(
    "Look how amazing this page is! I worked my magic behid it. This page is just one example of my ability to craft experiences. About me? I am the one who makes impossible things possible."
  );
  const [field6, setField6] = useState("About Us");
  const [image6, Image6] = useState(F);
  const facebook6 = "https://www.facebook.com/";
  const instagram6 = "https://www.instagram.com/";
  const twitter6 = "https://www.twitter.com/";
  const linkedin6 = "https://www.linkedin.com/";

  return (
    <div className="dark:bg-[#121212]">
      <Navbar />
      <div className="pb-10 wrapper dark:bg-[#121212]">
        <div className="mt-6 py-5">
          <span className="text-4xl font-bold text-blue-600 dark:text-blue-200 ">
            Introduction
          </span>
          <span className="text-xl block font-light pt-5 pb-5 dark:text-gray-200">
            While sipping chiya at the canteen ☕, a group of friends hatched a
            plan to save food 🍽️. They discussed collecting excess food from
            events and restaurants to redistribute to those in need 🤝. Excited
            about the idea, they outlined steps to implement it, aiming to
            reduce food waste and foster community responsibility 🌱. This
            wasn't just a plan; it was a call to action, a chance to foster
            community responsibility. Each friend brought their unique skills
            and experiences to the table, their excitement palpable, their
            commitment unwavering to make a difference. 
          </span>
        </div>
        <div>
          <span className="text-lime-600 font-bold text-3xl py-5 dark:text-lime-200">
            Meet Our Teams
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4  pt-5 lg:grid-cols-3 gap-8">
            <AboutUsCard
              name={name1}
              desp={desp1}
              field={field1}
              image={image1}
              instagram={instagram1}
              facebook={facebook1}
              twitter={twitter1}
              linkedin={linkedin1}
            />
            <AboutUsCard
              name={name2}
              desp={desp2}
              field={field2}
              image={image2}
              instagram={instagram2}
              facebook={facebook2}
              twitter={twitter2}
              linkedin={linkedin2}
            />
            <AboutUsCard
              className="lg:hidden xl:hidden"
              name={name3}
              desp={desp3}
              field={field3}
              image={image3}
              instagram={instagram3}
              facebook={facebook3}
              twitter={twitter3}
              linkedin={linkedin3}
            />
            <AboutUsCard
              className="md:hidden xl:hidden"
              name={name4}
              desp={desp4}
              field={field4}
              image={image4}
              instagram={instagram4}
              facebook={facebook4}
              twitter={twitter4}
              linkedin={linkedin4}
              
            />
            <AboutUsCard
              className="md:hidden lg:hidden"
              name={name5}
              desp={desp5}
              field={field5}
              image={image5}
              instagram={instagram5}
              facebook={facebook5}
              twitter={twitter5}
              linkedin={linkedin5}
            />
            <AboutUsCard
              className="xl:hidden"
              name={name6}
              desp={desp6}
              field={field6}
              image={image6}
              instagram={instagram6}
              facebook={facebook6}
              twitter={twitter6}
              linkedin={linkedin6}
            />
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
AboutUsme.propTypes = {};
export default AboutUsme;
