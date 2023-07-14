"use client";
import React, { useEffect, useState } from "react";
// sanity client
import { client } from "@/lib/sanityClient";
import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Project,
  Achievement,
  Testimonial,
  Contact,
  StarsCanvas,
} from "@/components/index";
// aos
import Aos from "aos";
import "aos/dist/aos.css";
import heropattern from "@/assets/herobg.png";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    const res = client
      .fetch(
        `*[_type in ["testimonials", "achievements","services","projects","technologies","experience"]]{
           _type == "testimonials" => {
            id,
            testimonialName,
              company,
              testimonials,
              img{
              asset->{url}
              },
            designation
           },
           _type == "achievements" => {
            id,
            achievementName,
            liveUrl,
            achievementImg{
            asset->{url}
            }
           },
           _type == "services" => {
            serviceName,
              ServiceImg {
              asset->{url}
              }
           },
         
           _type == "projects" => {
            id,
            projectname,
              description,
              category,
              sourcecodeLink,
              liveUrl,
              projectImg{
              asset->{url}
              },
            tags,
              tagsColor
           },
           _type == "technologies" => {
            technologyName,
            technologyImage{
            asset->{url}
            }
           },
      _type == "experience" => {
        experienceName,
        companyname,
          date,
          imgBackgroundColor,
          companyImg{
          asset->{url}
          },
        points
         }
        }
         `
      )
      .then((data) => {
        //console.log("data", data);

        let tempProjects = [];
        let tempServices = [];
        let tempAchievements = [];
        let tempExperiences = [];
        let tempTestimonials = [];
        let tempTechnologies = [];

        data.map((doc) => {
          if (doc.testimonials) {
            // It is a testimonial
            tempTestimonials.push(doc);
          } else if (doc.category) {
            // It is a project
            tempProjects.push(doc);
          } else if (doc.serviceName) {
            // It is a services
            tempServices.push(doc);
          } else if (doc.achievementName) {
            // It is a achievements
            tempAchievements.push(doc);
          } else if (doc.experienceName) {
            // It is a experience
            tempExperiences.push(doc);
          } else {
            // It is a technologies
            tempTechnologies.push(doc);
          }

          return null;
        });

        setProjects(tempProjects);
        setServices(tempServices);
        setAchievements(tempAchievements);
        setExperiences(tempExperiences);
        setTestimonials(tempTestimonials);
        setTechnologies(tempTechnologies);
      })
      .catch(console.error);
  }, []);
  //console.log("Projects", projects);
  //console.log("Testimonials", testimonials);
  //console.log("Achievements", achievements);
  //console.log("Services", services);
  //console.log("Experiences", experiences);
  //console.log("Technologies", technologies);


  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div style={{ backgroundImage: `url(${heropattern.src})`,width: "100%",height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", objectFit: "cover",
          }}>
          <Navbar />
          <Hero />
        </div>
        <About service={services} />
        <Experience experience={experiences} />
        <Tech tech={technologies} />
        <Project project={projects} />
        <Achievement achievement={achievements} />
        <Testimonial testimonial={testimonials} />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
}
