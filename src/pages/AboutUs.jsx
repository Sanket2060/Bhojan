import { React, useState } from "react";
("use client");
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

//developer image
import AboutUsCard from "../components/AboutusCard";
import A from "../assets/devImages/default.jpg";
import B from "../assets/devImages/default.jpg";
import C from "../assets/devImages/default.jpg";
import D from "../assets/devImages/default.jpg";
import E from "../assets/devImages/default.jpg";
import F from "../assets/devImages/default.jpg";

function AboutUsme(props) {
  //first developer
  const [name1, setName1] = useState("Sanket Karki");
  const [desp1, setDesp1] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself"
  );
  const [field1, setField1] = useState("Back End");
  const [image1, Image1] = useState(A);
  const facebook1 = "https://www.facebook.com/";
  const instagram1 = "https://www.instagram.com/";
  const twitter1 = "https://www.twitter.com/";

  const [name2, setName2] = useState("Suraj Adhikari");
  const [desp2, setDesp2] = useState(
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself"
  );
  const [field2, setField2] = useState("Front End Designer");
  const [image2, Image2] = useState(B);
  const facebook2 = "https://www.facebook.com/";
  const instagram2 = "https://www.instagram.com/suraj.adk_";
  const twitter2 = "https://www.twitter.com/savvyaye";

  const [name3, setName3] = useState("Manish Subedi");
  const [desp3, setDesp3] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself"
  );
  const [field3, setField3] = useState("Profile Manager");
  const [image3, Image3] = useState(C);
  const facebook3 = "https://www.facebook.com/";
  const instagram3 = "https://www.instagram.com/";
  const twitter3 = "https://www.twitter.com/";

  const [name4, setName4] = useState("Sulav Acharya");
  const [desp4, setDesp4] = useState(
    "Hey there! I'm Sulav, the friendly face behind the scenes. I love keeping things smooth, connecting with folks, and adding a dash of humor along the way. Teamwork? We work as a team, and together, we overcome anything.  Got a question, feedback, or just wanna chat? Don't be shy, come say hi!"
  );
  const [field4, setField4] = useState("Project Manager");
  const [image4, Image4] = useState(D);
  const facebook4 = "https://www.facebook.com/sulav.charya";
  const instagram4 = "https://www.instagram.com/su7av_acharya";
  const twitter4 = "https://www.twitter.com/";

  const [name5, setName5] = useState("Mitesh Lamsal");
  const [desp5, setDesp5] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself"
  );
  const [field5, setField5] = useState("Login Page");
  const [image5, Image5] = useState(E);
  const facebook5 = "https://www.facebook.com/";
  const instagram5 = "https://www.instagram.com/";
  const twitter5 = "https://www.twitter.com/";

  const [name6, setName6] = useState("Manoj Kumar Singh");
  const [desp6, setDesp6] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself"
  );
  const [field6, setField6] = useState("About Us");
  const [image6, Image6] = useState(F);
  const facebook6 = "https://www.facebook.com/";
  const instagram6 = "https://www.instagram.com/";
  const twitter6 = "https://www.twitter.com/";

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
            reduce food waste and foster community responsibility 🌱.
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
            />
            <AboutUsCard
              name={name2}
              desp={desp2}
              field={field2}
              image={image2}
              instagram={instagram2}
              facebook={facebook2}
              twitter={twitter2}
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
