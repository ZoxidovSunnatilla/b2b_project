import React, {useState} from 'react'
import { Breadcrumbs, Table, Select, Image } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next"
import { useDispatch, useSelector } from "react-redux"

const ComparePage = () => {
  const { t } = useTranslation("common", "compare")
  const compare = useSelector((state) => state.compare.compareProd)
  
 
  return (
    <div className='container mx-auto'>
      <Breadcrumbs className='mt-8 mb-10 breadcumbs' >
        <a href="" className="text-costum-silver text-sm">Link </a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-silver text-sm">dasdasds</a>
        <a href="" className="text-costum-text-black text-sm">Link 10</a>
      </Breadcrumbs>
      <Breadcrumbs className='mt-5 mb-6 breadcumbs_mobile'>
        <a href="" className="text-costum-silver text-sm">Home Page </a>
        <a href="" className="text-costum-text-black text-sm">Link 10</a>
      </Breadcrumbs>

      <div className="md:flex block justify-between items-center md:mb-10 mb-4">
        <p className="md:text-4xl mb-4 md:mb-0 text-[28px] font-bold">{t("compare:favoritesTextTitle")}</p>
        <div className="flex items-center">
          <Image src="/images/cart_delete_icon.svg" alt="" />
          <p className="text-base text-[#434447]">{t("compare:favoritesTextSubTitle")}</p>
        </div>
      </div>
      <div className="md:flex block md:mb-[65px] mb-6 justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 gap-2">
          <Image src="/images/print.svg" alt="" />
          <p className="text-base text-[#434447]">{t("compare:favoritesTextPrint")}</p>
        </div>
        <div className="md:flex block gap-4">
          <button className="md:w-[189px] w-full md:mb-0 mb-2 h-12 border border-2 border-[#1071FF] rounded-full">{t("compare:favoritesBtnOne")}</button>
          <button className="md:w-[220px] w-full h-12 border border-2 border-[#1071FF] rounded-full">{t("compare:favoritesBtnTwo")}</button>
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <Image src="/images/compare_icon_left.svg" alt="" />
          <Image src="/images/compare_icon_right.svg" alt="" />
        </div>
      </div>
      <div className="w-full md:flex hidden justify-start gap-5 md:mb-[100px]">
       
        <div className="w-[301px] bg-bg-voltiva ">
          <div className="flex w-full h-12 juctify-center items-center border-b ">
            <div className="flex justify-center items-center mx-auto gap-1">
              <Image src="/images/arrow_back.svg" alt="" />
              <p className="text-sm font-base
              ">{t("compare:tabNext")}</p>
            </div>
          </div>
          <div className="flex w-full h-[283px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabOne")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabTwo")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabThree")}</p>
            </div>
          </div>
          <div className="flex w-full h-[569px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabFour")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabFive")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabSix")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabSeven")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabAge")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabNine")}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="mx-auto">
              <p className="text-sm font-base">{t("compare:tabTen")}</p>
            </div>
          </div>
        </div>
        {compare ? (compare.map((item) => {
          return  <div className="w-[301px] bg-bg-voltiva " key={item._id}>
          <div className="flex w-full h-12 juctify-center items-center  ">
            <div className="mx-auto">
              <Image src="/images/delete.svg" alt="" />
            </div>
          </div>
          <div className="flex w-full h-[283px] relative bg-white juctify-center items-center  ">
            <div className="mx-auto  ">
              <Image src="/images/compareImg1.svg" alt="" />
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-3.5 right-3.5">
                <Image src="/images/star.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal mb-0 text-left">{item.name}</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-x; font-normal">{item.price}</p>
            </div>
          </div>
          <div className="flex w-full h-[569px] juctify-center  border-b ">
            <div className="p-[32px]">
              <p className="text-sm font-normal">Lighting spaces with LED bulbs is a solution that is not only good for the environment, but also financially beneficial. Therefore, the model presented here is recommended for use in every apartment, house and public utility premises. Not only does this bulb take less power, it is also more durable and more durable than typical traditional models. It is more resistant to mechanical damage and shocks, thanks to which it will illuminate the space longer. Importantly, these bulbs do not need to be warmed up to glow fully. This product does not flash when it is lit. In our store you will get LED bulbs in the entire range of models that will perfectly match your home or premises.</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">E14</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">Candle</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">4W</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">450 lm</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">warm light</p>
            </div>
          </div>
          <div className="flex w-full h-[88px] juctify-center items-center border-b ">
            <div className="pl-[32px]">
              <p className="text-sm font-normal">Value</p>
            </div>
          </div>
        </div>
        })) : (<h1>dsa</h1>)}
    
      
     
      </div>
      <div className="flex md:hidden overflow-x-scroll">
        {compare ? (compare.map((item) => {
          return   <div className="w-[164px]" key={item.id}>
          <div className="flex w-full h-12 bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <Image src="/images/delete.svg" alt="" />
            </div>
          </div>
          <div className="flex w-full h-[154px] relative bg-white juctify-center items-center  ">
            <div className="mx-auto  ">
              <Image src="/images/compareImg_mobile.svg" alt="" />
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-3.5 right-3.5">
                <Image src="/images/star.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Name</p>
            </div>
          </div>
          <div className="flex w-full h-[80px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">{item.name}</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Price</p>
            </div>
          </div>
          <div className="flex w-full h-[63px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">{item.price}</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Description</p>
            </div>
          </div>
          <div className="flex w-full h-auto bg-[#F6F8FB] juctify-center items-center  ">
            <div className="p-4">
              <p className="text-sm font-normal mb-0 text-center">Lighting spaces with LED bulbs is a solution that is not only good for the environment, but also financially beneficial. Therefore, the model presented here is recommended for use in every apartment, house and public utility premises. Not only does this bulb take less power, it is also more durable and more durable than typical traditional models. It is more resistant to mechanical damage and shocks, thanks to which it will illuminate the space longer. Importantly, these bulbs do not need to be warmed up to glow fully. This product does not flash when it is lit. In our store you will get LED bulbs in the entire range of models that will perfectly match your home or premises.</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Bulb thread type</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">E14</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Bulb shape</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Candle</p>
            </div>
          </div>
          <div className="flex w-full h-[64px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Maximum bulb power</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">4W</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Luminous flux</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">450 Lm</p>
            </div>
          </div>
          <div className="flex w-full h-[64px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">The color of the light</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">warm light</p>
            </div>
          </div>
          <div className="flex w-full h-[40px] bg-[#E6EFFB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Parameter</p>
            </div>
          </div>
          <div className="flex w-full h-[56px] bg-[#F6F8FB] juctify-center items-center  ">
            <div className="mx-auto">
              <p className="text-sm font-normal mb-0 text-center">Value</p>
            </div>
          </div>
          
        </div>
        })) : (<h1>ssad</h1>)}
       

      </div>
    </div>
    
  )
}

export default ComparePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "compare"])),
    },
  }
}