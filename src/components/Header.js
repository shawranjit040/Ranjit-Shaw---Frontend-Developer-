import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={`${scroll ? 'hidden' : 'flex'}
       fixed z-10 items-center justify-between px-5 w-full -mt-8  `}>
        <div>
          <Link to="/">
            <img
              className="w-60 filter invert ml-5"
              src="https://www.logo.wine/a/logo/SpaceX/SpaceX-Logo.wine.svg"
              alt="SpaceX Logo"
            />
            
          </Link>
        </div>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul className="font-semibold text-base uppercase">
            <li>
              <Link to="/capsules" className="text-white text-sm">
                Capsules
              </Link>
            </li>
            <li>
              <Link to="/crew" className="text-white text-sm">
                Crew
              </Link>
            </li>
            <li>
              <Link to="/dragons" className="text-white text-sm">
                Dragons
              </Link>
            </li>
            <li>
              <Link to="/landpads" className="text-white text-sm">
                Landpads
              </Link>
            </li>
            <li>
              <Link to="/roadster" className="text-white text-sm">
                Roadster
              </Link>
            </li>
            <li>
              <Link to="/rockets" className="text-white text-sm">
                Rockets
              </Link>
            </li>
            <li>
              <Link to="/ships" className="text-white text-sm">
                Ships
              </Link>
            </li>
            <li>
              <Link to="/starlink" className="text-white text-sm">
                Starlink
              </Link>
            </li>
          </ul>
        </nav>
        <div >
        <span className="text-white text-sm mr-10 underline cursor-pointer">SHOP</span>
        <i className="fa-solid fa-bars text-white text-sm mr-10 cursor-pointer"></i>
        </div>
        

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm uppercase tracking-wider"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}
