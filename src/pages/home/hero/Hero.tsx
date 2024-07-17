// // import React from "react";
// // import { Row, Col, Typography, Button } from "antd";
// // import "./Hero.css";

// // const { Title, Paragraph } = Typography;

// // const HeroSection: React.FC = () => {
// //   return (
// //     <div
// //       className="hero-section md:my-[80px] pt-[80px] sm:my-[60px] my-[20px]"
// //       style={{
// //         color: "#F85606",
// //         minHeight: "70vh",
// //         display: "grid",
// //         gridTemplateColumns: "2",
// //         gap: "16px",
// //         // justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Row justify="center" align="middle">
// //         <Col xs={24} sm={12} md={12} lg={12} xl={12}>
// //           <div className="hero-content">
// //             <Title className="text-center" level={1}>
// //               Discover the Best <span>Keyboards</span>
// //             </Title>
// //             <Paragraph>
// //               Explore our collection of premium keyboards designed for
// //               performance and style.
// //             </Paragraph>
// //             <Button type="primary" size="large">
// //               Shop Now
// //             </Button>
// //           </div>
// //         </Col>
// //         <Col xs={0} sm={12} md={12} lg={12} xl={12}>
// //           <div className="hero-image">
// //             {/* Insert your hero image or illustration here */}
// //             <img
// //               className="rounded-xl"
// //               src="https://i.ibb.co/kDqpnsj/keyboard1.webp"
// //               alt="Hero Image"
// //               style={{ width: "100%", height: "auto" }}
// //             />
// //           </div>
// //         </Col>
// //       </Row>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import React from "react";
// import { Button } from "antd";

// const HeroSection = () => {
//   return (
//     <div className="hero-container bg-white grid grid-cols-2 w-full">
//       <div className="hero-content mx-auto px-4 py-24 flex flex-col items-center text-center md:flex-row md:text-left  md:items-center md:space-x-10">
//         <div className="hero-text">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Discover the Best Keyboards
//           </h1>
//           <p className="text-lg text-gray-700 mb-6">
//             Explore our collection of premium keyboards designed for performance
//             and style.
//           </p>
//           <Button
//             type="primary"
//             size="large"
//             className="bg-blue-500 hover:bg-blue-600 border-none"
//           >
//             Shop Now
//           </Button>
//         </div>
//         <div className="hero-image mt-8 md:mt-0 h-[156px] w-full">
//           <img
//             src="https://i.ibb.co/dGJCrYw/download-3.jpg"
//             alt="Mechanical Keyboard"
//             className="rounded-lg shadow-lg w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import React from "react";

// const Hero = () => {
//   return (
//     <ResizablePanelGroup
//       direction="horizontal"
//       className="max-w-md rounded-lg border"
//     >
//       <ResizablePanel defaultSize={100}>
//         <div className="flex h-[200px] items-center justify-center p-6">
//           <span className="font-semibold">One</span>
//         </div>
//       </ResizablePanel>
//       <ResizableHandle />
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction="vertical">
//           <ResizablePanel defaultSize={25}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Two</span>
//             </div>
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={75}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Three</span>
//             </div>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   );
// };

// export default Hero;

// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <div className="relative w-full h-screen">
//       <img
//         src="https://via.placeholder.com/1920x1080" // Replace with your image URL
//         alt="Hero Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
//         <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
//           Welcome to Our Website
//         </h1>
//         <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-center">
//           Discover amazing content and experiences
//         </p>
//         <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://i.ibb.co/dGJCrYw/download-3.jpg" // Replace with your keyboard image URL
        alt="Keyboard Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          Discover the Best Mechanical Keyboards
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-center">
          Explore top brands and high-quality products
        </p>
        <div className="mt-8 flex space-x-4">
          <Link to="/products">
            {" "}
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg">
              Shop Now
            </button>
          </Link>
          <Link to="/about">
            {" "}
            <button className="px-6 py-3 bg-black hover:bg-gray-700 text-white font-bold rounded-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
