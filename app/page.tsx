import About from '@/components/About'
import Blogs from '@/components/Blogs'
import Event from '@/components/Event'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <About />
      <Event />
      <Blogs />
    </div>
  );
}

export default page