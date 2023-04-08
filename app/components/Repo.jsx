import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepo = async (name) => {
  const response = await fetch(`https://api.github.com/repos/develad/${name}`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  });
  const repo = await response.json();
  return repo;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  //   console.log(repo);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar color='gold' />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch color='ForestGreen' />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye color='CornflowerBlue' />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
