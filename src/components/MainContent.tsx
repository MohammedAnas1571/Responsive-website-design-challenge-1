const Main = () => {
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
        <div>
          <img className="w-[500px] mx-auto my-4" src="https://www.shutterstock.com/shutterstock/photos/1064355815/display_1500/stock-vector-web-development-concept-programming-and-coding-laptop-with-virtual-screens-on-white-background-1064355815.jpg" alt="Web Development Concept" />
        </div>
        <div className="flex flex-col justify-center md:mx-4 ">
          <p className="uppercase text-[#00df9a] font-bold">Data Analystic DashBoard</p>
          <p className="md:text-3xl sm:text-xl text-xl font-bold py-2">Manage Data analytical centerally</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique, tenetur veritatis illum itaque autem facere culpa consectetur harum earum adipisci commodi expedita? Repudiandae in, vero voluptatibus distinctio expedita ducimus?</p>
          <button className=" items-center rounded-md my-6 py-3 w-[200px] mx-auto text-[#00df9a] font-medium bg-black md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Main;
