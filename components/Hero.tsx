import React from "react";
import { Button } from "../app/page";

function Hero() {
  return (
    <div className="carousel relative h-screen flex mx-auto">
      <div className="z-20 box-border my-auto mx-auto p-10">
        <div className="p-5">
          <h1 className="text-center font-black font-sans text-8xl">
            {" "}
            <span className="text-red-800">OASIS</span> Fitness Club
          </h1>
        </div>
        <div className=" p-5 max-w-5xl box-border">
          <p className="text-lg text-center font-bold font-sans ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            accusamus magnam, reiciendis dicta consequuntur debitis facilis at
            fuga pariatur hic, inventore, provident beatae aliquam. Iusto neque,
            hic ipsa qui fugiat fuga auto
          </p>
        </div>
        <div className="max-w-lg box-border mx-auto my-auto flex items-center justify-between p-5 ">
          <Button color="red" size="lg" variant="gradient">
            Learn More!
          </Button>
          <Button color="red" size="lg" variant="gradient">
            Book your free session!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
