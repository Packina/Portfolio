import Htmlpic from "../../public/HTML.svg";
import JS from "../../public/JS.svg";
import ReactJs from "../../public/REACT.svg";
import NodeJs from "../../public/NodeJS.svg";
import ExpressJS from "../../public/ExpressJS.svg";
import JQuery from "../../public/JQuery.svg";

const Skills = () => {
  return (
    <section className="skills h-screen">
      
        <p className="font-anton text-center text-4xl lg:text-5xl pt-20 lg:py-20 ">
          WEB DEVELOPMENT & <br />
          OTHERR SKILLS
        </p>
      

      <div className="flex overflow-hidden my-10 ">
        <div className="flex animate-loop-scroll space-x-16 pl-16 group-hover:paused">
          <img src={Htmlpic} className="max-w-none"></img>
          <img src={JS} className="max-w-none"></img>
          <img src={ReactJs} className="max-w-none"></img>
          <img src={NodeJs }className="max-w-none"></img>
          <img src={ExpressJS }className="max-w-none"></img>
          <img src={JQuery} className="max-w-none"></img>
        </div>
        <div
          className="flex animate-loop-scroll space-x-16 pl-16"
          aria-hidden="true"
        >
          <img src="../../public/HTML.svg" className="max-w-none"></img>
          <img src="../../public/JS.svg" className="max-w-none"></img>
          <img src="../../public/REACT.svg" className="max-w-none"></img>
          <img src="../../public/NodeJS.svg" className="max-w-none"></img>
          <img src="../../public/ExpressJS.svg" className="max-w-none"></img>
          <img src="../../public/JQuery.svg" className="max-w-none"></img>
        </div>
      </div>
    </section>
  );
};

export default Skills;
