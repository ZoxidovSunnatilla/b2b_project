import React from 'react'
import { Select, Input,Checkbox } from '@mantine/core';

const calculator = () => {
  return (
    <div className='bg-bg-voltiva min-h-screen'>
        <div id="header" className='mb-16'>
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
                  <select className="text-sm mr-3 select text-costum-text-black font-normal mr-1 bg-transparent outline-none">
                                <option value="value1" selected>
                                    En
                                </option>
                                <option value="value2">Ru</option>
                                <option value="value3">Eng</option>
                            </select>
                  <button className="bg-text-color-voltiva text-white h-10 w-32 rounded-lg">Contact us</button>
                </div>
            </div>
        </div>
        </div>
        <div id="wrapper">
          <div className="container mx-auto">
            <p className="text-3xl mb-10 text-center text-text-color-voltiva">How much you can profit using Voltiva</p>
            <div className="flex gap-3  min-h-96">
                <div className="bg-white w-2/5 p-8 min-h-96 rounded-3xl ">
                  <p className="text-2xl text-text-color-voltiva mb-10">Select type of your business:</p>
                  <div className="flex bg-bg-voltiva p-1 rounded-2xl mb-10">
                    <button className="h-12 shadow bg-white rounded-xl w-2/4 text-sm font-bold text-text-color-voltiva">Individual</button>
                    <button className="h-12  rounded-xl w-2/4 text-sm font-bold text-text-color-voltiva">Corporate</button>
                  </div>
                  <div id="select" className='mb-6'>
                    <div className="flex justify-between mb-1">
                      <p className="text-costum-silver">Choose the power level of charging station <span className='text-red-500'>*</span></p>
                      <img src="/img/icon_question.svg" alt="" />
                    </div>
                    <select className="input w-full text-sm text-costum-text-black font-normal mr-1 bg-transparent outline-none">
                                <option value="value1" selected>
                                    Uzbekistan
                                </option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                  </div>
                  <div id="select" className='mb-6'>
                    <div className="flex justify-between mb-1">
                      <p className="text-costum-silver">Choose the power level of charging station <span className='text-red-500'>*</span></p>
                      <img src="/img/icon_question.svg" alt="" />
                    </div>
                    <input placeholder="2100" className='input w-full'/>
                  </div>
                  <p className="text-costum-silver mb-2">Choose the power level of charging station</p>
                  <div className="flex justify-between">
                      <div className="card-checkbox">
                      <Checkbox
                        />
                      <div className="block">
                        <p className="text_one">Tech. Support   </p>
                        <p className="text_two">0</p>
                      </div>
                      <img src="/img/icon.svg" alt="" className='absolute top-3 right-3'/>
                      </div>
                      <div className="card-checkbox">
                      <Checkbox
                        defaultChecked
                        />
                      <div className="block">
                        <p className="text_one">Tech. Support   </p>
                        <p className="text_two">0</p>
                      </div>
                      <img src="/img/icon.svg" alt="" className='absolute top-3 right-3'/>
                      </div>
                  </div>
                </div>
                <div className="bg-white w-3/5 p-8 min-h-96 rounded-3xl">
                  <p className="text-2xl text-text-color-voltiva mb-10">Select type of your business:</p>
                  <div className="flex items-center gap-3">
                  <div id="select" className='mb-6'>
                    <div className="flex justify-between mb-1">
                      <p className="text-costum-silver">Choose the power level of charging station <span className='text-red-500'>*</span></p>
                      <img src="/img/icon_question.svg" alt="" />
                    </div>
                    
                    <select className="input w-full text-sm text-costum-text-black font-normal mr-1 bg-transparent outline-none">
                                <option value="value1" selected>
                                    Uzbekistan
                                </option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                  </div>
                  <div id="select" className='mb-6 w-2/4'>
                    <div className="flex justify-between mb-2">
                      <p className="text-costum-silver">Average Check</p>
                    </div>
                    <input placeholder="2100" className='input ' />
                  </div>
                  </div>
                  <p className="text-costum-silver">Average Check</p>
                  <div className="flex mt-2 justify-between items-center bgg mb-8 py-5 px-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                        <p className="text-costum-silver">Average Check</p>
                        <img src="/img/icon.svg" alt="" />
                        </div>
                        <p className="text-2xl text-text-color-voltiva">65 560</p>
                      </div>
                      <div className="rotate-60 h-16 border-bg w-0.5"></div>
                      
                      <div className="flex flex-col gap-3 ">
                        <div className="flex gap-1">
                        <p className="text-costum-silver">Average Check</p>
                        </div>
                        <p className="text-2xl text-text-color-voltiva">65 560</p>
                      </div>
                      <div className="rotate-60 h-16 border-bg w-0.5"></div>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                        <p className="text-costum-silver">Average Check</p>
                        </div>
                        <p className="text-2xl text-text-color-voltiva">65 560</p>
                      </div>
                      
                      <div className="rotate-60 h-16 border-bg w-0.5"></div>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                        <p className="text-costum-silver">Average Check</p>
                        <img src="/img/icon.svg" alt="" />
                        </div>
                        <p className="text-2xl text-text-color-voltiva">65 560</p>
                      </div>
                  </div>
                  
                  <p className="text-costum-silver">Average Check</p>
                  <div className="flex mt-2 justify-between items-center bgg mb-6 py-5 px-5">
                      <div className="flex flex-col gap-0 w-2/5">
                        <div className="flex gap-1">
                        <p className="text-costum-silver text-lg">Average Check</p>
                        </div>
                        <p className="text-4xl text-text-color-voltiva">65 560</p>
                      </div>
                      <div className="rotate-60 h-16 border-bg w-0.5"></div>
                      
                      <div className="flex flex-col gap-0 w-2/5">
                        <p className="text-costum-silver text-lg">Average Check</p>
                        <p className="text-4xl text-text-color-voltiva">65 560</p>
                      </div>
                      
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default calculator