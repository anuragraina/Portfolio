import Chatbook1 from '../img/chatbook1.jpg';
import Chatbook2 from '../img/chatbook2.jpg';
import Chatbook3 from '../img/chatbook3.jpg';
import YouShare from '../img/youshare.jpg';
import Hexaland from '../img/hexaland.jpg';
import TweetSearch from '../img/tweetSearch.jpg';
import Order1 from '../img/order1.jpg';
import Order2 from '../img/order2.jpg';
import Order3 from '../img/order3.jpg';
import NotesManager from '../img/notesManager.jpg';

const project = [
	{
		name: 'chatbook',
		ongoing: true,
		title: 'Chatbook (Ongoing)',
		images: [Chatbook1, Chatbook2, Chatbook3],
		description: [
			'Developing a social media cum dating platform for an upcoming start-up',
			'Responsible for single-handedly developing the Front-End of Web Application',
			'Assisting other developers for API development',
			'Golang based backend with authentication using Firebase',
			'Tech Stack: ReactJs, Firebase, Golang',
		],
		link: 'Coming soon...',
		githubLink: null,
	},
	{
		name: 'youshare',
		ongoing: false,
		title: 'YouShare',
		images: [YouShare],
		description: [
			'An image-sharing platform where users can share images under respective categories',
			'Multiple users can comment after authentication, while the logged-in user can perform various CRUD operations',
			'Currently limited to food blogs',
			'Tech-Stack - Bootstrap, Javascript, Node.js, Express, MongoDB, Passport.',
		],
		link: 'https://you-share.herokuapp.com/',
		githubLink: 'https://github.com/anuragraina/YouShare',
	},
	{
		name: 'hexaland',
		ongoing: false,
		title: 'Hexaland',
		images: [Hexaland],
		description: [
			'Representation of covid clusters across fictitious country Hexaland',
			'Ability to add new hotspots at the required location and remove them accordingly',
			'MERN stack, MongoDB Atlas, DFS algorithm',
		],
		link: 'https://hexaland-covid.herokuapp.com/',
		githubLink: 'https://github.com/anuragraina/hexaland',
	},
	{
		name: 'tweetSearch',
		ongoing: false,
		title: 'Tweet Search',
		images: [TweetSearch],
		description: [
			'Application where the user searches for hashtags or twitter accounts and fetches all the tweets accordingly',
			'ReactJS, Twitter API, Node.js, Express',
		],
		link: 'https://tweet-search-123.herokuapp.com/',
		githubLink: 'https://github.com/anuragraina/tweet-search',
	},
	{
		name: 'order',
		ongoing: false,
		title: 'Order Management System',
		images: [Order1, Order2, Order3],
		description: [
			'Django based application with user authentication to place orders',
			'Admin manually places orders too for a customer and later, set the status of orders',
			'Technologies used: Bootstrap, Django, PostgreSQL, AWS',
		],
		link: 'Coming Soon...',
		githubLink: 'https://github.com/anuragraina/Order-Management-System',
	},
	{
		name: 'notesManager',
		ongoing: false,
		title: 'Notes Manager',
		images: [NotesManager],
		description: [
			'A simple notes management app developed on Material UI',
			'Completely Front-End and using local storage to save notes',
			'All CRUD operations functional',
			'Technologies used: ReactJs, Material UI',
		],
		link: 'https://notes-manager.netlify.app/',
		githubLink: 'https://github.com/anuragraina/Notes-Manager',
	},
];

export default project;
