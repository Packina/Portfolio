import experiencePic from '../../public/experiencePic.jpg';
const Experience = () => (
  <>

  <section className="experience h-screen relative ">
    <p className="text-5xl lg:text-6xl font-anton p-10 lg:text lg:pt-0">
      WORKING
      <br />
      EXPERIENCE
    </p>

    <div className="flex flex-col lg:flex-row lg:px-20">
      <div className="mx-10">
        <img
          src={experiencePic }
          alt="Working-exp-pic"
          className="display:hidden w-[150px] lg:w-[300px]"
        ></img>
      </div>
      
        
        <div className="lg:text-lg font-poppins text-xs font-semibold mt-5 px-20">
          <div>
            <p>March 2023 - December 2024</p>
            <p className="text-pink-500">Consultant</p>
            <p className="text-pink-500">
              Adecco Recruitment (Thailand) Limited
            </p>
          </div>

          <div className="mt-5">
            <p>January 2022 - February 20237 </p>
            <p className="text-pink-500">
              Tech Talent Acquisition Specialist
            </p>
            <p className="text-pink-500">Seven Peaks Software Co., Ltd</p>
          </div>

          <div className="mt-5">
            <p>March 2021 - January 2022</p>
            <p className="text-pink-500">Tech Talent Acquisition Executive</p>
            <p className="text-pink-500">The Prodigy (Thailand) Co., Ltd</p>
          </div>
        </div>
      </div>
    
    <div>
      <p className="lg:text-lg font-poppins text-xs p-10  lg:py-10 text-center px-20">
        Lead recruitment processes, source top talent creatively, and manage
        candidate pipelines with outreach techniques. Conduct pre-screening
        calls, coordinate technical tests, and assess applicants for skills
        and cultural fit. Support onboarding, prepare reports, and contribute
        to employer branding, alongside other HR tasks.
      </p>
    </div>

    <div>
      <div className="absolute bottom-60 lg:bottom-10 ">
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
      </div>
      <div className="absolute top-20 right-5">
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
      </div>

      <div className="absolute right-5 bottom-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
        >
          <ellipse cx="17.5" cy="16" rx="17.5" ry="16" fill="#BCDF64" />
        </svg>
      </div>
      <div className="absolute lg:right-40 top-80 right-2">
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
    </div>
  </section>
  </>
);

export default Experience;
