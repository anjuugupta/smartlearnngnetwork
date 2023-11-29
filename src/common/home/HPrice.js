import React from 'react'
import { PriceCard } from '../../components/Pricing/PriceCard'
import Heading from '../heading/Heading'

export const HPrice = () => {
  return (
    <>
    <section className='hprice padding'>
    <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
    <div className='price container grid'>
      <PriceCard />
    </div>
  </section>
    </>
  )
}
