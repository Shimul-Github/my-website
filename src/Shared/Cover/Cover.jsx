import { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import coverImg from '../../assets/CoverImg/ADANAKEBAB-H1.jpg'
import coverImg1 from '../../assets/CoverImg/Lula_kebab.jpg'
import coverImg2 from '../../assets/CoverImg/Lula_kebab_2.jpg'
import coverImg3 from '../../assets/CoverImg/Turkish_tavuk_shish.jpg'
import styles from './styles.module.css'

// const slides = [
//   coverImg,
//   coverImg1,
//   coverImg2,
//   coverImg3,
// ]
// console.log(slides)
const Cover = (
  // {slides} 
  {img,title}
) => {
  // const [index, set] = useState(0)
  // const transitions = useTransition(index, {
  //   key: index,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 3000 },
  //   onRest: (_a, _b, item) => {
  //     if (index === item) {
  //       set(state => (state + 1) % slides)
  //     }
  //   },
  //   exitBeforeEnter: true,
  // })
//   console.log(index)
  return (
 
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            `url("${img}")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    // <>
    // <div className="flex ">
    //   {transitions((style, i) => (
    //     <animated.div
    //       className={styles.bg}
    //       style={{
    //         ...style,
    //         backgroundImage: `${slides[i]}`,
    //       }}
        
    //     />
        
    //   ))}
        
    // </div>
    // <div className='ml-[calc(100vh-50%)] mt-[calc(500px-40%)]'>
    //     <p className='uppercase text-7xl'>Hello Shimul</p>
    //     <p className='text-center w-[500px] text-xl text-yellow-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa alias tenetur deserunt est, hic eligendi ea ut quos impedit! Quia iure pariatur repudiandae ipsum ipsa cupiditate eligendi assumenda, vero qui numquam optio voluptas exercitationem dolorem aliquid necessitatibus quo voluptate totam? Quae at non adipisci possimus dolor libero ex sed.</p>
    // </div>
    // </>
  
  );
};

export default Cover;
