interface Experience {
  company: {
    name: string;
    image: string;
    url: string;
  };
  role: string;
  description: string;
  period: string;
  location: string;
}

const experiences: Experience[] = [
  {
    company: {
      name: "Programmify",
      image: "",
      url: "http://www.programmify.org/",
    },
    role: "Frontend Developer Intern",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            obcaecati laboriosam magni aspernatur sapiente fugit voluptatem,
            odio blanditiis. Error dolorum earum accusamus quam itaque culpa
            officiis deleniti. Voluptates deleniti tenetur earum eligendi. Nam
            porro, provident consectetur quo iure dolore fugiat!`,
    period: "August 2024 - Present",
    location: "Remote",
  },
  {
    company: {
      name: "The Odin Project",
      image: "",
      url: "http://www.theodinproject.com/",
    },
    role: "Student Frontend Developer",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            obcaecati laboriosam magni aspernatur sapiente fugit voluptatem,
            odio blanditiis. Error dolorum earum accusamus quam itaque culpa
            officiis deleniti. Voluptates deleniti tenetur earum eligendi. Nam
            porro, provident consectetur quo iure dolore fugiat!`,
    period: "August 2024 - Present",
    location: "Remote",
  },
];

export default experiences;
