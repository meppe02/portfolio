import Image from "next/image";
import Link from 'next/link';

// Corrected the import paths and removed duplicate. Ensure the images exist at these paths.
import warning from "@/../../public/warning.png";
import check from "@/../../public/warning.png";

interface Project {
  title: string;
  image_url: string;
  description: string;
  status: boolean;
  link: string | null;
}


let projects: Project[] = [
  {
    title: "Double Pendulum",
    image_url: "/augmented/main1.png", 
    description: "A program I wrote simulating the motion of a simple double pendulum in Python.",
    status: true,
    link: null, 
  },
  {
    title: "Augmented Reality Project",
    image_url: "/pendelum/main1.png", 
    description: "A small augmented reality experience which was a part of a project that took me and my partner to Germany as a prize.",
    status: true,
    link: null, 
  },
];

export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section className="intro">
        <p>
          Hello, my name is Martin Obasi. I'm currently studying physics at
          Chalmers University of Technology and welcome to my portfolio!
        </p>
      </section>
      <section className="projects">
        <h2>Featured Projects:</h2>
        {projects.map((proj) => (
          <div className="project" key={proj.title}>
            <Image src={proj.image_url} alt={`Image of ${proj.title}`} width={150} height={150} />
            <h3>Name:</h3>
            <h3>{proj.title}</h3>
            <h3>Description:</h3>
            <p>{proj.description}</p>
            {proj.link ? (
              <Link href={proj.link}><a>View Project</a></Link>
            ) : (
              <Link href="/">View Project</Link>
            )}
            <Image src={proj.status ? check : warning} alt="Status Icon" width={20} height={20} />
          </div>
        ))}
      </section>
      <footer>
        <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}
