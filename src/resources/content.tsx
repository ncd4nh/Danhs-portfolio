import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nguyen",
  lastName: "Danh",
  name: `Nguyen Cong Danh`,
  role: "Business Analyst",
  avatar: "/images/avatar.png",
  email: "ncdanh131104@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationLabel: "Ha_Noi",
  languages: ["VietNamese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ncd4nh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning business requirements into clear solutions.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Hi,I'm Nguyen Cong Danh, a <Text as="span" size="xl" weight="strong">Business Analyst</Text> with 1 year of experience in ERP projects. Collaborated with PMs, customers, and Dev/Test teams to elicit requirements, define business rules, and deliver functional specifications. Experienced in requirement analysis, process mapping, documentation, and UAT support.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Business Analyst with 1 year of experience in ERP projects. Collaborated with PMs, customers, and Dev/Test teams to elicit requirements, define business rules, and deliver functional specifications. Experienced in requirement analysis, process mapping, documentation, and UAT support.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "IRTECH JSC",
        timeframe: "06/2025 - 06/2026",
        role: "Business Analyst",
        achievements: [
          <>
            Gather and analyze business requirements from enterprise customers; prepare BRD, FRD, business workflows,
user stories, and functional specifications.
          </>,
          <>
            Broke down requirement into features, user stories and acceptance criteria to support effort estimation, sprint
planning.
          </>,
          <>
            Review UI/UX, support scope clarification and UAT support before delivery.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Thuong Mai University",
        description: <> Bachelor of Management System Information (expected 2026). <br/> 
        GPA: 3.3/4.0
        </>,
       
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Business Analysis",
        description: (
          <>Requirement analysis, documentation, prototypes and business process modeling.</>
        ),
        tags: [
          {name: "Requirements Analysis"},
          {name: "BPMN"},
          {name: "Use Case"},
          {name: "Elicitation"},
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "UI/ UX Design",
        description: (
          <>Translating business requirements into user-centric UI/UX designs using Figma, building interactive prototypes, modeling user flows, and user fourneys. </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "Figma",
          },
          {
            name: "User Flow",
          },
          {
            name: "Wireframes",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "System Design",
        description: (
          <>Modeling system behavior and data structures to support development teams, ensuring alignment between business logic and technical implementation. </>
        ),
        tags: [
          {
            name: "Database (SQL Sever)",
          },
          {
            name: "Sequence Diagram",
          },
          {
            name: "UML Modeling",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Agile/ Scrum",
        description: (
          <>Working in Agile/ Scrum enviroment to manage requirements, track progress and collaborate with cross-functional teams using pratical tools.</>
        ),
        tags: [
          {
            name: "Open Projects",
          
          },
          {
            name: "Google Workspace",
          },
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Language",
        description: (
          <>Intermediate English proficiency with a TOEIC 620, capable of understanding and communicating at a basic level in a professional working environment. </>
        ),
        tags: [
          {
            name: "English",
            icon: "globe",
          },
          {
            name: "TOEIC",
          },
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
