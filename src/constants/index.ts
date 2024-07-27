import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  trophy,
  bitshares,
  alloLogo,
  cryptoRoboot,
  gitCoinLogo,
  chainLinkLogo,
  privateLayerLogo,
  DAO_Driven_Image,
  Private_Chain_Image
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Hacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web3 Developer",
    icon: web,
  },
  {
    title: "Solidity Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Contract Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "🏆Hackathon Winner",
    projectLink: "https://app.buidlbox.io/projects/dao-drive?path=projects%2Fdao-drive",
    companyName: "Allo-V2 by GitCoin",
    companyLink: "https://allo.gitcoin.co/",
    icon: trophy,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Feb 2024",
    points: [
      "WEB3 CROWDFUNDING:",
      "Empowering Developers and Investors: Decentralized GrantStream bridges the gap between developers and investors, providing a transparent and democratic crowdfunding platform leveraging Arbitrum, Allo-V2, and Hats protocols.",
      "Milestone-Based Funding: Projects are funded and managed through a milestone-based approach, ensuring accountability and progress, with investors having the power to approve or reject milestones.",
      "Dynamic Investor Participation: Investors can freely fund projects, gain proportional voting rights, and retract funding if needed, ensuring a flexible and secure investment environment.",
      "Innovative Reward System: Successful projects may distribute rewards back to investors based on their initial contributions, fostering a mutually beneficial ecosystem for all participants."
    ],
  },
  {
    title: "GitCoin Rounds Participant",
    projectLink: "https://builder.gitcoin.co/#/chains/42161/registry/0x/projects/0xd71334a228d2c9f81d67cba4f06896afa8255951444cd57e3c3a2299822e979e",
    companyName: "GitCoin",
    companyLink: "https://www.gitcoin.co/",
    icon: gitCoinLogo,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
      "DAO DRIVEN:",
      "An initial hackathon project was significantly upgraded and transformed into the DAO Driven platform, enhancing its scope and capabilities.",
      "The DAO Driven project was successfully deployed to the Arbitrum Mainnet, ensuring a secure and efficient environment for its operations.",
      "The project's frontend was comprehensively restyled and upgraded, providing an improved user interface and experience.",
      "Extensive social outreach efforts were undertaken to attract more donations and support for the project, increasing its visibility and community engagement."
    ],
  },
  {
    title: "🍀Hackathon Participant",
    projectLink: "https://dorahacks.io/buidl/13427",
    companyName: "Fraxtal Network",
    companyLink: "https://frax.finance/",
    icon: privateLayerLogo,
    iconBg: "white",
    date: "Jun 2024 - Jul 2024",
    points: [
      "PRIVATE L3 + NATIVE BRIDGE:",
      "Dual-Chain Architecture: PrivateLayer utilizes both public (e.g., Arbitrum, Avalanche) and private networks (e.g., Orbit Network, Avalanche Subnet) to offer flexible and secure blockchain solutions.",
      "Token Bridge Mechanism: The protocol enables seamless token transfers between public and private chains using a sophisticated deposit, storage, validation, and minting process.",
      "Robust Security and Privacy: Leveraging oracle nodes, validator nodes, and Merkle proofs, PrivateLayer ensures data integrity, transaction security, and privacy across both chains.",
      "Advanced Smart Contracts: Includes Bridge Contract for cross-chain token management, OracleDepositStorage for data handling, and ERC20Handler for token operations.",
      "Comprehensive Technical Stack: Built with Solidity for smart contracts, OpenZeppelin for security, Hardhat for development, Ethers.js for Ethereum interaction, and MerkleTree.js for proof generation."
    ]
    
  },
  {
    title: "PriceOracle powered by Chainlink",
    projectLink: "https://github.com/alexandr-masl/chainlink-oracle",
    companyName: "Open Source",
    companyLink: "https://chain.link/",
    icon: chainLinkLogo,
    iconBg: "#005BD7",
    date: "Jul 2024 - Aug 2024",
    points: [
      "PRICE ORACLE:",
      "Flexible Chainlink Integration: Demonstrates the adaptability of Chainlink oracles for implementing various types of data and logic within smart contracts.",
      "Custom Token Support: Allows the use of a custom token that implements the ERC677 standard for token transfers and data payloads, providing flexibility for networks without native LINK token support.",
      "Comprehensive Setup Guide: Provides detailed instructions for setting up a Chainlink node, obtaining testnet LINK and Sepolia ETH, and deploying the PriceOracle contract for data requests.",
      "Advanced Token Bridge Mechanism: Utilizes oracle and validator nodes to ensure secure token transfers between public and private networks, leveraging Merkle proofs for data integrity.",
      "Robust Technical Stack: Built with Solidity for smart contract development, OpenZeppelin for security, Hardhat for the development environment, Ethers.js for Ethereum interactions, and MerkleTree.js for proof generation."
    ]    
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "DAO Driven",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: DAO_Driven_Image,
    sourceCodeLink: "https://explorer.gitcoin.co/#/projects/0xd71334a228d2c9f81d67cba4f06896afa8255951444cd57e3c3a2299822e979e",
  },
  {
    name: "Private Chain",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Private_Chain_Image,
    sourceCodeLink: "https://github.com/alexandr-masl/privateLayer",
  },
  {
    name: "Price Oracle",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
