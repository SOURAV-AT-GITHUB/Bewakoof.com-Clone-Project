import logo from "/logo.svg";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between p-2 px-12">
      <div className="flex items-center justify-between gap-6">
        <img src={logo} alt="logo" />
        <p className="text-lg ">MEN</p>
        <p className="text-lg ">WOMEN</p>
        <p className="text-lg ">MOBILE COVERS</p>
      </div>
      <div>
        <input type="text" />
      </div>
    </nav>
  );
}
