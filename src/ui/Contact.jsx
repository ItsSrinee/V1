import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-designColor font-semibold tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-center text-darkText">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:srineevasan511@gmail.com">
        <p className="w-40 h-14 border border-designColor font-semibold mt-6 text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">
          Say Hello
        </p>
      </a>
    </Container>
  );
};

export default Contact;
