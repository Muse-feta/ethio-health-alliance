import About from '@/components/About'
import About2 from '@/components/About2'
import Blogs from '@/components/Blogs'
import Departments from '@/components/Departments'
import Departement from '@/components/Departments'
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
      <About2/>
      {/* <Services /> */}
      <About />
      <Departments/>
      <Event />
      <Blogs />
    </div>
  );
}

export default page