const aboutMe = (req, res) => {
  return res.status(200).json({
    about: {
      fullName: "Rizki Pandiwa",
      address: "Jakarta, Indonesia",
      email: "pandiwarizki.rp@gmail.com",
    },
    summary:
      "I'am a passionate and motivated software engineer with 2 years of experience in designing, developing, and" +
      "maintaining software applications. Proficient in multiple programming languages and frameworks, with a" +
      "strong focus on creating scalable and efficient solutions. Collaborative team player with a passion for" +
      "problem solving and a commitment to delivering high quality software products. Continuously staying up to" +
      "date with the latest industry trends and technologies to drive innovation and excellence in software" +
      "development.",
    workExperience: [
      {
        company: "PT Trans Retail Indonesia",
        title: "Software Developer",
        periode: {
          start: "June 2024",
          end: "Present",
        },
      },
      {
        company: "PT Erajaya Swasembada Tbk",
        title: "IT Engineer Specialist",
        periode: {
          start: "September 2022",
          end: "June 2024",
        },
      },
      {
        company: "PT Borwita Indah",
        title: "IT Web Developer",
        periode: {
          start: "June 2021",
          end: "August 2021",
        },
      },
    ],
    skills: {
      programmingLanguanges: [
        {
          javascript: ["React Js", "Vue Js", "Next Js"],
        },
        {
          nodeJs: ["Express Js", "Hapi Js"],
        },
        {
          golang: ["Gin", "Fiber", "Echo"],
        },
        {
          php: ["Laravel", "CodeIgniter"],
        },
      ],
      databases: ["MySQL", "PostgreSQL", "Redis"],
      queueAndMessage: ["RabbitMQ", "Kafka"],
      technologiesAndPrograms: [
        "Git",
        "Github",
        "Bitbucket",
        "Microservices",
        "JWT",
        "SSO",
        "Docker",
      ],
    },
    platforms: {
      instagram: "https://www.instagram.com/pndwrzk",
      linkedin: "https://www.linkedin.com/in/pndwrzk",
      gitHub: "https://www.github.com/pndwrzk",
    },
  });
};

module.exports = { aboutMe };
