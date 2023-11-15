import { nasdaq, siemens } from "../assets/images";
import {
    car,
    estate,
    express,
    github,
    linkedin,
    angular,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss,
    typescript,
    python,
    java,
    spring,
    flask,
    postgresql,
    elasticsearch,
    rabbitmq,
    redis,
    docker,
    kubernetes,
    aws,
    cuboulder,
    uvce,
    email,
    portfolio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Programming Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: spring,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: elasticsearch,
        name: "Elasticsearch",
        type: "Database",
    },
    {
        imageUrl: rabbitmq,
        name: "RabbitMQ",
        type: "Message Broker",
    },
    {
        imageUrl: docker,
        name: "",
        type: "Deployment",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Deployment",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Services",
    },
];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "NASDAQ",
        icon: nasdaq,
        iconBg: "#accbe1",
        date: "Jun 2023 - Aug 2023",
        points: [
            "Collaborated in the development of a report configuration tool using React and SpringBoot which achieved 22% reduction in processing time for customers in reviewing configuration reports.",
            "Implemented a proof of concept utilizing SpringCloudConfig Server to extract configuration reports from GitLab, show casing potential enhancements in system efficiency.",
            "Implemented responsive design for report configuration tool to ensure cross-browser compatibility.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "SIEMENS",
        icon: siemens,
        iconBg: "#b7e4c7",
        date: "Oct 2021 - Jul 2022",
        points: [
            "Architected and implemented Kubernetes scheduler jobs to replace traditional process-based schedulers, resulting in a significant 70% boost in the scalability of micro-services.",
            "Orchestrated the seamless migration of a micro-services application from Siemens' cloud to AWS (EKS), resulting in accelerated release cycles and a 34% increase in application reliability.",
            "Participated in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "SIEMENS",
        icon: siemens,
        iconBg: "#b7e4c7",
        date: "Jan 2019 - Sept 2021",
        points: [
            "Collaborated on the strategic implementation of advanced algorithms and data structures to optimize smart charging algorithms, resulting in a remarkable 48% improvement in charging efficiency and user experience.",
            "Designed and implemented advanced features using Angular for the frontend and combined Node.js and Python for the backend, resulting in the successful deployment of a web application(depotfinity) on AWS dedicated to monitoring IoT devices for electric vehicles.",
        ],
    },
    {
        title: "Junior Software Engineer",
        company_name: "SIEMENS",
        icon: siemens,
        iconBg: "#b7e4c7",
        date: "Jul 2018 - Dec 2018",
        points: [
            "Enhanced device compatibility through the integration of Edit-Distance Algorithm, expanding the range of supported devices.",
            "Elevated legacy code quality by boosting test coverage by 16%, introducing new NUnit test cases and automation tests to expedite bug detection, while simultaneously optimizing code maintenance through the implementation of diverse design patterns to modularize."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: email,
        link: 'mailto:yashwanthhs07@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YashwanthSwamy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yashwanthhs/',
    }
];

export const education = [
    {
        iconUrl: cuboulder,
        theme: 'btn-back-black',
        name: 'Masters in Computer Science',
        university: 'University of Colorado Boulder',
        date: "Aug 2022 - May 2024",
        gpa: "3.8 out of 4.0",
    },
    {
        iconUrl: uvce,
        theme: 'btn-back-yellow',
        name: 'Bachelors in Computer Science',
        university: 'University Visvesvaraya College of Engineering',
        date: "Aug 2014 - Jun 2018",
        gpa: "72.5 out of 100",
    },
]

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Study Buff',
        description: "Developed a course recommendation platform for CU students, leveraging a sophisticated model trained on a 10,000-course dataset. It tailors’ suggestions using course syllabi and student feedback, optimizing data retrieval with Elastic Search integration.",
        link: 'https://github.com/YashwanthSwamy/studyBuff',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Broadband Mapping',
        description: 'Planned and implemented an ArcGIS dashboard to support the Federal Communications Commission in their evaluation of nationwide cellular network coverage. Additionally, spearheaded cross-university training initiatives, empowering undergraduate students to develop state-specific data dashboards for well-informed decision-making.',
        link: 'https://www.arcgis.com/apps/dashboards/c1402fc194574f0597677abf45330815',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Home Service',
        description: 'Developed a web application that will enable us to provide various community services to members of the public, such as carpentry, plumbing, and hair stylist.',
        link: 'https://github.com/YashwanthSwamy/HomeService',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-black',
        name: 'Portfolio',
        description: 'Crafted with React, Tailwind CSS, and Three.js, my portfolio offers an immersive experience integrating interactive interfaces and captivating 3D visuals. This project showcases my expertise in merging modern web technologies, providing users with a seamless exploration of my work through engaging 3D models and sleek, responsive design',
        link: 'https://github.com/YashwanthSwamy/yashwanth',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Depotfinity',
        description: 'A web application that allows users to monitor IoT devices for electric vehicles.',
        link: 'https://www.siemens.com/global/en/products/energy/emobility/depotfinity.html',
    }
];