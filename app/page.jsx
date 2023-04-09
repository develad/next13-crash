"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
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
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;

// https://www.traversymedia.com/blog/next-js-13-crash-course-app-directory-server-components-more
