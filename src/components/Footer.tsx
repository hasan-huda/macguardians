import Link from "next/link";
import MaxWidthWrap from "./MaxWidthWrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrap>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
            <Link
                href="https://github.com/hasan-huda"
                passHref
                className="text-muted-foreground hover:text-gray-600"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hasan-huda/"
                passHref
                className="text-muted-foreground hover:text-gray-600"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrap>
    </footer>
  );
};

export default Footer;
