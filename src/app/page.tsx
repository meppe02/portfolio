'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const defaultImage = "/error.png";
interface Project {
  id:number;
  title: string;
  image_url: string;
  description: string;
  status: boolean;
  link: string | null;
  vidLocation:(string|null)[];
  github:string|null
}
interface VidDesc {

}

let projects: Project[] = [
  {
    id:1,
    title: "Double Pendulum",
    image_url: "pendelum/main.png",
    description:
      "A program I wrote for simulating the motion of a simple double pendulum in Python.",
    status: true,
    link: null,
    vidLocation:[
      "/pendelum/50.mp4",
      "pendelum/kaos.mp4"
    ],
    github:null
  },
  {
    id:2,
    title: "Augmented Reality",
    image_url: "/augmented/main.png",
    description:
      "A small augmented reality experience which was a part of a project that took me and my partner to Germany as a prize.",
    status: true,
    link: null,
    vidLocation:[null],
    github:null
  },
  {
    id:3,
    title: "Website for my class",
    image_url: defaultImage,
    description:
      "A website for my class with games and notes from lectures where I want to learn mainly the backend for a dynamically generated website",
    status: false,
    link: null,
    vidLocation:[null],
    github:null
  },
  {
    id:4,
    title: "Bingo",
    image_url: defaultImage,
    description:
      "One of the requested games on the class website where you try to fill a board of things the teacher usually says and does during a lecture",
    status: false,
    link: null,
    vidLocation:[null],
    github:null
  },
];

export default function Home() {
  const [show, setShow]=useState(0)
  const [projectToShow, setProjectToShow]=useState(projects[0])
  return (
    <>
    <div className="allContent">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <div className="intro">
        <div className="introText">
          <h3>
            Hello and welcome to my portfolio. My name is Martin Obasi and I&apos;m currently studying physics at Chalmers University of Technology. The plan is to publish all my new project on here as well as some old ones i did while learning to code.
          </h3>
        </div>
      </div>
      <section className="projects">
        {projects.map((proj, index) => (
          <div className="project" key={index}>
            <Image
              src={proj.image_url}
              alt={`Image of ${proj.title}`}
              width={150}
              height={150}
            />
            <h3>{proj.title}</h3>
            <h3>Description:</h3>
            <p className="descriptionText">{proj.description}</p>
            <div className="bottom">
              <div className="insideBottom">
                {/*
                {proj.link ? (
                  <Link href={proj.link}>View More</Link>
                ) : (
                  <Link href="/">View More</Link>
                )}
                 */}
                <li className="viewMore" onClick={()=>{
                  setProjectToShow(proj)
                  setShow((proj.id===show)?0:proj.id)
                }}>
                  View More
                </li>

                <div className="status">
                  <Image
                    src={proj.status ? "/check.png" : "/warning.png"}
                    alt="Status Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
        <section className="showcase" style={{display: (show)?"flex":"none"}}>
          <h2>
            {projectToShow.title}
          </h2>
          <div className="video-div">
          <div className="over-video">
            <h2>
              Video of the project
            </h2>
          </div>
          <div className="videos-div">
          {
            projectToShow.vidLocation.map((url, index)=>{
              if(url!=null){
                {console.log(url);
                }
                return(
                <div className="video-div" key={index}>
                  <video controls preload="none" width={400}>
                    <source src={url} type="video/mp4"/>
                  </video>
                </div>
                  
                )
              }
              else{
                return(
                <div className="noVideo" key={index}>
                  <h1>
                    In progress...
                  </h1>
                </div>
                )
              }
            })
          }
          </div>
          </div>
        </section>
      

      </div>
      <footer>
        <p>&copy; 2024 Martin Obasi. All rights reserved.</p>
      </footer>
    </>
  );
}
