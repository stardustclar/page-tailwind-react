import { useState } from "react";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 fixed z-[9999] w-full justify-between bg-white">
      <h1 className="text-xl font-semibold text-slate-800 font-coolvetica mx-4">a r c a d e</h1>
      {/* LG SCREEN */}
      <div>
        <div>
          <div className="hidden md:block">
            <div className="flex justify-end gap-4 mx-10">
              <a href="">Home</a>
              <a href="">About</a>
              <button className="bg-slate-200 rounded-xl w-24 py-1 -mt-1">
              <a href="/login">Login</a>
              </button>
            </div>
          </div>

          {/* HAMBURGER */}
          <div className="md:hidden flex justify-end">
            <button onClick={toggle}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* OPEN HAMB */}
      {isOpen && (
      <div className="md:block">
        <div className="gap-4 flex flex-col mx-10">
          <a href="">Home</a>
          <a href="">About</a>
          <button className="bg-slate-200 rounded-xl w-24 py-1 -ml-6">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
      )}
    </nav>
  );
}

export default NavigationBar;
