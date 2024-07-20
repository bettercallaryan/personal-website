import Image from "next/image";
import Link from "next/link";

import profilepic from "../../public/aryansen.jpg";
import { LINKS } from "@/lib/constants";
import { BagSVG, LocationSVG } from "@/components/icons";

export default function OldHeroSection() {
  return (
        <section className="rounded-2xl p-4 backdrop-blur-lg bg-white/10 text-white">
          <figure className="flex flex-col-reverse justify-between gap-3 sm:flex-row group">
            <figcaption className="font-medium">
              <p className="text-lg" lang="en">
                Aryan Sen
              </p>
              <p className="text-lg" lang="hi">
                आर्यन सेन
              </p>
            </figcaption>
            <Image
              alt="🙋‍♂️"
              fetchPriority="high"
              width="200"
              height="200"
              className="size-[75px] flex-shrink-0 select-none rounded-[2em] text-transparent bg-contain  group-hover:mix-blend-normal transition-all duration-300 ease-in-out"
              draggable="false"
              src={profilepic}
              placeholder="blur"
            />
          </figure>

          <div className="mlb-3 sm:mbs-0 space-y-0.5">
            <p className="flex items-center gap-1 text-sm">
              <LocationSVG />
              <span>
                Raipur(Chhattisgarh), India
                <span className=""> · 1,000 km away</span>
              </span>
            </p>
            <p className="flex items-center gap-1 text-sm tabular-nums">
              <BagSVG />
              <span>Engineer × Data Science Student</span>
            </p>
          </div>

          <ul className="max-is-[22.8rem] flex flex-wrap gap-1.5">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  target="_blank"
                  rel={link.rel}
                  title={link.title}
                  className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                  href={link.href}
                >
                  <figure className="flex size-4 items-center justify-center">
                    {link.icon}
                  </figure>
                  <span className="select-none text-sm">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mbs-4">
            I also have a {""}
            <Link className="underline" href="/blog">
              blog
            </Link>
            {""} here
          </p>
        </section>
  );
}
