
// Website related settings
const settings = {
  isSplash: false, 
};

//SEO Related settings
const seo = {
  title: "Tarak Siddhanta's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tarak Siddhanta Portfolio",
    type: "website",
    url: "/",
  },
};

//Home Page
const greeting = {
  title: "Tarak Siddhanta",
  logo_name: "Tarak Siddhanta",
  nickname: "Full Stack Developer",
  subTitle:
   "As an accomplished MERN stack developer, I excel in architecting dynamic web applications leveraging MongoDB, Express.js, React, Next.js, and Node.js. With expertise spanning front-end and back-end technologies, I orchestrate the creation of scalable solutions finely tuned to user requirements. My approach centers on optimizing performance and enhancing code quality, employing rigorous testing methodologies and perpetually refining processes to guarantee the dependable and efficient deployment of software solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1uaOZGZSqM81VcmDU5TqvGlZOIKLS2qyx/view?usp=sharing",
  portfolio_repository: "https://github.com/taraksiddhanta1",
  githubProfile: "https://github.com/taraksiddhanta1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/taraksiddhanta1",
    fontAwesomeIcon: "fa-github",  
    backgroundColor: "#181717",  
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tarak-siddhanta/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "#",
    fontAwesomeIcon: "fa-youtube", 
    backgroundColor: "#FF0000", 
  },
  {
    name: "Gmail",
    link: "mailto:taraksiddhanta1@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/taraksiddhanta1",
    fontAwesomeIcon: "fa-x-twitter", 
    backgroundColor: "#000000", 
  },
  {
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=916296753858&text&type=phone_number&app_absent=0",
    fontAwesomeIcon: "fa-whatsapp ",
    backgroundColor: "#25d366", 
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      content:"fullStack",
      fileName: "full-stack4.png",
      skills: [
        "⚡ Design, develop, and maintain front-end and back-end components of web applications.",
        "⚡ Work on both client-side (user interface, user experience) and server-side (database, API) development.",
        "⚡ Ensure responsiveness and scalability of applications across different devices and browsers.",
        "⚡ Collaborate with cross-functional teams, including designers, product managers, and QA engineers.",
        "⚡ Troubleshoot and debug issues in both front-end and back-end code.",
        "⚡ Stay up-to-date with industry trends and technologies to continuously improve skills and knowledge.",
      ],
      softwareSkills: [
        {
          skillName: "Node.JS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "green",
          },
        },
        {
          skillName: "Express.JS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            backgroundColor: "transparent",
            color: "blue",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            backgroundColor: "transparent",
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            backgroundColor: "transparent",
            color: "red",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "MERN Stack Development",
      content:"MernStack",
      fileName: "MERN-Stack.png",
      skills: [
        "⚡ Building responsive website front end using React-Redux.",
        "⚡ Developing scalable backend application using Node.Js & Express.Js. ",
        "⚡ Write reusable, testable, and efficient code, adhering to best practices and ensuring high-quality software delivery. ",
        "⚡ Create backend APIs and services using Node.js and Express.js, handling server-side logic, database interactions, and API integration.",
        "⚡ Work closely with cross-functional teams, including designers, project managers, and other developers, to ensure seamless project execution and effective communication.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Devops & Deployment",
      content:"BackEnd",
      fileName: "AWS.png",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Front End Development",
      content:"FrontEnd",
      fileName: "Reactc-JS-photo.png",
      skills: [
        "⚡ Creating application interface components using React concepts and workflows such as Redux, Flux, and Webpack",
        "⚡ Designing and implementing responsive and interactive app components, such as menu buttons, gesture-driven actions, online forms, etc.",
        "⚡ Developing and maintaining complex and captivating app UIs using a bottom-up ReactJS development style, involving designing smaller components.",
        "⚡ Ensuring the development of highly-responsive, web-based user interfaces.",
        "⚡ Maintaining repetitive parts of a web page while updating necessary content.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwind",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            backgroundColor: "transparent",
            color: "red",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of North Bengal",
      address: "Raja Rammohunpur, Darjeeling, West Bengal, India",
      subtitle: "B.Sc. (Major) in Information Tecnology",
      logo_path: "nbu-logo.jpg",
      alt_name: "NBU",
      duration: "2008 - 2011",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like C, C++, C#, .Net, Core Java, DS, Algorithms, DBMS, Internet Technologies  etc.",
        "⚡ Apart from this, I have done the final year project on Global Banking System (Personal Banking part only) using Asp.net, C#, MS-SQL Server etc.",

      ],
      website_link: "https://www.nbu.ac.in/",
    },
    {
      title: "Uttaranchal University",
      address:"Dehradun, Uttarakhand, India",
      subtitle: "Master of Computer Applications (MCA) - Online Mode",
      logo_path: "uu-logo.png",
      alt_name: "Uttaranchal University",
      duration: "2023 - 2025 (Ongoing)",
      descriptions: [
        "⚡ I have taken varity of papers related to Artificial Intelligence, Information Security, Computer Organization and Architecture, Python Programming, Data Communication and Networking etc.",
        
      ],
      website_link: "https://www.uudoon.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Vue js Express MongoDB",
      subtitle: "Online",
      logo_path: "mind-luster-logo.png",
      certificate_link:
        "https://www.mindluster.com/student/certificate/14149133453",
      alt_name: "Mind Luster",
      color_code: "white",
    },
    {
      title: "Agile Programming",
      subtitle: "Online",
      logo_path: "mind-luster-logo.png",
      certificate_link:
        "https://www.mindluster.com/student/certificate/14149138811",
      alt_name: "Mind Luster",
      color_code: "white",
    },
    {
      title: "Jira Administration with Jira",
      subtitle: "Online",
      logo_path: "mind-luster-logo.png",
      certificate_link:
        "https://www.mindluster.com/student/certificate/14149133307",
      alt_name: "Mind Luster",
      color_code: "white",
    },
    {
      title: "Cloud Computing Architecture",
      subtitle: "Online",
      logo_path: "Great_Learning_Logo.jpg",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "Great Learning",
      color_code: "white",
    },
    {
      title: "Amazon Services",
      subtitle: "Online",
      logo_path: "Great_Learning_Logo.jpg",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/65659/certificate",
      alt_name: "Great Learning",
      color_code: "white",
    },
    {
      title: "PHP REST API From Scratch",
      subtitle: "Online",
      logo_path: "mind-luster-logo.png",
      certificate_link:
        "https://www.mindluster.com/student/certificate/14149136387",
      alt_name: "Mind Luster",
      color_code: "white",
    },
    {
      title: "Python Data Structures",
      subtitle: "Online",
      logo_path: "Great_Learning_Logo.jpg",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/58885/certificate",
      alt_name: "Great Learning",
      color_code: "white",
    },
    {
      title: "Data Visualization With Power BI",
      subtitle: "Online",
      logo_path: "Great_Learning_Logo.jpg",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/30824/certificate",
      alt_name: "Great Learning",
      color_code: "white",
    },
    {
      title: "Data Visualization using Tableau",
      subtitle: "Online",
      logo_path: "Great_Learning_Logo.jpg",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/10918/certificate",
      alt_name: "Great Learning",
      color_code: "white",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experiences in detail",
  description:
    "I have worked with several organizations , some or them are development work experiences and some are non development work experiences.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Development Experiences",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Tech Sunset",
          company_url: "https://www.techsunset.com/",
          logo_path: "techsunset-logo.png",
          duration: "March, 2019 - Present",
          location: "Electronic City, Bangalore, Karnataka, India",
          description:
            "• Developed responsive web applications using MongoDB, Express.js, React.js, and Node.js. " +
            "• Designed and implemented RESTful APIs to support front-end functionalities." + 
            "• Integrated third-party services and APIs." + 
            "• Optimized applications for maximum speed and scalability." + 
            "• Implemented user authentication and authorization using JWT or OAuth." + 
            "• Managed databases, including data modelling, querying, and optimization." + 
            "• Implemented automated testing and continuous integration/continuous deployment (CI/CD) pipelines." + 
            "• Contributed to the architecture, design, and implementation of scalable web applications." +
            "• Collaborated with cross-functional teams to define, design, and ship new features." +
            "• Participated in all phases of the development lifecycle - from planning and requirements gathering to" +
            "deployment and maintenance."
,
          color: "#000000",
        },
        {
          title: "Software Developer ",
          company: "Niharika Infratech India Ltd. ",
          company_url: "https://companyfilings.online/company/profile/U70109WB2011PLC170289/NIHARIKA-INFRATECH-INDIA-LIMITED",
          logo_path: "niharika-logo.png",
          duration: "December, 2011 - February, 2013",
          location: "Raghunathganj, Murshidabad, WB, India",
          description:
          "•Engineered and sustained high-performance data-driven web applications, adeptly accommodating a " + 
          "sizable user base with hundreds of concurrent users. " + 
          "• Demonstrated exceptional technical prowess in spearheading the creation of visually captivating web " + 
          "interfaces, employing cutting-edge CSS techniques and Bootstrap. " + 
          "• Skilfully orchestrated the design and maintenance of databases utilizing MS-SQL 2005, guaranteeing peak " + 
          "performance and unwavering data integrity.",
        color: "#9b1578",
        },
       
      ],
    },
    {
      title: "Non Development Experiences",
      experiences: [
        {
          title: "IT Trainer",
          company: "Anudip Foundation.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "anudip-logo.jpeg",
          duration: "February, 2016 to December, 2018",
          location: "Kolkata, WB, India",
          description:
            "• This job is very different from my previous jobs, here i have to working with persons with disabilities." + 
               "•  Anudip Foundation gathers those candidate having disability, and Qualification minimum 10Th Passed " + 
                "and age should be 18-30 yrs. We train them on a special program called MAST (Market Align Skill " + 
                "Training) designed by Anudip Foundation. In This Course they get some advance training on Computers, " + 
                "Typing, MS-Office, HTML, Internet Browsing, Emails and Communicative English with Interview " + 
                "techniques & Workplace readiness. " + 
               "•  We trainers have to prepare those candidates in all the fields and ready for a interview and placement within" + 
                "three (03) months. " +
                "•  Trained over 250+ speacially ables students and above 80% of them got placed." ,
          color: "#000000",
        },
        {
          title: "IT Expert ",
          company: "Recuited by KUSP  via PWC India , Posted at : Old Malda Municipality",
          company_url: "https://www.wburbanservices.gov.in/",
          logo_path: "kusp-logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        
      ],
    },
  
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of  technologies and  tools. My best experience is to develop full stack projects and deploy them .",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
  
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tarak-pp.png",
    description:
      "I am available on almost every social media. You can message me, I will reply mostly within 24 hours. ",
  },

  addressSection: {
    title: "Permanent Address",
    streetAddress: "Buraburi Tala,",
    locality: "English Bazar",
    postalCode: "732101",
    city: "Malda",
    region: "West Bengal",
    country: "India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/Buraburi+Tala+Road,+Sunny+Park,+Malda,+West+Bengal/@25.0028924,88.1265973,15z/data=!3m1!4b1?entry=ttu",
  },
  phoneSection: {
    title: "Contact Number :",
    subtitle: "+91 6296753858",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
