import React, { useEffect, useState } from "react"
import { Carousel } from "@mantine/carousel"
import { requests } from "@/src/services/request"
import BrandSkeleton from "../Skeleton/brandSkeleton"
import { useTranslation } from "next-i18next"
import { Image } from '@mantine/core';

const brand_next_icon = (
  <div className="w-10 md:w-14 flex items-center justify-center h-10 md:h-14 bg-[#E6EFFB] border-[#F6F8FB] rounded-lg">
    <Image src="/images/brand_carousel_right.svg" />
  </div>
)
const brand_prev_icon = (
  <div className="w-10 md:w-14 flex items-center justify-center h-10 md:h-14 bg-[#E6EFFB] border-[#F6F8FB] rounded-lg">
    <Image src="/images/brand_carousel_left.svg" />
  </div>
)

function Brands() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setLoading(true)
    const res = await requests.Category.brands(1, 10)
    setData(res?.data)
    setLoading(false)
  }
  const { t } = useTranslation()

  return (
    <div id="brands">
      <div className="flex justify-center md:justify-between mb-8 w-full">
        <p className="text-costumBlack font-bold text-2xl md:text-[28px] ">
          {t("brandTitleText")}
        </p>
        <div className=" w-49 item-center gap-1 h-6 hidden md:flex">
          <p className="text-costum-blue text-base font-medium ">
            {t("brandSubTitleText")}
          </p>
          <Image src="/images/arrow_forward.svg" alt="" />
        </div>
      </div>

      {data ? (
        <div className="w-full mb-4  md:mb-28 gap-2">
          <Carousel
            withIndicators
            height={88}
            slideSize={{ base: "60%", md: "25%" }}
            slideGap="md"
            loop
            align="start"
            nextControlIcon={brand_next_icon}
            previousControlIcon={brand_prev_icon}
            slidesToScroll={3}
          >
            {data ? (data?.map((item) => (
              <Carousel.Slide key={item.id}>
                <Image src={item.logo || "/images/brand_img1.svg"} alt="" />
              </Carousel.Slide>
            ))): (<BrandSkeleton />)}
          </Carousel>
        </div>
      ) : (
        <BrandSkeleton />
        
      )}
      <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
        <p className="text-costum-blue text-base font-medium ">
          {t("brandSubTitleText")}
        </p>
        <Image src="/images/arrow_forward.svg" alt="" />
      </div>
    </div>
  )
}

export default Brands
