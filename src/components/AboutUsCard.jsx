import React from 'react'
import F from "../components/image/f.png"
import I from "../components/image/i.jpg"
import T from "../components/image/t.png"
function AboutUsCard(props) {
  return (
    
        <div className='bg-zinc-300 p-5 rounded-lg container mx-auto  w-80'>

                <img className='m-3 ml-14 mb-5  border-4 flex justify-center w-40 h-40 rounded-full border-x-amber-300 ' src={props.image} alt="developer1"/>
                  {/* <img src={props.image1}/> */}

                <p className='mb-4 hover:font-serif font-mono flex justify-center font-bold text-2xl '>{props.name}</p>
              
                  
                    <detail className='m-6 pt-5' >{props.desp}</detail>
                    
                <footer className='flex justify-center font-bold text-xl'>{props.field}</footer>
                <span className='flex pl-5'>
                  <a href={props.facebook} target="_blank" rel='noopener noreferrer'>
                   <img className='transition-transform duration-300 transform origin-center hover:scale-110 w-6 h-6 m-7 rounded ' src={F} alt='facebook'/>
                  </a>
                  
                  <a href={props.instagram} target="_blank" rel='noopener noreferrer'>
                   <img className='transition-transform duration-300 transform origin-center hover:scale-110 w-6 h-6 m-7 rounded' src={I} alt='instagram'/>
                  </a>
                  
                    
                  <a href={props.twitter} target="_blank" rel='noopener noreferrer'>
                    <img className='transition-transform duration-300 transform origin-center hover:scale-110 w-6 m-7' src={T} alt="twitter"/>
                  </a>
                </span>

        </div>
  )
}

export default AboutUsCard