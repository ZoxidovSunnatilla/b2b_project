import React from "react";
import { Carousel } from '@mantine/carousel';


const Home = () => {
  return (
    <div>
      <div className="container mx-auto w-full mt-8 md:mt-28">
        <div id="brands">
          <div className="flex justify-center md:justify-between mb-8 w-full">
            <p className="text-costumBlack font-bold text-2xl md:text-3xl ">
              Our Brands
            </p>
            <div className=" w-49 item-center gap-1 h-6 hidden md:flex">
              <p className="text-costum-blue text-base font-medium ">
                Show all brands
              </p>
              <img src="/images/arrow_forward.svg" alt="" />
            </div>
          </div>
          <div className=" mb-4  md:mb-28 gap-2">
            <Carousel withIndicators slidesToScroll={4} height={200} className="grid grid-cols-2 md:grid-cols-4">
              <Carousel.Slide><img src="/images/brand_img1.svg" alt="" /></Carousel.Slide>
              <Carousel.Slide><img src="/images/brand_img2.svg" alt="" /></Carousel.Slide>
              <Carousel.Slide><img src="/images/brand_img3.svg" alt="" /></Carousel.Slide>
              <Carousel.Slide><img src="/images/brand_img4.svg" alt="" /></Carousel.Slide>
            </Carousel>
          </div>
          <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
            <p className="text-costum-blue text-base font-medium ">
              Show all brands
            </p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
        <div id="products">
          <div className="flex justify-center md:justify-between  mb-8 w-full">
            <p className="text-costumBlack font-bold text-2xl md:text-3xl ">
              Recomended products
            </p>
            <div className="md:flex hidden w-49 item-center gap-1 h-6">
              <p className="text-costum-blue text-base font-medium">
                Show all recomended products
              </p>
              <img src="/images/arrow_forward.svg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:gap-5  gap-1 mb-4 flex-wrap">
            <div className="md:w-auto w-44 min-h-72 rounded-lg">
              <div className="relative">
                <img src="/images/product_img.svg" alt="" className="w-full" />
                <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">
                  -30%
                </div>
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                  <img src="/images/star.svg" alt="" />
                </div>
                <div className="absolute bottom-2 right-3">
                  <img src="/images/share.svg" alt="" />
                </div>
                <div className="absolute bottom-10 right-3">
                  <img src="/images/compare.svg" alt="" />
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                  <img src="/images/check.svg" alt="" />
                  <p className="text-costum-green">in stock</p>
                </div>
              </div>
              <p className="text-silver text-sm md:text-base pt-2 px-2">
                Omnires | Part No. 2123532
              </p>
              <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                <p className="md:text-xl text-base text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-sm md:text-base mb-3">
                  Material of execution: brass <br />
                  Manufacturer’s color: chrome <br />
                  Guarantee: 5 years
                </p>
                <div className="md:flex block w-full md:items-center gap-2 mb-3">
                  <p className="text-costum-blue font-bold text-sm md:text-base">
                    your price{" "}
                    <span className="text-2xl mx-1 font-bold">$45.00</span>net
                  </p>
                  <p className="text-costum-orange text-sm md:text-base line-through">
                    $55.00 net
                  </p>
                </div>
                <div className="flex mb-2 w-full  justify-between">
                  <input
                    type="text"
                    name="number"
                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                    placeholder="1"
                  />
                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                    <option value="value1" selected>
                      items
                    </option>
                    <option value="value2">Значение 2</option>
                    <option value="value3">Значение 3</option>
                  </select>
                </div>

                <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                  Add to cart
                  <img src="/images/down-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="md:w-auto w-44 min-h-72 rounded-lg">
              <div className="relative">
                <img src="/images/product_img.svg" alt="" className="w-full" />
                <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">
                  -30%
                </div>
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                  <img src="/images/star.svg" alt="" />
                </div>
                <div className="absolute bottom-2 right-3">
                  <img src="/images/share.svg" alt="" />
                </div>
                <div className="absolute bottom-10 right-3">
                  <img src="/images/compare.svg" alt="" />
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                  <img src="/images/check.svg" alt="" />
                  <p className="text-costum-green">in stock</p>
                </div>
              </div>
              <p className="text-silver text-sm md:text-base pt-2 px-2">
                Omnires | Part No. 2123532
              </p>
              <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                <p className="md:text-xl text-base text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-sm md:text-base mb-3">
                  Material of execution: brass <br />
                  Manufacturer’s color: chrome <br />
                  Guarantee: 5 years
                </p>
                <div className="md:flex block w-full md:items-center gap-2 mb-3">
                  <p className="text-costum-blue font-bold text-sm md:text-base">
                    your price{" "}
                    <span className="text-2xl mx-1 font-bold">$45.00</span>net
                  </p>
                  <p className="text-costum-orange text-sm md:text-base line-through">
                    $55.00 net
                  </p>
                </div>
                <div className="flex mb-2 w-full  justify-between">
                  <input
                    type="text"
                    name="number"
                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                    placeholder="1"
                  />
                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                    <option value="value1" selected>
                      items
                    </option>
                    <option value="value2">Значение 2</option>
                    <option value="value3">Значение 3</option>
                  </select>
                </div>

                <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                  Add to cart
                  <img src="/images/down-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="md:w-auto  w-44 min-h-72 rounded-lg">
              <div className="relative">
                <img src="/images/product_img.svg" alt="" className="w-full" />
                <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">
                  -30%
                </div>
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                  <img src="/images/star.svg" alt="" />
                </div>
                <div className="absolute bottom-2 right-3">
                  <img src="/images/share.svg" alt="" />
                </div>
                <div className="absolute bottom-10 right-3">
                  <img src="/images/compare.svg" alt="" />
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                  <img src="/images/check.svg" alt="" />
                  <p className="text-costum-green">in stock</p>
                </div>
              </div>
              <p className="text-silver text-sm md:text-base pt-2 px-2">
                Omnires | Part No. 2123532
              </p>
              <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                <p className="md:text-xl text-base text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-sm md:text-base mb-3">
                  Material of execution: brass <br />
                  Manufacturer’s color: chrome <br />
                  Guarantee: 5 years
                </p>
                <div className="md:flex block w-full md:items-center gap-2 mb-3">
                  <p className="text-costum-blue font-bold text-sm md:text-base">
                    your price{" "}
                    <span className="text-2xl mx-1 font-bold">$45.00</span>net
                  </p>
                  <p className="text-costum-orange text-sm md:text-base line-through">
                    $55.00 net
                  </p>
                </div>
                <div className="flex mb-2 w-full  justify-between">
                  <input
                    type="text"
                    name="number"
                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                    placeholder="1"
                  />
                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                    <option value="value1" selected>
                      items
                    </option>
                    <option value="value2">Значение 2</option>
                    <option value="value3">Значение 3</option>
                  </select>
                </div>

                <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                  Add to cart
                  <img src="/images/down-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="md:w-auto  w-44 min-h-72 rounded-lg">
              <div className="relative">
                <img src="/images/product_img.svg" alt="" className="w-full" />
                <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">
                  -30%
                </div>
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                  <img src="/images/star.svg" alt="" />
                </div>
                <div className="absolute bottom-2 right-3">
                  <img src="/images/share.svg" alt="" />
                </div>
                <div className="absolute bottom-10 right-3">
                  <img src="/images/compare.svg" alt="" />
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                  <img src="/images/check.svg" alt="" />
                  <p className="text-costum-green">in stock</p>
                </div>
              </div>
              <p className="text-silver text-sm md:text-base pt-2 px-2">
                Omnires | Part No. 2123532
              </p>
              <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                <p className="md:text-xl text-base text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-sm md:text-base mb-3">
                  Material of execution: brass <br />
                  Manufacturer’s color: chrome <br />
                  Guarantee: 5 years
                </p>
                <div className="md:flex block w-full md:items-center gap-2 mb-3">
                  <p className="text-costum-blue font-bold text-sm md:text-base">
                    your price{" "}
                    <span className="text-2xl mx-1 font-bold">$45.00</span>net
                  </p>
                  <p className="text-costum-orange text-sm md:text-base line-through">
                    $55.00 net
                  </p>
                </div>
                <div className="flex mb-2 w-full  justify-between">
                  <input
                    type="text"
                    name="number"
                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                    placeholder="1"
                  />
                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                    <option value="value1" selected>
                      items
                    </option>
                    <option value="value2">Значение 2</option>
                    <option value="value3">Значение 3</option>
                  </select>
                </div>

                <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                  Add to cart
                  <img src="/images/down-icon.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
            <p className="text-costum-blue text-base font-medium ">
              Show all recomended products
            </p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-costum-blue py-8 my-8">
        <div className="container mx-auto flex md:justify-between justify-center flex-col md:flex-row flex-wrap items-center">
          <div className="flex gap-4 items-center flex-col md:flex-row flex-wrap items-center justify-center">
            <img src="/images/advertising.svg" alt="" />
            <h1 className="text-white md:text-7xl text-5xl font-bold">-20%</h1>
            <p className="text-white text-center text-4xl mb-4 md:mb-0 md:text-5xl">
              on dairy products
            </p>
          </div>
          <button className="text-costum-blue text-base h-12 w-40 bg-white rounded-3xl">
            Check offer
          </button>
        </div>
      </div>
      <div className="container mx-auto w-full">
        <div id="categories">
          <div className="flex justify-center md:justify-between mb-8 w-full">
            <p className="text-costumBlack font-bold   text-2xl md:text-3xl ">
              Recommended Categories
            </p>
            <div className=" md:flex hidden w-49 item-center gap-1 h-6">
              <p className="text-costum-blue text-base font-medium">
                Show all categories
              </p>
              <img src="/images/arrow_forward.svg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3  md:gap-5 md:mb-24">
            <div className="md:w-auto w-44 md:min-h-72  rounded-lg">
              <img src="/images/categorie_img.svg" alt="" className="w-full" />
              <div className="w-full bg-costum-blue text-center min-h-16 text-base md:text-xl text-white font-bold rounded-b-lg flex items-center justify-center">
                Electronics
              </div>
            </div>
            <div className="md:w-auto w-44 md:min-h-72  rounded-lg">
              <img src="/images/categorie_img.svg" alt="" className="w-full" />
              <div className="w-full bg-costum-blue text-center min-h-16 text-base md:text-xl text-white font-bold rounded-b-lg flex items-center justify-center">
                Electronics
              </div>
            </div>
            <div className="md:w-auto w-44 md:min-h-72 rounded-lg">
              <img src="/images/categorie_img.svg" alt="" className="w-full" />
              <div className="w-full bg-costum-blue text-center min-h-16 text-base md:text-xl text-white font-bold rounded-b-lg flex items-center justify-center">
                Electronics
              </div>
            </div>
            <div className="md:w-auto w-44 md:min-h-72 mb-5 rounded-lg">
              <img src="/images/categorie_img.svg" alt="" className="w-full" />
              <div className="w-full bg-costum-blue text-center min-h-16 text-base md:text-xl text-white font-bold rounded-b-lg flex items-center justify-center">
                Electronics
              </div>
            </div>
          </div>
          <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
            <p className="text-costum-blue text-base font-medium ">
              Show all recomended categories
            </p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
        <div id="hints">
          <div className="flex justify-center md:justify-between mb-8 w-full">
            <p className="text-costumBlack font-bold md:text-3xl  text-2xl">
              Hints for you
            </p>
            <div className="md:flex hidden item-center gap-1 h-6">
              <p className="text-costum-blue text-base font-medium">
                Show all hints
              </p>
              <img src="/images/arrow_forward.svg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full md:gap-5  gap-1 md:mb-24">
            <div className="md:w-auto  w-full md:min-h-72 h-auto rounded-lg mb-6">
              <img src="/images/hints_img.svg" alt="" className="w-full" />
              <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
                <p className="text-xl text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-base mb-4">
                  Are you standing on the threshold of your own , to which you
                  have just picked up the keys, and with the eye...
                </p>
                <div className="flex item-center gap-1 h-6">
                  <p className="text-costum-blue text-base font-medium">
                    Read more
                  </p>
                  <img src="/images/arrow_forward.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="md:w-auto  w-full md:min-h-72 h-auto mb-6 rounded-lg">
              <img src="/images/hints_img.svg" alt="" className="w-full" />
              <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
                <p className="text-xl text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-base mb-4">
                  Are you standing on the threshold of your own , to which you
                  have just picked up the keys, and with the eye...
                </p>
                <div className="flex item-center gap-1 h-6">
                  <p className="text-costum-blue text-base font-medium">
                    Read more
                  </p>
                  <img src="/images/arrow_forward.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="md:w-auto  w-full md:min-h-72 h-auto mb-6 rounded-lg">
              <img src="/images/hints_img.svg" alt="" className="w-full" />
              <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
                <p className="text-xl text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-base mb-4">
                  Are you standing on the threshold of your own , to which you
                  have just picked up the keys, and with the eye...
                </p>
                <div className="flex item-center gap-1 h-6">
                  <p className="text-costum-blue text-base font-medium">
                    Read more
                  </p>
                  <img src="/images/arrow_forward.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="md:w-auto  w-full md:min-h-72 h-auto rounded-lg mb-6">
              <img src="/images/hints_img.svg" alt="" className="w-full" />
              <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
                <p className="text-xl text-costumBlack font-bold mb-3.5">
                  How much does it cost to <br /> finish an apartment?
                </p>
                <p className="text-costumBlack text-base mb-4">
                  Are you standing on the threshold of your own , to which you
                  have just picked up the keys, and with the eye...
                </p>
                <div className="flex item-center gap-1 h-6">
                  <p className="text-costum-blue text-base font-medium">
                    Read more
                  </p>
                  <img src="/images/arrow_forward.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
            <p className="text-costum-blue text-base font-medium ">
              Show all hints
            </p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-5 gap-3 h-auto mb-8 md:h-96 md:mb-24">
          <div className="md:w-auto w-full rounded-lg h-full">
            <img
              src="/images/img_reklama.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="md:w-auto w-full rounded-lg bg-costum-blue h-full md:px-24 px-6 py-10 md:py-28">
            <p className="text-white font-bold mb-5 text-3xl">
              Buy this bundle and save 100K!
            </p>
            <p className="text-white text-base mb-7 font-normal text-xl">
              Longer sentence, for just two lines <br /> and it could be very
              very long
            </p>
            <button className="bg-white  text-costum-blue font-bold py-2.5 px-8 rounded-3xl">
              Buy this bundle
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-5 gap-3 mb-8 flex-wrap md:mb-24">
          <div className="md:w-auto w-full h-auto md:min-h-56 flex rounded-lg">
            <div className="w-2/4 h-full bg-costum-orange rounded-l-lg flex items-center pl-8 md:pl-10">
              <p className="text-white font-bold text-xl ">New tool kits!</p>
            </div>
            <div className="w-2/4 rounded-r-lg">
              <img src="/images/kits_img.svg" alt="" className="w-full" />
            </div>
          </div>
          <div className="md:w-auto w-full h-auto md:min-h-56 flex rounded-lg">
            <div className="w-2/4 h-full bg-costum-orange rounded-l-lg flex items-center pl-8 md:pl-10">
              <p className="text-white font-bold text-xl ">New tool kits!</p>
            </div>
            <div className="w-2/4 h-full rounded-r-lg">
              <img src="/images/kits_img.svg" alt="" className="w-full " />
            </div>
          </div>
          <div className="md:w-auto w-full  h-auto md:min-h-56 flex rounded-lg">
            <div className="w-2/4 h-full bg-costum-orange rounded-l-lg flex items-center pl-8 md:pl-10">
              <p className="text-white font-bold text-xl ">
                New Iphone <br /> now available!
              </p>
            </div>
            <div className="w-2/4 rounded-r-lg">
              <img src="/images/kits_img.svg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-costum-gray mb-8 md:mb-24">
        <div className="container mx-auto">
          <div className="flex justify-between flex-wrap py-12">
            <div className="w-full md:w-2/4 md:mb-0 mb-6 text-center md:text-left flex flex-col items-center md:block">
              <p className="font-bold text-costumBlack md:my-10 my-6 text-3xl md:text-4xl">
                DPD delivery already available!
              </p>
              <p className="text-base font-medium text-costumBlack mb-8">
                Choose DPD for speed, ease and convenience. <br /> Track your
                parcel in real time. This will help you plan <br /> your work
                while waiting for the parcel.
              </p>
              <div className="mb-3 md:mb-0 rounded-3xl bg-costum-blue w-36 flex items-center justify-center h-12 text-white font-bold">
                Show more
              </div>
            </div>
            <div className="md:w-2/4 w-full flex justify-end">
              <img src="/images/dpd_img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full">
        <div className="flex justify-center md:justify-between mb-8 w-full">
          <p className="text-costumBlack font-bold  text-2xl md:text-3xl ">
            Events for you
          </p>
          <div className="md:flex hidden w-49 item-center gap-1 h-6">
            <p className="text-costum-blue text-base font-medium">
              Show all events
            </p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-1 mb-8 md:gap-5 md:mb-24">
          <div className="md:w-auto md:min-h-72 h-auto mb-6 w-full rounded-lg">
            <img src="/images/hints_img.svg" alt="" className="w-full" />
            <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
              <p className="text-xl text-costumBlack font-bold mb-3.5">
                How much does it cost to <br /> finish an apartment?
              </p>
              <p className="text-costum-blue mb-3.5">23.01.2021 | London, Uk</p>
              <p className="text-costumBlack text-base mb-4">
                Are you standing on the threshold of your own , to which you
                have just picked up the keys, and with the eye...
              </p>
              <button className="border border-blue-500 border-2 py-2.5 px-8 rounded-3xl text-costum-blue font-bold">
                Know more
              </button>
            </div>
          </div>
          <div className="md:w-auto md:min-h-72 h-auto mb-6 w-full rounded-lg">
            <img src="/images/hints_img.svg" alt="" className="w-full" />
            <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
              <p className="text-xl text-costumBlack font-bold mb-3.5">
                How much does it cost to <br /> finish an apartment?
              </p>
              <p className="text-costum-blue mb-3.5">23.01.2021 | London, Uk</p>

              <p className="text-costumBlack text-base mb-4">
                Are you standing on the threshold of your own M, to which you
                have just picked up the keys, and with the eye...
              </p>
              <button className="border border-blue-500 border-2 py-2.5 px-8 rounded-3xl text-costum-blue font-bold">
                Know more
              </button>
            </div>
          </div>
          <div className="md:w-auto md:min-h-72 h-auto mb-6 w-full rounded-lg">
            <img src="/images/hints_img.svg" alt="" className="w-full" />
            <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
              <p className="text-xl text-costumBlack font-bold mb-3.5">
                How much does it cost to <br /> finish an apartment?
              </p>
              <p className="text-costum-blue mb-3.5">23.01.2021 | London, Uk</p>

              <p className="text-costumBlack text-base mb-4">
                Are you standing on the threshold of your own , to which you
                have just picked up the keys, and with the eye...
              </p>
              <button className="border border-blue-500 border-2 py-2.5 px-8 rounded-3xl text-costum-blue font-bold">
                Know more
              </button>
            </div>
          </div>
          <div className="md:w-auto md:min-h-72 h-auto mb-6 w-full rounded-lg">
            <img src="/images/hints_img.svg" alt="" className="w-full" />
            <div className="w-full min-h-16  py-3 px-2 rounded-b-lg border-solid border border-costum-gray-500">
              <p className="text-xl text-costumBlack font-bold mb-3.5">
                How much does it cost to <br /> finish an apartment?
              </p>
              <p className="text-costum-blue mb-3.5">23.01.2021 | London, Uk</p>

              <p className="text-costumBlack text-base mb-4">
                Are you standing on the threshold of your own , to which you
                have just picked up the keys, and with the eye...
              </p>
              <button className="border border-blue-500 border-2 py-2.5 px-8 rounded-3xl text-costum-blue font-bold">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
