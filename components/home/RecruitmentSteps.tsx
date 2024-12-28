import Image from "next/image";

const RecruitmentSteps = () => {
  return (
    <div className="recruitment-steps bg-white dark:bg-gray-900 py-12 px-6 transition-all">
      <h2 className="text-center text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        SharpCareer&apos;s{" "}
        <span className="text-blue-600">3-Step Approach</span> to Boost Your
        Career
      </h2>

      {/* Step 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/blog-1.jpg" // Replace with your actual image path in the public folder
            alt="Profile Building"
            width={500}
            height={400}
            className="rounded-[10px] shadow-md"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-[10px] shadow-md md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Step 1: Build a Professional Profile
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Craft an impressive resume tailored to your goals</li>
            <li>Optimize your LinkedIn profile for maximum visibility</li>
            <li>Establish a standout presence on hiring platforms</li>
          </ul>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/blog-2.jpg" // Replace with your actual image path in the public folder
            alt="Mock Interviews"
            width={500}
            height={400}
            className="rounded-[10px] shadow-md"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-[10px] shadow-md md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Step 2: Mock Interviews
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Identify areas for improvement with expert guidance</li>
            <li>Simulate real-world problem-solving and system design</li>
            <li>Practice company-specific interview patterns</li>
          </ul>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/blog-3.jpg" // Replace with your actual image path in the public folder
            alt="Right Opportunities"
            width={500}
            height={400}
            className="rounded-[10px] shadow-md"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-[10px] shadow-md md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Step 3: Access the Right Opportunities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Unlock opportunities in top-tier product companies</li>
            <li>Exclusive referrals to SharpCareer&apos;s hiring network</li>
            <li>Get updates on active hiring across industries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSteps;
