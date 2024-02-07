"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { CldVideoPlayer, CldImage } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="relative lg:mb-36">
      <div className={`md:z-10 ${styles.frame}`}></div>
      <div className={styles.frameYellow}></div>
      <div className={styles.frameGreen}></div>

      <div className={`lg:mx-40 md:mx-14 mx-5 ${styles.size}`}>
        <div className={`lg:flex ${styles.card}`}>
          <div className={` lg:w-1/2 lg:mt-28 md:w-full z-10 ${styles.colo}`}>
            <div className="">
              {/* <CldImage
                className={`md:z-30 ${styles.img}`}
                style={{
                  maxWidth: "100%",
                  width: "550px",
                  height: "auto",
                  borderRadius: "10px 10px 10px 0px",
                  boxShadow: "none",
                }}
                src="rng/lx9vriqwo3y17bhuyjmg"
                width="1000"
                height="1333"
                alt="mais"
              /> */}
            </div>
            <Image
              className={`md:z-1 ${styles.img}`}
              style={{
                position: "",
                maxWidth: "100%",
                width: "550",
                height: "250",
                borderRadius: "10px 10px 10px 0px",
                backgroundRepeat: "no-repeat",
                boxShadow: "none",
              }}
              src="/mais.jpg"
              height="700"
              width={400}
              alt="mais"
            />
            <div className={styles.columns}>
              {/* <CldImage
                className="w-1/4"
                src="rng/qtzod7nadagdqesajy4v"
                width="250"
                height="250"
                alt="pot de fleur"
              /> */}
              <div className="border-l pl-6 text-xl text-white">
                <div className="lg:text-4xl text-xl">87,500 </div>

                <div className="mt-4 text-md">Projet terminé avec succès</div>
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 lg:mt-36 lg:mt-40 mt-40 ${styles.colo2}`}
          >
            {/* <CldImage
              style={{ width: "85px", height: "70px", borderRadius: "50%" }}
              src="rng/va5oxgmmwb2qrgloonz8"
              width="250"
              height="250"
              alt="rnglogo"
            /> */}
            <Image src="/rng.jpeg" width={85} height={85} alt="rnglogo" />
            <h2
              className="card-title uppercase mb-4"
              style={{ color: "#687469" }}
            >
              A propos de nous
            </h2>
            <h1
              className="lg:text-4xl text-3xl font-bold mb-9"
              style={{ color: "#334b35" }}
            >
              NOUS ADOPTONS UNE AGRICULTURE PUR ET FORME BIOLOGIQUE
            </h1>
            <h2
              className="mb-8 lg:text-2xl text-xl font-bold"
              style={{ color: "#6d8c54" }}
            >
              Nous sommes leader sur le marché agricole
            </h2>

            <div
              className="lg:text-xl text-3md text-justify"
              style={{ color: "#687469" }}
            >
              Bienvenue dans le monde magique de RNG Agriculture, où nous
              exploitons le pouvoir de l'agriculture biologique pour faire
              prospérer la planète. Nos solutions respectueuses de
              l'environnement sont conçues pour améliorer les pratiques
              agricoles durables au profit des agriculteurs et de
              l'environnement. En plongeant dans le domaine captivant de la
              bioagriculture, RNG révolutionne le jeu agricole. Nos techniques
              de pointe redéfinissent des pratiques séculaires et les
              transforment en révolutionnaires visant à créer un monde plus vert
              et plus sain.
            </div>
            <div className=" mt-8">
              <div className="flex flex-wrap md:flex-nowrap">
                <div
                  className=" w-full md:w-1/2  relative"
                  style={{ display: "block" }}
                >
                  {/* <CldImage
                    className={`${styles.fond}`}
                    style={{
                      borderRadius: "10px",
                      height: "110px",
                    }}
                    src="rng/ho43wipkcy8xledwxso5"
                    width="190"
                    height="290"
                    alt="ferme"
                  /> */}

                  <Image
                    src="/agri1.jpg"
                    style={{
                      borderRadius: "10px",
                      height: "110px",
                    }}
                    width="190"
                    height="290"
                    alt="ferme"
                  />
                  <FontAwesomeIcon
                    className={`${styles.play} cursor-pointer text-yellow-300 hover:text-green-600 bg-green-600 hover:bg-white`}
                    onClick={() => {
                      setToggle(true);
                      document.getElementById("my_modal_1")?.showModal();
                    }}
                    icon={faCirclePlay}
                    beat
                    // style={{
                    //   fontSize: "57px",
                    //   position: "absolute",
                    //   right: "149px",
                    //   top: "26px",
                    //   borderRadius: "50%",
                    // }}
                  />

                  <div className={styles.frameYellow2}></div>
                </div>
                <div className={` w-full md:w-2/3 `}>
                  <h2
                    className="text-md uppercase"
                    style={{ color: "#687469" }}
                  >
                    Regarder notre video
                  </h2>
                  <div
                    className=" text-xl font-bold"
                    style={{ color: "#334b35" }}
                  >
                    Nous sommes en total synergie avec notre environement
                  </div>
                </div>
              </div>
              <button
                className="mt-8 hover:text-white text-green-600 bg-yellow-300 hover:bg-green-600"
                style={{
                  // backgroundColor: "#f1cf69",
                  // color: "#6d8c54",
                  fontWeight: "bold",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                DÉCOUVRIR PLUS
              </button>
              {toggle && (
                <dialog id="my_modal_1" className="modal">
                  <div
                    className={`${styles.movie}`}
                    style={{ width: "1000px" }}
                  >
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          onClick={() => setToggle(false)}
                          className={`text-white font-bold text-4xl ${styles.croix}`}
                        >
                          X
                        </button>
                      </form>
                    </div>
                    <div className="w-full">
                      <CldVideoPlayer
                        id="ferme"
                        width="1080"
                        height="607"
                        src="videos/zbyokvg3qyd4qdujrjk9"
                        // transformation={{
                        //   width: 500,
                        //   height: 500,
                        //   crop: "fill",
                        //   gravity: "auto",
                        // }}
                      />
                    </div>
                  </div>
                </dialog>
              )}
            </div>
          </div>
        </div>
        {/* <div className={styles.headerImage}></div> */}
      </div>
    </div>
  );
}
