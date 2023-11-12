export const Header = () => {
  return (
    <nav className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">
      {/* Logo Container */}
      <div className="flex items-center">
        {/* logo */}
        <a className="cursor-pointer">
          <h3 className="text-2xl font-medium text-blue-500">
            MFlix
          </h3>
        </a>
      </div>

      {/* Links Section */}
      <div className="items-center hidden space-x-8 lg:flex">
        <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
          Features
        </a>

        <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
          About
        </a>
      </div>

      <div className="flex items-center space-x-5">
        {/* login */}
        <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
          Login
        </a>
      </div>
    </nav>
  )
}
