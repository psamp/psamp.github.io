import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import SocialLinks from "./social-links";
import { metaData } from "../config";

const navItems = {
  // "/psampson_cv.pdf": { name: "cv" }
};

export function Navbar() {
  return (
    <nav className="lg:mb-6 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-4xl font-semibold tracking-tight">
            {metaData.title} 💫
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center text-4xl">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <SocialLinks />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
