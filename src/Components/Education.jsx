import SWU from "../../public/SWU.svg.png";
import Generation from "../../public/Generation.png";

const Education = () => {
  return (
    <>
    <div className="education text-center py-20 px-10 flex flex-col lg:flex-row h-screen">
      <div className="left-sde lg:flex-1">
        <div>
          <p className="text-5xl lg:text-6xl font-anton pb-10  lg:text">
            Education
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src={SWU}
            alt="SWU-logo"
            className="w-40 lg:w-60"
          ></img>
        </div>
        <div>
          <p className="lg:text-lg font-poppins text-xs font-semibold mt-5 lg:pt-10">
            2020 Srinakharinwirot University, Thailand
          </p>
        </div>
        <div>
          <p className="lg:text-lg font-poppins text-xs px-10 py-2 text-center">
            Bachelor's Degree in Science, Major in Polymer Material Technology
          </p>
        </div>
      </div>
      <div className="right-side lg:flex-1">
        <div>
          <p className="text-5xl lg:text-6xl font-anton  pb-10 lg:text">
            Training
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Generation}
            alt="generation-logo"
            className="w-40 lg:w-60"
          ></img>
        </div>
        <div>
          <p className="lg:text-lg font-poppins text-xs font-semibold mt-5 lg:pt-10">
            November 2023 - February 2024 <br/>The Generation (Thailand) and KX
            Knowledge KMUTT </p>
            <p className= "lg:text-lg font-poppins text-xs px-10 py-2 text-center">Junior Software Developer Bootchamp</p>
        </div>
      </div>
      <div>
     
      </div>
    </div>
    </>
  );
};

export default Education;
