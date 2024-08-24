import Image from 'next/image'
import React from 'react'
import img from "@/assets/images/ehlStarcture.jpg"


type Props = {}

const page = (props: Props) => {
  return (
    <div className=' mt-32'>
        <Image
        src={img}
        alt='ehl oranizational structure'
        />
    </div>
  )
}

export default page