import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MrzSilver" },
  { icon: <FaTwitter />, path: "https://twitter.com/Silversv1" },
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