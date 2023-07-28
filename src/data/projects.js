import Duappy from '../images/bgs/bg-duappy.jpg'
import Telmi from '../images/bgs/bg-telmi.jpg'
import Vhelp from '../images/bgs/bg-vhelp.png'
import Musidex from '../images/bgs/bg-musidex.jpg'
import VeeLoop from '../images/bgs/bg-veeloop.png'
import Karali from '../images/bgs/bg-karali.png'
import Collaap from '../images/bgs/bg-collaap.png'
import StickySisters from '../images/bgs/bg-stickysisters.png'
import MP3D from '../images/bgs/bg-mp3d.png'
import SpaceY from '../images/bgs/bg-spacey.png'

//Duappy
import D1 from '../images/carousel/duappy/screenshot1.jpg'
import D2 from '../images/carousel/duappy/screenshot2.jpeg'
import D3 from '../images/carousel/duappy/screenshot3.jpeg'
import D5 from '../images/carousel/duappy/screenshot5.jpeg'
import D6 from '../images/carousel/duappy/screenshot6.jpeg'
import D7 from '../images/carousel/duappy/screenshot7.jpeg'
import D8 from '../images/carousel/duappy/screenshot8.jpeg'
import D9 from '../images/carousel/duappy/screenshot9.jpeg'

//Telmi
import T1 from '../images/carousel/telmi/screenshot1.jpeg'
import T2 from '../images/carousel/telmi/screenshot2.jpeg'
import T3 from '../images/carousel/telmi/screenshot3.jpeg'
import T4 from '../images/carousel/telmi/screenshot4.jpeg'
import T5 from '../images/carousel/telmi/screenshot5.jpeg'
// import T6 from '../images/carousel/telmi/screenshot6.jpeg'
// import T7 from '../images/carousel/telmi/screenshot7.jpeg'
import T8 from '../images/carousel/telmi/screenshot8.jpeg'
import T9 from '../images/carousel/telmi/screenshot9.jpeg'
import T10 from '../images/carousel/telmi/screenshot10.jpeg'

//vHelp
import V1 from '../images/carousel/vhelp/screenshot1.jpeg'
import V2 from '../images/carousel/vhelp/screenshot2.jpeg'
import V3 from '../images/carousel/vhelp/screenshot3.jpeg'
import V5 from '../images/carousel/vhelp/screenshot5.jpeg'
import V6 from '../images/carousel/vhelp/screenshot6.jpeg'
import V7 from '../images/carousel/vhelp/screenshot7.jpeg'
import V8 from '../images/carousel/vhelp/screenshot8.jpeg'
import V9 from '../images/carousel/vhelp/screenshot9.jpeg'

//Collaap
import C0 from '../images/carousel/collaap/image-0.jpg'
import C1 from '../images/carousel/collaap/image-1.jpg'
import C2 from '../images/carousel/collaap/image-2.jpg'
import C3 from '../images/carousel/collaap/image-3.jpg'
import C4 from '../images/carousel/collaap/image-4.jpg'
import C5 from '../images/carousel/collaap/image-5.jpg'
import C6 from '../images/carousel/collaap/image-6.jpg'
import C7 from '../images/carousel/collaap/image-7.jpg'
import C8 from '../images/carousel/collaap/image-8.jpg'

