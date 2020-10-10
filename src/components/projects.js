import Chatbook1 from "../img/chatbook1.jpg"
import Chatbook2 from "../img/chatbook2.jpg"
import Chatbook3 from "../img/chatbook3.jpg"
import YouShare from "../img/youshare.jpg"

const project = [
    {
        name:'chatbook', 
        ongoing:true,
        title:'Chatbook (Ongoing)',
        images: [Chatbook1, Chatbook2, Chatbook3],
        description:[
            'Developing a social media cum dating platform for an upcoming start-up',
            'Responsible for single-handedly developing the Front-End of Web Application',
            'Assisting other developers for API development',
            'Being developed on Next.js'
        ],
        link: 'Coming soon...',
        githubLink: null,
    },
    {
        name:'youshare',
        ongoing:false,
        title:'YouShare',
        images: [YouShare],
        description:[
            'An image-sharing platform where users can share images under respective categories',
            'Multiple users can comment after authentication, while the logged-in user can perform various CRUD operations',
            'Currently limited to food blogs',
            'Tech-Stack - Bootstrap, Javascript, Node.js, Express, MongoDB, Passport.'
        ],
        link: 'https://you-share.herokuapp.com/',
        githubLink: 'https://github.com/anuragraina/YouShare',
    },
    {
        name:'chatbook', 
        ongoing:true,
        title:'Chatbook (Ongoing)',
        images: [Chatbook1, Chatbook2, Chatbook3],
        description:[
            'Developing a social media cum dating platform for an upcoming start-up',
            'Responsible for single-handedly developing the Front-End of Web Application',
            'Assisting other developers for API development',
            'Being developed on Next.js'
        ],
        link: 'Coming soon...',
        githubLink: 'https://github.com/anuragraina/YouShare',
    },
    {
        name:'chatbook', 
        ongoing:true,
        title:'Chatbook (Ongoing)',
        images: [Chatbook1, Chatbook2, Chatbook3],
        description:[
            'Developing a social media cum dating platform for an upcoming start-up',
            'Responsible for single-handedly developing the Front-End of Web Application',
            'Assisting other developers for API development',
            'Being developed on Next.js'
        ],
        link: 'Coming soon...',
        githubLink: null,
    },
]

export default project