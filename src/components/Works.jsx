import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github,eyes } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain white"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                window.open(website, "_blank");
              }}
            >
              <img
                src={eyes}
                alt="website"
                className="w-1/2 h-1/2 object-contain bg-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => (
          <p
          className={`text-[14px] ${tag.color}`}
            key={tag.name}
          >
            #{tag.name}

          </p>
        ))}</div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Personal Projects</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I invite you to explore the diverse range of projects that I have
          completed, from web applications that facilitate online collaboration
          and booking systems, to blockchain-based decentralized applications
          that ensure secure and transparent transactions.
          <br />
          <br />
          Each project has been carefully crafted using a combination of
          front-end and back-end technologies. My proficiency in using these
          technologies is reflected in my use of frameworks such as React,
          Refine , Next.js, and Bootstrap, and technologies such as Node.js,
          Express.js, MongoDB, and MySQL.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
