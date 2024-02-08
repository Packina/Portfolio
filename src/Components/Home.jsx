import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
    
    <section className="home h-screen my-[100px] pt-60 relative pb-0">
      <div className="title-text flex flex-col sm:flex-row justify-center ">
        <div className="flex items-center justify-center">
          <p className="text-4xl lg:text-6xl font-anton lg:mr-20 mb-5">
            Hello, I'm a{" "}
          </p>
        </div>
        <div className="flex text-7xl lg:text-[140px] font-anton justify-center">
          <div>
            <p className="mb-5">
              <TypeAnimation
      sequence={[
        
        '!RECRUITER',
        1000, 
        'DEVELOPER',
        1000,
      
      ]}
      wrapper="span"
      speed={5}
      repeat={Infinity}
    />
              
            </p>
          </div>
        </div>
      </div>

      <div className="vector">
        <div className="absolute top-5 right-10 lg:right-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
          >
            <path
              d="M48.8008 23.8411C48.8008 37.0082 37.8764 47.6823 24.4004 47.6823C10.9244 47.6823 0 37.0082 0 23.8411C0 10.674 10.9244 0 24.4004 0C37.8764 0 48.8008 10.674 48.8008 23.8411Z"
              fill="#BCDF64"
            />
          </svg>
        </div>
        <div className="absolute top-10 left-20 lg:left-60 lg:top-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="28"
            viewBox="0 0 75 28"
            fill="none"
          >
            <path
              d="M1.00181 22.2942C-0.103511 23.1217 -0.328783 24.6885 0.498646 25.7938C1.32608 26.8991 2.89288 27.1244 3.99819 26.2969L1.00181 22.2942ZM74.6972 27.7322C75.5651 15.1564 72.3305 7.12066 65.7633 3.11136C59.45 -0.742945 50.925 -0.276908 42.6213 1.8146C25.8661 6.03486 7.29593 17.5825 1.00181 22.2942L3.99819 26.2969C10.0304 21.7813 27.9891 10.6563 43.8426 6.66316C51.8432 4.64799 58.6425 4.62217 63.158 7.37892C67.4196 9.98067 70.5185 15.6589 69.709 27.388L74.6972 27.7322Z"
              fill="#F06DAB"
            />
          </svg>
        </div>
        <div className="absolute right-2 lg:right-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="173"
            height="72"
            viewBox="0 0 173 72"
            fill="none"
          >
            <path
              d="M2 62.5559C48.8488 37.2636 59.4765 57.8913 58.9343 71.3667C62.9106 53.2267 75.4181 23.2698 93.637 48.5622C112.615 48.5622 188.527 -36.4366 179.31 25.7576"
              stroke="#F06DAB"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="absolute bottom-60 left-10">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="122"
            viewBox="0 0 130 122"
            fill="none"
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.3,
            //   ease: [0, 0.71, 0.2, 1.01],
            //   scale: {
            //     type: "spring",
            //     damping: 5,
            //     stiffness: 100,
            //     restDelta: 0.001
            //   }
            // }}
          >
            <ellipse
              cx="64.5255"
              cy="60.6394"
              rx="64.5255"
              ry="60.6394"
              fill="#BCDF64"
            />
          </motion.svg>
        </div>
        <div className="absolute bottom-40 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="70"
            viewBox="0 0 84 70"
            fill="none"
          >
            <path
              d="M1.14262 59.9545C20.4761 67.9024 56.6661 75.3765 46.7583 41.6894C36.8506 8.00223 66.9982 1.68924 83.3104 2.74364"
              stroke="#F06DAB"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-2">
        <a href="https://www.linkedin.com/in/kanjana-kannarest-4928101b0/"><img src="../../public/linkedin-icon.svg" className="w-20"></img></a>
        </div>
      </div>

    </section>
    </>
  );
};

export default Home;
