"use client";

import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

type Questions = {
  [key: string]: Question[];
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<string>("Program");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [activeToggle, setActiveToggle] = useState<boolean>(false); // Added state for mobile toggle

  const tabs: string[] = [
    "Program",
    "Teaching",
    "Mentors",
    "Placement Support",
    "Tuition Fee",
  ];

  const questions: Questions = {
    Program: [
      {
        question: "What is SharpCareer?",
        answer:
          "SharpCareer is a platform offering career guidance and recruitment support to professionals and students.",
      },
      {
        question: "Who is eligible for SharpCareer?",
        answer:
          "Our programs cater to a wide range of individuals. Please review specific program requirements for detailed eligibility.",
      },
      {
        question: "When are the live classes held?",
        answer:
          "Live classes are scheduled based on the program you enroll in, typically in the evenings or weekends.",
      },
    ],
    Teaching: [
      {
        question: "How are courses taught?",
        answer:
          "Courses are taught through live interactive sessions, recorded lectures, and hands-on projects.",
      },
      {
        question: "Are the classes online?",
        answer:
          "Yes, all classes are conducted online using modern learning platforms.",
      },
    ],
    Mentors: [
      {
        question: "Who are the mentors?",
        answer:
          "Our mentors are experienced professionals from top companies like Google, Microsoft, and Amazon.",
      },
      {
        question: "Can I interact with mentors?",
        answer:
          "Yes, students can book sessions or interact during live Q&A sessions.",
      },
    ],
    "Placement Support": [
      {
        question: "Does SharpCareer offer placement support?",
        answer:
          "Yes, we provide placement assistance, including mock interviews and company referrals.",
      },
      {
        question: "How successful is the placement program?",
        answer:
          "We have helped 80%+ of our students secure jobs in top companies.",
      },
    ],
    "Tuition Fee": [
      {
        question: "What are the tuition fees?",
        answer:
          "Tuition fees vary based on the program. Contact us for detailed fee structures.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we have a refund policy based on specific terms and conditions.",
      },
    ],
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Toggle for mobile view
  const toggleTabs = () => {
    setActiveToggle(!activeToggle);
  };

  return (
    <div className="faq-section bg-white dark:bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div className="md:w-1/4">
          {/* Mobile Toggle for Tabs */}
          <div className="block md:hidden mb-4">
            <button
              onClick={toggleTabs}
              className="py-2 px-4 rounded-[5px] font-medium text-left w-full text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800"
            >
              {activeToggle ? "Close Tabs" : "Questions by Category"}
            </button>
            {activeToggle && (
              <div className="mt-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-4 rounded-[5px] font-medium text-left whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop View - Tabs */}
          <div className="hidden md:block">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded-[5px] font-medium text-left whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="md:w-3/4">
          {questions[activeTab].map((item, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-300 dark:border-gray-700"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left py-3 font-semibold text-gray-900 dark:text-white flex justify-between items-center"
              >
                {item.question}
                <span className="text-gray-600 dark:text-gray-400">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </button>
              {openQuestion === index && (
                <p className="text-gray-700 dark:text-gray-300 py-2 pl-4">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// "use client";

// import { useState } from "react";

// type Question = {
//   question: string;
//   answer: string;
// };

// type Questions = {
//   [key: string]: Question[];
// };

// const FAQ = () => {
//   const [activeTab, setActiveTab] = useState<string>("Program");
//   const [openQuestion, setOpenQuestion] = useState<number | null>(null);

//   const tabs: string[] = [
//     "Program",
//     "Teaching",
//     "Mentors",
//     "Placement Support",
//     "Tuition Fee",
//   ];

//   const questions: Questions = {
//     Program: [
//       {
//         question: "What is SharpCareer?",
//         answer:
//           "SharpCareer is a platform offering career guidance and recruitment support to professionals and students.",
//       },
//       {
//         question: "Who is eligible for SharpCareer?",
//         answer:
//           "Our programs cater to a wide range of individuals. Please review specific program requirements for detailed eligibility.",
//       },
//       {
//         question: "When are the live classes held?",
//         answer:
//           "Live classes are scheduled based on the program you enroll in, typically in the evenings or weekends.",
//       },
//     ],
//     Teaching: [
//       {
//         question: "How are courses taught?",
//         answer:
//           "Courses are taught through live interactive sessions, recorded lectures, and hands-on projects.",
//       },
//       {
//         question: "Are the classes online?",
//         answer:
//           "Yes, all classes are conducted online using modern learning platforms.",
//       },
//     ],
//     Mentors: [
//       {
//         question: "Who are the mentors?",
//         answer:
//           "Our mentors are experienced professionals from top companies like Google, Microsoft, and Amazon.",
//       },
//       {
//         question: "Can I interact with mentors?",
//         answer:
//           "Yes, students can book sessions or interact during live Q&A sessions.",
//       },
//     ],
//     "Placement Support": [
//       {
//         question: "Does SharpCareer offer placement support?",
//         answer:
//           "Yes, we provide placement assistance, including mock interviews and company referrals.",
//       },
//       {
//         question: "How successful is the placement program?",
//         answer:
//           "We have helped 80%+ of our students secure jobs in top companies.",
//       },
//     ],
//     "Tuition Fee": [
//       {
//         question: "What are the tuition fees?",
//         answer:
//           "Tuition fees vary based on the program. Contact us for detailed fee structures.",
//       },
//       {
//         question: "Is there a refund policy?",
//         answer:
//           "Yes, we have a refund policy based on specific terms and conditions.",
//       },
//     ],
//   };

//   const toggleQuestion = (index: number) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   return (
//     <div className="faq-section bg-white dark:bg-gray-900 py-12 px-6">
//       <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//         Frequently Asked Questions
//       </h2>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Tabs */}
//         <div className="md:w-1/4">
//           <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-hidden">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-2 px-4 rounded-[5px] font-medium text-left whitespace-nowrap ${
//                   activeTab === tab
//                     ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white"
//                     : "text-gray-700 dark:text-gray-300"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Questions */}
//         <div className="md:w-3/4">
//           {questions[activeTab].map((item, index) => (
//             <div
//               key={index}
//               className="mb-4 border-b border-gray-300 dark:border-gray-700"
//             >
//               <button
//                 onClick={() => toggleQuestion(index)}
//                 className="w-full text-left py-3 font-semibold text-gray-900 dark:text-white flex justify-between items-center"
//               >
//                 {item.question}
//                 <span className="text-gray-600 dark:text-gray-400">
//                   {openQuestion === index ? "-" : "+"}
//                 </span>
//               </button>
//               {openQuestion === index && (
//                 <p className="text-gray-700 dark:text-gray-300 py-2 pl-4">
//                   {item.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
