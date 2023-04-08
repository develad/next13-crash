import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";
// Suspense is loading all that can be loaded to the page

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      {/* <h2>{name}</h2>
      <p>Repo Details</p> */}

      <Link
        href='/code/repos'
        className='btn btn-back'
      >
        Back To Repositories
      </Link>
      {/* Fallback can be whatever component we want to load */}
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
