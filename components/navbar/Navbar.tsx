import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  console.log("lml");
  return (
    <nav className="flex bg-blue-800/30 p-2 m-2 bg-opacity-30 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map(({ path, text }) => (
        <ActiveLink key={path} path={path} text={text} />
      ))}
    </nav>
  );
};
