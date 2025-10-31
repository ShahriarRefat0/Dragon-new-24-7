
import React from "react";

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Careers at Dragon News
        </h1>

        <p className="mb-4 text-lg">
          At <span className="font-semibold">Dragon News</span>, we are always
          looking for talented, passionate individuals who want to shape the
          future of news. Join our team to work on cutting-edge technology,
          create engaging content, and deliver high-quality news to readers
          worldwide.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🌟 Why Join Us?</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Work with a dynamic, creative, and collaborative team</li>
          <li>Contribute to a growing news platform with a global audience</li>
          <li>
            Opportunity to work with modern tech stack: React, Firebase, Vite,
            Tailwind CSS
          </li>
          <li>Flexible and remote-friendly work culture</li>
          <li>Continuous learning and career growth opportunities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">💼 Open Positions</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Front-End Developer (React, Tailwind CSS)</li>
          <li>Back-End Developer (Firebase, Node.js)</li>
          <li>Content Writer & Editor</li>
          <li>UI/UX Designer</li>
          <li>Marketing & Social Media Manager</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">📝 How to Apply</h2>
        <p className="mb-4 text-lg">
          If you’re interested in joining Dragon News, please send your resume
          and a brief cover letter to:{" "}
          <a
            href="mailto:careers@dragonnews.com"
            className="text-blue-600 hover:underline"
          >
            careers@dragonnews.com
          </a>
          . Be sure to include the position you are applying for in the subject
          line.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🤝 Our Values</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Integrity: Deliver honest, fact-checked news</li>
          <li>
            Innovation: Constantly improve the platform and user experience
          </li>
          <li>Collaboration: Work together to achieve common goals</li>
          <li>Empowerment: Support personal and professional growth</li>
        </ul>

        <p className="text-lg mt-6">
          At Dragon News, we believe in building a team that is passionate,
          diverse, and innovative. If this resonates with you, we would love to
          hear from you!
        </p>
      </div>
    </div>
  );
};

export default Career;
