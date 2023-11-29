import React from 'react'
import "./blog.css"
import { BlogCard } from './BlogCard'
import Heading from '../../common/heading/Heading'


export const Blog = () => {
  return (
    <>
    <Heading title='Success Story' subtitle='Blog'/>
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}
