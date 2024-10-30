import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const BLUR_FADE_DELAY = 0.04;

const HomePage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative" id="hero">
        <div className="container mx-auto flex px-5 py-24 flex-col items-cente justify-center text-center items-center ">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="whitespace-pre-wrap text-center text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent break-words p-4">
              Pantau dan Kelola <br /> Kostmu dengan Mudah
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="mt-2 text-md text-gray-500 ">
              Kelola Kos Anda dengan Satu Klik dan Tingkatkan Kepuasan Penghuni
              Anda
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <button className="z-30 mt-4 bg-gradient-to-r border border-blue-500 from-blue-500 to-teal-200 text-sm text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:shadow-blue-400 ">
              Let Start Now
            </button>
          </BlurFade>
        </div>
      </section>

      <section
        id="demo"
        className="mx-auto flex px-5 flex-col justify-center text-center items-center"
      >
        <div className="relative justify-center items-center flex ">
          <HeroVideoDialog
            className="dark:hidden block w-3/4 z-10"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>

      <section id="problem" className="mx-auto text-center my-10 py-24">
        <h2 className="whitespace-pre-wrap text-center text-sm font-semibold tracking-tighter bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent break-words">
          PROBLEM
        </h2>
        <p className="font-bold text-3xl text-black ">
         Kenapa Kosify ?
        </p>
      </section>

      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] h-[800px] absolute inset-0 z-0"
        )}
      />
    </div>
  );
};

export default HomePage;
