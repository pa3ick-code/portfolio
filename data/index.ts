export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a project management app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Car Hub - Car Rental",
    des: "An intuitive online platform for renting cars, enabling users to easily search, compare rates, and reserve vehicles from multiple providers.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "car-hub01",
  },
  {
    id: 2,
    title: "Woom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "vidconfapp",
  },
  {
    id: 3,
    title: "Hybrid - Finance Management",
    des: "A Finance management web application with transfer & credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/dwolla.svg", "/c.svg"],
    link: "financewebapplication",
  },
  {
    id: 4,
    title: "The Blog",
    des: "A minimalist blog featuring a collection of articles and stories, presented in a clean and simple layout, allowing readers to easily navigate and engage with the content.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "blogpost01",
  },
];

export const testimonials = [
  {
    quote:
      "Our website was in dire need of an update, and Patrick delivered a fantastic redesign that improved our user experience and search engine rankings. Highly recommended!",
    name: "Angela Okedairo",
    title: "CEO MaisonDange",
    img:"/"
  },
  {
    quote:
      "We saw a significant boost in website traffic and conversions. Their expertise in web development and optimization is impressive, and we look forward to continuing our partnership.",
    name: "Anthinia",
    title: "CEO teez4Dmemories",
    img:"/"
  },
  {
    quote:
      "Collaborating with Patrick was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Patrick's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Patrick is the ideal partner.",
    name: "Fidelis",
    title: "Director of Spinet Technologies",
    img:"/"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using Nextjs, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Lead the development team of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pa3ick-code"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Pat_thrills"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pa3ick/"
  },
];

export const stack = [
  {id: 1, img:"/tailwind.svg"},
  {id: 2, img:"/typescript.svg"},
  {id: 3, img:"/reactjs.svg"},
  {id: 4, img:"/nextjs.svg"},
  {id: 5, img:"/threejs.svg"},
  {id: 6, img:"/graphql.svg"},
]