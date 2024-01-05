import { CarProps } from "@/types";
import React from "react";

interface CarDetailsPros {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsPros) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
