import Link from "next/link";
import { useEffect, useState } from "react";
import Language from "./language/Language";
import { User } from "@types";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [loggedInUser, setLoggedInUser] = useState<User>(null);

  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")) as User);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <header className="p-3 mb-3 border-bottom bg-gradient-to-br from-gray-900 to-gray-600 flex flex-col items-center">
      <a className="flex mb-2 md:mb-5 text-white-50 text-3xl text-gray-300">
        ComfortRide App
      </a>
      <nav className="items-center flex md:flex-row flex-col">
        <Link
          href="/"
          className="px-4 text-xl text-white  hover:bg-gray-600 rounded-lg"
        >
          Home
        </Link>
        <Link
          href="/lecturers"
          className="px-4 text-white text-xl hover:bg-gray-600 rounded-lg"
        >
          Drivers
        </Link>
        <Link
          href="/schedule/overview"
          className="px-4 text-white text-xl hover:bg-gray-600 rounded-lg"
        >
          Rides
        </Link>
        {!loggedInUser && (
          <Link
            href="/login"
            className="px-4 text-white text-xl hover:bg-gray-600 rounded-lg"
          >
            Login
          </Link>
        )}
        {loggedInUser && (
          <a
            href="/login"
            onClick={handleClick}
            className="px-4 text-white text-xl hover:bg-gray-600 rounded-lg"
          >
            {t("header.nav.logout")}
          </a>
        )}
        {loggedInUser && (
          <div className="text-white ms-5 mt-2 md:mt-0 pt-1 md:pt-0 grow">
            {t("header.welcome")}, {loggedInUser.firstName}!
          </div>
        )}
        <Language></Language>
      </nav>
    </header>
  );
};

export default Header;
