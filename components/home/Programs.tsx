"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function TrainignSection() {
  const trainigPrograms = [
    {
      title: "Project based learning Program",
      description:
        "Our Project-Based Learning Program offers hands-on experience, mentorship, and real-world skill development in field of web development,Data Analytics and Machine Learning",
      slug: "project-based-learning-program",
      isFeatured: true,
    },
    {
      title: "Master DSA Concepts with Personalized Mentorship!",
      description:
        "Join our DSA Doubt Support for personalized sessions to clarify your Data Structures and Algorithms questions effectively and confidently with expert guidance.",
      slug: "master-dsa-concepts-with-personalized-mentorship",
      isFeatured: true,
    },
    {
      title: "Placement Support Join the Biggest Placement Support Community",
      description:
        "Join our placement support community for personalized off-campus job updates and tailored resume assistance!",
      slug: "placement-support",
      isFeatured: true,
    },
    {
      title: "Expert Resume and Mock Interview Services",
      description:
        "Boost placements with tailored resume building and mock interview preparation for student success!",
      slug: "expert-resume-and-mock-interview-services",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED Training Programs
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Our
            <span className="text-blue-600"> Training Programs</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect
            items={trainigPrograms.map((training) => ({
              title: training.title,
              description: training.description,
              link: `/training/${training.slug}`,
              isFeatured: training.isFeatured,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default TrainignSection;

// import React from "react";

// const programs = [
//   {
//     title: "Project based learning Program",
//     subtitle: "For Up to 6 Years of Experience",
//     highlights: [
//       "Join Top Product Based Companies",
//       "Personal Mentorship",
//       "Live Interactive Sessions",
//       "Industry Relevant Projects",
//     ],
//     color: "bg-orange-500",
//   },
//   {
//     title: "Master DSA Concepts with Personalized Mentorship!",
//     subtitle: "For 7+ Years of Experience",
//     highlights: [
//       "Join Top Product Based Companies",
//       "Personal Mentorship",
//       "Advanced DSA & System Design",
//       "Leadership Skills Training",
//     ],
//     color: "bg-gray-800",
//   },
//   {
//     title: "Join the Biggest Placement Support Community",
//     subtitle: "For College Students",
//     highlights: [
//       "Command over Problem-Solving in DS & Algo",
//       "Computer Science Fundamentals",
//       "Industry-relevant projects",
//       "24/7 Doubt Support",
//     ],
//     color: "bg-blue-800",
//   },
//   {
//     title: "Expert Resume and Mock Interview Services",
//     subtitle: "For Beginners & Career Switchers",
//     highlights: [
//       "Fundamentals of Programming",
//       "Guided Career Path",
//       "Real-World Projects",
//       "Dedicated Mentorship",
//     ],
//     color: "bg-green-500",
//   },
// ];

// const Programs = () => {
//   return (
//     <div className="py-8 px-4 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold text-gray-800">
//         Discover Our
//         <span className="text-blue-600"> Training Programs</span>
//       </h2>
//       <p className="text-gray-600 mt-2">
//         Whether you are a student, working professional, or just upskilling, we
//         have something for you!
//       </p>
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {programs.map((program, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-[10px] shadow-lg text-white ${program.color}`}
//           >
//             <h3 className="text-2xl font-bold">{program.title}</h3>
//             <p className="mt-2 text-sm">{program.subtitle}</p>

//             <ul className="mt-4 text-left space-y-2">
//               {program.highlights.map((highlight, i) => (
//                 <li key={i} className="text-sm">
//                   ➤ {highlight}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-[10px] font-semibold">
//               Learn More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Programs;
