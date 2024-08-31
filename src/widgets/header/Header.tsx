import { FC } from 'react'
import "./Header.scss"

export const Header: FC = () => {
  return (
    <section className='header'>
      <div className='header__head'>
        <h1 className='header__title'>
          The meeting place for the world’s top 
          <br />
          affiliate marketers and ecommerce entrepreneurs
        </h1>
        <div></div>
      </div>
      <div className='header__block'></div>
    </section>
  )
}