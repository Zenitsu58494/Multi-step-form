import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function Card4({}) {
  return (
    <>
      <div className="w-[480px] h-[200px] bg-white rounded-[8px]">
        <div className="ml-[30px] mt-[30px]">
          <div className="w-[400px]  ">
            <img src="/Main2.png" width={60} height={60}></img>
            <h2 className="text-[26px] font-bold w-[200px]">
              You're all set 🔥
            </h2>
            <p className="text-[#8E8E8E] text-[18px]">
              We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
