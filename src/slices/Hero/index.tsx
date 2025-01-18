import { Bounded } from "@/components/Bounded";
import { Button } from "@/components/Button";
import { TextSplitter } from "@/components/TextSpliter";
import { asText, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <div className="grid ">
        
        <div className="grid h-screen place-items-center">

          <div className="grid auto-rows-min place-items-center text-center ">
            <h1 className="hero-header lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-opacity-90 md:text-[9rem] text-orange-500">
              <TextSplitter text={asText(slice.primary.heading)} wordDisplayStyle="block" className="hero-header-word" />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl"> 

            <PrismicRichText field={slice.primary.sub_heading} />
            </div>
            <div className="hero-body text-xl font-normal text-sky-950">
            <PrismicRichText field={slice.primary.body} />
            </div>
           <Button buttonLink={slice.primary.buttonlink} buttonText={slice.primary.button} className="hero-button mt-12" />
          </div>
        </div>

        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">

          <PrismicImage className="md:hidden w-full " field={slice.primary.cans} />
          <div className="">

          <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950  lg:text-8xl">

          <TextSplitter text={asText(slice.primary.heading2)} wordDisplayStyle="inline-block" />
          </h2>
          <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">

          <PrismicRichText field={slice.primary.body2} />
          </div>
          </div>
        </div>

      </div>
    </Bounded>
  );
};

export default Hero;
