"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function BestTeam() {
  const teams = [
    {
      src: "about2",
      name: "Malick Niang",
      id: 1,
      titre: "agronome",
    },

    {
      src: "about2",
      name: "Saliou Fall",
      id: 2,
      titre: "Tractorist",
    },

    {
      src: "about2",
      name: "Mamadou Diop",
      id: 3,
      titre: "Plombier",
    },

    {
      src: "about2",
      name: "Mamadou Barry",
      id: 4,
      titre: "Agrologue",
    },
  ];
  return (
    <div className="mt-24">
      <div className="">
        <div className="flex">
          {/* <CldImage
            className="m-auto"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={877}
            height={614}
          /> */}
          <Image
            className="m-auto"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
        </div>
        <div className="flex mt-3">
          <h2 style={{ color: "#687469" }} className="m-auto ">
            DES PROFESSIONNELS
          </h2>
        </div>
        <div className="flex my-5">
          <h1
            style={{ color: "#334b35" }}
            className="m-auto font-bold lg:text-5xl text-3xl text-center"
          >
            Rencontrez Nos agriculteurs
          </h1>
        </div>
      </div>

      <div className="flex lg:space-x-5 md:space-x-4 sm:space-x-0 lg:px-40 px-5 mt-10 flex-wrap justify-center">
        {teams?.map(({ src, name, titre, id }) => (
          <figure key={id}>
            {/* <CldImage
              style={{
                height: "400px",
              }}
              className="rounded-xl"
              src={src}
              width={1000}
              height={2166}
              alt="fermier"
            /> */}

            <Image
              className="rounded"
              style={{
                height: "400px",
              }}
              src={`/${src}.jpg`}
              width={300}
              height={270}
              alt="fermier"
            />
            <div className="mt-4 flex flex-col ">
              <h2 style={{ color: "#687469" }} className="m-auto">
                {titre}
              </h2>
              <h1
                style={{ color: "#334b35" }}
                className="m-auto text-xl font-bold mb-10 lg:mb-0"
              >
                {name}
              </h1>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
