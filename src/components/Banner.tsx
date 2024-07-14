import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className='text-white max-w-[800px] w-full h-screen mt-[-96px] mx-auto flex flex-col justify-center items-center'>
        <p className='uppercase text-[#00df9a] text-bold text-xl p-2 '>Growing with data analytics</p>
        <p className='md:text-7xl sm:text-6xl font-bold md:py-5'>Grow with data</p>
        <div className="flex items-center justify-center ">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast,flexible financing for </p>
            <ReactTyped className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2" strings={[ "BTC", "CTC", "SAAS"]}  typeSpeed={140} backSpeed={150}  loop/>
        </div>
        <p className=" text-center text-md py-5 text-gray-700 font-bold md:text-xl">Monitor your data analytical to increase revenue for BTC,CTC,& SAAS platforms.</p>
         <button className="rounded-md my-6 py-2 w-[200px]  text-black font-medium bg-[#00df9a]">Get Started</button>
    </div>
  )
}

export default Banner