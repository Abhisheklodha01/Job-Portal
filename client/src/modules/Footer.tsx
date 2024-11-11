import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-black text-xl'>
        <h3 className='text-center text-white pt-10'>Email us: support@jobportal.com</h3>
      <div className='flex flex-col md:flex-row justify-evenly items-center
       text-white pb-5 pt-4'>
        <Link to={"/"}>LinkedIn</Link>
        <Link to={"/"}>Twitter</Link>
        <Link to={"/"}>Instgram</Link>
      </div>
      <h2 className='text-white text-xl text-center pb-5'>All rights reserved @2024</h2>
    </div>
  )
}
