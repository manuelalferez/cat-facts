import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-10 flex flex-col items-center">
      <img
        src="https://ik.imagekit.io/manuelalferez/cat-facts/cat-svgrepo-com_T7Zz1CpRw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658129948584"
        alt="Logo"
        className="w-20"
      />
      <div className="mt-4 space-x-2">
        <Link
          className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg w-24"
          to="/"
        >
          Facts
        </Link>
        <Link
          className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg w-28"
          to="/gratitude"
        >
          Gratitude
        </Link>
      </div>
    </div>
  );
}

export default Header;
