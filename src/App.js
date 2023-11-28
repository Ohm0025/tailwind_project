import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen py-40"
      style={{ backgroundImage: "linear-gradient(115deg,#9f7aea,#fee2fe)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais')",
            }}>
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <a
                  href="www.google.com"
                  className="text-blue-800 font-semibold">
                  industry.
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It's free and only take a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"></input>
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"></input>
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"></input>
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"></input>
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"></input>
              </div>
              <div className="mt-5">
                <input
                  type="checkbox"
                  className="border border-gray-400"></input>
                <span className="text-sm">
                  {" "}
                  I accept the{" "}
                  <a
                    className="text-purple-500 font-semibold hover:text-blue-400 hover:underline"
                    href="http://localhost:3000/">
                    Terms of Use
                  </a>
                  {" & "}
                  <a
                    href="http://localhost:3000/"
                    className="text-purple-500 font-semibold hover:text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button className="rounded-lg bg-purple-500 text-white py-3 w-full">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
