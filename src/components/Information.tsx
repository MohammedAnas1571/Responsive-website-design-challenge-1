

const Information = () => {
  return (
    <div className='w-full my-16 text-white'>
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3 px-4'>
            <div className='lg:col-span-2 my-4 '>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>
                    Wants tips &tricks optimize your flow
                </h1>
                <p>Signup our news letter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-center items-center w- full'>
                    <input type="text" placeholder='Enter your Email' className='rounded   p-3 w-full  '/>
                    <button className='rounded-md my-6 py-3 w-[200px] ml-3  text-black font-medium bg-[#00df9a]'>Notify me</button>

                </div>
                <p>We care about the protection of your data .Read our <span className='text-[#00df9a]'>Privacy Policies</span></p>
            </div>
          
        </div>
    </div>
    
  )
}

export default Information
