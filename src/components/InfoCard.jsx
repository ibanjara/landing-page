import '../App.css';

export const InfoCard = ({title, image, desc}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg justify-evenly text-center shadow-lg glow-on-hover bg-white mt-8 transition-transform transform hover:scale-105">
    <img src={image} className='w-[60%] self-center'></img>
      <h1 className="text-4xl text-blue-800 font-bold mb-4">{title}</h1>
      <hr className="border-t border-gray-400 mb-4" />
      <p class="text-black px-3">{desc}</p>
      <a className="bg-blue-700 hover:bg-blue-400 text-white font-semibold hover:text-white py-2 px-4 mt-4 w-[50%] self-center rounded mb-3" href="#">
        Learn More
      </a>
    </div>
  )
}
