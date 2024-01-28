import React from 'react'
import { Breadcrumbs, Tabs, List, Checkbox } from '@mantine/core';

const ProductPage = () => {
  return (
    <div className='container mx-auto'>
      <Breadcrumbs className='mt-8 mb-10'>
        <a href="" className="text-costum-silver text-sm">Link </a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-text-black text-sm">dasdasds</a>
      </Breadcrumbs>
      <div id="wrapper">
        <div className="grid w-full grid-cols-2 mb-8 gap-3">
          <div className="w-auto">
            <img src="/images/product_img.png" alt="" />
          </div>
          <div className="w-auto">
            <p className="text-3xl text-costum-text-black font-bold mb-5">
              Product name for maximum two text lines title could be very long
            </p>
            <p className="text-lg text-costum-silver mb-4">Omnires | Part No. 2123532</p>
            <div className="flex gap-2 mb-4 h-6 items-center">
              <div className="flex gap-1">
                <img src="/images/star_outline.svg" alt="" />
                <img src="/images/star_outline.svg" alt="" />
                <img src="/images/star_outline.svg" alt="" />
                <img src="/images/star_outline.svg" alt="" />
                <img src="/images/star_outline.svg" alt="" />

              </div>
              <div className="flex gap-1">
                <p className="text-costum-text-black font-semibold">5.0</p>
                <p className="text-costum-text-black">(24)</p>

              </div>
            </div>
            <div className="flex gap-1 border mb-4 w-24 border-solid border-costum-gray-300 p-1.5 rounded">
              <img src="/images/check.svg" alt="" />
              <p className="text-costum-green">in stock</p>
            </div>
            <div className="grid grid-cols-3">
              <p className="text-costum-silver tex-sm">Quantity</p>
              <p className="text-costum-silver tex-sm">Discount</p>
              <p className="text-costum-silver tex-sm text-right">Price net</p>
            </div>
            <div className="border border-solid border-costum-silver-300 w-full mt-3 mb-2"></div>
            <div className="grid grid-cols-3 mb-2">
              <p className="text-costum-silver tex-sm">20-99 items</p>
              <p className="text-red-500 tex-sm font-semibold">20%</p>
              <p className="text-costum-text-black tex-xl font-bold text-right">$23.35 net</p>
            </div>
            <div className="grid grid-cols-3 mb-2">
              <p className="text-costum-silver tex-sm">20-99 items</p>
              <p className="text-red-500 tex-sm font-semibold">20%</p>
              <p className="text-costum-text-black tex-xl font-bold text-right">$23.35 net</p>
            </div>
            <div className="grid grid-cols-3 mb-8">
              <p className="text-costum-silver tex-sm">20-99 items</p>
              <p className="text-red-500 tex-sm font-semibold">20%</p>
              <p className="text-costum-text-black tex-xl font-bold text-right">$23.35 net</p>
            </div>

            <div className="flex w-full items-center w-full justify-end gap-2 mb-5">
              <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
              <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
            </div>

            <div className="flex gap-3 justify-between mb-2">
              <div className="w-2/4">
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-full  mr-1 bg-transparent py-2 px-4 outline-none' >
                  <option value="value1" selected>Choose variant</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>
              <div className="flex mb-2 w-2/4 gap-3  justify-between">
                <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/3  block  rounded-md sm:text-sm " placeholder="1" />
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-2/3  mr-1 bg-transparent py-2 px-3 outline-none' >
                  <option value="value1" selected>items</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <button className=" w-10/12 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
              <img src="/images/share_img.svg" alt="" />
              <img src="/images/compare_img.svg" alt="" />


            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mb-28">
        <div className="flex items-center justify-center bg-costum-gray flex-col h-24 w-auto rounded-lg">
          <img src="/images/credit_payment.svg" alt="" className='mb-3' />
          <p className="text-sm text-costum-text-black">Safety payment</p>
        </div>
        <div className="flex items-center justify-center bg-costum-gray flex-col h-24 w-auto rounded-lg">
          <img src="/images/credit_payment.svg" alt="" className='mb-3' />
          <p className="text-sm text-costum-text-black">Safety payment</p>
        </div>
        <div className="flex items-center justify-center bg-costum-gray flex-col h-24 w-auto rounded-lg">
          <img src="/images/credit_payment.svg" alt="" className='mb-3' />
          <p className="text-sm text-costum-text-black">Safety payment</p>
        </div>
        <div className="flex items-center justify-center bg-costum-gray flex-col h-24 w-auto rounded-lg">
          <img src="/images/credit_payment.svg" alt="" className='mb-3' />
          <p className="text-sm text-costum-text-black">Safety payment</p>
        </div>
      </div>

      <div id="card" className='mb-20'>
        <p className="text-3xl font-bold text-costum-text-black mb-10">Frequently bought together</p>

        <div className="flex  gap-3">
          <div className="w-3/5 bg-star flex justify-between gap-3 p-4 border border-costum-blue border-solid rounded-lg">
            <div className="w-2/3 flex  gap-2">
              <div className="w-auto  min-h-72 bg-white rounded-lg">
                <div className="relative">
                  <img src="/images/product_img.svg" alt="" className='w-full' />
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                  <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                  <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                  <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                    <img src="/images/check.svg" alt="" />
                    <p className="text-costum-green">in stock</p>
                  </div>

                </div>
                <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                  <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost  <br /> finish an apartment?</p>
                </div>
              </div>
              <div className="w-auto min-h-72 bg-white rounded-lg">
                <div className="relative">
                  <img src="/images/product_img.svg" alt="" className='w-full' />
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                  <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                  <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                  <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                    <img src="/images/check.svg" alt="" />
                    <p className="text-costum-green">in stock</p>
                  </div>

                </div>
                <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                  <p className="text-xl  text-costum-text-black font-bold ">How much does it cost <br /> finish an apartment?</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center h-full">
              <p className="text-sm mb-2">Price for bundle:</p>
              <div className="flex w-full items-center w-full justify-start gap-2 mb-1">
                <p className="text-costum-blue font-bold text-sm md:text-base"> <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
              </div>
              <button className=" w-full flex justify-center items-center mb-2 h-12 font-bold gap-2 text-base  rounded-full text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="w-2/5 bg-star p-5 border border-costum-blue border-solid rounded-lg">
            <p className="text-xl font-bold text-costum-blue mb-6">Contact our Expert!</p>
            <div className="flex gap-2 mb-4">
              <img src="/images/avatar.svg" alt="" className='w-24 h-24 rounded-lg' />
              <div className="flex flex-col gap-3">
                <p className="text-base text-costum-text-black font-bold">Name and Surname</p>
                <p className="text-base text-costum-text-black ">Specialist - name of profession</p>
                <p className="text-base text-costum-text-black ">Company Product Group</p>

              </div>
            </div>
            <button className=" w-full flex justify-center items-center mb-2 h-12 font-bold gap-2 text-base  rounded-full text-white bg-costum-blue">
              <img src="/images/videocam.svg" alt="" />
              Schedule a meeting
            </button>
            <button className=" w-full flex justify-center items-center mb-2 h-12 font-bold gap-2 text-base  rounded-full text-costum-blue bg-white">
              <img src="/images/phone.svg" alt="" />
              Call: +65 553 123 543
            </button>
            <button className=" w-full flex justify-center items-center mb-2 h-12 font-bold gap-2 text-base  rounded-full text-costum-blue bg-white">
              <img src="/images/chat.svg" alt="" />
              Chat
            </button>
          </div>
        </div>
      </div>


      <div id="tabs">
        <Tabs color="#1071FF" variant="pills" defaultValue="Description">
          <Tabs.List>
            <Tabs.Tab value="Description" >
              Description
            </Tabs.Tab>
            <Tabs.Tab value="Technical Details" >
              Technical Details
            </Tabs.Tab>
            <Tabs.Tab value="Attachments" >
              Attachments
            </Tabs.Tab>
            <Tabs.Tab value="Shipping & Payments" >
              Shipping & Payments
            </Tabs.Tab>
            <Tabs.Tab value="Reviews" >
              Reviews (0)
            </Tabs.Tab>
            <Tabs.Tab value="Ask about product" >
              Ask about product
            </Tabs.Tab>

          </Tabs.List>
          <div className="tabs w-full bg-star p-6">
            <Tabs.Panel value="Description">
              <div className="w-full p-8 bg-white rounded-lg">
                <div className="flex justify-between">
                  <div className="w-3/5">
                    <p className="text-costum-text-black">
                      Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.
                      <br />
                      Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet.
                    </p>
                  </div>
                  <div className="w-2/5 flex h-full justify-center items-center">
                    <div className="bg-costum-gray p-5 w-3/5">
                      <p className="text-costum-text-black font-bold mb-3">Details:</p>
                      <List withPadding listStyleType="disc">
                        <List.Item className='mb-1'>EAN</List.Item>
                        <List.Item className='mb-1'>Color</List.Item>
                        <List.Item className='mb-1'>Atribute 3</List.Item>
                        <List.Item className='mb-1'>Atribute 4</List.Item>
                        <List.Item className='mb-1'>Atribute 5</List.Item>
                        <List.Item className='mb-1'>Atribute 6</List.Item>

                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="Technical Details">
              <div className="w-full p-8 bg-white rounded-lg">
                <div className="flex justify-around w-full">
                  <div className="w-2/5">
                    <div className="flex w-full justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                  </div>
                  <div className="w-2/5">
                    <div className="flex w-full justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-white">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                    <div className="flex justify-between p-3 bg-star">
                      <p className="text-costum-text-black">Parameter 1</p>
                      <p className="text-costum-text-black font-bold text-right">Parameter's value</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="Attachments">
              <div className="w-full p-8 bg-white rounded-lg">
                <p className="text-costum-text-black mb-4">Choose attachments which you want to dowland and click dowland button.</p>
                <p className="text-costum-blue mb-2 font-bold">Documents</p>
                <div className="flex gap-2 mb-1 items-center">
                  <Checkbox />
                  <label> Technical data sheet: TC02882</label>
                </div>
                <div className="flex gap-2 mb-1 items-center">
                  <Checkbox />
                  <label>Bluepink</label>
                </div>
                <div className="flex gap-2   items-center">
                  <Checkbox />
                  <label>Manual</label>
                </div>
                <div className="w-full border border-solid my-8  border-costum-silver-300"></div>
                <p className="text-costum-blue mb-2 font-bold">Certifictes</p>
                <div className="flex gap-2 mb-1 items-center">
                  <Checkbox />
                  <label>Certificate 1 </label>
                </div>
                <div className="flex gap-2 mb-1 items-center">
                  <Checkbox />
                  <label>Certificate 2</label>
                </div>
                <div className="flex gap-2   items-center">
                  <Checkbox />
                  <label>Certificate 3</label>
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="Shipping & Payments">
              Settings tab content
            </Tabs.Panel>
            <Tabs.Panel value="Reviews">
              <div className="flex justify-between">
              <div className="w-2/5">
                <p className="text-costum-text-black font-bold text-2xl mb-3">Options (18)</p>
                <p className="text-costum-text-black mb-1 font-medium">Overall rating</p>
                <div className="flex gap-1 items-center mb-3">
                  <div className="flex gap-2">
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                  </div>
                  <p className="text-sm font-bold">5.0</p>
                </div>
                <div className="flex flex-col gap-2 w-full ">
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5">
                <p className="text-costum-text-black font-bold text-2xl mb-3">Options (18)</p>
                <p className="text-costum-text-black mb-1 font-medium">Overall rating</p>
                <div className="flex gap-1 items-center mb-3">
                  <div className="flex gap-2">
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                    <img src="/images/star_rating.svg" alt="" />
                  </div>
                  <p className="text-sm font-bold">5.0</p>
                </div>
                <div className="flex flex-col gap-2 w-full ">
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white gap-4 rounded-lg p-6 w-full">
                    <div className="">
                      <div className="flex justify-between mb-2">
                        <p className="text-costum-text-black font-bold">User 1</p>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-2">
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                            <img src="/images/star_rating.svg" alt="" />
                          </div>
                          <p className="text-sm font-bold">5.0</p>
                        </div>
                      </div>
                      <p className="text-costum-silver text-sm mb-1">3th January 2020</p>
                      <p className="text-costum-text-black mb-1">
                        Produkt jest świetny. Ze sklepu postanowiłem skorzystać ze względu na bardzo atrakcyjną cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                      </p>
                      <div className="flex gap-1">
                        <img src="/images/attach_file.svg" alt="" />
                        <p className="text-sm text-costum-text-black">1 file Attached</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-costum-blue font-bold">Add Comment</p>
                      <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_dislike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">5</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <img src="/images/icon_likelike.svg" alt="" />
                          <p className="text-sm text-costum-text-black">24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="Ask about product">
              Settings tab content
            </Tabs.Panel>
          </div>

        </Tabs>
      </div >
    </div >
  )
}

export default ProductPage