import React from 'react'
import { Breadcrumbs,} from '@mantine/core';


const category = () => {
  return (
    <div className='container mx-auto'>
         <Breadcrumbs className='mt-8 md:mb-10 mb-6 ' >
          <a href="" className="text-costum-silver text-sm">Home page </a>
          <a href="" className="text-costum-text-black text-sm">Home & Garden</a>
        </Breadcrumbs>
        <p className="text-4xl text-costum-text-black font-bold mb-4">Home & Garden</p>
        <p className="textt mb-10 md:mb-16">Single row angular contact bearings are capable of taking radial loads, as well as axial loads in one direction. They <br/> are able to transmit radial and axial forces simultaneously. These bearings are an excellent choice for high speed, <br/> low load applications. They have a low coefficient of friction and run an</p>
        <div className="grid md:grid-cols-4 grid-cols-2  gap-3">
            <div className="card_category mb-6 md:mb-10">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
            <div className="card_category">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
            <div className="card_category">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
            <div className="card_category">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
            <div className="card_category">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
            <div className="card_category">
                <img src="/images/category.svg" alt="" />
                <p className="text-xl font-bold my-2">Construction</p>
                <p className="text-costum-silver ">Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.</p>
            </div>
        </div>
    </div>
  )
}

export default category