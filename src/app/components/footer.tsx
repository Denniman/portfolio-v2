import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="flex items-center gap-3 mt-5">
      <Link
        className="text-primary"
        href="https://github.com/denniman"
        target="_blank"
      >
        <FaGithub size={20} />
      </Link>
      <Link
        className="text-primary"
        href="https://www.linkedin.com/in/dennis-terna/"
        target="_blank"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        className="text-primary"
        href="http://x.com/denniman"
        target="_blank"
      >
        <FaXTwitter size={20} />
      </Link>
      <Link
        className="text-primary"
        href="https://medium.com/@denniman"
        target="_blank"
      >
        <IoLogoMedium size={20} />
      </Link>
    </footer>
  );
};
