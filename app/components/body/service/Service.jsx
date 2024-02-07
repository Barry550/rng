"use client";

import React from "react";
import style from "./styles.module.css";
import { CldImage } from "next-cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCarrot,
  faCow,
  faFish,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Service() {
  const services = [
    {
      src: "rng/ac8frs7llyc0v8pzwwec",
      icon: faEgg,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. animi, officiis obcaecati aliquam omnis mollitia perspiciatis! If a dog chews shoes whose shoes does he choose?",
      name: "egg",
    },

    {
      src: "rng/vvggtyedcflplbl96fh4",
      icon: faFish,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. animi, officiis obcaecati aliquam omnis mollitia perspiciatis! If a dog chews shoes whose shoes does he choose?",
      name: "fish",
    },

    {
      src: "rng/ioocugtjz7x8px3zoy9e",
      icon: faCarrot,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. animi, officiis obcaecati aliquam omnis mollitia perspiciatis! If a dog chews shoes whose shoes does he choose?",
      name: "jardin",
    },

    {
      src: "rng/ik9ujewwkjeyxrbay93r",
      icon: faCow,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. animi, officiis obcaecati aliquam omnis mollitia perspiciatis! If a dog chews shoes whose shoes does he choose?",
      name: "cow",
    },
  ];

  return (
    <div className={`${style.servicebanner} mb-96 `}>
      <div className="m-auto">
        <div className="flex">
          {/* <CldImage
            className="m-auto mt-24"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={877}
            height={614}
          /> */}
          <Image
            className="m-auto mt-24"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
        </div>

        <div className="flex mt-3">
          <h2 style={{ color: "#687469" }} className="m-auto ">
            CE QUE NOUS FAISONS
          </h2>
        </div>

        <div className="flex my-5">
          <h1
            style={{ color: "#334b35" }}
            className="m-auto text-centerfont-bold lg:text-6xl text-3xl text-center"
          >
            Services que nous offrons
          </h1>
        </div>
      </div>

      <div className="flex lg:space-x-5 md:space-x-4 justify-center flex-wrap">
        {services?.map(({ src, icon, desc, name }) => (
          <div
            key={name}
            className="card lg:w-72 w-80 h-auto bg-base-100 shadow-xl my-4"
          >
            <figure>
              {/* <CldImage src={src} width={488} height={48} alt="egg" /> */}
              <Image src={`/${name}.jpg`} width={488} height={48} alt="egg" />
            </figure>
            <div className={`flex ${style.rond}`}>
              <FontAwesomeIcon
                className="m-auto text-yellow-300"
                style={{ width: "50px", height: "50px" }}
                icon={icon}
              />
            </div>
            <div className="card-body mt-10 flex text-center ">
              <h2 className="card-title text-center m-auto">{name}!</h2>
              <p>{desc}</p>
              <div className="card-actions justify-center">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="text-6xl text-yellow-300 bg-black hover:text-green-600 hover:bg-white cursor-pointer"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
