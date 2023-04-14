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
  // console.log(repo);
  return repo;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  //   console.log(repo);

  return (
    <>
      <Link
        href={repo.html_url}
        target='_blank'
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        <h2>{repo.name}</h2>
      </Link>
      <p>{repo.description}</p>
      {repo.homepage && (
        <p>
          Link To Site:
          <Link
            href={repo.homepage}
            target='_blank'
            style={{
              textDecoration: "none",
              color: "blue",
            }}
          >
            {repo.homepage}
          </Link>
        </p>
      )}
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
