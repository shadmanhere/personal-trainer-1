import cover from '../../src/assets/herocover.jpg'

const LandingPage = () => (
  <header className='sticky top-0'>
    <div>
      <nav className="flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
        <h1 className="font-[Newsreader] text-4xl text-blue-600 antialiased">
          Personal Tr
          <span className="text-black">
            ai
          </span>
          ner
        </h1>
        <ul className="w-1/3 flex justify-between items-center">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button
            className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
          >
            Sign Up
          </button>
        </ul>
      </nav>
      <div className="h-[22rem] flex flex-col justify-center items-center">
        <h1 className="font-[Newsreader] text-6xl tracking-wide w-4/6 text-slate-800">
          Customize your fitness plan with AI-powered routines and reach your goals.
        </h1>
        <button
          className="font-light mt-10 font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 text-[1.25em]"
        >
          Discover More
        </button>
      </div>
      <div className="h-96 object-cover overflow-hidden">
        <img src={cover} alt='hero-image' />
      </div>
    </div>
  </header>
);

export default LandingPage;