import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled && "opacity-95"}`}>
      <nav className="flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
        <h1 className="font-[Newsreader] text-5xl text-blue-600 antialiased">
          FitSmart
        </h1>
        <ul className="w-1/3 flex justify-between items-center">
          <li className="cursor-pointer">Profile</li>
          <li className="cursor-pointer">Workouts</li>
          <li className="cursor-pointer">Meal Plans</li>
          <button
            className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
          >
            Log out
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;