"use client";

import React from "react";
import style from "./blog.module.css";
import { CldImage } from "next-cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      src: "rng/mkg2wc88cziegxggs8l8",
      img: "jardin",
      date: "October 31, 2021",
      desc: "Agriculture Matters to the Future of next",
      id: 1,
    },

    {
      src: "rng/ioocugtjz7x8px3zoy9e",
      img: "vegetable",
      date: "October 31, 2021",
      desc: "Agriculture Matters to the Future of next",
      id: 2,
    },

    {
      src: "rng/ik9ujewwkjeyxrbay93r",
      img: "banner2",
      date: "October 31, 2021",
      desc: "Agriculture Matters to the Future of next",
      id: 3,
    },
  ];

  return (
    <div className={`${style.blogbanner} mb-72`}>
      <div className="m-auto">
        <div className="flex">
          {/* <CldImage
            className="m-auto mt-16"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={877}
            height={614}
          />
           */}

          <Image
            className="m-auto mt-16"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
        </div>

        <div className="flex mt-3">
          <h2 style={{ color: "#687469" }} className="m-auto ">
            BLOG
          </h2>
        </div>

        <div className="flex mb-4">
          <h1
            style={{ color: "#334b35" }}
            className="m-auto font-bold lg:text-5xl text-3xl text-center"
          >
            Nouvelles & Articles
          </h1>
        </div>
      </div>

      <div className="flex lg:space-x-5  space-x-2 justify-center flex-wrap p-5">
        {blogs?.map(({ src, date, desc, id, img }) => (
          <div key={id} className="card w-96 h-auto bg-base-100 shadow-xl my-4">
            <figure className="relative">
              {/* <CldImage src={src} width={1000} height={3648} alt="egg" /> */}
              <Image
                src={`/${img}.jpg`}
                width={488}
                height={48}
                alt="photoBlogs"
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "40px",
                  background: "#f1cf69",
                  color: "#334b35",

                  padding: "5px 20px 5px 20px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                {date}
              </p>
            </figure>

            <div className="px-10 py-5">
              <FontAwesomeIcon className="text-green-600" icon={faCircleUser} />
              <span style={{ color: "#687469" }} className="mx-4">
                Admin
              </span>
              <FontAwesomeIcon className="text-green-600" icon={faComment} />
              <span style={{ color: "#687469" }} className="ml-4">
                2 comment
              </span>
            </div>
            <div className="px-10 pb-5">
              <p className="text-2xl font-bold text-green-800">{desc}</p>
              <div className="card-actions justify-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
