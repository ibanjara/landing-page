import logo from './assets/logo.png'
import scan from './assets/scan.svg'
import news from './assets/imagen1.png'
import impresora from './assets/impresora.png'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import './App.css';
import { InfoSection } from './components/InfoSection'
import PrinterModel from './components/PrinterModel';
import NavBar from './components/NavBar';
import Carousel from "nuka-carousel"

import impresion1 from './assets/impresion1.jpg'
import impresion2 from './assets/impresion2.jpeg'
import impresion3 from './assets/impresion3.jpg'

//bg-gradient-to-r from-cyan-500 to-blue-500
function App() {
  const particles = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const handleScroll = () => {
    const element = document.getElementById('thanks'); // Reemplaza 'thanks' con el ID del elemento al que deseas desplazarte
    if (element) {
      element.style.transition = 'transform 0.5s ease-in-out'; // Ajusta la duración y la función de temporización según tus preferencias
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        element.style.transform = 'translateY(0)'; // Asegúrate de que el elemento tenga alguna propiedad de transformación para activar la transición
        element.style.transition = ''; // Restablecer la transición después del desplazamiento
      }, 500); // Ajusta el tiempo para que coincida con la duración de la transición
    }
  };
  
  

  return (
    <>
      <div className='overflow-hidden bg-gray-100'>
      
        <NavBar></NavBar>
      <div className="w-full lg:h-[1100px] bg-gradient-to-r from-blue-900 to-blue-700 flex relative flex-col justify-center items-center">
      <Particles
  className='relative'
  id="tsparticles"

  init={particles}

  options={{

    "fullScreen": {
        "enable": true,
        "zIndex": 0
    },    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
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
      <p className='text-white animate-heartbeat text-2xl lg:text-5xl mb-2 lg:mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        SCAN AND PRINT ANYTHING <strong className="text-4xl lg:text-7xl block inline"><br></br>RIGHT NOW</strong>
      </p>
      <p className='text-white text-base lg:text-xl mt-2 lg:mt-5 mb-4 lg:w-2/3 self-center'>
        Ever wanted to have a 3D piece of anything? With just a video we can make that happen!
      </p>
      <button className="bg-blue-500 text-black font-bold py-2 px-7 glow-on-hover w-[220px] mt-4 self-center flex items-center justify-center">
  <img src={scan} className='w-[15%] mr-5' alt="Scan Icon" />
  <span>SCAN</span>
</button>

    </div>
    
    <PrinterModel></PrinterModel>
  </div>

  <div className="animate-bounce mb-[50px] lg:mt-[100px] bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 self-center ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
    <a href="#thanks" onClick={handleScroll}>
      <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>
  </div>

  
</div>
    <div id="thanks" className='lg:pt-[50px] pt-[50px]'>
        <p className='text-4xl lg:text-5xl text-center text-blue-800 font-bold relative mb-6 z-10'>Why 3D Printing?</p>
        <InfoSection></InfoSection>

    </div>

    <div style={{ position: 'relative' }}>
  <div className='container mx-auto' style={{ position: 'relative' }}>
    <Carousel
      autoplay={true}
      cellAlign='center'
      wrapAround={true}
      disableEdgeSwiping={true}
      renderBottomCenterControls={() => null}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '10px',
            cursor: 'pointer',
            fontSize: '24px',
            color: 'white',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
          onClick={previousSlide}
        >
          {'<'}
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '10px',
            cursor: 'pointer',
            fontSize: '24px',
            color: 'white',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
          onClick={nextSlide}
        >
          {'>'}
        </button>
      )}
    >
      <img src={impresion1} className='sombra' style={{ width: '100%', height: '70%', display: 'block', marginTop: '80px' }} />
      <img src={impresion2} className='sombra' style={{ width: '100%', height: '70%', display: 'block', marginTop: '80px' }} />
      <img src={impresion3} className='sombra' style={{ width: '100%', height: '70%', display: 'block', marginTop: '80px' }} />
    </Carousel>
  </div>
</div>

    <div class="container mx-auto px-4 text-center bg-gray-100 rounded lg:mt-[-90px] mb-10">
    
    <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-blue-800">Choose Your Membership</h1>
    <p class="text-base lg:text-xl mb-8 text-gray-600">Enhance your experience with our membership plans.</p>

    <div class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 lg:p-8 w-full lg:w-100">
            <h2 class="text-xl lg:text-2xl font-bold mb-4 text-blue-800">Free Membership</h2>
            <p class="text-gray-600">Access essential features to get started</p>
            <ul class=" text-gray-600 mt-4">
                <li>Scan a video</li>
                <li>Access the marketplace</li>
                <li>Free support</li>
            </ul>
            <p class="text-xl lg:text-3xl font-bold mt-4 text-blue-800">FREE</p>
            <button class="bg-blue-800 text-white px-10 py-3 w-full mt-6 rounded-full">Sign up</button>
        </div>

        <div class="bg-blue-800 text-white rounded-lg shadow-md p-8 lg:p-14 w-full lg:w-100">
            <h2 class="text-xl lg:text-2xl font-bold mb-4">Premium Membership</h2>
            <p class="text-gray-300">Unlock all features for a premium experience</p>
            <ul class="text-gray-300 mt-4">
                <li>Full access to advanced features</li>
                <li>Exclusive content and updates</li>
                <li>Priority customer support</li>
            </ul>
            <p class="text-xl lg:text-3xl font-bold mt-4">$9.99/month</p>
            <button class="bg-white text-blue-800 px-10 w-full py-3 mt-6 rounded-full">Upgrade Now</button>
        </div>
    </div>
</div>



<div class="parallax-container parallax bg-cover bg-center" style={{backgroundImage: "url('https://png.pngtree.com/background/20230520/original/pngtree-various-3d-printed-shapes-are-arranged-on-a-blue-background-picture-image_2677016.jpg')"}}>
    <div class="flex flex-col md:flex-row lg:flex-row md:pt-[100px] lg:pt-[100px]">
        <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="p-6 text-white">
                <h2 class="text-6xl font-bold">PrintHub:</h2>
                <p class="text-4xl">A service that works for you.</p>
            </div>
        </div>

        <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="p-6 text-white">
                <ul class="list-none flex flex-col">
                    <li class="flex items-center mb-4 md:mr-4 lg:mr-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="white"></circle>
                                <path d="M13.6947 8.30762V16.0615H12.2547V9.515H10.6154V8.30762H13.6947Z" fill="#009EE0"></path>
                            </svg>
                        </span>
                        <span class='text-xl ml-2'>Tons of different pieces with variety.</span>
                    </li>

                    <li class="flex items-center mb-4 md:mr-4 lg:mr-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
                                <ellipse cx="11.6638" cy="12" rx="11.6638" ry="12" fill="white"></ellipse>
                                <path d="M14.3698 14.4923V15.7108H8.81426V14.7471L11.8074 11.8228C12.1447 11.4905 12.3708 11.2025 12.4857 10.9588C12.6077 10.7077 12.6687 10.4603 12.6687 10.2167C12.6687 9.85481 12.5503 9.57788 12.3134 9.38588C12.0765 9.19388 11.7284 9.09788 11.269 9.09788C10.501 9.09788 9.91245 9.36742 9.50332 9.9065L8.52356 9.13111C8.81785 8.72496 9.21262 8.41111 9.70788 8.18958C10.2103 7.96065 10.7702 7.84619 11.3875 7.84619C12.2057 7.84619 12.8589 8.04558 13.347 8.44435C13.8351 8.84311 14.0791 9.38588 14.0791 10.0727C14.0791 10.4936 13.993 10.8887 13.8207 11.2579C13.6485 11.6271 13.3183 12.048 12.8302 12.5207L10.8168 14.4923H14.3698Z" fill="#009EE0"></path>
                            </svg>
                        </span>
                        <span class='text-xl ml-2'>Upload a video of an object and make it a 3D piece.</span>
                    </li>

                    <li class="flex items-center mb-4 md:mr-4 lg:mr-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 23 24" fill="none">
                                <ellipse cx="11.3937" cy="12" rx="11.3937" ry="12" fill="white"></ellipse>
                                <path d="M12.3507 11.0474C13.0308 11.136 13.5496 11.3797 13.9072 11.7785C14.2648 12.1773 14.4436 12.6757 14.4436 13.2739C14.4436 13.7243 14.3349 14.1342 14.1176 14.5034C13.9002 14.8727 13.5707 15.168 13.1289 15.3896C12.6942 15.6037 12.1614 15.7108 11.5303 15.7108C11.0045 15.7108 10.4961 15.6333 10.0053 15.4782C9.52152 15.3157 9.10785 15.0942 8.76428 14.8136L9.35325 13.6948C9.61968 13.9311 9.94221 14.1194 10.3208 14.2597C10.7065 14.3927 11.1026 14.4591 11.5093 14.4591C11.9931 14.4591 12.3717 14.3557 12.6451 14.149C12.9256 13.9348 13.0658 13.6468 13.0658 13.285C13.0658 12.9231 12.9326 12.6425 12.6662 12.4431C12.4068 12.2363 12.0071 12.133 11.4672 12.133H10.7941V11.1471L12.4664 9.05358H9.12187V7.84619H14.1386V8.80988L12.3507 11.0474Z" fill="#009EE0"></path>
                            </svg>
                        </span>
                        <span class='text-xl ml-2'>Best prices in the market.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>





<section class="pb-16 pt-8 bg-gray-100">
    <div class="container mx-auto">
        <h2 class="text-4xl lg:text-5xl font-bold mb-10 text-center text-blue-800">Latest News</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div class="bg-white p-6 rounded-md shadow-md transition transform hover:scale-105 hover:shadow-xl">
                <h3 class="text-2xl text-blue-600 font-bold mb-4">PrintHub Launches New 3D Printing Service</h3>
                <p class="text-gray-500 mb-2">November 17, 2023</p>
                <img class="mx-auto mb-4 rounded-md" src={news} alt="PrintHub 3D Printing Service"></img>
                <p class="text-gray-700">PrintHub has recently unveiled its latest 3D printing service, bringing cutting-edge technology to users for a seamless printing experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        
            <div class="bg-white p-6 rounded-md shadow-md transition transform hover:scale-105 hover:shadow-xl">
                <h3 class="text-2xl text-blue-600 font-bold mb-4">3D Printing Technology Advancements</h3>
                <p class="text-gray-500 mb-2">November 15, 2023</p>
                <img class="mx-auto mb-4 rounded-md" src={news} alt="3D Printing Technology Advancements"></img>
                <p class="text-gray-700">Exciting breakthroughs in 3D printing technology have been announced, promising to revolutionize the industry. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>

            
            <div class="bg-white p-6 rounded-md shadow-md transition transform hover:scale-105 hover:shadow-xl">
                <h3 class="text-2xl text-blue-600 font-bold mb-4">New Features Added to PrintHub Platform</h3>
                <p class="text-gray-500 mb-2">November 12, 2023</p>
                <img class="mx-auto mb-4 rounded-md" src={news} alt="New Features Added to PrintHub Platform"></img>
                <p class="text-gray-700">PrintHub's platform receives a major update with new features designed to enhance user experience. Sed auctor odio et felis aliquet, vel interdum libero feugiat. Ut ut nisl sit amet turpis fermentum eleifend.</p>
            </div>
        </div>
    </div>
</section>

    <footer className="bg-gray-900 text-white p-6 lg:p-10">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
    <div className="w-full lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
    <div className="flex items-center justify-center lg:justify-start mb-4">
        <img src={logo} alt="PrintHub Logo" className="mr-2 w-[10%]" />
        <span className="text-3xl ml-3 font-bold">PrintHub</span>
    </div>

    <p className="text-sm">
        Welcome to PrintHub - Your One-Stop Printing Solution. Providing high-quality printing services since 2023.
    </p>

    <p className="text-sm mt-4">
        Connect with us:
        <a href="https://tiktok.com/@printhub" className="text-black-500 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://twitter.com/printhub" className="text-blue-400 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/printhub" className="text-pink-500 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
        </a>
    </p>

    <div className="flex justify-center lg:justify-start mt-4 lg:mt-8">
        <div className="mr-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#scan">
                Scan
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#shop">
                Shop
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#about">
                About
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#contact">
                Contact
            </a>
        </div>
    </div>
</div>

        <div className="w-full lg:w-1/3">
            
            <form className="max-w-lg mx-auto">
            <p className='text-3xl mb-3'>Contact us</p>
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
