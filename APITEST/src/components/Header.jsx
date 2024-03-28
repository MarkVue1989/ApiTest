function Header() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center bg-slate-50">
          <h1 className="text-3xl font-bold text-blue-600">APIREST</h1>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign In
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
