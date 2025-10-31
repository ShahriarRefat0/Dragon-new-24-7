import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Dragon News
        </h1>

        <p className="mb-4 text-lg">
          Welcome to <span className="font-semibold">Dragon News</span>, a
          modern, full-stack news platform built with care and intention. Dragon
          News strives to provide users with a fast, engaging, and secure
          experience while browsing and reading the latest stories.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🎯 Our Mission</h2>
        <p className="mb-4 text-lg">
          Our mission is to make high-quality news content accessible to
          everyone—anytime, anywhere. Whether you’re looking for trending
          stories, in-depth features, or a quick update on what’s happening,
          Dragon News is designed to meet you where you are.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          🧰 Technology Stack
        </h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>
            Front-end: <span className="font-medium">React + Vite</span>
          </li>
          <li>
            Authentication & Back-end:{" "}
            <span className="font-medium">
              Firebase (Auth, Firestore, Hosting)
            </span>
          </li>
          <li>Styling & UI: Clean, responsive design for all devices</li>
          <li>Deployment: Scalable and ready for growth</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">✅ Key Features</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>User authentication: Email/password, Google, GitHub</li>
          <li>Real-time news feed: Fresh articles instantly</li>
          <li>Responsive design: Desktop & mobile friendly</li>
          <li>
            Admin/author panel (planned): Manage content & engage community
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          🌟 Why “Dragon” News?
        </h2>
        <p className="mb-4 text-lg">
          The name “Dragon” embodies{" "}
          <span className="font-medium">
            power, agility, and watchful insight
          </span>
          —qualities a modern news site should reflect. Just like a dragon
          surveying its realm, Dragon News brings you stories from many corners
          of life, with clarity and energy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🔮 Future Roadmap</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>
            Category filters (tech, health, global, local) and personalized
            recommendations
          </li>
          <li>User profiles, commenting, and social share features</li>
          <li>Full CMS for authors and editors</li>
          <li>Expand hosting, caching, and internationalization</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🤝 Get Involved</h2>
        <p className="mb-4 text-lg">
          Loved the project? Want to contribute? We welcome your ideas,
          feedback, and pull requests. Check out our GitHub repository:{" "}
          <a
            href="https://github.com/ShahriarRefat0/Dragon-new-24-7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Dragon News GitHub
          </a>
          . Let’s build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
