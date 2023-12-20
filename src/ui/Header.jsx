import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="border-b flex items-center justify-between border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizza Express
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
