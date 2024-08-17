import React, { useState, useEffect } from "react"
import img from "../../assets/images/img-1.png"
import img3 from "../../assets/images/img-3.png"
import img4 from "../../assets/images/img-4.png"
import { List, Image, Card } from "antd"

const ProductGallery = () => {
  // getting viewport dimenssions
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      image: [img, img3, img4],
      name: ["Wedding", "Asoebi"],
    },
  ])

  return (
    <div className="w-fit ml-[-20px] md:ml-[20px]">
      <div>
        <div className="md:flex md:justify-between">
          <p className="">
            <Image
              src={img}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img3}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Asoebi</span>
          </p>
          <p>
            <Image
              src={img4}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
        </div>
        <div className="md:flex md:justify-between mt-[40px]">
          <p>
            <Image
              src={img}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Asoebi</span>
          </p>
          <p>
            <Image
              src={img3}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img4}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
        </div>
        <div className="md:flex md:justify-between mt-[40px]">
          <p>
            <Image
              src={img}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img3}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img4}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
        </div>
        <div className="md:flex md:justify-between mt-[40px]">
          <p>
            <Image
              src={img}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img3}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
          <p>
            <Image
              src={img4}
              height={width <= 640 ? 100 : 200}
              width={width <= 640 ? 250 : 350}
              className="rounded-lg"
            />
            <span className="mt-[170px] text-white">Wedding</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
