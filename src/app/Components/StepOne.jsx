export function Card({ onclick }) {
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
              First name *
            </p>
            <input
              className="w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
              placeholder="Firstname"
            ></input>
            <br></br>
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
              Last name *
            </p>
            <input
              className="w-[410px] h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
              placeholder="Firstname"
            ></input>
            <br></br>
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
              Username *
            </p>
            <input
              className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
              placeholder="Firstname"
            ></input>
            <button
              className="w-[410px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md mt-[120px]"
              onClick={onclick}
            >
              Continue 1/3{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
