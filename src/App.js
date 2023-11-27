import "./App.css";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-5">
          Create Custom Modal in React JS with Tailwind CSS !
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Test Modal
        </button>
        <button
          onClick={() => setShowModal2(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Video Modal
        </button>
        <button
          onClick={() => setShowModal3(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Form Modal
        </button>
      </div>
      <Modal isvisible={showModal} closeModal={() => setShowModal(false)}>
        <div className="p-3 h-[400px] overflow-auto">
          <h1 className="text-2xl mb-5">Modal Title</h1>
          <p className="mb-5 font-normal text-gray-500">
            Start with bacon ipsum Corned beef chuck andouille, burgdoggen doner
            bresaola pancetta sirloin landjaeger shank shoulder. Cupim shankle
            meatloaf, fatback chislic leberkas tenderloin corned beef kielbasa
            beef ribs biltong spare ribs ham hock doner. Drumstick meatloaf
            landjaeger swine, bresaola pork venison pastrami chicken. Prosciutto
            shank swine tri-tip sausage venison tail chislic ball tip turducken
            pork chop t-bone porchetta buffalo frankfurter. Tenderloin pork
            sausage, filet mignon bresaola burgdoggen pastrami rump sirloin
            chislic
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Start with bacon ipsum Corned beef chuck andouille, burgdoggen doner
            bresaola pancetta sirloin landjaeger shank shoulder. Cupim shankle
            meatloaf, fatback chislic leberkas tenderloin corned beef kielbasa
            beef ribs biltong spare ribs ham hock doner. Drumstick meatloaf
            landjaeger swine, bresaola pork venison pastrami chicken. Prosciutto
            shank swine tri-tip sausage venison tail chislic ball tip turducken
            pork chop t-bone porchetta buffalo frankfurter. Tenderloin pork
            sausage, filet mignon bresaola burgdoggen pastrami rump sirloin
            chislic
          </p>
        </div>
      </Modal>
      <Modal isvisible={showModal2} closeModal={() => setShowModal2(false)}>
        <div className="flex items-center justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wL8DVHuWI7Y?si=PzESu9VVxbVXl0VZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </Modal>

      <Modal isvisible={showModal3} closeModal={() => setShowModal3(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in to our platform
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                placeholder="example@company.com"
                required
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                placeholder="********"
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"></input>
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-700 hover:underline">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{" "}
              <a href="#" className="text-blue-700 hover:underline">
                Create account
              </a>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default App;
