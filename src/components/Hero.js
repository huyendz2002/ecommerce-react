import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px]">
      <div className="container relative mx-auto flex h-full ">
        <img
          className="absolute top-0 right-0 h-full w-full object-cover"
          src="https://www.shutterstock.com/image-vector/beautiful-background-leaves-palm-trees-260nw-393663685.jpg"
          alt=""
        />
        {/* text */}
        <div className="relative z-10 self-center">
          <div className="flex w-fit items-center">
            <div className="mr-3 h-[3px] w-[40px] rounded-full bg-red-500" />
            <span className="font-medium">NEW TREND</span>
          </div>
          <h1 className="text-[70px] font-light leading-[1.1]">
            FASHION STYLISH
            <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to="/"
            className="mt-3 inline-block font-semibold underline decoration-2 underline-offset-4"
          >
            DISCOVER MORE
          </Link>
        </div>
        <div className="absolute top-20 right-0 h-4/5">
          <img
            className="h-full w-full max-[426px]:hidden"
            src="https://img5.thuthuatphanmem.vn/uploads/2021/11/26/anh-co-gai-cam-hoa-to-va-dep_031536123.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
