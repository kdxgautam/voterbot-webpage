

function Header() {
    return (
      <header className="bg-[#25D366] text-white p-4 w-screen">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <a href="/">Voter Bot</a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
                         </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  