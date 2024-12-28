"use client";

const NetworkingHelp = () => {
  return (
    <section className="dark:bg-gray-900 text-white bg-light-900 dark:text-gray-900 py-16 px-8 transition-all duration-300">
      <div className="text-center mb-10">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          SharpCareer:
          <span className="text-blue-600">
            {" "}
            Your solution for all learning challenges.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="dark:bg-gray-800 bg-gray-100 p-8 rounded-[10px] shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-indigo-500">
            Your Networking Problem
          </h3>
          <ul className="space-y-4 dark:text-gray-300 text-gray-700">
            <li>Connect with like-minded peers</li>
            <li>Abundance of resources</li>
            <li>Lack of Expert Advice</li>
            <li>Limited Exposure</li>
            <li>
              Frustrated because of irrelevant content on Social Media platforms
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="dark:bg-gray-800 bg-gray-100 p-8 rounded-[10px] shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-indigo-500">
            How SharpCareer can help?
          </h3>
          <ul className="space-y-4 dark:text-gray-300 text-gray-700">
            <li>
              Connect with like-minded peers based on skills with{" "}
              <span className="text-blue-500 font-medium">Find Your Peer</span>{" "}
              feature
            </li>
            <li>
              Access to career{" "}
              <span className="text-blue-500 font-medium">Roadmaps</span>
            </li>
            <li>
              Get career advice from{" "}
              <span className="text-blue-500 font-medium">experts</span>
            </li>
            <li>
              Get your personalized career guidance from{" "}
              <span className="text-blue-500 font-medium">mentors</span>
            </li>
            <li>Find what peers are doing and collaborate</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkingHelp;
