import { profileImg } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  const techArray = [
    { title: "Java", link: "https://www.oracle.com/java/" },
    { title: "PHP", link: "https://www.php.net/" },
    { title: "Angular", link: "https://angular.io/" },
    { title: "React", link: "https://reactjs.org/" },
    { title: "Flutter", link: "https://flutter.dev/" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "Node.js", link: "https://nodejs.org/" },
    { title: "MySQL", link: "https://www.mysql.com/" },
    { title: "Firebase", link: "https://firebase.google.com/" },
  ];

  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Srinee Vasan R. I am a <span className="text-white font-semibold">software developer</span> focused on turning ideas into <span className="text-white font-semibold">elegant digital experiences</span>. I specialize in delivering <span className="text-white font-semibold">high-quality solutions</span> through innovative features and efficient debugging.
          </p>
          <p>
            My background includes extensive experience in <span className="text-white font-semibold">backend development</span> with Java and PHP, and <span className="text-white font-semibold">frontend development</span> using Angular and React. I have also worked on <span className="text-white font-semibold">mobile app development</span> with Flutter and Android SDK, and have a strong foundation in <span className="text-white font-semibold">designing scalable systems</span> and <span className="text-white font-semibold">cloud solutions</span>.
          </p>
          <p>
            Here are some of the technologies I’ve been working with recently:
          </p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {techArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
