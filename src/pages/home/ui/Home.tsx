import { FC } from 'react'
import { Navbar } from '../../../widgets/navbar'
import { Header } from '../../../widgets/header'
import { AnnualStatistics } from '../../../widgets/annual-statistics'

export const Home: FC = () => {
  return (
    <main className='app'>
      <div className='main'>
        <Navbar />
        <Header />
        <AnnualStatistics />
      </div>   
    </main>
  )
}