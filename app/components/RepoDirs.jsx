import Link from "next/link";

const fetchRepoContents = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Waiting for 3 seconds
  const response = await fetch(
    `https://api.github.com/repos/develad/${name}/contents`,
    {
      next: {
        revalidate: 60, // 60 seconds
      },
    },
  );
  const contents = await response.json();
  return contents;
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  // console.log(dirs);
  return (
    <>
      {dirs.length !== 0 && (
        <>
          <h3>Directories</h3>
          <ul>
            {dirs.map((dir) => (
              <li key={dir.path}>
                <Link
                  href={`${dir._links.html}`}
                  target='_blank'
                >
                  {dir.path}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default RepoDirs;