const Projects = [
  {
    "title": "Duappy",
    "category": "Duappy - Dancing Events App",
    "img": Duappy,
    "url": "/duappy",
    "website": "https://duappy.com",
    "github": "",
    "light": false,
    "short_desc": `
      Duappy is the 🏆 #1 app for finding social dancing events in the UK. It hosts hundreds of events with thousands of attendees, and the app allows dancers to purchase cashless tickets.`,
    "long_desc": `
      Took full ownership as the sole developer, leading the end-to-end project by carefully selecting the optimal tech stack and designing the entire system.
      Successfully developed the mobile app for iOS and Android using Flutter, a responsive web dashboard with Next.js, and a robust RESTful API backend in Node.js. Ensured seamless deployment and scalability by establishing essential DevOps processes in AWS.
    `,
    "images": [D1, D2, D3, D7, D5, D6, D8, D9],
    "techs": ["Flutter", "TypeScript", "Node.js", "React.js", "Next.js", "PostgreSQL", "AWS", "Stripe", "Sequelize", "Tailwind"]
  },
  {
    "title": "Telmi Kids",
    "category": "Telmi Kids App",
    "img": Telmi,
    "url": "/telmi",
    "website": "https://telmi.io",
    "github": "",
    "light": true,
    "short_desc": `Telmi is a podcast mobile app for children. Kids of all ages can register under their parent's consent to create podcasts and share them with their family and friends.`,
    "long_desc": `
      Developed their mobile app for children to create, modify, and share podcasts with friends, featuring suggestions and multiple profiles inspired by the popular Netflix style.
      As the sole developer, I built the entire iOS app, along with a Django-based RESTful API backend deployed on AWS. Employed an agile methodology and self-project planning to ensure the timely delivery of high-quality features.
    `,
    "images": [T1, T9, T4, T2, T5, T10, T3, T8],
    "techs": ["Flutter", "Django", "PostgreSQL", "AWS", "Firebase", "JavaScript"]
  },
  {
    "title": "vHelp",
    "category": "vHelp App",
    "img": Vhelp,
    "url": "/vhelp",
    "website": "https://vhelp.co.uk",
    "github": "",
    "light": true,
    "short_desc": `
      vHelp enables organizations to quickly reimburse one-off expenses for volunteers, service users, research participants, and temporary staff.
    `,
    "long_desc": `
      Achieved significant impact through successful project delivery, the leadership of a team of four developers, and substantial professional growth.
      Spearheaded end-to-end projects, including the company's Open API, complete web dashboard, and integration with external services.
      Mentored colleagues through periodic code reviews, ensuring the release of clean and efficient code while fostering their professional development.
      Emphasized system security by promptly resolving identified vulnerabilities through pen-testing, implementing patches, and proactively reducing risks.
    `,
    "images": [V1, V2, V3, V5, V6, V7, V8, V9],
    "techs": ["Flutter", "React.js", "TypeScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "Docker", "Stripe", "AWS", "Tailwind"],
  },
  {
    "title": "Musidex",
    "category": "Musidex",
    "img": Musidex,
    "url": "/musidex",
    "website": "https://musidex.co.uk",
    "github": "",
    "light": false,
    "short_desc": `Musidex is the ultimate tool for audio industries, composers and songwriters. It provides secure and reliable cloud storage for all your audio files.`,
    "long_desc": `
      Played a key role in making significant contributions to the front and backend, as registration/login functionalities and developing robust APIs for seamless management of playlists, tracks, and CRUD operations.
      Furthermore, I implemented an efficient search system to enhance content discovery, empowering music artists to store, share, and showcase their soundtracks, thereby ensuring a smooth user experience.
    `,
    "images": [],
    "techs": ["React.js", "Next.js", "Firebase", "Node.js", "Netlify"]
  },
  {
    "title": "VeeLoop",
    "category": "Job Project",
    "img": VeeLoop,
    "url": "/veeloop",
    "website": "https://veeloop.com",
    "github": "",
    "light": false,
    "short_desc": `VeeLoop is an online approval and payment service to help young people shop online.
      Teens fill up the basket online, send it to mum, mum checks and pays in her own time.`,
    "long_desc": "",
    "images": [],
    "techs": ["PHP", "Symfony", "React", "MySQL", "Python", "JavaScript", "jQuery", "HTML", "CSS", "SASS", "Stripe", "Shopify", "AWS"]
  },
  {
    "title": "Karali Group",
    "category": "Karali Group",
    "img": Karali,
    "url": "/karaligroup",
    "website": "https://karali-group.com",
    "github": "",
    "light": false,
    "short_desc": `Karali Group is a fast food company that owns and operates famous restaurants like
      Burger Kings in the United Kingdom.`,
    "long_desc": `
      At Karali Group I developed myself an entire business management platform to help with the daily company processes. It is formed by several services, among them are auditing, documents management system, staff enrolment solution, data and complaints analysis tools and an internal portal administration.
      \n All of these follow a hierarchical schema with access roles for the company members who are more than 150 individuals organized by all the franchised restaurants and the company employees.
      \n My everyday tasks were growing the platform by building new solutions and features, administrate and maintain all the web servers and their databases, provide technical support and occasionally design websites for their brand restaurants.`,
      "images": [],
      "techs": ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "DevOps"]
  },
  {
    "title": "Sticky Sisters",
    "category": "Sticky Sisters Website",
    "img": StickySisters,
    "url": "/stickysisters",
    "website": "http://www.stickysisters.co.uk/",
    "github": "",
    "light": false,
    "short_desc": `Sticky Sisters is a new and exciting fast-casual dining restaurant, specialising in
      chicken wings and tasty sauces.`,
    "long_desc": "",
    "images": [],
    "techs": []
  },
  {
    "title": "MP3Download",
    "category": "Open-Source Project",
    "img": MP3D,
    "url": "/mp3d",
    "website": "",
    "github": "https://github.com/juanektbb/MP3Download",
    "light": true,
    "short_desc": `MP3Download is a personal project that downloads Youtube videos as MP3 files for listening
      offline, ideal for podcasts.`,
    "long_desc": "",
    "images": [],
    "techs": ["PWA", "Python", "Flask", "MongoDB", "DevOps"]
  },
  {
    "title": "SpaceY.js",
    "category": "Game prototype",
    "img": SpaceY,
    "url": "/spaceyjs",
    "website": "https://spaceyjs.netlify.app/",
    "github": "https://github.com/juanektbb/SpaceY.js",
    "light": true,
    "short_desc": `
      SpaceY.js is a 2D-videogame of a spaceship that shoots aliens. 
      This is the prototype with the hardest logic of the game completed, ready to create more levels.
    `,
    "long_desc": "",
    "images": [],
    "techs": ["JavaScript", "HTML", "CSS"]
  },
  {
    "title": "Collaap",
    "category": "Notes Mobile App",
    "img": Collaap,
    "url": "/collaap",
    "website": "",
    "github": "",
    "light": false,
    "short_desc": `Collaap is an iOS & Android app to store and share collaborative notes with your household or group members instantly.`,
    "long_desc": `Collaap is to share organised and editable information between the users for later easy access. It acts like a digital agenda for household notes like; todo's, shopping lists, members' tasks, family reminders, payments, etc.`,
    "images": [C0, C1, C2, C3, C4, C5, C6, C7, C8],
    "techs": ["React Native", "Redux", "Node.js", "Express", "MongoDB", "Vue.js"]
  },
]

export default Projects
