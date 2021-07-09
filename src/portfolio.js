/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "",
  title: "Hi all, I'm Zain",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having an experience of building Mobile applications with Java / Kotlin / XML / Repository Pattern / MVVM / Hilt with clean architechure and some other cool libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xdH89OMoxKrRdDypw83tU8CEzPLiZCet/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zainkhalid91",
  linkedin: "https://www.linkedin.com/in/zain-ali-khalid/",
  gmail: "zainkhalid1991@gmail.com",
  gitlab: "https://gitlab.ictintegrators.net/zain.ali",
  facebook: "https://www.facebook.com/DarkStar10/",
  medium: "https://profile.codersrank.io/user/zainkhalid91/",
  stackoverflow: "https://stackoverflow.com/users/8284776/zain",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY PART OF ANDROID DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your android mobile applications"
    ),
    emoji("⚡ Progressive Applications using MVVM, Repository Pattern."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Retrofit / Dagger / Hilt / RoomDB"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "XML",
      fontAwesomeClassname: "fab fa-xing"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-korvue"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Modern Languages",
      logo: require("./assets/images/numlLogo.png"),
      subHeader: "Bachelors of Science in Computer Sciences",
      duration: "September 2014 - June 2018",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Pakistan Cycle Store’ Uusing PHP, HTML, CSS, JAVASCRIPT, JQUERY",
        "Interactive Smart Screen APP” (FINAL YEAR PROJECT)",
        "Database Managment System: Automated Attendence System in Databases Using SQL",
        "Android Development: ‘Pakistan Cycle Store, APP Using JAVA, XML, SMTP API."
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX/ Frontend Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Android Engineer",
      company: "National Information Technology Board",
      companylogo: require("./assets/images/nitbLogo.png"),
      date: "June 2020 – Present",
      desc: "I am part of a large scale team currently working on E-Governance Applications. Main goal is to create new apps from scratch. Coordinate with design and product development teams in order to ensure the best possible use cases and UI/Ux for products under development.",
      descBullets: [
        "Restful API’s using Repository Pattern, MVVM, Clean Architecture",
        "Java, Kotlin, Coroutines, and Jet Pack Compose UI",
        "Retrofit",
        "Data Binding and View Binding"
      ]
    },
    {
      role: "Android Developer",
      company: "EzDealz",
      companylogo: require("./assets/images/ic_ezdealz_logo.png"),
      date: "Dec 2019 – June 2020",
      desc: "Worked on creating a quiz app using RMPT protocol. Wrote Algorithms to get users click time down to milliseconds. Integrated Red5Pro SDK for video streaming during the live quiz session. I was also tasked to integrate transaction through Easy Paisa and Jazz Cash API's for subscriptions and award system offered by the app." ,
       descBullets: [
        "Restful API’s using JAVA, XML, Databinding",
        "RMTP Protocol",
        "Red5Pro SDK",
      ]
    },
    {
      role: "Android Developer",
      company: "Reactive Space",
      companylogo: require("./assets/images/reactivespaceLogo.png"),
      date: "Jan 2019 – Dec 2019",
      desc: "Worked on developing crypto wallets, e-commerce apps for android devices. I was handed the responsibility to create the projects from scratch. Key features from the projects included encryption during transaction of crypto, P2P and group chat, e-store, social media apps.",
      descBullets: [
        "Restful API’s using JAVA, XML, Databinding",
        "Data Structures",
  "Chat apps",
  "Crypto Wallets",
  "E-commerce Apps"
        
      ]
    },
    {
      role: "Android Developer Intern",
      company: "QuellxCode",
      companylogo: require("./assets/images/quellxcodeLogo.png"),
      date: "May 2018 – Dec 2018",
      desc: "As an android intern my responsibilities were to coordinate with senior developers and understand the whole life cycle of project development. I helped create projects for different clients which include functionality like booking and tracking users on map, Google ads, Firebase.",
      descBullets: [
        "Java, XML",
        "Retrofit"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/abbcAppLogo.png"),
      projectName: "Abbc",
      projectDesc: "Crypto currency wallet used for trading.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://abbccoin.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cityAppLogo.png"),
      projectName: "ICT",
      projectDesc: "E-Governace app used for different public facilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nitb.gov.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/passtrackLogo.png"),
      projectName: "Pass Track",
      projectDesc: "Record keeping of the travelers coming over to Pakistan in the time Covid-19 Pandemic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nitb.gov.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/ic_ezdealz_logo.png"),
      projectName: "EzDealz",
      projectDesc: "Pakistan’s first indigenous and unique mobile gaming application. Answering fun questions, guessing simple numeric codes and by solving riddles can get you rewards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.facebook.com/ezdealzpakistan/"
        }
      ]
    },
    {
      image: require("./assets/images/tyslinLogo.png"),
      projectName: "Tyslin",
      projectDesc: "Crypto currency wallet used for trading.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reactivespace.com/"
        }
      ]
    },
    {
      image: require("./assets/images/pmsLogo.jpg"),
      projectName: "Project Managment System",
      projectDesc: "PMS is used as a managing tool for different ministries all over Pakistan",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nitb.gov.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/reactiveStoresLogo.jpg"),
      projectName: "Reactive Stores",
      projectDesc: "Buy any thing from anywhere using custom QR code scanner.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reactivespace.com/"
        }
      ]
    },
    {
      image: require("./assets/images/littleBirdLogo.jpg"),
      projectName: "Little Bird",
      projectDesc: "Social app for P2P and group chats.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reactivespace.com/"
        }
      ]
    },
    {
      image: require("./assets/images/covid19Logo.jpg"),
      projectName: "Covid 19",
      projectDesc: "Covid-19 app features Self-Assessment, Radius Alert, Pop Up Notification by reminding user of their personnel hygiene.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nitb.gov.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/g50.png"),
      projectName: "Grand50",
      projectDesc: "Crypto currency wallet used for trading of etherium and G50 token.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reactivespace.com/"
        }
      ]
    }
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3154290780",
  email_address: "zainkhalid1991@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
