import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  const data = await fetch("https://api.github.com/users/develad/repos");
  const repos = await data.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();
  return <div>{repos[0].name}</div>;
};

export default ReposPage;
