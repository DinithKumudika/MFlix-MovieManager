import { Link } from "react-router-dom"
import { Button } from "ui/button"
import { Icons } from "constants/Icons"

export const Header = () => {
  return (
    <nav className="flex justify-between py-4 bg-slate-600
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10 px-8">
      {/* Logo Container */}
      <div className="flex items-center">
        {/* logo */}
        <a className="cursor-pointer">
          <h3 className="text-2xl font-medium text-white">
            MFlix
          </h3>
        </a>
      </div>

      {/* <Button variant="outline" size="icon">
          <Icons.menu />
        </Button> */}

      {/* Links Section */}
      <div className="flex">
        <div className="items-center hidden space-x-8 md:flex">
          <a className="flex font-semibold text-white hover:text-cyan-500 cursor-pointer transition-colors duration-300">
            Features
          </a>

          <a className="flex text-white cursor-pointer transition-colors duration-300 font-semibold hover:text-cyan-500">
            About
          </a>
        </div>

        <div className="flex items-center space-x-5">
          {/* login */}
          <Link to={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
