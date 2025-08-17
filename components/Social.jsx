import Link from "next/link";
import { FaGithub, FaLine, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MrzSilver" },
  { icon: <FaLine />, path: "https://line.me/ti/p/6hJhyz8y7T" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/xpeemz_prnjce/" },
];

const Social = ({ containarStyle, iconStyle }) => {
  return (
    <div className={containarStyle}>
      {socials.map((items, index) => {
        return (
          <Link
            key={index}
            href={items.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
          >
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;