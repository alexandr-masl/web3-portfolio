type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "maslineze.eth",
    fullName: "Alex",
    email: "alexandrmaslovigor@gmail.com",
  },
  hero: {
    name: "Alex",
    p: ["I'm a blockchain engineer."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a blockchain enthusiast and skilled blockchain engineer with experience in Solidity, TypeScript, JavaScript, and expertise in frameworks and tools like Hardhat. I have extensive skills in working with nodes, setting up blockchain infrastructure, and launching full stack deployments of various private and public blockchains. I'm also proficient in EVM-compatible chains. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly web3 solutions that address real-world problems. Let's work together to bring web3 ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Recent Hacks",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "WEB3 Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
