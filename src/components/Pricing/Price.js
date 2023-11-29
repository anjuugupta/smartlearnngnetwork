import React from 'react'
import { Back } from '../../common/back/Back'
import { PriceCard } from './PriceCard'
import "./price.css"
import { Faqs } from './Faqs'

export const Price = () => {
  return (
    <>
    <Back title='Choose Your Plane'/>
    <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faqs/>
    </>
  )
}
