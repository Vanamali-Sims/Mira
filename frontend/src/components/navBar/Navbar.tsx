import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex gap-2 items-center">
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className="relative z-10 w-10 h-10 rounded-lg"
        />
        <h1 className="text-xl font-bold">Mira</h1>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-6">
          <li className="hover:underline cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:underline cursor-pointer"><Link to="/journal">Journal AI</Link></li>
          <li className="hover:underline cursor-pointer"><Link to="/quests">Quests</Link></li>
          <li className="hover:underline cursor-pointer"><Link to="/rewards">Rewards</Link></li>
          <li className="hover:underline cursor-pointer"><Link to="/partners">Partners</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
