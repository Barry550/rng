import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl">Our Product</h1>
      <div className="flex justify-around flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl my-4">
          <figure>
            <Image
              style={{ width: "100", height: "100" }}
              src="/egg.jpg"
              height="300"
              width={500}
              alt="poulet"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">egg!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl my-4">
          <figure>
            <Image
              style={{ width: "100", height: "100" }}
              src="/fish.jpg"
              height="300"
              width={500}
              alt="poulet"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">fish!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl my-4">
          <figure>
            <Image
              style={{ width: "100", height: "100" }}
              src="/vegetable.jpg"
              height="300"
              width={500}
              alt="poulet"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">vegetables!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
