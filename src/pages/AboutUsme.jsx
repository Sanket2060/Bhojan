import { React , useState } from 'react'
"use client"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'

  //developer image
import AboutUsCard from '../components/AboutUsCard'
import A from "../pages/image/A.jpg"
import B from "../pages/image/B.jpg"
import C from "../pages/image/c.jpg"
import D from "../pages/image/d.jpg"
import E from "../pages/image/e.jpg"
import F from "../pages/image/g.jpg"

    function AboutUsme(props) {
      //first developer
      const [name1,setName1] =useState("Sanket Karki")
      const [desp1,setDesp1]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field1,setField1]=useState("Back End")
      const [image1,Image1]  = useState(A)
      const facebook1 = "https://www.facebook.com/"
      const instagram1 = "https://www.instagram.com/"
      const twitter1 = "https://www.twitter.com/"
      
      const [name2,setName2] =useState("Suraj Adhikari")
      const [desp2,setDesp2]=useState("lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field2,setField2]=useState("Front End Designer")
      const [image2,Image2]  = useState(B)
      const facebook2 = "https://www.facebook.com/"
      const instagram2 = "https://www.instagram.com/"
      const twitter2 = "https://www.twitter.com/"

      const [name3,setName3] =useState("Manish Subedi")
      const [desp3,setDesp3]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field3,setField3]=useState("Profile Manager")
      const [image3,Image3]  = useState(C)
      const facebook3 = "https://www.facebook.com/"
      const instagram3 = "https://www.instagram.com/"
      const twitter3 = "https://www.twitter.com/"

      const [name4,setName4] =useState("Sulav Acharya")
      const [desp4,setDesp4]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field4,setField4]=useState("Project Manager")
      const [image4,Image4]  = useState(D)
      const facebook4 = "https://www.facebook.com/"
      const instagram4 = "https://www.instagram.com/"
      const twitter4 = "https://www.twitter.com/"

      const [name5,setName5] =useState("Mitesh Lamsal")
      const [desp5,setDesp5]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field5,setField5]=useState("Login Page")
      const [image5,Image5]  = useState(E)
      const facebook5 = "https://www.facebook.com/"
      const instagram5 = "https://www.instagram.com/"
      const twitter5 = "https://www.twitter.com/"

      const [name6,setName6] =useState("Manoj Kuamr Singh")
      const [desp6,setDesp6]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe eos nihil laborum placeat alias omnis aliquid, quaerat ex amet quasi fugiat nemo ullam, voluptatibus obcaecati et autem repellendus velit!  or pursues or desires to obtain pain of itself")
      const [field6,setField6]=useState("About Us")
      const [image6,Image6]  = useState(F)
      const facebook6 = "https://www.facebook.com/"
      const instagram6 = "https://www.instagram.com/"
      const twitter6 = "https://www.twitter.com/"

  return (
    <>
        <Navbar />
        <div className='mb-10 wrapper'>
                <div className='bg-violet-100 rounded-full text-6xl text-custom text-center font-bold p-5 hover:text-violet-600'> About Us</div>
          <div className='mt-6' >
              <span className='text-4xl font-bold text-blue-600  pl-5'>Introduction</span>
              <span className='text-xl block p-5 font-light'>Our mission is not wasting of food which every day foods are waste in the hotel, partypalace etc. 
               we are planning to prevent stop wasting that food
               But on the otherhands poor people don't can't afford nutrients food, So our mission is connected both problems to a single solution 
              We are going to built an App to prifit of both poor people get food and food stop wasting and also get advertise without any costs both 
              problems can be solve.</span>
          </div>

          <div>
              <span className='text-lime-600 font-bold text-4xl'>Meet Our Teams</span>
              <span className='mt-8 mb-4 lg:flex justify-between '>
                  <AboutUsCard name={name1} desp={desp1} field={field1} image={image1} instagram={instagram1} facebook={facebook1} twitter={twitter1} />
                  <AboutUsCard name={name2} desp={desp2} field={field2} image={image2} instagram={instagram2} facebook={facebook2} twitter={twitter2} />
                  <AboutUsCard className="pl-18" name={name3} desp={desp3} field={field3} image={image3} instagram={instagram3} facebook={facebook3} twitter={twitter3} />
              </span>
              <br/>

              <span className='lg:flex justify-around'>
                  <AboutUsCard name={name4} desp={desp4} field={field4} image={image4} instagram={instagram4} facebook={facebook4} twitter={twitter4} />
                  <AboutUsCard name={name5} desp={desp5} field={field5} image={image5} instagram={instagram5} facebook={facebook5} twitter={twitter5} />
                  <AboutUsCard name={name6} desp={desp6} field={field6} image={image6} instagram={instagram6} facebook={facebook6} twitter={twitter6} />
              </span>
            </div>

            <br/>
            <div className='m-5 '>  
                <span className='text-blue-700 font-bold text-4xl md-5 font'>Description</span>
                <span className='block mb-10 text-xl mt-4 font-light '>We are Pokhara University B block students and we are hosting this website, Our teams are working for successful of this project and helps a 
                  for humanity and we are planning to helps others. This websites can helps maximum number of people any one can involves and can take profits.
                  If we advertise to gets costly but it can't. So we use freely.

                </span>
            </div>
            
        </div>
        <Footer />
    </>
  )
}
AboutUsme.propTypes = {}
export default AboutUsme
