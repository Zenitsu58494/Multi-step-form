export function Input({inputChange,inputValue,borderColor,error}){
    return(
        <>
        <p className="text-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
            First name *
          </p>
          <input
            onChange={inputChange}
            value={inputValue}
            className={`w-[410px] h-11 border-[#CBD5E1] outline-none ${borderColor} border-[1px] border-solid rounded-md pl-2`}
            placeholder="First name"
          />
        <p className="text-[#E14942] text-[14px]">{error}</p>
        </>
    )
}