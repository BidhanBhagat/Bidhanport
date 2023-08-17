import React from "react";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <section className="">
        <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-10 mx-auto">
          <Image src="/photo.png" fill />
        </div>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-50">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl">
            Hi!!! I am{" "}
            <span className=" lg:text-6xl text-6xl text-red-600"> Vidhan</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            As a frontend developer, I blend creativity and code to sculpt
            captivating user interfaces, harmonizing design and functionality
            for immersive digital experiences.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className=" inline-flex justify-center hover:text-white  items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-teal-900 hover:border-none"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      {/* secound section  */}
      <section className=" pb-8">
        <div>
          <h1 className=" text-center text-white text-4xl pt-14 pb-8 font-mono  md:pt-28 md:text-6xl md:pb-12">
            <span className="text-teal-400">Popular</span> Designs
          </h1>
        </div>
        <div className="grid grid-cols-2  gap-4 mx-6 my-3 lg:mx-12">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web1.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web3.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web4.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web5.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/web6.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" text-center text-white pt-10 md:pt-20">
          <button className="bg-teal-400 rounded-full hover:bg-teal-800 px-12 py-3 font-bold text-lg">
            View More
          </button>
        </div>
      </section>

      {/* third section */}
      <section className="mx-6 my-9">
        <div className=" text-white text-center pt-10 ">
          <h2 className="uppercase text-xl">
            The Way you want the way you get!!
          </h2>
          <h1 className=" text-3xl py-2">
            The Services I <span className=" text-cyan-200">Furnish</span>
          </h1>
        </div>

        {/* first sub_section */}

        <div className="mt-6">
          <div className="pt-6 md:flex items-center justify-between md:m-4">
            <div className=" text-white px-2 py-9 shadow-lg shadow-cyan-400 rounded-3xl cursor-pointer">
              <svg
                className=""
                width="88"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <circle cx="47" cy="47" r="29" fill="#FD435A" />
                </g>
                <path
                  d="M39.2482 57.1443H36.8317V54.7265H39.2482V57.1443ZM36.8317 37.8145H39.2482V40.231H36.8317V37.8145ZM53.7437 37.8145H56.1615V40.231H53.7437V37.8145ZM34.4138 54.7265V57.1443C34.4138 58.4611 35.5131 59.5609 36.8317 59.5609H39.2482C40.5663 59.5609 41.6661 58.4611 41.6661 57.1443H47.7053C48.3673 57.1443 48.9138 56.5979 48.9138 55.9345C48.9138 55.2725 48.3673 54.7265 47.7053 54.7265H41.6661C41.6661 53.4079 40.5663 52.3095 39.2482 52.3095V42.6489C40.5663 42.6489 41.6661 41.5496 41.6661 40.231H51.3267C51.3267 41.5496 52.4251 42.6489 53.7437 42.6489V48.6881C53.7437 49.3506 54.2897 49.8966 54.9517 49.8966C55.6151 49.8966 56.1615 49.3506 56.1615 48.6881V42.6489C57.4783 42.6489 58.5781 41.5496 58.5781 40.231V37.8145C58.5781 36.4963 57.4783 35.3966 56.1615 35.3966H53.7437C52.4251 35.3966 51.3267 36.4963 51.3267 37.8145H41.6661C41.6661 36.4963 40.5663 35.3966 39.2482 35.3966H36.8317C35.5131 35.3966 34.4138 36.4963 34.4138 37.8145V40.231C34.4138 41.5496 35.5131 42.6489 36.8317 42.6489V52.3095C35.5131 52.3095 34.4138 53.4079 34.4138 54.7265Z"
                  fill="white"
                />
                <path
                  d="M53.9308 54.3785C53.6997 54.4954 53.5121 54.683 53.3952 54.9136L53.1456 55.4125L52.2901 53.2728L54.4297 54.1283L53.9308 54.3785ZM50.5677 49.9813C50.4164 49.9233 50.2564 49.8952 50.0951 49.9002C49.4431 49.9161 48.9147 50.4562 48.9147 51.1087C48.9147 51.2596 48.9419 51.4105 48.9977 51.551L51.8972 58.8032C52.0807 59.26 52.5252 59.5608 53.0182 59.5608C53.4763 59.5608 53.8959 59.3012 54.0994 58.8916L55.3754 56.3586L57.9084 55.0826C58.3184 54.8787 58.5781 54.4591 58.5781 54.0015C58.5781 53.5085 58.2772 53.0635 57.8204 52.88L50.5677 49.9813Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="94"
                    height="94"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius="1"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.196536 0 0 0 0 0.41785 0 0 0 0.34 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="pl-6">
                <h1 className=" text-3xl py-2 font-mono">Mind blown Design</h1>
                <p className=" text-gray-300">
                  Front-end wizard crafting mind-blowing designs that captivate
                  in just 30 words. A seamless fusion of creativity, innovation,
                  and user-centric experiences.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                className=" "
                src="/img1.png"
                alt=""
                width={1100}
                height={800}
              />
            </div>
          </div>

          {/* secound sub_section */}
          <div className="pt-20 md:flex items-center justify-between md:m-4 gap-2">
            <div className="hidden md:block">
              <Image
                className=""
                src="/img2.png"
                alt=""
                width={1100}
                height={700}
              />
            </div>
            <div className=" text-white px-2 py-9 shadow-lg  shadow-cyan-400 rounded-3xl cursor-pointer">
              <svg
                width="88"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <circle cx="47" cy="47" r="29" fill="#FD435A" />
                </g>
                <g clip-path="url(#clip0)">
                  <path
                    d="M57.7079 49.167C57.4896 48.6271 56.8748 48.3661 56.3348 48.5845C55.7948 48.8028 55.534 49.4175 55.7523 49.9576L56.9944 53.0302L53.3053 51.4039C53.0382 51.2862 52.7343 51.2844 52.4659 51.3989C51.2051 51.9369 49.8545 52.2096 48.4515 52.2096C42.8051 52.2096 39.0121 47.7886 39.0121 43.6595C39.0121 38.9449 43.2466 35.1094 48.4515 35.1094C53.6565 35.1094 57.891 38.9449 57.891 43.6595C57.891 44.0273 57.8567 44.4678 57.7971 44.8678C57.7111 45.4439 58.1085 45.9806 58.6846 46.0666C59.2608 46.1527 59.7974 45.7552 59.8833 45.179C59.9588 44.6733 60.0004 44.1336 60.0004 43.6595C60.0004 40.7944 58.7871 38.1062 56.5841 36.0899C54.4071 34.0973 51.5189 33 48.4515 33C45.3842 33 42.4961 34.0973 40.319 36.0898C38.3503 37.8916 37.1729 40.2303 36.9445 42.752C34.4683 44.3918 33.0004 47.0195 33.0004 49.8499C33.0004 51.618 33.5574 53.2956 34.6178 54.7393L33.0773 58.55C32.9164 58.9479 33.0127 59.4037 33.321 59.7025C33.5218 59.8973 33.7865 60 34.0553 60C34.1989 59.9999 34.3437 59.9707 34.4805 59.9104L38.9222 57.9523C40.0396 58.3682 41.2207 58.5788 42.4398 58.5788C42.4662 58.5788 42.492 58.5768 42.5179 58.5749C44.2812 58.5615 45.9954 58.0977 47.4801 57.2298C48.81 56.4522 49.9039 55.3842 50.6708 54.1228C51.4196 53.9883 52.1514 53.7852 52.8618 53.5137L58.5202 56.008C58.6571 56.0683 58.8018 56.0977 58.9454 56.0977C59.2142 56.0976 59.4789 55.9949 59.6798 55.8001C59.988 55.5013 60.0844 55.0456 59.9235 54.6476L57.7079 49.167ZM42.4399 56.4668C42.4255 56.4668 42.4115 56.4683 42.3972 56.4689C41.3202 56.4634 40.2837 56.2518 39.3156 55.8387C39.0473 55.7241 38.7434 55.726 38.4763 55.8438L36.0064 56.9325L36.8032 54.9616C36.9505 54.5972 36.8829 54.1811 36.628 53.8821C35.6347 52.7168 35.1098 51.3226 35.1098 49.8499C35.1098 48.1645 35.8188 46.5675 37.0593 45.3566C37.4455 47.4621 38.5353 49.4761 40.1792 51.0582C42.2248 53.0269 44.9306 54.1675 47.8523 54.3048C46.4806 55.6551 44.5176 56.4668 42.4399 56.4668Z"
                    fill="white"
                  />
                  <path
                    d="M48.3986 44.7598C48.981 44.7598 49.4532 44.2876 49.4532 43.7051C49.4532 43.1226 48.981 42.6504 48.3986 42.6504C47.8161 42.6504 47.3439 43.1226 47.3439 43.7051C47.3439 44.2876 47.8161 44.7598 48.3986 44.7598Z"
                    fill="white"
                  />
                  <path
                    d="M52.6173 44.7598C53.1998 44.7598 53.672 44.2876 53.672 43.7051C53.672 43.1226 53.1998 42.6504 52.6173 42.6504C52.0348 42.6504 51.5626 43.1226 51.5626 43.7051C51.5626 44.2876 52.0348 44.7598 52.6173 44.7598Z"
                    fill="white"
                  />
                  <path
                    d="M44.1798 44.7598C44.7623 44.7598 45.2345 44.2876 45.2345 43.7051C45.2345 43.1226 44.7623 42.6504 44.1798 42.6504C43.5973 42.6504 43.1251 43.1226 43.1251 43.7051C43.1251 44.2876 43.5973 44.7598 44.1798 44.7598Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="94"
                    height="94"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius="1"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.196536 0 0 0 0 0.41785 0 0 0 0.34 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0">
                    <rect
                      width="27"
                      height="27"
                      fill="white"
                      transform="translate(33 33)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="pl-6">
                <h1 className=" text-3xl py-2 font-mono">
                  Communication Matters
                </h1>
                <p className=" text-gray-300">
                  I craft websites that effortlessly engage customers through
                  intuitive interfaces, ensuring seamless communication and a
                  delightful user experience.
                </p>
              </div>
            </div>
          </div>

          {/* third sub_section */}
          <div className="pt-20 md:flex items-center justify-between md:m-4 gap-2">
            <div className=" text-white px-2 py-9 shadow-lg shadow-cyan-400 rounded-3xl cursor-pointer">
              <svg
                width="88"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <circle cx="47" cy="47" r="29" fill="#FD435A" />
                </g>
                <path
                  d="M46.5 35C40.1487 35 35 40.1487 35 46.5C35 52.8512 40.1487 58 46.5 58C52.8512 58 58 52.8512 58 46.5C57.9932 40.1516 52.8484 35.0068 46.5 35ZM46.5 56.3571C41.056 56.3571 36.6428 51.9439 36.6428 46.5C36.6428 41.056 41.056 36.6428 46.5 36.6428C51.9439 36.6428 56.3571 41.056 56.3571 46.5C56.3512 51.9415 51.9415 56.3512 46.5 56.3571Z"
                  fill="white"
                />
                <path
                  d="M46.5 39.1072C46.0463 39.1072 45.6785 39.4749 45.6785 39.9286V45.6786H39.9286C39.4749 45.6786 39.1071 46.0464 39.1071 46.5001C39.1071 46.9538 39.4749 47.3215 39.9286 47.3215H46.5C46.9536 47.3215 47.3214 46.9537 47.3214 46.5V39.9286C47.3214 39.4749 46.9536 39.1072 46.5 39.1072Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="94"
                    height="94"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius="1"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.196536 0 0 0 0 0.41785 0 0 0 0.34 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="pl-6">
                <h1 className=" text-3xl py-2 font-mono">
                  No More Missed Deadlines
                </h1>
                <p className=" text-gray-300">
                  Reliable front-end developer ensuring on-time project
                  Delivery,delivering projects on time, every time. With
                  meticulous planning and efficient execution, rest assured.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                className=""
                src="/img3.png"
                alt=""
                width={1100}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* pre footer_section */}
      <section className="pt-24 md:pt-32">
        <div className="text-white m-4 bg-gray-700 bg-blend-overlay rounded-2xl bg-cover bg-no-repeat bg-[url('/footer.jpg')]  md:bg-bottom md:m-0 md:py-16">
          <div className="text-center p-12 md:border max-w-[987px] md:mx-auto lg:mx-auto border-transparent">
            <h1 className=" text-5xl font-mono p-3">Why <span className="text-teal-400">Me</span></h1>
            <p className="pt-2 md:pt-6 md:text-lg text-gray-200">
              As a skilled front-end developer, I bring a deep understanding of
              modern web technologies, a portfolio showcasing impactful user
              interfaces, and a collaborative spirit that aligns with
              Microsoft's culture. My dedication to delivering excellence and
              driving innovation makes me a valuable asset to your team
            </p>
            <button className=" mt-10 py-4 border px-6 rounded-full md:px-9" href={"/about"}>Contact me</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
