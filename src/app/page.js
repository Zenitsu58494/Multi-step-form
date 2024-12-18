"use client";
import Image from "next/image";
import { Card } from "./Components/StepOne";
import { useState } from "react";
import { Card2 } from "./Components/StepTwo";

import { Card3 } from "./Components/StepThree";

export default function Home() {
  const [step, setStep] = useState(1);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });
  const [borderColor, setBorderColor] = useState("focus:border-[#CBD5E1]");
  const [borderColor2, setBorderColor2] = useState("focus:border-[#CBD5E1]");
  const [borderColor3, setBorderColor3] = useState("focus:border-[#CBD5E1]");
  const [borderColor4, setBorderColor4] = useState("focus:border-[#CBD5E1]");
  const [borderColor5, setBorderColor5] = useState("focus:border-[#CBD5E1]");
  const [borderColor6, setBorderColor6] = useState("focus:border-[#CBD5E1]");
  const [borderColor7, setBorderColor7] = useState("focus:border-[#CBD5E1]");

  const inputChange = (e) => {
    const inputId = e.target.id;
    const newValues = { ...inputValue, [inputId]: e.target.value };
    setInputValue(newValues);
    console.log(newValues);

    if (e.target.value === "" && inputId === "firstName") {
      setError({ ...error, [inputId]: "it cannot be empty" });
      setBorderColor("border-[#E14942]");
    } else if (checkNumber(e.target.value) && inputId === "firstName") {
      setError({ ...error, [inputId]: "first name can not contain numbers" });
      setBorderColor("border-[#E14942]");
    } else if (
      !(e.target.value[0] >= "A" && e.target.value[0] <= "Z") &&
      inputId === "firstName"
    ) {
      setError({
        ...error,
        [inputId]: "first name must be start with uppercase",
      });
      setBorderColor("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "lastName") {
      setError({ ...error, [inputId]: "it cannot be empty" });
      setBorderColor2("border-[#E14942]");
    } else if (checkNumber(e.target.value) && inputId === "lastName") {
      setError({ ...error, [inputId]: "last name can not contain numbers" });
      setBorderColor2("border-[#E14942]");
    } else if (
      !(e.target.value[0] >= "A" && e.target.value[0] <= "Z") &&
      inputId === "lastName"
    ) {
      setError({
        ...error,
        [inputId]: "last name must be start with uppercase",
      });

      setBorderColor2("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "userName") {
      setError({ ...error, [inputId]: "it cannot be empty" });
      setBorderColor3("border-[#E14942]");
    } else if (checkNumber(e.target.value) && inputId === "userName") {
      setError({ ...error, [inputId]: "user name can not contain numbers" });
      setBorderColor3("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "email") {
      setError({ ...error, [inputId]: "email cannot be empty" });
      setBorderColor4("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "number") {
      setError({ ...error, [inputId]: "phone number cannot be empty" });
      setBorderColor5("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "password") {
      setError({ ...error, [inputId]: "password cannot be empty" });
      setBorderColor6("border-[#E14942]");
    } else if (e.target.value === "" && inputId === "confirmPassword") {
      setError({ ...error, [inputId]: "password cannot be empty" });
      setBorderColor7("border-[#E14942]");
    } else if (!checkNumber(e.target.value) && inputId === "number") {
      setError({ ...error, [inputId]: "you must write only number" });
    } else if (
      !(
        (e.target.value && inputId === "password") ===
        (e.target.value === "" && inputId === "confirmPassword")
      ) &&
      inputId === "confirmPassword"
    ) {
      setError({ ...error, [inputId]: "Your password don't match" });
    } else {
      setError({ ...error, [inputId]: " " });
      setBorderColor("border-[#CBD5E1]");
      setBorderColor2("border-[#CBD5E1]");
      setBorderColor3("border-[#CBD5E1]");
      setBorderColor4("border-[#CBD5E1]");
      setBorderColor5("border-[#CBD5E1]");
      setBorderColor6("border-[#CBD5E1]");
      setBorderColor7("border-[#CBD5E1]");
    }
  };
  const checkNumber = (string) => {
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= 0 && string[i] <= 9) {
        return true;
      }
    }
    return false;
  };
  const validate = () => {
    if (error === "") {
      return false;
    }
    return true;
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        {step == 1 && (
          <Card
            onclick={nextStep}
            value={inputValue}
            inputChange={inputChange}
            borderColor={borderColor}
            borderColor2={borderColor2}
            borderColor3={borderColor3}
            firstName={error.firstName}
            lastName={error.lastName}
            userName={error.userName}
            validate={validate}
          />
        )}
        {step == 2 && (
          <Card2
            onclick={nextStep}
            value={inputValue}
            Back={backStep}
            inputChange={inputChange}
            email={error.email}
            number={error.number}
            password={error.password}
            confirmPassword={error.confirmPassword}
            bordercolor4={borderColor4}
            bordercolor5={borderColor5}
            bordercolor6={borderColor6}
            bordercolor7={borderColor7}
            validate={validate}
          />
        )}
        {step == 3 && <Card3 onclick={nextStep} Back={backStep} />}
      </div>
    </>
  );
}
