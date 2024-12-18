import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function Card3({ onclick, Back }) {
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
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
              Email *
            </p>
            <input
              type="date"
              className="w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
              placeholder=""
            ></input>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="w-[410px] h-[200px] border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
            ></input>

            <div className="flex justify-center  gap-3 mt-[40px]">
              <button
                onClick={Back}
                className="w-[128px] h-11 bg-[#CBD5E1 gap-2 flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg "
              >
                <IoIosArrowBack className="w-[18px] h-[18px]" />
                Back
              </button>
              <button
                className="w-[280px] h-11 bg-[#D6D8DB] gap-2 flex justify-center items-center rounded-md "
                onClick={onclick}
              >
                Continue 3/3 <IoIosArrowForward className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
