"use client";
import Image from "next/image";
import { Card } from "./Components/StepOne";
import { useState } from "react";
import { Card2 } from "./Components/StepTwo";
import nextConfig from "../../next.config.mjs";
import { Card3 } from "./Components/StepThree";


export default function Home() {
  const [step, setStep] = useState(1);
  const [inputValue,setValue]=useState({})




  const inputChange=(e)=>{
    const value=e.target.value
    setValue(value)

  }
  console.log(inputValue)
  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        {step == 1 && <Card onclick={nextStep} value={inputChange}/>}
        {step == 2 && <Card2 onclick={nextStep} Back={backStep} />}
        {step == 3 && <Card3 onclick={nextStep} Back={backStep} />}
      </div>
    </>
  );
}
