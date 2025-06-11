/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import petxImage from './assets/images/pro.png';


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Khurram Shahid",
  title: "Hi all, I'm Khurram",
  subTitle: emoji(
    "A passionate Cross-Platform Mobile App Developer 🚀 with hands-on experience in building high-quality Flutter applications integrated with powerful Firebase and Node.js backends. Skilled in creating modern, responsive, and scalable mobile and web solutions with a strong focus on UI/UX design, state management (BLoC), real-time databases, and REST APIs. Currently expanding my impact through YouTube tutorials, app development, and freelancing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VSPQGfYs4S9o_082XyV83jYQ_9TS-1pj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khurram-Shahid09",
  linkedin: "https://www.linkedin.com/in/khurram-shahid-0110b6349",
  gmail: "khurramshahidoffi@gmail.com",
  //itlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=61574522038969",
 // medium: "https://medium.com/@saadpasta",
 //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Cross-Platform Mobile & Web Developer focused on Flutter & Firebase",
  skills: [
    emoji("⚡ Develop beautiful and responsive mobile apps using Flutter for Android and iOS"),
    emoji("⚡ Build scalable backend APIs with Node.js and integrate Firebase services like Firestore and Authentication"),
    emoji("⚡ Create engaging UI/UX designs with state management (BLoC) and smooth animations"),
    emoji("⚡ Implement real-time databases, push notifications, and cloud storage"),
    emoji("⚡ Deploy apps with CI/CD pipelines and promote apps effectively"),
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fab fa-google" // Flutter doesn’t have official icon, Google icon is close
  },
  {
    skillName: "Dart",
    fontAwesomeClassname: "fas fa-code" // No official Dart icon, using generic code icon
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "NodeJS",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database" // No official Mongo icon, database icon works
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },
],
display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Islamia University of Bahawalpur",
      logo: require("./assets/images/IUB-logo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "August 2022 - June 2026 (Expected)",
      desc: "Pursuing a comprehensive software engineering degree focused on software development, mobile app creation, and backend technologies.",
      descBullets: [
        "Gained expertise in Flutter, Firebase, Node.js, and cross-platform app development.",
        "Completed projects including the PetX app for buying and selling pets.",
        "Actively learning and applying AI and state management techniques like BLoC.",
        "Collaborated on team projects emphasizing real-world software engineering practices."
      ]
    },
    
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Mobile Development (Flutter)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (Node.js, Firebase)",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend (React.js, UI/UX)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (Dart, JavaScript, Python)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Keep false unless you want to show CodersRank badges
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Content Creator & Developer",
      company: "YouTube Channel",
      companylogo: petxImage, // Use YouTube logo or your channel logo
      date: "January 2022 – Present",
      desc: "Created and published over 150 technical videos focusing on Flutter, Firebase, React, and full-stack development.",
      descBullets: [
        "Built real-world projects and tutorials to help beginners learn app development.",
        "Engaged with a growing community by answering questions and providing coding solutions.",
        "Produced content consistently, improving video quality and coding skills over time."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pro.png"),  // add your PetX app logo image in assets
      projectName: "PetX – Buy & Sell Pets",
      projectDesc: "A Flutter-based mobile app that allows users to buy, sell, and explore pets with secure authentication and real-time chat features.",
      footerLink: [
        {
          name: "View on Play Store",
          url: "https://play.google.com/store/apps/details?id=com.khurram.birdslovers" // replace with your actual Play Store link
        },
        // {
        //   name: "GitHub Repository",
        //   url: "https://github.com/yourusername/petx" // if you have a public repo, else remove this
        // }
      ]
    },
    {
      image: require("./assets/images/chatapp.png"),  // add your chat app logo image in assets
      projectName: "Flutter Chat App",
      projectDesc: "A real-time chat application built with Flutter and Firebase, featuring user authentication, group chats, and media sharing.",
      footerLink: [
        {
          name: "Watch Tutorial",
          url: "https://youtu.be/njaogB40Siw?si=WFFcUGWSJyLS8kWZ"  // replace with your actual YouTube tutorial URL
        },
        {
          name: "Source Code",
          url: "https://github.com/khurram-Shahid09/Flutter-Chat-App-2025"  // replace with your GitHub repo link
        }
      ]
    },
    


  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923186567779",
  email_address: "khurramshahidoffi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
