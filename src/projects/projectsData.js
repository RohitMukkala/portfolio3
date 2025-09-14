import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.jpg";
import projectFour from "../assets/project-4.jpg";

const projects = {
  1: {
    title: "Jarvis – AI Voice Assistant",
    image: projectOne,
    description: (
      <>
        <p>
          A voice-controlled AI assistant that predicts heart disease using a
          TensorFlow classifier and automates desktop tasks. Includes Face ID
          authentication with OpenCV for secure access.
        </p>
      </>
    ),
    github: "https://github.com/RohitMukkala/jarvis",
    demo: "https://jarvis-one-teal.vercel.app",
  },
  2: {
    title: "SmartCoder – Coding & Resume Assistant",
    image: projectTwo,
    description: (
      <>
        <p>
          An AI-powered platform that analyzes coding profiles from LeetCode,
          GitHub, and Codeforces to provide personalized problem recommendations
          and assist in generating updated resumes.
        </p>
      </>
    ),
    github: "https://github.com/RohitMukkala/codingJourney",
    demo: "https://coding-journey-9rlm.vercel.app",
  },
  3: {
    title: "Pestopia – AI Pest Detection",
    image: projectThree,
    description: (
      <>
        <p>
          A deep learning-based system that detects pests and crop diseases from
          plant images, providing farmers with instant diagnosis, prevention
          tips, and treatment recommendations to reduce crop damage.
        </p>
      </>
    ),
    github: "https://github.com/your-username/Pestopia",
  },
  4: {
    title: "StoryToKG – Knowledge Graph Builder",
    image: projectFour,
    description: (
      <>
        <p>
          Converts stories into structured knowledge graphs to maintain
          character consistency across scenes, enabling AI models to reason
          about relationships, timelines, and narrative logic effectively.
        </p>
      </>
    ),
    github: "https://github.com/your-username/StoryToKG",
  },
};

export default projects;
