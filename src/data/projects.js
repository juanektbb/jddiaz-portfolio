import Vhelp from '../images/bgs/bg-vhelp.png'
import VeeLoop from '../images/bgs/bg-veeloop.png'
import Karali from '../images/bgs/bg-karali.png'
import Collaap from '../images/bgs/bg-collaap.png'
import DataMining from '../images/bgs/bg-datamining.png'
import ML from '../images/bgs/bg-ml.png'
import StickySisters from '../images/bgs/bg-stickysisters.png'
import MP3D from '../images/bgs/bg-mp3d.png'
import SpaceY from '../images/bgs/bg-spacey.png'
import Drandrop from '../images/bgs/bg-drandrop.png'
import KateDiaz from '../images/bgs/bg-katediaz.png'

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
    "title": "vHelp",
    "category": "Job Project",
    "img": Vhelp,
    "url": "/vhelp",
    "website": "https://vhelp.co.uk",
    "github": "",
    "light": true,
    "short_desc": `vHelp is a very innovative mobile app that enables contactless and secure payment
      flow from those who need support with shopping to the helpers supporting them.`,
    "long_desc": `My role at vHelp is to develop the backend of the mobile app and project lead the security measurements against penetration system. I have also built a large part of the web frontend, carried a very extensive testing project and made few contributions to the mobile application.`,
    "images": [],
    "techs": ["Python", "Django", "PostgreSQL", "JWT", "Stripe", "HTML", "CSS", "JS", "Bootstrap", "AWS"]
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
    "category": "Job Project",
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
    "title": "MP3Download",
    "category": "Personal Project",
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
    "title": "Data Mining",
    "category": "University Project",
    "img": DataMining,
    "url": "/datamining",
    "website": "",
    "github": "https://github.com/juanektbb/data-mining-assignment",
    "light": true,
    "short_desc": `This project of Data Mining was the main assignment of the module at University, in which
      I applied all the techniques taught.`,
    "long_desc": "",
    "images": [],
    "techs": ["Python", "Jupiter Notebook", "Scikit-learn", "Numpy", "Pandas", "Matplotlib"]
  },
  {
    "title": "Collaap",
    "category": "Personal Project",
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
  {
    "title": "Machine Learning",
    "category": "University Project",
    "img": ML,
    "url": "/machinelearning",
    "website": "",
    "github": "https://github.com/juanektbb/logistic-regression-assignment",
    "light": false,
    "short_desc": `This is the second assignment of Machine Learning at University, where I applied more
      complex knowledge of Logistic Regression.`,
    "long_desc": "",
    "images": [],
    "techs": ["Python", "Jupiter Notebook", "Numpy", "Pandas", "Matplotlib"]
  },
  {
    "title": "SpaceY.js",
    "category": "Personal Project",
    "img": SpaceY,
    "url": "/spaceyjs",
    "website": "https://spaceyjs.netlify.app/",
    "github": "https://github.com/juanektbb/SpaceY.js",
    "light": true,
    "short_desc": `SpaceY.js is a 2D-videogame of a spaceship that shoots aliens. This personal project
      proved my logic and programming skills.`,
    "long_desc": "",
    "images": [],
    "techs": ["JavaScript", "HTML", "CSS"]
  },
  {
    "title": "Dragandrop.js",
    "category": "Personal Project",
    "img": Drandrop,
    "url": "/drandrop",
    "website": "https://drandropjs.netlify.app/",
    "github": "https://github.com/juanektbb/drandrop.js",
    "light": true,
    "short_desc": `This project is a drag and drop UI for a hierarchical company structure.
      Dragandrop.js is fully built with vanilla JavaScript and HTML5 APIs.`,
    "long_desc": "",
    "images": [],
    "techs": []
  },
  {
    "title": "Kate Diaz",
    "category": "Freelance Project",
    "img": KateDiaz,
    "url": "/katediaz",
    "website": "https://katediaz.co.uk",
    "github": "",
    "light": false,
    "short_desc": `This is an eCommerce built with Shopify for my sister's business.
      She sells handcrafted female items such as swimwear, bags and face masks.`,
    "long_desc": "",
    "images": [],
    "techs": []
  },
  {
    "title": "Sticky Sisters",
    "category": "Job Project",
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
]

export default Projects
