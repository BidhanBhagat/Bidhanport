import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div>
        {/* section one */}
        <section className="pt-22 md:pt-14">
          <div className="text-white">
            <div className="text-center p-12 md:border max-w-[987px] md:mx-auto lg:mx-auto border-transparent">
              <h1 className=" text-5xl font-mono p-3">
                About <span className="text-teal-400">Me</span>
              </h1>
              <p className="pt-2 md:pt-6 md:text-lg text-gray-200">
                As a skilled front-end developer, I bring a deep understanding
                of modern web technologies, a portfolio showcasing impactful
                user interfaces, and a collaborative spirit that aligns with
                Microsoft's culture. My dedication to delivering excellence and
                driving innovation makes me a valuable asset to your team
              </p>
              <button
                className=" mt-10 py-4 border px-6 rounded-full md:px-9"
                href={"/about"}
              >
                Contact me
              </button>
            </div>
          </div>
        </section>

        {/* section two */}
        <section className="text-white pt-20">
          <div className="mx-6 ">
            <div className="bg-gray-900/50 p-14 bg-blend-overlay rounded-2xl bg-center bg-contain lg:py-20 lg:bg-contain bg-no-repeat bg-[url('/about.png')]">
              <h1 className=" text-3xl py-2 lg:text-4xl">
                Our core <span className="text-cyan-400">Principal</span>
              </h1>
              <h2 className="pt-8 pb-2 text-base font-bold lg:text-xl">
                Quality over quantity
              </h2>
              <p className=" text-gray-200">
                We believe in providing affordable design services to businesses
                without compromising on quality. Quality over quantity!
              </p>
              <h2 className="pt-6 pb-2 text-base font-bold lg:text-xl">
                Awesome Customer Service
              </h2>
              <p className=" text-gray-200">
                Delivering exceptional customer service in web development,
                ensuring tailored solutions, clear communication, and timely
                support for your digital success.
              </p>
              <h2 className="pt-6 pb-2 text-base font-bold lg:text-xl">
                Being dependable
              </h2>
              <p className=" text-gray-200">
                Adaptability is the cornerstone of my web development services.
                I excel in crafting flexible solutions that evolve with your
                needs, guaranteeing a dynamic online presence that stands the
                test of time.
              </p>
            </div>
            <div className="hidden">
              <Image src={"/about.png"} width={100} height={200} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
