import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState("Trioworkz");

  const handleSelection = (company) => {
    setSelectedCompany(company);
  };

  return (
    <Container id="experience" className="max-w-3xl mx-auto py-10 lg:py-24 gap-16">
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Company Selection */}
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleSelection("Trioworkz")}
            className={`${
              selectedCompany === "Trioworkz"
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Trioworkz
          </li>
          <li
            onClick={() => handleSelection("Cognizant")}
            className={`${
              selectedCompany === "Cognizant"
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Cognizant
          </li>
        </ul>
        
        {/* Experience Details */}
        <div className="flex-1">
          {selectedCompany === "Trioworkz" && (
            <WorkCard
            jobTitle="Junior Software Developer"
            jobTag="@Trioworkz Technologies Pvt Ltd"
            date="Aug 2023 - Present"
            detailsOne="• Sole developer for 'Imeegi,' handling end-to-end development and UI design using Flutter and Android."
            detailsTwo="• Developed and maintained a cross-platform app for mobile and Android TV, optimizing performance and adapting UI for larger screens."
            detailsThree="• Led the development of a Moodle-based LMS using PHP and MySQL, and built a web application with Laravel."
            detailsFour="• Experience in designing large-scale distributed systems and cloud solutions."
            detailsFive="• Technologies: Flutter, Android SDK, Android TV development tools, PHP, MySQL."
          />
          )}
          {selectedCompany === "Cognizant" && (
            <WorkCard
              jobTitle="Java Full Stack Engineer (Intern)"
              jobTag="@Cognizant Technology Solutions"
              date="Oct 2022 - Mar 2023"
              detailsOne="• Demonstrated proficiency in back-end development, acquiring expertise in Java with the Spring Boot framework."
              detailsTwo="• Gained practical experience in database management using MySQL, ensuring efficient data storage and retrieval."
              detailsThree="• Trained extensively in full-stack development, mastering front-end technologies including HTML, CSS, JavaScript, and Bootstrap."
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Experience;
