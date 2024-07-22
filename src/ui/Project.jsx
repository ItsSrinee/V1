import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { teslaHomepage, teslaModelY } from "../assets";
import ProjectsLinks from "./ProjectsLInks";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One: Tesla Homepage Design */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://www.figma.com/file/QFmhB0qVW2BN098DUF7w7z/Untitled?type=design&node-id=19%3A527&t=fQdWTqe6qpC8pzaK-1"
            target="_blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={teslaHomepage}
              alt="Tesla Homepage Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tesla Homepage Design</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              Designed the front page of the Tesla homepage using Figma. 
              View the design <a href="https://www.figma.com/file/QFmhB0qVW2BN098DUF7w7z/Untitled?type=design&node-id=19%3A527&t=fQdWTqe6qpC8pzaK-1" className="text-designColor">here</a>.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Figma</li>
            </ul>
            <ProjectsLinks 
              figmaLink="https://www.figma.com/file/QFmhB0qVW2BN098DUF7w7z/Untitled?type=design&node-id=19%3A527&t=fQdWTqe6qpC8pzaK-1"
              projectLink="https://www.figma.com/file/QFmhB0qVW2BN098DUF7w7z/Untitled?type=design&node-id=19%3A527&t=fQdWTqe6qpC8pzaK-1"
              // githubLink="https://github.com/srineevasan"
            />
          </div>
        </div>

        {/* Project Two: Tesla Model Y */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://www.figma.com/file/e0VN02vRTGHDYT0bWHpRAz/Tesla-Model-Y?type=design&node-id=1%3A2&t=A4iMoipM4tEhwHnO-1"
            target="_blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={teslaModelY}
              alt="Tesla Model Y"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tesla Model Y</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              Designed the Tesla Model Y page using Figma, focusing on user experience and visual appeal.
              View the design <a href="https://www.figma.com/file/e0VN02vRTGHDYT0bWHpRAz/Tesla-Model-Y?type=design&node-id=1%3A2&t=A4iMoipM4tEhwHnO-1" className="text-designColor">here</a>.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Figma</li>
            </ul>
            <ProjectsLinks 
              figmaLink="https://www.figma.com/file/e0VN02vRTGHDYT0bWHpRAz/Tesla-Model-Y?type=design&node-id=1%3A2&t=A4iMoipM4tEhwHnO-1"
              projectLink="https://www.figma.com/file/e0VN02vRTGHDYT0bWHpRAz/Tesla-Model-Y?type=design&node-id=1%3A2&t=A4iMoipM4tEhwHnO-1"
              // githubLink="https://github.com/srineevasan"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
