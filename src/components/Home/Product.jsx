import React, { useState, useEffect } from "react"
import { Carousel } from "@mantine/carousel"
import { Image } from "@mantine/core"
import { requests } from "@/src/services/request"
import { useTranslation } from "next-i18next"
import { useDispatch } from "react-redux"
import Link from "next/link"
import ProductSkeleton from "../Skeleton/productSkeleton"
import ProductCard from "../ProductCard"

const Product = () => {
  const { t } = useTranslation()
  const [values, setValues] = useState([
    {
      id: 1,
      images: [
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
        { link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png" },
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
      ],
      discount: "50",
      in_stock: true,
      brand: { name: "dsadas" },
      name: "sadasda",
      price: "500$",
      attributes: [
        { name: "size", value: "sadasd" },
        { name: "size", value: "sadasd" },
      ],
    },
    {
      id: 2,
      images: [
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
        { link: "s" },
        {
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png",
        },
      ],
      discount: "30",
      in_stock: true,
      brand: { name: "dsadas" },
      name: "sadasda",
      price: "500$",
      attributes: [
        { name: "size", value: "sadasd" },
        { name: "size", value: "sadasd" },
      ],
    },
  ])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async () => {
  //   setLoading(true)
  //   const res = await requests.Product.recommended(1, 10)
  //   setData(res?.data)
  //   setLoading(false)
  // }

  return (
    <div id="products">
      <div className="flex justify-center md:justify-between  mb-8 w-full">
        <p className="text-costumBlack font-bold text-2xl md:text-[28px] ">
          {t("productTitleText")}
        </p>
        <div className="md:flex hidden w-49 item-center gap-1 h-6">
          <p className="text-costum-blue text-base font-medium">
            {t("productSubTitle")}
          </p>
          <Image src="/images/arrow_forward.svg" alt="" />
        </div>
      </div>
      
      {values ? (
        <Carousel
          nextControlIcon={<img src="/images/productCarouselRight.svg" />}
          previousControlIcon=""
          height={612}
          slideSize={{ base: "50%", md: "308px" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          {values?.map((item) => (
            <Carousel.Slide key={item.id}>
              <ProductCard item={item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <ProductSkeleton />
      )}

      <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
        <p className="text-costum-blue text-base font-medium ">
          {t("productSubTitle")}
        </p>
        <Image src="/images/arrow_forward.svg" alt="" />
      </div>
    </div>
  )
}

export default Product
