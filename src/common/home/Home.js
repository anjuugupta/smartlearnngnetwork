import React from 'react';
import { Hero } from './hero/Hero';
import { AboutCard } from '../../components/about/AboutCard';
import { HAbout } from './HAbout';
import { Testiomonal } from './testiomonal/Testiomonal';
import { Blog } from '../../components/blog/Blog';
import { HPrice } from './HPrice';

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testiomonal />
      <Blog/>
      <HPrice/>
    </>
  );
};
