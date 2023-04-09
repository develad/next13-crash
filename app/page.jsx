import React from "react";
import Link from "next/link";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    // <div>
    //   <h1>Welcome to our agency media</h1>
    //   <ul>
    //     <li>
    //       <Link href='/'>Home</Link>
    //     </li>
    //     <li>
    //       <Link href='/about'>About</Link>
    //     </li>
    //     <li>
    //       <Link href='/about/team'>About The Team</Link>
    //     </li>
    //   </ul>
    // </div>

    <>
      <h1>Welcome To Agency Media</h1>
      <Courses />
    </>
  );
};

export default HomePage;

// https://www.traversymedia.com/blog/next-js-13-crash-course-app-directory-server-components-more
