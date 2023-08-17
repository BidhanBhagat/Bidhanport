import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <section className=" pb-8">
        <div>
          <h1 className=" text-center text-white text-4xl pt-14 pb-8 font-mono  md:pt-28 md:text-6xl md:pb-12">
            <span className="text-teal-400">Our</span> Work
          </h1>
        </div>
        {/*image section  */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
          <div>
            <Image
              width={500}
              height={400}
              className="  rounded-lg"
              src="/web1.png"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web2.png" alt="" />
          </div>
          <div>
            <Image
              width={500}
              height={600}
              className=" max-w-full rounded-lg"
              src="/web1.png"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web5.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web4.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web6.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web7.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web8.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web9.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web10.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web8.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="web8.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
