"use client";
import { useState } from "react";
import { Input } from "./Input";

export function Card({ onclick }) {
  const [inputValue, setInputValue] = useState(""); 
  const [error, setError] = useState(""); 
  const [borderColor, setBorderColor] = useState("focus:border-[#E14942]"); 


  const inputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      setError("First name cannot be empty");
      setBorderColor("border-[#E14942]");
    } else if(!(value[0]>='A' && value[0]<='Z')){
      setError("First name must be start with uppercase")
    } else if(checkNumber(value)) {

      setError("First name can not contain number")
    }
    else {
      setError(""); 
      setBorderColor("border-[#CBD5E1]");
    }
  };
  const checkNumber=(string)=>{
    for(let i=0;i<string.length;i++){
      if(string[i]>=0 && string[i]<=9){
        return true
      }
    }
    return false
  }

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
      <div className="ml-[30px] mt-[30px]">
        <div className="w-[400px]">
          <img src="/Main2.png" width={60} height={60} alt="Logo" />
          <h2 className="text-[26px] font-bold w-[150px]">Join Us! 😎</h2>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </p>
        </div>

        <div>
      
          <Input inputChange={inputChange}
          inputValue={inputValue}
          borderColor={borderColor}
         error={error}
          />

          
<p className="text-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Last name *
          </p>
          <input
            className="w-[410px] h-11 border-[#CBD5E1] border-[1px] border-solid rounded-md pl-2"
            placeholder="Last name"
          />

        
          <p className="text-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Username *
          </p>
          <input
            className="w-[410px] h-11 border-[#CBD5E1] border-[1px] border-solid rounded-md pl-2"
            placeholder="Username"
          
          />

        
          <button
            className="w-[410px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md mt-[120px]"
            onClick={onclick}
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
