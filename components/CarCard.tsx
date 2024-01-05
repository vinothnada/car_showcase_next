"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, make, model, transmission, year, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flext mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-start text-[14px] font-semibold">/ day</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          fill
          priority
          className="object-contain"
          alt="car modal"
        />
      </div>
      <div className="relative flex w-full mt-12">
        <div className="flex group-over:invisible w-full justify-between text-gray mr-2 ml-2">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={18}
              height={18}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/tire.svg" width={18} height={18} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/gas.svg" width={16} height={16} alt="gas" />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
