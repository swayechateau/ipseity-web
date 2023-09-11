import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between px-5 pt-10 pb-32 md:px-20 md:pb-10">
      <div id="socials" className="mx-auto space-x-3">
        <Link href="https://github.com/swayechateau" passHref className="inline-block text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
        </Link>
        <Link href="https://mas.to/@mercylessreap" passHref className="inline-block text-gray-400 hover:text-blue-400">
            <span className="sr-only">Mastodon</span>
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z"
              ></path>
            </svg>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCd1-cM1G-kwXGd0vUkUPk4g"
          passHref
          className="inline-block text-gray-400 hover:text-red-500"
        >
            <span className="sr-only">YouTube</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
            </svg>
        </Link>
        <Link href="https://twitter.com/SwayeChateau" passHref className="inline-block text-gray-400 hover:text-blue-300">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-between text-xl md:flex-row">
        <div id="copyright" className="p-2">
          <p className="text-white">
            Made with <span className="text-red-500">❤</span> by
            <Link href="https://blog.swayechateau.com" passHref className="text-white hover:text-green-400 font-bold">
              <span>Swaye Chateau</span>
            </Link>
          </p>
        </div>
        <div id="copyright" className="p-2">
          <p className="text-white">
            &copy; 2022 
            <Link href="/" passHref className="font-bold text-white hover:text-green-400">
              <span> SC Portfolio</span>
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
