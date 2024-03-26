import { Image, Select } from "@mantine/core"
import Link from "next/link"
import React from "react"
import { useTranslation } from "next-i18next"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/features/cart"

const icon = <Image src="/images/down_icon_select.svg" alt="" />

function ProductCard({ item }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const cartProducts = useSelector((state) => state.cart.products)
  const handleAddToCart = (item) => {
    const product = {
      _id: item.id,
      name: item.name,
      quantity: 1,
      image: item.images,
      in_stock: item.in_stock,
      discount: item.discount,
      price: item.price,
      attributes: item.attributes,
      brand: item.brand,
    }
    dispatch(addToCart(product))
  }
  const hasCart = () => {
    return cartProducts?.filter((el) => el._id === item.id)?.length > 0
      ? true
      : false
  }
  return (
    <div className="md:w-auto w-44 min-h-72 rounded-lg">
      <Link href="/product">
        <div className="relative">
          {item.images ? (
            <Image
              src={item?.images[0].link}
              alt=""
              className="w-full h-[238px]"
            />
          ) : (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/240px-No_image_available_500_x_500.svg.png"
              alt=""
              className="w-full h-[238px]"
            />
          )}
          <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">
            -{item.discount}%
          </div>
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
            <Image src="/images/star.svg" alt="" />
          </div>
          <div className="absolute bottom-2 right-3">
            <Image src="/images/share.svg" alt="" />
          </div>
          <div className="absolute bottom-10 right-3">
            <Image src="/images/compare.svg" alt="" />
          </div>
          {item.in_stock ? (
            <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
              <img src="/images/check.svg" alt="" />
              <p className="text-costum-green">in stock</p>
            </div>
          ) : (
            <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
              <img src="/images/error_outline.svg" alt="" />
              <p className="text-[#F52F2F]">{item.expected_delivery_date}</p>
            </div>
          )}
        </div>
      </Link>
      <p className="text-silver text-sm md:text-base pt-2 px-2">
        {item?.brand?.name}
      </p>
      <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
        <p className="md:text-xl text-base text-costumBlack font-bold mb-3.5">
          {item.name}
        </p>
        {item?.attributes.map((item) => (
          <p
            className="text-costumBlack text-sm md:text-base mb-3"
            key={item.value}
          >
            {item.name}:<span className="ml-1 font-semibold">{item.value}</span>
          </p>
        ))}
        <div className="md:flex block w-full md:items-center gap-2 mb-3">
          <p className="text-costum-blue font-bold text-sm md:text-sm">
            your price{" "}
            <span className="text-xl mx-1 font-bold">{item.price}</span>
            net
          </p>
          <p className="text-costum-orange text-sm md:text-base line-through">
            $55.00
          </p>
        </div>
        <div className="flex mb-2 w-full  justify-between">
          <input
            type="text"
            name="number"
            className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-[#EAECEE] placeholder-[#0C0C0C] outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
            placeholder="1"
          />
          <Select
            placeholder="Item 1"
            className="Select_product"
            data={["React", "Angular", "Vue", "Svelte"]}
            rightSection={icon}
          />
        </div>
        <button
          onClick={() => handleAddToCart(item)}
          className={`w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl  ${
            hasCart()
              ? "text-costum-blue bg-white border border-costum-blue"
              : "text-white bg-costum-blue"
          }`}
        >
          {hasCart() ? "Savatchada" : t("cardBtnText")}
          <Image src="/images/down-icon.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
