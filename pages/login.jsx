import React from 'react';
import { Input, Select } from '@mantine/core';

const login = () => {
  const icon = <img src='/images/down_icon.svg' alt=''/>
  
  return (
    <div className=" login">
      <div id='login' className='container mx-auto  flex justify-center items-center w-full nin-h-screen'>

        <div className="bg-white opacity-100 p-6 w-full md:w-2/5 rounded-lg flex flex-col items-center">
          <p className="md:text-xl text-lg text-costumBlack font-bold text-center mb-6">Welcome back! Log In</p>
          <div className="md:w-96 w-full mx-auto mb-6">
            <Select
              label="Your favorite library"
              placeholder="Pick value"
              rightSection={icon}
              data={['React', 'Angular', 'Vue', 'Svelte']}
              size='md'
            />
          </div>
          
          <button className="bg-costum-blue rounded-full font-medimum mb-6 text-white h-12 w-48 mx-auto">Login</button>
        </div>
      </div>
    </div>
  )
}

export default login