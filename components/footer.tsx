import { socialMedia } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/magic-button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10 mb-[100px] md:mb-auto">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help your
          achieve your goals.
        </p>

        <Link
          href="mailto:sanidhya.verma12345@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Sanidhya
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="size-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.id}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
