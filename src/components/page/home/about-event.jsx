import { useState } from "react";
import AboutImage from "../../../assets/images/AboutImage.png";
import EventImage from "../../../assets/images/event.jpg"
import ReactImage from "../../../assets/images/react.jpg";

const AboutEvent = () => {
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleName = () => {
    setIsClicked(true);
    if (!name) {
      setErrorMessage("Please enter your name in input😔");
    } else {
      setErrorMessage(""); // Clear the error if a name is provided
    }
  };

  return (
    <div className='w-full flex justify-center items-center flex-col gap-4'>
      <div className="w-[80%] flex flex-col items-center mt-4">
        <div>
          <h2 className='font-bold text-3xl text-center'>
            Mastering Event Handling <br /> in React
          </h2>
          <div>
            <p className="flex text-center font-medium mt-4">
              React Events are user interactions with the web application, such as clicks, keyboard input, and other actions that trigger a response in the user interface. Just like HTML DOM, React also acts upon the events.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="input bg-transparent input-primary"
            />
            <button onClick={handleName} className="btn btn-primary">
              Click me
            </button>
          </div>
          {isClicked && !errorMessage && (
            <p>Your name is: <span className="font-semibold">{name}</span></p>
          )}
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
        </div>
      </div>
      <div className="   w-full flex justify-center items-center"> 
        <img src={ReactImage} alt="React image" className=" h-60 w-[80%] object-contain"/>
      </div>
    </div>
  );
};

export default AboutEvent;
