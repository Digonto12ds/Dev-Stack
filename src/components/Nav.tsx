import navlogo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 my-2 z-50 bg-white">
      <div className="container mx-auto px-4">

        {/* //mobile */}
        <div className="flex md:hidden items-center justify-between">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{" "}
              </svg>
            </button>
          </div>

          <img src={navlogo} alt="Dev Stack" />

          <div className="flex gap-2">
            <button className=" rounded-br-none">Sign In</button>
            <button className="btn btn-active btn-secondary rounded-4xl">
              Sign Up
            </button>
          </div>
        </div>


        {/* //computer */}
        <div className="hidden md:flex justify-between items-center">
          <img src={navlogo} alt="" />

          <ul className="flex gap-8 items-center">
            <li className="text-pink-600">Home</li>
            <li className="text-slate-600">technologies</li>
            <li className="text-slate-600">Projects</li>
            <li className="text-slate-600">About</li>
            <li className="text-slate-600">Contact</li>
          </ul>
          <div className="flex gap-2">
            <button className=" rounded-br-none text-slate-700">Sign In</button>
            <button className="btn btn-active btn-secondary rounded-4xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
