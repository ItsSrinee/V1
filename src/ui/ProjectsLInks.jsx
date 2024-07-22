import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandFigma } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

const ProjectsLinks = ({ figmaLink, projectLink, githubLink }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
      {figmaLink && (
        <a
          href={figmaLink}
          target="_blank"
          className="hover:text-designColor duration-200"
        >
          <TbBrandFigma />
        </a>
      )}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          className="hover:text-designColor duration-200"
        >
          <TbBrandGithub />
        </a>
      )}
      <a
        className="hover:text-designColor duration-300"
        href={projectLink}
        target="_blank"
      >
        <RxOpenInNewWindow />
      </a>
      {/* <a
        className="hover:text-designColor duration-300"
        href="https://github.com/"
        target="_blank"
      >
        <AiOutlineYoutube />
      </a> */}
     </div>
  );
};

export default ProjectsLinks;