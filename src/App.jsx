import logo from './assets/logo.png'
import scan from './assets/scan.svg'
import news from './assets/imagen1.png'
import impresora from './assets/impresora.png'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import './App.css';
import { InfoSection } from './components/InfoSection'
//bg-gradient-to-r from-cyan-500 to-blue-500
function App() {
  const particles = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const handleScroll = () => {
    const element = document.getElementById('thanks'); // Reemplaza 'thanks' con el ID del elemento al que deseas desplazarte
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className=''>
      <div className='w-full flex flex-wrap justify-between items-center p-6 fixed z-30 bg-gray-900 text-white'>
  <div className='flex items-center'>
    <img src={logo} className='w-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' alt="Logo"></img>
    <p className='text-2xl ml-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'><strong>PrintHub</strong></p>
  </div>
  <div className="block lg:hidden">
    {/* Icono de hamburguesa para pantallas pequeñas */}
    <button id="burger-icon" className="text-white focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  <div className="hidden lg:flex lg:items-center lg:w-auto">
    <ul className='grid grid-cols-3 lg:grid-cols-none lg:flex'>
      <li><a href="" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Scan</a></li>
      <li><a href="" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Shop</a></li>
      <li><a href="" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>About</a></li>
    </ul>
  </div>
  <div className="hidden lg:flex lg:justify-end">
    <button className="bg-blue-700 text-white px-4 py-2 rounded-md mx-2 transition duration-300 transform hover:scale-105">
      <i className="fas fa-user-plus mr-2"></i>
      Sign Up
    </button>
    <button className="bg-white text-blue-700 px-4 py-2 rounded-md transition duration-300 transform hover:scale-105">
      <i className="fas fa-sign-in-alt mr-2"></i>
      Login
    </button>
  </div>
</div>
   
      <div className="w-full lg:h-[1150px] bg-gradient-to-r from-blue-900 to-blue-700 flex relative flex-col justify-center items-center">
      <Particles

      className='relative'
      id="tsparticles"
      init={particles}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 0
        },
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "square",
                "options": {
                    "sides": 2
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 3,
                    "sync": false
                }
            },
            
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "top",
                "random": false,
                "straight": true,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        
        "retina_detect": true,
        
    }}
    />
        <div className='flex flex-col lg:flex-row content-center justify-evenly w-full'>
    <div className='flex flex-col self-center text-center mt-[150px] lg:mt-0'>
      <p className='text-white animate-heartbeat text-3xl lg:text-5xl mb-2 lg:mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        SCAN AND PRINT ANYTHING <strong className="text-7xl block inline"><br></br>RIGHT NOW</strong>
      </p>
      <p className='text-white text-base lg:text-xl mt-2 lg:mt-5 mb-4 lg:w-2/3 self-center'>
        Ever wanted to have a 3D piece of anything? With just a video we can make that happen!
      </p>
      <button className="bg-blue-500 text-black font-bold py-2 px-7 glow-on-hover w-[220px] mt-4 self-center flex items-center justify-center">
  <img src={scan} className='w-[15%] mr-5' alt="Scan Icon" />
  <span>SCAN</span>
</button>

    </div>
    
    <img src={impresora} className='self-center transition duration-300 transform hover:scale-105 mt-7 w-[30%] lg:w-[25%]'></img>
  </div>

  <div className="animate-bounce mt-[50px] lg:mt-[100px] bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 self-center ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
    <a href="#thanks" onClick={handleScroll}>
      <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>
  </div>

  <svg data-name="Layer 1" className="rotate-180 bottom-0 absolute bg-transparent fill-[#d7dbdf] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
  </svg>
</div>
    <div id="thanks" className='pt-[150px]'>
        <p className='text-5xl text-center text-black relative z-10'>WHY 3D PRINTING?</p>
        <InfoSection></InfoSection>
    </div>

<div class="container mx-auto px-4 py-12 lg:py-16 text-center bg-gray-400 rounded shadow-2xl mt-8 mb-7">
    <h1 class="text-3xl lg:text-4xl font-bold mb-6 z-10 relative">Unlock Premium Features</h1>
    <p class="text-base lg:text-lg mb-8 z-10 relative">Upgrade to our premium membership for an enhanced experience.</p>

    <div class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 lg:p-8 w-full lg:w-80 z-10">
            <h2 class="text-xl lg:text-2xl font-bold mb-4">Basic plan</h2>
            <p class="text-gray-600">Access essential features</p>
            <p class="text-xl lg:text-3xl font-bold mt-4">FREE</p>
            <button class="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full">Sign up</button>
        </div>

        <div class="bg-blue-800 text-white rounded-lg shadow-md p-6 lg:p-8 w-full lg:w-80 z-10">
            <h2 class="text-xl lg:text-2xl font-bold mb-4">Premium Plan</h2>
            <p class="text-gray-300">Unlock all features</p>
            <p class="text-xl lg:text-3xl font-bold mt-4">$19.99/month</p>
            <button class="bg-white text-blue-800 px-6 py-2 mt-4 rounded-full">Select</button>
        </div>
    </div>
</div>


    <section class="pb-16 pt-4">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Latest News</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               
                <div class="bg-white p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105 glow-on-hover ">
                    <h3 class="text-xl text-black font-bold mb-2">PrintHub Launches New 3D Printing Service</h3>
                    <p class="text-gray-500 mb-2">November 17, 2023</p>
                    <img class="mx-auto" src={news}></img>
                    <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla ut odio ac tristique.</p>
                </div>

            
                <div class="bg-white p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105 glow-on-hover ">
                    <h3 class="text-xl text-black font-bold mb-2">3D Printing Technology Advancements</h3>
                    <p class="text-gray-500 mb-2">November 15, 2023</p>
                    <img class="mx-auto" src={news}></img>
                    <p class="text-gray-700">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>

                
                <div class="bg-white p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105 glow-on-hover ">
                    <h3 class="text-xl text-black font-bold mb-2">New Features Added to PrintHub Platform</h3>
                    <p class="text-gray-500 mb-2">November 12, 2023</p>
                    <img class="mx-auto" src={news}></img>
                    <p class="text-gray-700">Sed auctor odio et felis aliquet, vel interdum libero feugiat. Ut ut nisl sit amet turpis fermentum eleifend.</p>
                </div>
            </div>
        </div>
    </section>
    <footer className="bg-gray-900 text-white p-6 lg:p-10">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
            <p className="text-sm">
                © 2023 PrintHub. All rights reserved. Connect with us on:
                <a href="https://tiktok.com/@printhubeus" className="text-black-500 mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://twitter.com/tu_cuenta_de_twitter" className="text-blue-400 mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/tu_cuenta_de_instagram" className="text-pink-500 mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </p>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-8">
                <div className="mx-4">
                    <a className="text-lg font-bold mb-2 lg:mb-4" href="#!">
                        Scan
                    </a>
                </div>
                <div className="mx-4">
                    <a className="text-lg font-bold mb-2 lg:mb-4" href="#!">
                        Shop
                    </a>
                </div>
                <div className="mx-4">
                    <a className="text-lg font-bold mb-2 lg:mb-4" href="#!">
                        About
                    </a>
                </div>
                <div className="mx-4">
                    <a className="text-lg font-bold mb-2 lg:mb-4" href="#!">
                        Shop
                    </a>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-1/3">
            <form className="max-w-lg mx-auto">
            <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="subject"
                        type="text"
                        placeholder="Enter your subject"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="description"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</footer>



      </div>
    </>
  )
}

export default App
