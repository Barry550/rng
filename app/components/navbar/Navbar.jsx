"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  faMagnifyingGlass,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const links = [
    {
      link: "/blogs",
      name: "blogs",
    },

    {
      link: "/about",
      name: "about",
    },

    {
      link: "/contact",
      name: "contact",
    },

    {
      link: "/services",
      name: "services",
    },

    {
      link: "/store",
      name: "store",
    },

    {
      link: "/projet",
      name: "projet",
    },
  ];

  return (
    <div>
      <div className={`px-14 flex ${styles.nav}`}>
        <div className="p-3">
          Bienvenue sur le site de la ferme de Rema Nea Ko Ngalou
        </div>
        <div className="ml-10 p-3" style={{ background: "#eceae0" }}>
          <FontAwesomeIcon
            style={{ margin: "0px 20px", fontSize: "20px" }}
            icon={faFacebook}
          />
          <FontAwesomeIcon
            style={{ margin: "0px 20px", fontSize: "20px" }}
            icon={faTwitter}
          />
          <FontAwesomeIcon
            style={{ margin: "0px 20px", fontSize: "20px" }}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            style={{ margin: "0px 20px", fontSize: "20px" }}
            icon={faLinkedin}
          />
        </div>
        <div className=" p-3 ml-auto">
          <FontAwesomeIcon
            className="text-green-600 mr-2"
            icon={faEnvelope}
            style={{ fontSize: "20px" }}
          />{" "}
          rng6059@gmail.com
        </div>
        <div className="p-3">
          <FontAwesomeIcon
            className="text-green-600 mr-2"
            icon={faClock}
            style={{ fontSize: "20px" }}
          />{" "}
          Mon - Sat 8:00 - 6:30, Sunday - CLOSED
        </div>
      </div>
      <nav className={`w-full bg-white shadow`} style={{ zIndex: 1 }}>
        <div className="justify-between md:items-center md:flex md:px-8 border-b">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* <CldImage
              style={{ width: "85px", height: "70px", borderRadius: "50%" }}
              src="rng/va5oxgmmwb2qrgloonz8"
              width="250"
              height="250"
              alt="rnglogo"
            /> */}

              <ul>
                <li>
                  <Link href="/">
                    <Image
                      src="/rng.jpeg"
                      width={95}
                      height={95}
                      alt="rnglogo"
                    />
                  </Link>
                </li>
              </ul>

              <div className="md:hidden mr-4">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center ml-5 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {links.map(({ link, name }) => (
                  <li
                    key={name}
                    className="text-black hover:text-green-600 hover:underline"
                  >
                    <Link className="text-xl" href={link}>
                      <>{name}</>
                    </Link>
                  </li>
                ))}

                <li>
                  <FontAwesomeIcon
                    className="text-xl hover:text-green-600"
                    icon={faMagnifyingGlass}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
