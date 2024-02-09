import aboutMePic from "../../public/MyPic.jpg";
import CV from "../../public/CV.pdf";
const AboutMe = () => {
  return (
    <>
    <section className="introduction h-screen bg-[#FDF5F5] relative z-10">
      <div className="flex flex-col lg:flex-row pt-10 lg:pt-20">
        <div className="aboutme-content mx-8 flex-1 lg:mx-20 animate-fade-up">
          <p className="lg:text-xl font-poppins text-lg lg:mb-5">Hey there,</p>
          <p className="lg:text-7xl text-5xl font-anton ">I’m Kanjana</p>
          <p className="lg:text-7xl text-5xl font-anton lg:mb-5">Kannarest</p>
          <p className="lg:text-2xl font-poppins text-pink-500 text-lg">
            -Full Stack Developer-
          </p>
          <p className="lg:text-lg font-poppins text-xs lg:my-10">
            My expertise covers end-to-end recruitment, from candidate search to
            seamless onboarding. Yet, my true passion lies in code. I'm on a
            mission to become a coding superhero, actively seeking opportunities
            to leave my mark in the software development galaxy. If you're
            looking for a tech-savvy adventurer, let's connect and see if we're
            a match made in tech heaven!
          </p>
        </div>
        <div className="flex items-center justify-center mt-5 lg:mx-20">
        <img
          className="lg:w-[300px]"
          src={aboutMePic}
          alt="Profile picture"
          width={200}
        ></img>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div>
      <a href="https://www.linkedin.com/in/kanjana-kannarest-4928101b0/"className="btn btn-active font-dela-gothic-one bg-pink-500 text-xs lg:text-base text-white hover:bg-pink-300 lg:mx-5 my-2">LET'S GET IN TUCH</a>
      </div>
      <div>
      <a href={CV} className="download btn btn-active font-dela-gothic-one bg-[#BCDF64] text-xs lg:text-base text-white hover:bg-pink-300 transition ">DOWNLOAD CV</a>
      </div>
      </div>

      <div>
      <div className="absolute top-20 right-10 lg:top-10 lg:right-[600px] ">
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
        <div className="absolute z-50 top-80 right-20 lg:top-20 lg:left-[500px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="55"
            viewBox="0 0 83 55"
            fill="none"
          >
            <path
              d="M3.31841 0.517942C2.36839 19.6598 7.19562 53.1873 34.1047 34.163C61.0139 15.1386 76.2228 39.1665 80.4637 53.5585"
              stroke="#F06DAB"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="absolute left-10 lg:bottom-10 lg:left-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="87"
            viewBox="0 0 49 87"
            fill="none"
          >
            <path
              d="M48.0815 3.23284C28.9283 3.91543 -4.06679 11.5787 17.1788 36.771C38.4244 61.9633 15.7781 79.1621 1.79923 84.6125"
              stroke="#F06DAB"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutMe;
