"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { CldImage } from "next-cloudinary";
import styles from "./testi.module.css";

export default function Testimonial() {
  const images = ["/cow.jpg", "/egg.jpg", "/mais.jpg"];

  const cards = [
    {
      id: 0,
      src: "/cow.jpg",
      name: "jean Bourgoi",
      slid: "slid0",
    },
    {
      id: 1,
      src: "/egg.jpg",
      name: "jorge manu",
      slid: "slid1",
    },
    {
      id: 2,
      src: "/mais.jpg",
      name: "darty Bourgoi",
      slid: "slid2",
    },
    {
      id: 3,
      src: "/fish.jpg",
      name: "aliou bah",
      slid: "slid3",
    },
    {
      id: 4,
      src: "/cow2.jpg",
      name: "moussa sow",
      slid: "slid4",
    },
  ];

  return (
    <div className={`py-20 lg:px-10 px-5 ${styles.testimonials}`}>
      <div>
        {/* <CldImage
          className={`mb-7`}
          style={{ width: "60px", height: "50px", borderRadius: "50%" }}
          src="rng/va5oxgmmwb2qrgloonz8"
          width={877}
          height={614}
          alt="rnglogo"
        /> */}

        <Image
          className=" mt-4 m-auto lg:m-0"
          style={{ width: "75px", height: "70px", borderRadius: "50%" }}
          src="/rng.jpeg"
          width={85}
          height={85}
          alt="rnglogo"
        />
        <h3
          style={{ color: "#687469" }}
          className="lg:text-xl lg:text-left text-center text-md py-5"
        >
          OUR TESTIMONIALS
        </h3>
        <h1
          className="lg:text-5xl text-2xl text-center lg:text-left lg:w-80 w-full"
          style={{ color: "#334b35" }}
        >
          What They're Talking About RNG
        </h1>
        <div className="mt-10 space-x-2">
          {/* <button
            onClick={() => {
              if (currentImage >= 1)
                setCurrentImage(
                  (currentImage) => (currentImage - 1) % cards.length
                );
            }}
            className={`btn btn-circle`}
          >
            <a href={`#slid${currentImage && currentImage}`}>
              {" "}
              ❮ {currentImage}
            </a>
          </button> */}
          {/* <button
            onClick={() => {
              setCurrentImage(
                (currentImage) => (currentImage + 1) % cards.length
              );
            }}
            className={`btn btn-circle`}
          >
            <a href={`#slid${currentImage && currentImage}`}>
              {currentImage} ❯
            </a>
          </button> */}
        </div>
      </div>

      {/* <div className={styles.carousel}>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <Image
              className={styles.image}
              src={images[currentImage]}
              alt={`Slide ${currentImage}`}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div> */}

      <div
        className={`carousel carousel-center p-14 space-x-8 lg:w-3/5 relative`}
      >
        {cards?.map((card, index) => (
          <div
            key={card.id}
            id={card.slid}
            className="carousel-item border rounded-xl "
          >
            <div className="card lg:w-96 w-80 bg-base-100 bg-white">
              <Image
                src={card.src}
                style={{
                  width: "101px",
                  height: "101px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "40px",
                  top: "-50px",
                }}
                width="1000"
                height="300"
                alt="poulet"
                className="absolute bottom-72 left-10"
              />
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#44511f", position: "absolute", top: "-20px" }}
                className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full p-2 text-yellow"
              />
              <div className="card-body mt-10">
                <h2
                  style={{ color: "#6d8c54" }}
                  className="card-title text-2xl font-bold"
                >
                  {card.name}
                </h2>
                <div style={{ color: "#687469" }} className="text-2xl">
                  If a dog chews shoes whose shoes does he choose Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Rerum, illo
                  nesciunt quae commodi labore autem optio. Voluptatum corrupti
                  voluptatibus lore
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div id="slid2" className="carousel-item border rounded-xl">
          <div className="card w-96 bg-base-100 bg-white">
            <Image
              src="/agriculture.jpg"
              style={{
                width: "101px",
                height: "101px",
                borderRadius: "50%",
                position: "absolute",
                left: "40px",
                top: "-50px",
              }}
              width="1000"
              height="300"
              alt="poulet"
              className="absolute bottom-72 left-10"
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#44511f", position: "absolute", top: "-20px" }}
              className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full div-2 text-yellow"
            />
            <div className="card-body mt-10">
              <h2 className="card-title">jean Bourgoi!</h2>
              <div>
                If a dog chews shoes whose shoes does he choose Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Rerum, illo
                nesciunt quae commodi labore autem optio. Voluptatum corrupti
                voluptatibus
              </div>
            </div>
          </div>
        </div>

        <div id="slid2" className="carousel-item border rounded-xl">
          <div className="card w-96 bg-base-100 bg-white">
            <Image
              src="/agriculture.jpg"
              style={{
                width: "101px",
                height: "101px",
                borderRadius: "50%",
                position: "absolute",
                left: "40px",
                top: "-50px",
              }}
              width="1000"
              height="300"
              alt="poulet"
              className="absolute bottom-72 left-10"
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#44511f", position: "absolute", top: "-20px" }}
              className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full div-2 text-yellow"
            />
            <div className="card-body mt-10">
              <h2 className="card-title">jean Bourgoi!</h2>
              <div>
                If a dog chews shoes whose shoes does he choose Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Rerum, illo
                nesciunt quae commodi labore autem optio. Voluptatum corrupti
                voluptatibus
              </div>
            </div>
          </div>
        </div>
        <div id="slid3" className="carousel-item border rounded-xl">
          <div className="card w-96 bg-base-100 bg-white">
            <Image
              src="/agriculture.jpg"
              style={{
                width: "101px",
                height: "101px",
                borderRadius: "50%",
                position: "absolute",
                left: "40px",
                top: "-50px",
              }}
              width="1000"
              height="300"
              alt="poulet"
              className="absolute bottom-72 left-10"
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#44511f", position: "absolute", top: "-20px" }}
              className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full div-2 text-yellow"
            />
            <div className="card-body mt-10">
              <h2 className="card-title">jean Bourgoi!</h2>
              <div>
                If a dog chews shoes whose shoes does he choose Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Rerum, illo
                nesciunt quae commodi labore autem optio. Voluptatum corrupti
                voluptatibus
              </div>
            </div>
          </div>
        </div>
        <div id="slid4" className="carousel-item border rounded-xl">
          <div className="card w-96 bg-base-100 bg-white">
            <Image
              src="/agriculture.jpg"
              style={{
                width: "101px",
                height: "101px",
                borderRadius: "50%",
                position: "absolute",
                left: "40px",
                top: "-50px",
              }}
              width="1000"
              height="300"
              alt="poulet"
              className="absolute bottom-72 left-10"
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#44511f", position: "absolute", top: "-20px" }}
              className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full p-2 text-yellow"
            />
            <div className="card-body mt-10">
              <h2 className="card-title">jean Bourgoi!</h2>
              <p>
                If a dog chews shoes whose shoes does he choose Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Rerum, illo
                nesciunt quae commodi labore autem optio. Voluptatum corrupti
                voluptatibus
              </p>
            </div>
          </div>
        </div>
        <div id="slid5" className="carousel-item border rounded-xl">
          <div className="card w-96 bg-base-100 bg-white">
            <Image
              src="/agriculture.jpg"
              style={{
                width: "101px",
                height: "101px",
                borderRadius: "50%",
                position: "absolute",
                left: "40px",
                top: "-50px",
              }}
              width="1000"
              height="300"
              alt="poulet"
              className="absolute bottom-72 left-10"
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#44511f", position: "absolute", top: "-20px" }}
              className="fa-x absolute left-32 bottom-80 bg-yellow-200 rounded-full p-2 text-yellow"
            />
            <div className="card-body mt-10">
              <h2 className="card-title">jean Bourgoi!</h2>
              <p>
                If a dog chews shoes whose shoes does he choose Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Rerum, illo
                nesciunt quae commodi labore autem optio. Voluptatum corrupti
                voluptatibus lore
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
