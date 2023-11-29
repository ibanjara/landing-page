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

import bg from './assets/bg.png'
import { Footer } from './components/Footer';
import { News } from './components/News';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { BouncingButton } from './components/BouncingButton';

//bg-gradient-to-r from-cyan-500 to-blue-500
function App() {
  const particles = async (main) => {
    console.log(main);
    await loadFull(main);
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
                    },    
                    "particles": {
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
        <BouncingButton></BouncingButton>
    </div>
    
    <div id="thanks" className='pt-[75px] lg:mb-[50px] md:mb-[10px]'>
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

    <PricingSection></PricingSection>
    <AboutSection></AboutSection>
    <News></News>
    <Footer></Footer>

      </div>
    </>
  )
}

export default App
