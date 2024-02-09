import { Link } from "react-scroll";

const Navbar = () => {
  const navBarItems = {
    items: [
      {
        type: "dropdown",
        label: "ABOUT ME",
        to: "",
        childElements: [
          {
            type: "link",
            to: "introduction",
            label: "introduction",
          },
          {
            type: "link",
            to: "skills",
            label: "skills",
          },
          {
            type: "link",
            to: "education",
            label: "eduction",
          },
        ],
      },
      {
        type: "link",
        to: "projects",
        label: "projects",
      },
      {
        type: "link",
        to: "experience",
        label: "experience",
      },
    ],
    contactMeButton: {
      type: "link",
      to: "contact-me",
      label: "contact me",
    },
  };

  const renderLink = (item, index) => {
    return (
      <li>
        <Link
          key={index}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-112}
          duration={500}
        >
          {item.label.toUpperCase()}
        </Link>
      </li>
    );
  };

  const renderDropdown = (item, index) => {
    return (
      <li>
        <details>
          <summary key={index}>{item.label}</summary>
          <ul className="p-2">
            {item.childElements.map((item, i) => renderLink(item, i))}
          </ul>
        </details>
      </li>
    );
  };

  return (
    <nav>
      <div className="navbar m-0 p-0 lg:pb-0 bg-base-100 top-0 fixed z-50">
        <div className="navbar-start p-5">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden MOBILEONLY"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBarItems.items.map((item, i) =>
                item.type === "dropdown"
                  ? renderDropdown(item)
                  : renderLink(item, i)
              )}
            </ul>
          </div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
            className="hover:cursor-pointer text-right font-dela text-pink-500 text-2xl lg:text-3xl font-normal leading-5 font-dela-gothic-one "
          >
            Pack
            <br />
            Packina
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-antonio text-pink-500 menu-items">
          <ul className="menu menu-horizontal text-lg p-5">
            <li className="mx-20">
              <details>
                <summary>ABOUT ME</summary>
                <ul className="p-2">
                  <li>
                    <Link to="introduction">INTRODUCTION</Link>
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-112}
                      duration={500}
                    >
                      EDUCATION
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-112}
                      duration={500}
                    >
                      SKILLS
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="mx-20 active:bg-violet-700">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-112}
                duration={500}
                className="active:bg-violet-700"
              >
                PROJECTS
              </Link>
            </li>
            <li className="mx-20">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-112}
                duration={500}
              >
                EXPERIENCE
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end p-2 lg:p-5 contact-button">
          <Link
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
            className="btn font-dela-gothic-one bg-pink-500 text-xs lg:text-m text-black hover:bg-pink-300"
          >
            {navBarItems.contactMeButton.label.toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
