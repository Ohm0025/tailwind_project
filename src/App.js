import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const setMode = () => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    setMode();
  }, [isDarkMode]);

  // const toggleMode = () => {
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center dark:bg-black">
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="rounded px-4 py-2 text-md bg-black text-white hover:bg-stone-300 absolute top-10 right-10 dark:bg-white dark:text-gray-900 dark:hover:bg-stone-400">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* <button
        onClick={toggleMode}
        className="rounded px-4 py-2 text-md bg-black text-white hover:bg-stone-300 absolute top-10 left-10">
       Dark Button V2
      </button> */}
      <h1 className="text-5xl font-extrabold text-center mb-5 dark:text-white">
        Test Switch {isDarkMode ? "Light Mode" : "Dark Mode"}, Click At
        Top-right Button.
      </h1>
      <p className="w-[50%] text-xl text-center mb-9 dark:text-white">
        {
          "My initial tailwind lab , thare may have some mistakes , so let me know by leave your comments in my git hub. Thank you for your kindness."
        }
      </p>
      <button
        className="bg-orange-600 rounded-lg p-4 text-white text-lg dark:bg-orange-500 hover:bg-orange-300"
        onClick={() => window.open("https://github.com/Ohm0025")}>
        Jump to my GitHub
      </button>
    </div>
  );
}

export default App;
