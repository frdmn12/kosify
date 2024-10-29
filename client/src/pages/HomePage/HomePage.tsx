import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative ">
        <div className="container mx-auto flex px-5 py-24 flex-col items-cente justify-center text-center items-center">
          <h1 className="whitespace-pre-wrap text-center text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent">
            Pantau dan Kelola <br /> Kostmu dengan Mudah
          </h1>
          <p className="mt-4 text-md text-gray-500 ">
            Kelola Kos Anda dengan Satu Klik dan Tingkatkan Kepuasan Penghuni
            Anda
          </p>
          <button className="mt-4 bg-gradient-to-r border border-blue-500 from-blue-500 to-teal-200 text-sm text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:shadow-blue-400 ">
            Let Start Now
          </button>
        </div>
      </section>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] h-[800px] absolute inset-0"
        )}
      />
    </div>
  );
};

export default HomePage;