import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image src='https://images.unsplash.com/photo-1448275917012-45a8dfb184cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='/'
          layout='responsive'
          width='677'
          height='641'
          />
        </div>
        <div className="w-full h-full">
            <Image src='https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
            alt="/"
            width='215'
            height='217'
            layout="responsive"
            objectFit="cover"
            />
        </div>
        <div className="w-full h-full">
            <Image src='https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
            alt="/"
            width='215'
            height='217'
            layout="responsive"
            objectFit="cover"
            />
        </div>
        <div className="w-full h-full">
            <Image src='https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
            alt="/"
            width='215'
            height='217'
            layout="responsive"
            objectFit="cover"
            />
        </div>
        <div className="w-full h-full">
            <Image src='https://images.unsplash.com/photo-1503516459261-40c66117780a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' 
            alt="/"
            width='215'
            height='217'
            layout="responsive"
            objectFit="cover"
            />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
