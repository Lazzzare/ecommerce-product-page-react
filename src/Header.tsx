import Logo from "./images/logo.svg";
import Avatar from "./images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Product {
  id: number;
  image: string;
  thumbnail: string;
}

interface ProductProps {
  products: Product[];
}

// HeaderNavListArray
const HeaderNavList = ["Collections", "Men", "Women", "About", "Contact"];

const Header = ({ products }: ProductProps) => {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        {/* HeaderLeftSide (Logo/NavList) */}
        <div className="flex items-center justify-start gap-4">
          {/* HeaderLogo */}
          <img src={Logo} alt="LogoImage" className="cursor-pointer" />
          {/* HeaderNavList */}
          <nav>
            <ul className="flex items-center justify-start gap-4">
              {HeaderNavList.map((navItem) => (
                <li className="">{navItem}</li>
              ))}
            </ul>
          </nav>
        </div>
        {/* HeaderRightSide (Image/StoreIcon) */}
        <div className="flex items-center justify-start gap-4">
          {/* StoreIcon */}
          <button>
            <AiOutlineShoppingCart />
          </button>
          {/* AvatarImage */}
          <img src={Avatar} alt="ProfileImage" className="w-12" />
        </div>
      </header>
    </>
  );
};

export default Header;
