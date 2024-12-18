import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function Card2({
  onclick,
  Back,
  email,
  number,
  password,
  confirmPassword,
  inputChange,
  bordercolor4,
  bordercolor5,
  bordercolor6,
  bordercolor7,
}) {
  const Validate = () => {
    if (
      email === " " &&
      number === " " &&
      password === " " &&
      confirmPassword === " "
    ) {
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
        <div className="ml-[30px] mt-[30px]">
          <div className="w-[400px]  ">
            <img src="/Main2.png" width={60} height={60}></img>
            <h2 className="text-[26px] font-bold w-[150px]">Join Us! 😎</h2>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>
          <div>
            <form action={"/action_page.php"}>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
                Email *
              </p>
              <input
                id="email"
                onChange={inputChange}
                name="emails"
                type="email"
                className={`w-[410px] h-11 border-solid outline-none ${bordercolor4}  border-[1px] rounded-md  pl-2`}
                placeholder="Email"
              ></input>
              <br></br>
              <p className="text-[#E14942] text-[14px]">{email}</p>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
                Phone Number *
              </p>
              <input
                type="tel"
                onChange={inputChange}
                id="number"
                className={`w-[410px] h-11 border-solid outline-none ${bordercolor5}  border-[1px] rounded-md  pl-2`}
                placeholder="Phone Number"
              ></input>
              <br></br>
              <p className="text-[#E14942] text-[14px]">{number}</p>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Password *
              </p>
              <input
                type="password"
                onChange={inputChange}
                id="password"
                className={`w-[410px] h-11 border-solid outline-none ${bordercolor6}  border-[1px] rounded-md  pl-2`}
                placeholder="Password"
              ></input>
              <br></br>
              <p className="text-[#E14942] text-[14px]">{password}</p>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Confirm *
              </p>
              <input
                type="password"
                onChange={inputChange}
                id="confirmPassword"
                className={`w-[410px] h-11 border-solid 
                 outline-none ${bordercolor7}  border-[1px] rounded-md  pl-2`}
                placeholder="Repeat Your Password"
              ></input>
              <p className="text-[#E14942] text-[14px]">{confirmPassword}</p>

              <div className="flex justify-center  gap-3 mt-[40px]">
                <button
                  onClick={Back}
                  className="w-[128px] h-11 bg-[#CBD5E1 gap-2 flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg "
                >
                  <IoIosArrowBack className="w-[18px] h-[18px]" />
                  Back
                </button>
                <button
                  type="Submit"
                  className="w-[280px] h-11 bg-[#D6D8DB] gap-2 flex justify-center items-center rounded-md "
                  onClick={onclick}
                  disabled={Validate()}
                >
                  Continue 2/3{" "}
                  <IoIosArrowForward className="w-[18px] h-[18px]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
