import AmazonLogo from "../assets/amazonlogo.png";
import MicrosoftLogo from "../assets/microsoftlogo.png";
import LogitechLogo from "../assets/logitechlogo.png";
import GoogleLogo from "../assets/googlelogo.png";
import Ikealogo from "../assets/ikealogo.png";

import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";

import user1 from "../assets/t1.jpg";
import user2 from "../assets/t2.jpg";
import user3 from "../assets/t3.jpg";
import user4 from "../assets/t4.jpg";
import user5 from "../assets/t5.jpg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,
} from "@remixicon/react";

export const HERO_CONTENT = {
  mainHeading: "We Are Solutions For Your \n Financial Issue",
  subHeading:
    "Explore our comprehensive suite of tools, resources, and expert guidance tailored to address a wide array of financial challenges.",
  callToAction: {
    primary: "Get Started",
    secondary: "Request a Demo",
  },
};

export const BRAND_LOGOS = [
  { src: GoogleLogo, alt: "Google" },
  { src: AmazonLogo, alt: "Amazon" },
  { src: MicrosoftLogo, alt: "Microsoft" },
  { src: LogitechLogo, alt: "Logitech" },
  { src: Ikealogo, alt: "Ikea" },
];

export const ABOUT_CONTENT = {
  sectionTitle: "How it works!",
  sectionDescription:
    "Stream like a pro with our 6-step process. From setup to performance tracking, we've got everything you need to elevate your streaming experience.",
  steps: [
    {
      title: "Interactive Data Visualization",
      description:
        "Incorporating interactive charts, graphs, and infographics can make complex financial data more digestible. Users can explore trends, track their spending, or analyze investment.",
      imageSrc: about1,
      imageAlt: "Streaming Setup",
    },
    {
      title: "AI-Powered Financial Insights",
      description:
        "Implementing artificial intelligence algorithms to analyze user spending patterns, suggest budget optimizations",
      imageSrc: about2,
      imageAlt: "Audience Engagement",
      users: [user1, user2, user3, user5],
    },
    {
      title: "Expense Tracking & Categorization",
      description:
        "Integrate a feature that allows users to track their expenses automatically by linking their accounts or manually inputting transactions.",
      imageSrc: about3,
      imageAlt: "Performance Analytics",
    },
    {
      title: "Goal-Based Financial Planning Tools",
      description:
        "Offering tools that allow users to set and track financial goals (like saving for a house, retirement, or education) with progress bars, milestone notifications, and personalized recommendations can motivate and guide users toward their financial objectives.",
      imageSrc: about4,
      imageAlt: "Optimize Settings",
    },
  ],
};

export const WHAT_WE_DO = {
  sectionTitle: "WHAT WE DO",
  sectionDescription: "Managing your finances is now easy",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Spending Overview",
      description:
        "Instantly track and manage expenses for smarter financial decisions.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Spending Overview",
      description:
        "Effortlessly streamline your finances with our automated expense tracking feature.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Track & Pay Invoices",
      description:
        "Streamline your workflow by tracking and paying invoices in one convenient platform",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Our Pricing Plans",
  sectionDescription:
    "Choose the plan that best fits your business needs. Whether you're just starting or need advanced features, we've got you covered.",
  popularBadge: "Best Value",
  ctaText: "Start Now",
  plans: [
    {
      name: "Starter",
      price: "$49/month",
      description:
        "Ideal for businesses just beginning their digital transformation.",
      features: [
        "Basic project management tools",
        "Customizable dashboards",
        "Standard support",
        "Access to analytics reports",
      ],
    },
    {
      name: "Business",
      price: "$99/month",
      description:
        "Designed for growing teams that require more advanced tools and insights.",
      features: [
        "Advanced project tracking",
        "Collaboration tools",
        "Priority support",
        "Detailed reporting & analytics",
        "Team management features",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199/month",
      description:
        "For large organizations needing comprehensive solutions and personalized support.",
      features: [
        "Unlimited projects",
        "Dedicated account manager",
        "24/7 priority support",
        "Full access to all features",
        "Custom integrations",
        "Advanced security settings",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Clients Say",
  sectionDescription:
    "Discover how businesses are leveraging our platform to optimize their financial operations and achieve growth.",
  reviews: [
    {
      name: "Jackson Lynth",
      title: "Financial Analyst",
      review:
        "The insights we receive from the platform are invaluable. We're now able to track our financial performance in real-time, allowing us to make quicker and more informed decisions.",
      image: user1,
    },
    {
      name: "Annette Black",
      title: "Financial Analyst",
      review:
        "The insights we receive from the platform are invaluable. We're now able to track our financial performance in real-time, allowing us to make quicker and more informed decisions.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager",
      review:
        "This SaaS has been a game-changer for us. The comprehensive analytics and user-friendly interface have made managing our financial data a seamless experience.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "With this platform, we’ve been able to significantly improve customer retention by optimizing our pricing and understanding user engagement metrics better.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "The flexibility of the platform has made it easier for our team to adjust subscription plans on the fly and monitor the impact on user behavior and revenue.",
      image: user5,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "SERVICES",
      links: [
        { text: "Financial Dashboard", url: "#" },
        { text: "Automated Reports", url: "#" },
        { text: "Risk Analysis Tools", url: "#" },
        { text: "Expense Tracking", url: "#" },
        { text: "Fraud Detection", url: "#" },
        { text: "Multi-Currency Support", url: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { text: "Help Center", url: "#" },
        { text: "Tutorials", url: "#" },
        { text: "Account Management", url: "#" },
        { text: "API Documentation", url: "#" },
        { text: "System Status", url: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "About Us", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Press", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
      ],
    },
  ],

  socialLinks: [
    {
      icon: <RiInstagramFill size={24} />,
      url: "https://www.linkedin.com/in/efekanheper/",
    },
    {
      icon: <RiLinkedinFill size={24} />,
      url: "https://www.linkedin.com/in/efekanheper/",
    },
    {
      icon: <RiTwitterFill size={24} />,
      url: "https://www.linkedin.com/in/efekanheper/",
    },
    {
      icon: <RiGithubFill size={24} />,
      url: "https://www.linkedin.com/in/efekanheper/",
    },
  ],
  copyrightText: "© 2024 Efekan Heper,All rights reserved.",
};
