import Image from "next/image";
import someImage from "./assets/landing_page/img2.png";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";
import midLeft from "./assets/landing_page/mid-left.svg";
import SvgComponent from "./components/HeroRightSvg";
import ContentSection from "./components/ContentSection";
import InfoGraphic from "./components/InfoGraphic";
import Quote from "./components/Quote";
import VolunteerButton from "./components/VolunteerButton";

export default function Home() {
  return (
    <main className="z-10 relative w-full flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex justify-between w-full ">
        <div className="relative  aspect-square sm:h-[400px] md:h-[500px] lg:h-screen text-[48px] sm:text-[62px] md:text-[96px] lg:text-[128px] flex flex-col pl-10 lg:pl-40 font-light top-[20vh]">
          <p className="leading-none">REUSE</p>
          <p className="leading-none">RETHINK</p>
          <div className="flex text-restore-pink leading-none">
            <div className="font-bold">RE</div>STORE
            <div className="font-bold">.</div>
          </div>
        </div>
        <div></div>
      </div>

      {/* <Image
        src={heroRight}
        alt={""}
        className="z-0 absolute top-0 right-0 w-1/2 mix-blend-multiply line-animation"
      /> */}

      <div className="z-0 absolute top-0 right-0 w-1/2 h-full mix-blend-multiply">
        <SvgComponent />
      </div>

      <div className="w-full z-50 flex flex-col items-center gap-20 lg:gap-32 px-10 lg:px-20 pt-32">
        <ContentSection
          leftImage={undefined}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <InfoGraphic isLeftLayout={true} />

        <ContentSection
          leftImage={someImage}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        {/* <BlockComponent isLeftLayout={false} /> */}

        <div className="z-0 absolute bottom-1/3 left-0 w-full h-96 flex justify-between ">
          <div className=" bottom-0 left-0 flex items-end">
            <Image
              src={midLeft}
              alt={""}
              objectFit="contain"
              className="mix-blend-multiply w-1/2"
            />
          </div>
        </div>

        <ContentSection
          leftImage={undefined}
          rightImage={someImage}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <InfoGraphic isLeftLayout={true} />
        <Quote
          content="“During my time at Restore I have made friends for life!”"
          author={"- Volunteer name"}
        />
        <VolunteerButton />
      </div>

      <div className="absolute bottom-0 w-full h-96 flex justify-between ">
        <div className=" bottom-0 left-0 flex items-end">
          <Image
            src={bottomLeft}
            alt={""}
            objectFit="contain"
            className="mix-blend-multiply w-1/2"
          />
        </div>
        <div className=" bottom-0 left-0 flex justify-end items-center">
          <Image
            src={bottomRight}
            alt={""}
            objectFit="contain"
            className="mix-blend-multiply w-1/2"
          />
        </div>
      </div>
    </main>
  );
}
