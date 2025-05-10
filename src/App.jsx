import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const App = () => {
  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        transformOrigin: "50% 50%",
        ease: "Expo.easeInOut",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove()
            setShowContent(true)
            this.kill()
          }
        }
      })
  })

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-0.9",
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-0.7",
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.5,
      duration: 2,
      delay: "-0.55",
      ease: "Expo.easeInOut"
    })
    gsap.to(".char", {
      scale: 0.95,
      duration: 2,
      delay: "-1",
      y: "-63%",
      ease: "Expo.easeInOut"
    })
    gsap.to(".head1", {
      scale: 0.95,
      duration: 1,
      delay: "0.1",
      opacity: 1,
      ease: "Expo.easeInOut"
    })
    gsap.to(".head2", {
      scale: 0.95,
      duration: 1,
      delay: "0.2",
      opacity: 1,
      ease: "Expo.easeInOut"
    })
    gsap.to(".head3", {
      scale: 0.95,
      duration: 1,
      delay: "0.3",
      opacity: 1,
      ease: "Expo.easeInOut"
    })
    gsap.to(".navbar", {
      scale: 0.95,
      duration: 1,
      delay: "0.3",
      opacity: 1,
      ease: "Expo.easeInOut"
    })
    gsap.to(".arrw", {
      y: 5,
      repeat: -1,
      yoyo: true,
      ease: "Expo.easeInOut",
      duration: 0.8
    })

    const main = document.querySelector(".main")
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth) * 40
      gsap.to(".sky", {
        x: xMove * 0.9
      })
      gsap.to(".bg", {
        x: xMove * 1.4
      })
      gsap.to(".text", {
        x: xMove * 1.8
      })
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex justify-center items-center fixed z-[100] top-0 left-0 w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-15deg] scale-[1.7]'>
          <div className="landing w-full h-screen overflow-hidden relative">
            <div className="navbar absolute top-0 left-0 z-[95] w-full h-20 flex items-center p-10 py-14">
              <div className="lines">
                <div className="h-1 w-10 bg-white mb-1"></div>
                <div className="h-1 w-8 bg-white mb-1"></div>
                <div className="h-1 w-6 bg-white mb-1"></div>
              </div>
              <div className='logo mb-[0.5vw]'>
                <h3 className='text-white text-3xl p-10'>Rockstar</h3>
              </div>
              <div className="text text-white absolute left-1/2 -translate-x-1/2 text-[8rem] leading-28 mt-[23vw] -ml-14">
                <h3 className='head1 relative -left-10 scale-[1.4] opacity-0'>grand</h3>
                <h3 className='head2 relative left-10 scale-[1.4] opacity-0'>theft</h3>
                <h3 className='head3 relative -left-10 scale-[1.4] opacity-0'>auto</h3>
              </div>
            </div>
            <div className="images relative w-full h-screen">
              <img className='bg scale-[1.7] rotate-[-9deg] w-full absolute top-0 left-0 z-[90] h-full object-cover' src="./bg.png" alt="" />
              <img className='sky scale-[2] rotate-[-10deg] w-full absolute top-0 left-0 z-[80] h-full object-cover' src="./sky.png" alt="" />
              <img className='char absolute z-[95] object-cover scale-[1.5] -bottom-[150%] right-0' src="./girlbg.png" alt="" />
            </div>
            <div className="btmbar absolute bottom-0 left-0 z-[95] w-full h-20 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center px-10 mt-5">
                <i className="arrw text-2xl ri-arrow-down-line text-white font-semibold bg-black rounded-full w-8 flex justify-center items-center"></i>
                <h3 className='text-2xl font-[monospace] text-white font-semibold'>ScrollDown</h3>
                <img className='absolute h-[65px] left-1/2 -translate-x-1/2 ' src="./ps5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="landing1 w-full h-screen bg-black flex justify-center items-center">
            <div className="w-full h-[80%] flex">
              <div className="relative w-1/2 h-full">
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.9] ' src="./imag.png" alt="" />
              </div>
              <div className="text-white h-full w-1/2 pr-44 py-10">
                <h1 className='text-8xl'>Still Running,</h1>
                <h1 className='text-8xl'>Not Hunting</h1>
                <p className='font-[monospace] leading-4 mt-10 text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum excepturi sit eum modi libero ipsum voluptatibus neque placeat possimus numquam saepe fuga cumque eaque non, pariatur vero molestiae eos ipsa ad, doloremque eligendi expedita animi? Saepe amet quae animi?</p>
                <p className='font-[monospace] leading-4 mt-5 text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum excepturi sit eum modi libero ipsum voluptatibus neque placeat possimus numquam saepe fuga cumque eaque non, pariatur vero molestiae eos ipsa ad, doloremque eligendi expedita animi? Saepe amet quae animi?</p>
                <button className='bg-yellow-400 text-3xl mt-10 px-5 py-6 text-black cursor-pointer'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </>
  )
}

export default App
