import { FC } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar: FC = () => {
  return (
    <section className='navbar'>
      <div className="navbar__container">
        <img className='navbar__logo' src="https://affiliateworldconferences.com/static/media/logo-white.37af6fb1.svg" alt="" />
        <div className='navbar__redirect-btn'>
          <Link to={'https://affiliateworldconferences.com/europe'}>
            Next Event:
            <span>Affiliate World Europe 2024</span>
            <span>AW Europe 2024</span>
            →
          </Link>
        </div>
      </div>
    </section>
  )
}