import { IoIosArrowForward } from "react-icons/io";

export function Card({
  onclick,
  inputValue,
  firstName,
  lastName,
  userName,
  borderColor,
  borderColor2,
  borderColor3,
  inputChange,
  buttonColor,
}) {
  const Validate = () => {
    if (lastName === " " && firstName === " " && userName === " ") {
      return false;
    }
    return true;
  };
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
          <p className="text-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
            First name *
          </p>
          <input
            onChange={inputChange}
            value={inputValue}
            className={`w-[410px] h-11 border-[#CBD5E1] outline-none ${borderColor} border-[1px] border-solid rounded-md pl-2`}
            placeholder="First name"
            id="firstName"
          />
          <p className="text-[#E14942] text-[14px]">{firstName}</p>

          <p className="text-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Last name *
          </p>
          <input
            className={`w-[410px] h-11 border-[#CBD5E1] outline-none ${borderColor2} border-[1px] border-solid rounded-md pl-2`}
            placeholder="Last name"
            onChange={inputChange}
            value={inputValue}
            id="lastName"
          />
          <p className="text-[#E14942] text-[14px]">{lastName}</p>

          <p className="text-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Username *
          </p>
          <input
            className={`w-[410px] h-11 border-[#CBD5E1] outline-none ${borderColor3} border-[1px] border-solid rounded-md pl-2`}
            placeholder="Username"
            onChange={inputChange}
            value={inputValue}
            id="userName"
          />
          <p className="text-[#E14942] text-[14px]">{userName}</p>

          <button
            className={`w-[410px] h-11 ${buttonColor} flex justify-center gap-2 items-center rounded-md mt-[120px]`}
            onClick={onclick}
            disabled={Validate()}
          >
            Continue 1/3
            <IoIosArrowForward className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
