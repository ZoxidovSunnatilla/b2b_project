import React from 'react';
import { Select } from '@mantine/core';



const calculator_header = () => {
    return (
        <div className='container mx-auto '>
            <div className="flex justify-between items-center">
                <img src="/img/Logo.svg" alt="" />
                <div className="flex gap-8">
                    <a href="" className="text-text-color-voltiva ">Mobile App</a>
                    <a href="" className="text-text-color-voltiva ">Wearables</a>
                    <a href="" className="text-text-color-voltiva ">EV Dashboard</a>
                    <a href="" className="text-text-color-voltiva ">For Partners</a>
                    <a href="" className="text-text-color-voltiva ">About Us</a>
                </div>
                <div className="flex">
<Select/> 
                  <button className="bg-text-color-voltiva text-white h-10 w-32 rounded-lg">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default calculator_header


