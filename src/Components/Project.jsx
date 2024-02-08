import ActiveSlider from "./ActiveSlider";


const Project = () => {
  return (
    <>
      <section className="projects h-screen pt-5 relative">
        <div>
          <p className=" font-anton text-center text-4xl lg:text-5xl text-[#E75B6D] mt-10">
            WEB DEVELOPMENT & <br />
            PROJECTS
          </p>
        </div>
        <ActiveSlider />
        <div className="flex justify-center">
          <button className="btn btn-active font-dela-gothic-one bg-pink-500 text-xs lg:text-xl  text-white hover:bg-pink-300 lg:mx-5">
            VIEW ALL
          </button>
        </div>
        <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          className='absolute top-40 right-10'
        >
          <ellipse cx="17.5" cy="16" rx="17.5" ry="16" fill="#BCDF64" />
        </svg>
          
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
            strokeWidth="5" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="28"
            viewBox="0 0 75 28"
            fill="none"
            className='absolute top-2 left-2'
          >
            <path
              d="M1.00181 22.2942C-0.103511 23.1217 -0.328783 24.6885 0.498646 25.7938C1.32608 26.8991 2.89288 27.1244 3.99819 26.2969L1.00181 22.2942ZM74.6972 27.7322C75.5651 15.1564 72.3305 7.12066 65.7633 3.11136C59.45 -0.742945 50.925 -0.276908 42.6213 1.8146C25.8661 6.03486 7.29593 17.5825 1.00181 22.2942L3.99819 26.2969C10.0304 21.7813 27.9891 10.6563 43.8426 6.66316C51.8432 4.64799 58.6425 4.62217 63.158 7.37892C67.4196 9.98067 70.5185 15.6589 69.709 27.388L74.6972 27.7322Z"
              fill="#F06DAB"
            />
          </svg>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          className='absolute top-80 left-2'
        >
          <ellipse cx="17.5" cy="16" rx="17.5" ry="16" fill="#BCDF64" />
        </svg>
        </div>
      </section>
    </>
  );
};

export default Project;
