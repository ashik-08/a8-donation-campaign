import { Input } from "@material-tailwind/react";
import { useState } from "react";

const Banner = () => {

  const [email, setEmail] = useState();
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="text-center mt-8 space-y-4 md:mt-32 md:space-y-10 2xl:mt-52 2xl:space-y-10">
      <h1 className="text-pri-text text-2xl md:text-4xl lg:text-5xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="flex w-max md:w-full max-w-[400px] mx-auto">
        <Input
          type="text"
          placeholder="Search here..."
          value={email}
          onChange={onChange}
          className="bg-white border text-place-text p-2 md:p-4 rounded-tl-lg rounded-bl-lg"
        />
        <button
          className="bg-spe-text text-white text-lg font-semibold px-5 rounded-tr-lg rounded-br-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
