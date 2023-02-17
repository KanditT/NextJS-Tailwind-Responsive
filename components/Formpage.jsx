import React from "react";

const Formpage = () => {
  return (
    <div className="flex items-center justify-center text-center self-center">
      <div className="w-2/6 p-1 justify-center">
        <h1 className="text-2xl font-bold text-center p-4">
          Let's work together
        </h1>
        <form className="max-w-[600px] m-auto">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-3 w-full"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
        </form>
      </div>
      <div className="w-4/6 justify-center">
        <img src="Athlete.png" className="w-9/12 justify-center" />
      </div>
    </div>
  );
};

export default Formpage;
