export const Footer = () => {
  return (
    <footer className="px-5 border-t border-black dark:border-white text-sm md:text-md bg-white dark:bg-zinc-900">
      <div className="px-3 md:px-0 text-center text-black dark:text-white flex justify-center items-center gap-2 py-4 md:py-8">
        <p>
          This website was created for Final Project 1 of Hacktiv8 Kampus
          Merdeka. The source code is available on{" "}
          <a
            href="https://github.com/Final-Project-Hacktiv8-3/Final-Project-1"
            target="_blank"
            className="underline"
            rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};
