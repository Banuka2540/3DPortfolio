import React from 'react'
import instagram from '../assets/Instagram.png'
import Linkdin from '../assets/Linkedin.png'
import Github from '../assets/Github.png'
import Facebook from '../assets/Facebook.png'

export default function Socials() {
  return (
    <div className='flex items-center justify-start gap-10 p-5 pt-40'>
      <img src={instagram}/>
      <img src={Linkdin}/>
      <img src={Github}/>
      <img src={Facebook}/>
    </div>
  )
}
