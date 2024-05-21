"use client";
import Link from "next/link";
import { Image, Button } from "@nextui-org/react";

export default function OurService() {
  return (
    <>
      <div className="flex flex-col p-14 bg-zinc-800">
        <div className="w-full flex flex-col justify-center items-center pb-8">
          <p className="text-title">
            Our <span className="text-red-600">Service</span>
          </p>
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="card w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img src="/image/pagarBetonService.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pagar Panel Beton</h2>
              <p>Rp. 110.000</p>
              <div className="card-actions justify-end">
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="card w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img src="/image/pagarBetonService.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pagar Panel Beton</h2>
              <p>Rp. 110.000</p>
              <div className="card-actions justify-end">
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="card w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img src="/image/pagarBetonService.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pagar Panel Beton</h2>
              <p>Rp. 110.000</p>
              <div className="card-actions justify-end">
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="card w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img src="/image/pagarBetonService.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pagar Panel Beton</h2>
              <p>Rp. 110.000</p>
              <div className="card-actions justify-end">
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="card w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img src="/image/pagarBetonService.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pagar Panel Beton</h2>
              <p>Rp. 110.000</p>
              <div className="card-actions justify-end">
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
