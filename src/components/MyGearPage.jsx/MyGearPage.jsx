import React from "react";
import MyGear from "../MyGear/MyGear";
import MyGearPc from "../MyGear/MyGearPc";
import MyGearThree from "../MyGear/MyGearThree";

function MyGearPage() {
  const recording = [
    {
      image: "https://www.codewithharry.com/img/gears/canon.webp",
      heading: "Canon EOS 80D",
      para: "I bought it back in 2018 for my US trip and have been using it since then. If you want to buy this in 2022, go for the EOS 90D (Same camera - Updated version). This is an amazing camera given that its still working exactly like it was working when I bought it. I use it for my YouTube tutorial videos as well. I use a USB cable, EOS utility software to make videos.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/iphone.webp",
      heading: "iPhone 13 Pro Max 256GB",
      para: "I have always dreamt of buying an iPhone for myself. Back in 2021, I finally bought my first ever iPhone and its been a great phone so far. I use it for my YouTube videos and also for my Instagram stories. I also use it to take photos for my YouTube thumbnails.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/lenovo.webp",
      heading: "Lenovo 300 FHD Webcam",
      para: "Sometimes I also use this Webcam to record videos. This has a great camera, and the microphone on this device is also good. This is a good webcam at its price.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/yeti.webp",
      heading: "Blue Yeti",
      para: "This is my main microphone, and I got this back in 2021. Before this, I used Snowball ICE to record the videos, but I wanted to upgrade, so I bought this microphone. I have used it for all of my videos since then. This microphone has a crisp audio quality and good noise suppression.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/snowball.webp",
      heading: "Blue Snowball ICE",
      para: "This is my secondary microphone and I got this back in 2016 when I started YouTube. I used it for all of my videos back then. This has a crisp audio quality and good noise suppression. I still use this Microphone.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/boya.webp",
      heading: "Boya BY-M1",
      para: "This is another mic I use for my videos. I got this when I was a little tight on my budget. This microphone is what I can say is value for money. This has good audio quality and its easy to setup. But soon I stopped using it and upgraded due to its limited battery backup.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/rode.webp",
      heading: "Rode SmartLav+",
      para: "It is a good lavalier condenser microphone, but it is a bit costly. I bought it as an upgrade to my Boya BY-M1. It is easy to setup, and sometimes I use it with my iPhone to record audio.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/ipad.webp",
      heading: "Apple iPad Pro with Apple M1 chip 2021",
      para: "I got this back on 2021. I bought it for taking notes and making videos. It is a good product altogether but I haven't used it much.",
    },
  ];
  const pc = [
    {
      image: "https://www.codewithharry.com/img/gears/macbook.webp",
      heading: "2021 Apple MacBook Pro (14-inch)",
      para: "I purchased this in 2022 and this has been my primary laptop since then. Being a content creator this is one of my best decisions and, long story short, this laptop has never disappointed me.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/asus.webp",
      heading: "ASUS ROG Strix G17 (2021)",
      para: "I purchased this in 2021 and this has been my primary laptop since then. I upgraded its RAM to 64GB (being a content creator) and, long story short, this laptop has never disappointed me.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/intel.webp",
      heading: "Intel Core i9-10900K",
      para: "This is my main CPU. This beast is packed with 10 cores and 20 threads. It is a great CPU for those who want to do 4K encoding and video editing. I bought it in 2021 and it is still going strong.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/nvidia.webp",
      heading: "Nvidia GeForce RTX 3070 8GB",
      para: "This is my GPU. This beast is packed with 8GB of VRAM. I literally had to wait for 2 months to get this GPU back in 2021, when the GPU crisis was at its peak. I have no complaints regarding this GPU. It delivers what it promises.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/adata.webp",
      heading: "XPG Adata GAMMIX D30 64GB (4x16GB)",
      para: "This is my RAM. At first I had only 32GB of RAM, but then I upgraded it to 64GB. This RAM runs at 3600MHz, and it is a great RAM in terms of performance.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/msi.webp",
      heading: "MSI MPG Z490 Gaming Plus Motherboard",
      para: "This is my motherboard. I bought it for my Beast PC build and it is still going strong. This motherboard has lots of USB ports and, on top of that, it has 2 M.2 NVME slots, which is great for those who want to install 2 SSDs.",
    },
  ];
  const three = [
    {
      image: "https://www.codewithharry.com/img/gears/table.webp",
      heading: "Monarch Elevate Height Adjustable Table",
      para: "When you are working for hours, it is recommended that you use a standing desk. I love switching between standing and sitting positions while I am working for long hours on my projects. Sitting for a long time is not good for your knees, for your spine, and for your overall posture too.",
    },
    {
      image: "https://www.codewithharry.com/img/gears/chair.webp",
      heading: "Green Soul Beast Racing Edition Ergonomic Gaming Chair",
      para: "Buying this was one of the best decisions. It feels amazing and very comfortable. If you can afford it you can go for it!",
    },
    {
      image: "https://www.codewithharry.com/img/gears/rest.webp",
      heading: "Green soul stool",
      para: "This helps when I code for long hours. This is for resting your legs while you are sitting on a chair for hours. It really helps when my leg sprains.",
    },
  ];
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl  font-[500] text-[#7E22CE] tracking-wider  text-center mt-16 mb-2">
            🛠MY GEAR🛠
          </h1>
          <p className="text-center opacity-75">

            This is what I use to create my content. I am not sponsored by any
            of these companies.
          </p>
        </div>
        <div>
          <h1 className=" mt-16 text-4xl ml-10 font-[500] ">
            🎥 Recording Equipments
          </h1>
        </div>
        <div className="flex justify-evenly  items-center flex-wrap ">
          {recording.map((data,index) => (
            <MyGear
            key={index}
              recordingImage={data.image}
              recordingHeading={data.heading}
              recordingPara={data.para}
            />
          ))}
        </div>
        <div>
          <h1 className=" mt-16 text-4xl ml-10 font-[500] ">🖥 PC Specs</h1>
        </div>
        <div className="flex justify-evenly  items-center flex-wrap ">
          {pc.map((data,index) => (
            <MyGearPc
              key={index}
              pcImage={data.image}
              pcHeading={data.heading}
              pcPara={data.para}
            />
          ))}
        </div>
        <div>
          <h1 className=" mt-16 text-4xl ml-10 font-[500] ">
🛋 Ergonomics
</h1>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {three.map((data,index)=>(
            <MyGearThree
            key={index}
              threeImage={data.image}
              threeHeading={data.heading}
              threePara={data.para}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyGearPage;
