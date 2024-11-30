import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import mainImage from "../public/team.jpg";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} flex items-center min-h-screen py-6 px-2 bg-green-200`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-green-200">
        <div className="text-center md:text-left">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-4">
            Welcome to the URL Shortener
          </h1>
          <p className="text-base text-center text-gray-600 mb-6">
            Simplify your links and share them effortlessly. Transform long URLs
            into compact, easy-to-manage links with our URL Shortener.
          </p>
          <div className="flex flex-row justify-center md:flex-row gap-4">
            <Link href="/shorten">
              <button className="px-4 py-2 text-sm shadow hover:shadow-lg bg-green-600 text-white rounded-md hover:bg-green-500 transition">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Numan-star">
              <button className="px-4 py-2 text-sm shadow hover:shadow-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={mainImage}
            alt="main_image"
            width={700}
            height={600}
            className="mix-blend-darken"
            priority
          />
        </div>
      </div>
    </main>
  );
}
