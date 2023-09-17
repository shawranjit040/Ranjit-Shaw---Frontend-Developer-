import React from "react";

const imagesArray = [
  {
    img:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_16_091523_DSC_5926_mobile_58144b5d32.jpg",
    name: "STARLINK MISSION",
    status: "RECENT LAUNCH",
  },
  {
    img:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_6_Mobile_186eac8cb2.jpg",
    name:  (
      <>
        DRAGON AND CREW-6 <br /> RETURN TO EARTH
      </>
    ),
    status: "COMPLETED MISSION",
  },
  {
    img:
    'https://sxcontent9668.azureedge.us/cms-assets/assets/STARSHIP_Testflight_MOBILE_3be065456e.jpg',
    name: "STARSHIP FLIGHT TEST",
    
  }
  
];

export default function Homepage() {
  return (<>
    <div className="relative text-white">
      {imagesArray.map((item, index) => (
        <div
          key={index}
          className="container relative text-white"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="absolute bottom-20 left-20">
            <p className="text-2xl font-normal">{item.status}</p>
            <h1 className="text-5xl font-semibold mt-2">{item.name}</h1>
            <button className="bg-transparent border-2 border-white px-12 py-3 text-lg font-normal mt-4">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>

    <footer>
      <ul className="flex justify-center p-8 gap-10 text-white text-xs bg-black" >
        <li>SPACEX © 2023</li>
        <li>PRIVACY POLICY</li>
        <li>SUPPLIERS</li>
      </ul>
    </footer>

    </>
  );
}
