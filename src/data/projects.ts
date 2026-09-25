import type { ImageMetadata } from 'astro';
import { withBase } from '../lib/paths';

import antwerpOnTab from '../assets/projects/VD-antwerpOnTab.png';
import aotConcept from '../assets/detailPages/antwerpOnTab-concept.png';
import aotResearch from '../assets/detailPages/antwerpOnTab-research.png';
import aotUx from '../assets/detailPages/antwerpOnTab-ux.png';
import aotStyleboard from '../assets/detailPages/antwerpOnTab-styleboard.png';
import aotPoster from '../assets/detailPages/antwerpOnTab-poster.png';
import immo from '../assets/projects/VD-immo.png';
import immoIntro from '../assets/detailPages/immo-intro.png';
import immoPhonecase from '../assets/detailPages/immo-phonecase.png';
import immoSite from '../assets/detailPages/immo-site.png';
import milesAndMeals from '../assets/projects/VD-milesAndMeals.png';
import mmIntro from '../assets/detailPages/milesandmeals-intro.png';
import mmBrandboard from '../assets/detailPages/milesandmeals-brandboard.png';
import mmApp from '../assets/detailPages/milesandmeals-app.png';
import animationJourneyCover from '../assets/detailPages/animation-journey.png';
import kickstarter from '../assets/projects/Motion-kickstarter.png';
import ksLogo from '../assets/detailPages/kickstarter-logo.png';
import ksStyleboard from '../assets/detailPages/kickstarter-styleboard.png';
import ksStyleframe from '../assets/detailPages/kickstarter-styleframe.png';
import nmbs from '../assets/projects/Motion-nmbs.png';
import nmbsLogo from '../assets/detailPages/nmbs-logo.jpg';
import tableTalk from '../assets/projects/UX-ProjectTableTalk.png';
import ttIntro from '../assets/detailPages/tabletalk-intro.png';
import ttUxProcess from '../assets/detailPages/tabletalk-uxproces.png';
import ttIa from '../assets/detailPages/tabletalk-informationarchetecture.png';
import ttPrototyping from '../assets/detailPages/tabletalk-prototyping.png';
import ttTesting from '../assets/detailPages/tabletalk-testing.png';
import ttReflection from '../assets/detailPages/tabletalk-reflectie.png';
import redCross from '../assets/projects/UX-redCross.png';
import rcCross from '../assets/detailPages/redcross-cross.png';
import rcResearch from '../assets/detailPages/redcross-research.png';
import tussenRustEnRegels from '../assets/projects/UX-tussenRustEnRegels.png';
import portfolioHeader from '../assets/detailPages/portfolio-header.png';
import portfolioAbout from '../assets/detailPages/portfolio-aboutme.png';
import portfolioProjects from '../assets/detailPages/portfolio-projects.png';
import portfolioBlog from '../assets/detailPages/portfolio-blog.png';
import portfolioDatabase from '../assets/detailPages/portfolio-database.png';
import portfolioResponsive from '../assets/detailPages/portfolio-responsive.png';
import portfolioPersonal from '../assets/detailPages/portfolio-personal.png';
import wvbHeader from '../assets/detailPages/walter-header.png';
import wvbOutfit from '../assets/detailPages/walter-makeOutfit.png';
import wvbBraindump from '../assets/detailPages/walter-braindump.png';
import wvbScroll from '../assets/detailPages/walter-scroltrigger.png';
import theBigClick from '../assets/projects/the-big-click.png';
import bcStart from '../assets/detailPages/thebigclick-start.png';
import bcBegin from '../assets/detailPages/thebigclick-begin.png';
import bcGame from '../assets/detailPages/thebigclick-game.png';
import bcFinal from '../assets/detailPages/thebigclick-final.png';

export type CategoryId =
	| 'visual-design'
	| 'motion-design'
	| 'user-experience'
	| 'development';

export interface SubSection {
	heading: string;
	body: string[];
	image?: ImageMetadata;
	/** A looping animated WebP (from scripts/build-animations.mjs). */
	animation?: { src: string; poster: string; width: number; height: number };
	imageNarrow?: boolean;
}

export interface ProjectSection {
	heading: string;
	body: string[];
	image?: ImageMetadata;
	/** Named sub-blocks under the section (e.g. Double Diamond phases). */
	subsections?: SubSection[];
	/** A highlighted question / quote, shown as a blue banner. */
	question?: string;
	/** A left-to-right process flow, e.g. Explore → Define → Research. */
	steps?: string[];
	/** Big-number callouts, e.g. 92 survey responses. */
	stats?: { value: string; label: string }[];
	/** Centre a text-only section (default is left-aligned). */
	align?: 'center';
	/** Cap the section image at a narrower width. */
	imageNarrow?: boolean;
	/** Put the section image on the left (default is right). */
	imageSide?: 'left';
	/** A full-width image shown below the section, scribbles either side. */
	wide?: ImageMetadata;
	/** Where the scribble(s) sit on the wide image. Default: both sides. */
	wideScribble?: 'both' | 'bottom-right';
	/** A video (public/videos url) — shown big and centred, like the image feature. */
	video?: string;
	videoPoster?: string;
	/** Portrait (9:16) video, e.g. a phone-format motion graphic. */
	videoPortrait?: boolean;
	/** A scrollable screenshot shown inside a phone mock-up. */
	phone?: { frame: ImageMetadata; screenshot: ImageMetadata };
	/** A spec / feature list, shown as a card beside the text. */
	list?: string[];
	listTitle?: string;
	listImage?: ImageMetadata;
	/** Let the image run to the left or right edge of the screen. */
	bleed?: 'left' | 'right';
	/** Optional call-to-action button under the text. */
	link?: { label: string; href: string };
}

export interface ProjectDetail {
	/** Overrides the (short) wall title as the detail-page h1. */
	heading?: string;
	/** A video shown right at the top of the page, above the intro/cover. */
	leadVideo?: { src: string; poster?: string; title?: string };
	year?: string;
	duration?: string;
	team: string;
	disciplines: string[];
	tools?: string[];
	/** Lead image beside the intro text. */
	cover?: ImageMetadata;
	/** How the cover sits: pushed off an edge, or bled left / right. */
	coverStyle?:
		| 'cover-bleed'
		| 'cover-bleed-left'
		| 'bleed-left'
		| 'bleed-right';
	/** Lead paragraph(s). */
	intro?: string | string[];
	/** Button under the intro text. */
	introLink?: { label: string; href: string };
	/** Small handwritten note under the intro. */
	disclaimer?: string;
	/** "How might we …" question, shown with the goal callout. */
	hmw?: string;
	/** "Goal of the project" callout. */
	goal?: string;
	sections: ProjectSection[];
	/** Case film, shown at the end. */
	video?: string;
	videoPoster?: string;
	videoPortrait?: boolean;
}

export interface Project {
	slug: string;
	title: string;
	category: CategoryId;
	image: ImageMetadata;
	/** Animated-webp url — shown instead of the static wall photo when
	    present (e.g. the Animation Journey polaroid). */
	coverAnimation?: string;
	/** Present once a project has a written case study; otherwise the detail
	    page shows a "coming soon" placeholder. */
	detail?: ProjectDetail;
}

/** Display order of the category sections on the wall. */
export const categories: { id: CategoryId; label: string }[] = [
	{ id: 'motion-design', label: 'Motion design' },
	{ id: 'visual-design', label: 'Visual design' },
	{ id: 'user-experience', label: 'User experience' },
	// 'development' section hidden for now (not job-hunting in that field) —
	// the projects themselves are untouched below, just add the entry back
	// here to bring the section back.
	// { id: 'development', label: 'Development' },
];

export const categoryLabel = (id: CategoryId) =>
	categories.find((c) => c.id === id)?.label ?? id;

/** A looping animated WebP clip (built by scripts/build-animations.mjs). */
const mtmAnim = (name: string, width: number, height: number) => ({
	src: withBase(`/animations/${name}.webp`),
	poster: withBase(`/animations/${name}-poster.webp`),
	width,
	height,
});

export const projects: Project[] = [
	// Visual design
	{
		slug: 'antwerp-on-tap',
		title: 'Antwerp on Tap',
		category: 'visual-design',
		image: antwerpOnTab,
		detail: {
			year: '2026',
			duration: '1 month',
			team: 'Team',
			disciplines: [
				'Visual Design',
				'Development',
				'UX Design',
				'Motion Design',
			],
			leadVideo: {
				src: withBase('/videos/antwerp-case-movie.mp4'),
				poster: withBase('/videos/antwerp-case-movie-poster.jpg'),
			},
			cover: aotConcept,
			coverStyle: 'cover-bleed',
			intro:
				'Antwerp on Tap is a group project for the City of Antwerp, combining UX & Experience Design, Motion Design, Visual Design and Development. We created a mobile experience that invites international beer enthusiasts and city explorers to discover Antwerp through local cafés, curated recommendations and hidden gems across the city. Using Antwerp beer cards as a starting point, the experience encourages users to explore the city one beer at a time.',
			goal:
				'For the City of Antwerp, we developed Antwerp on Tap, an interactive city-trip experience that invites international beer enthusiasts and city explorers to discover the city through Antwerp beer cards. By combining local recommendations, hidden hotspots and personalised pub crawls, Antwerp can be explored in a playful and social way.',
			hmw:
				'HMW help Zillennials discover Antwerp in an authentic way through local flavours, entrepreneurs and stories, in a way that feels personal (rather than through traditional city marketing)?',
			sections: [
				{
					heading: 'Research & Concept Development',
					body: [
						'The project started with an international exchange in Rotterdam. Together with Dutch students, we explored the project theme, target audience and possible concepts. Through interviews and research, we investigated what city explorers look for during a city trip and how we could encourage them to visit Antwerp. At the end of the week, we pitched our concept to the City of Antwerp.',
					],
					image: aotResearch,
					imageSide: 'left',
				},
				{
					heading: 'UX Process',
					body: [
						'Back in Kortrijk, we further developed the concept using the Double Diamond process. We went through several phases, including Discover, Define, Ideate, Activation, Information Architecture, Prototyping and Testing.',
						'During this phase, I mainly contributed to the wireframes, various UX exercises and translating research insights into concrete user flows. Through multiple rounds of testing, we refined the concept into a clear and intuitive experience.',
					],
					image: aotUx,
					bleed: 'right',
					link: {
						label: 'See the process on Behance',
						href: 'https://www.behance.net/gallery/251342421/Antwerp-on-Tap',
					},
				},
				{
					heading: 'Visual Design',
					body: [
						'After completing the UX process, we developed the visual identity of Antwerp on Tap. Through style boards, branding and UI design, we created a playful and recognisable experience that connects with our target audience of city explorers.',
					],
					image: aotStyleboard,
					imageSide: 'left',
					link: {
						label: 'Figma design',
						href: 'https://www.figma.com/design/gLKnuFX44auxOuCanFXvfu/INT4--Visit-Antwerpen?node-id=2300-20146&t=PjBGfHBz4ub5OaI4-1',
					},
				},
				{
					heading: 'Development',
					body: [
						'We then brought the full experience to life in React. I mainly worked on styling different pages, implementing the interface and populating the database with cafés, recommendations and locations.',
					],
					image: aotPoster,
				},
				{
					heading: 'The Final Result',
					body: [
						'The final result is an interactive mobile experience that uses the export of Antwerp beers as a starting point for a unique journey through the city. Through beer cards, recommendations and personalised routes, visitors are encouraged to experience Antwerp in an authentic way.',
					],
					link: {
						label: 'Check out the site',
						href: 'https://antwerpontap.netlify.app/',
					},
				},
			],
		},
	},
	{
		slug: 'immo',
		title: 'Immo Challenge',
		category: 'visual-design',
		image: immo,
		detail: {
			year: '2026',
			duration: '2 hours',
			team: 'Solo',
			disciplines: ['Visual Design'],
			sections: [
				{
					heading: 'The challenge',
					body: [
						'During this two-hour design challenge, I was asked to design a mobile property detail page in Figma for a house for sale, following the visual identity of Immo François. We were given a limited set of assets, fonts and copy, and were not allowed to look at any external inspiration or the client’s website. The goal was to create a clear and functional real estate page within the strict time limit.',
					],
					image: immoIntro,
					bleed: 'right',
					link: { label: 'Figma prototype', href: '#' },
				},
				{
					heading: 'The Process',
					body: [
						'Because of the tight deadline, I had to make quick design decisions and focus on the most important information and features of a real estate page. Throughout the challenge, we received feedback from our teachers, and the final design was evaluated based on branding, content, typography and smart solutions.',
					],
					phone: { frame: immoPhonecase, screenshot: immoSite },
				},
				{
					heading: 'Reflection',
					body: [
						'I really enjoyed this challenge because the limited time left little room to overthink every design decision. It taught me to make decisions more quickly and trust my own design instincts. While there are always things I could improve afterwards, I’m proud of what I managed to create within such a short amount of time.',
					],
				},
			],
		},
	},
	{
		slug: 'miles-and-meals',
		title: 'Miles & Meals',
		category: 'visual-design',
		image: milesAndMeals,
		detail: {
			year: '2026',
			duration: '4 months',
			team: 'Solo',
			disciplines: ['Branding', 'App design'],
			tools: ['Figma'],
			cover: mmIntro,
			coverStyle: 'cover-bleed-left',
			intro: [
				'Miles & Meals is a branding and app design project for a fictional concept that combines gastronomy and travel. The project consisted of two parts. First, I developed a complete brand identity, including the visual style, typography, colour palette and tone of voice. In the second part, I translated this identity into a mobile application where users can discover culinary destinations in an intuitive and inspiring way.',
				'Throughout the process, research, iteration, a consistent user experience and the integration of the brand identity within the app were key.',
			],
			introLink: { label: 'Prototype', href: '#' },
			goal:
				'Miles & Meals is a fictional food box service that introduces users to local street food dishes from around the world. The assignment consisted of two parts. First, I developed a complete brand identity in the form of a brand board. I then translated this identity into a mobile application where users can manage their subscription, discover recipes and explore new culinary destinations.',
			sections: [
				{
					heading: 'Research & Process',
					body: [
						'I started by researching the target audience, competitors and the concept itself. I also gathered visual inspiration and explored how I could translate the themes of travel, street food and authenticity into a contemporary brand identity.',
						'Based on these insights, I developed a brand board including the logo, colour palette, typography, iconography, photography, illustrations, patterns and packaging. I then designed the mobile app based on the provided wireframes.',
						'Throughout the process, I worked iteratively, experimented with different solutions and incorporated feedback from my teachers to further refine both the branding and the user experience.',
					],
					image: mmBrandboard,
					imageNarrow: true,
					wide: mmApp,
				},
				{
					heading: 'Reflection',
					body: [
						'This project was my first extensive brand board and gave me a better understanding of how branding and UI design can strengthen each other. I learned to make more intentional design decisions, work from a brand strategy and carry a consistent visual identity through into a digital product.',
						'In a future iteration, I would further refine the branding and pay additional attention to accessibility and the finer details of the interface.',
					],
				},
			],
		},
	},

	// Motion design
	{
		slug: 'animation-journey',
		title: 'Animation Journey',
		category: 'motion-design',
		image: animationJourneyCover,
		coverAnimation: mtmAnim('walk-cycle', 900, 625).src,
		detail: {
			heading: 'Making Things Move',
			year: '2026',
			duration: 'Ongoing',
			team: 'Solo',
			disciplines: ['Frame-by-frame Animation'],
			intro: [
				'I recently started exploring frame-by-frame animation, and I absolutely love it. There’s something incredibly satisfying about drawing every little movement and then seeing those separate frames come together into something that actually moves.',
				'I’m still a complete beginner and have a lot to learn, but that’s what makes this journey so exciting. I’m experimenting with Procreate and Procreate Dreams, learning how timing, movement and expressions can bring a drawing to life. For now, I’m mainly focusing on learning by making: trying things, making mistakes and seeing what works.',
			],
			sections: [
				{
					heading: 'Little experiments',
					body: [
						'These are some of the first animations I’ve made along the way:',
					],
					subsections: [
						{
							heading: 'Butterfly',
							body: [
								'My first little experiment with frame-by-frame animation, following a Procreate animation tutorial.',
							],
							animation: mtmAnim('butterfly', 900, 625),
						},
						{
							heading: 'Walk cycle',
							body: [
								'A small exercise in understanding movement, timing and how individual frames create the illusion of motion.',
							],
							animation: mtmAnim('walk-cycle', 900, 625),
						},
						{
							heading: 'Spaceship',
							body: [
								'An experiment with movement, timing and creating the feeling of something flying through space.',
							],
							animation: mtmAnim('spaceship', 900, 625),
						},
					],
				},
				{
					heading: 'Just the start',
					body: [
						'I’m only at the beginning of this journey, but I’d love to keep learning, experimenting and eventually become really good at it. These little animations are just the start.',
						'And if you look closely, you’ll find a little bit of that journey throughout this portfolio too. The mini animations and motion details on this website are all made by me.',
					],
				},
			],
		},
	},
	{
		slug: 'kickstarter',
		title: 'Kickstarter',
		category: 'motion-design',
		image: kickstarter,
		detail: {
			year: '2026',
			duration: '4 months',
			team: 'Solo',
			disciplines: ['Motion Design'],
			tools: ['Procreate', 'After Effects'],
			sections: [
				{
					heading: 'The big result',
					body: [],
					video: withBase('/videos/kickstarter-final.mp4'),
					videoPoster: withBase('/videos/kickstarter-final-poster.jpg'),
				},
				{
					heading: 'The challenge',
					body: [
						'For this assignment, I created a promotional video for an existing Kickstarter project that did not yet have, or did not have a strong, campaign video. The challenge was to tell a clear story and present the product in an engaging way to potential supporters.',
					],
					listImage: ksLogo,
					listTitle: 'Ember Forged Spices',
					list: [
						'Chef-crafted spice blends',
						'Developed by a chef with 20+ years of experience',
						'A powerful flavour base for everyday dishes',
						'Clean ingredients with no hidden additives',
						'Combines health, flavour and convenience',
						'Positioned as “no compromise cooking”',
					],
				},
				{
					heading: 'The Process',
					body: [
						'The process started with finding a suitable Kickstarter project and developing a concept. Once I had a concept, I pitched it to receive initial feedback. I then created a storyboard, style frames and an animatic to test the story and timing. After that, I designed all the illustrations myself in Procreate and brought them to life in After Effects using animation, transitions and sound design.',
					],
				},
				{
					heading: 'The animatic',
					body: [],
					video: withBase('/videos/kickstarter-animatic.mp4'),
					videoPoster: withBase('/videos/kickstarter-animatic-poster.jpg'),
				},
				{ heading: 'Styleboard', body: [], image: ksStyleboard },
				{ heading: 'Style frame', body: [], image: ksStyleframe },
				{
					heading: 'Reflection',
					body: [
						'At first, I found it challenging to choose a suitable Kickstarter project and develop a strong concept. During production, I also got stuck on one specific scene, which required me to think creatively and find an alternative solution. In the end, I am very happy with the final result, especially with the illustrations I designed myself in Procreate. This project gave me more confidence in combining illustration, storytelling and motion design into one cohesive video.',
					],
				},
			],
		},
	},
	{
		slug: 'nmbs',
		title: 'NMBS',
		category: 'motion-design',
		image: nmbs,
		detail: {
			year: '2025',
			duration: '4 months',
			team: 'Solo',
			disciplines: ['Motion Design'],
			tools: ['After Effects'],
			sections: [
				{
					heading: 'End result',
					body: [],
					video: withBase('/videos/nmbs.mp4'),
					videoPoster: withBase('/videos/nmbs-poster.jpg'),
					videoPortrait: true,
				},
				{
					heading: 'The Challenge',
					body: [
						'For this assignment, I created a motion graphic to celebrate the 100th anniversary of NMBS. In a video of up to 30 seconds, I brought my own interpretation of the theme “NMBS. 100 years. The journey continues.” to life. The challenge was to communicate a clear story and strong visual message without the use of audio.',
					],
					image: nmbsLogo,
					imageNarrow: true,
				},
				{
					heading: 'The Process',
					body: [
						'I started by developing a concept and then designed all the graphic assets that I later animated in After Effects. Throughout the process, I learned new techniques such as working with shape layers, typography, easing, expressions and more complex animations. By bringing these different elements together, I created a smooth motion graphic with a clear rhythm and narrative.',
					],
				},
				{
					heading: 'Reflection',
					body: [
						'This was my first larger project in After Effects, and I really enjoyed the entire creative process. From designing the assets to bringing all the animations together, every step taught me new techniques and gave me more confidence in motion design. For my first extensive After Effects project, I am very proud of the final result and of how much I learned throughout the process.',
					],
				},
			],
		},
	},
	{
		slug: 'antwerp-on-tap-motion',
		title: 'Antwerp on Tap',
		category: 'motion-design',
		image: antwerpOnTab,
		detail: {
			year: '2026',
			duration: '1 month',
			team: 'Team',
			disciplines: ['Motion Design'],
			tools: ['After Effects'],
			leadVideo: {
				title: 'Project presentation video',
				// TODO: add the actual files at these paths (public/videos/) —
				// they don't exist yet, so the video won't play until then.
				src: withBase('/videos/antwerp-motion-presentation.mp4'),
				poster: withBase('/videos/antwerp-motion-presentation-poster.jpg'),
			},
			intro:
				'Antwerp on Tap is a group project for the City of Antwerp, combining UX & Experience Design, Motion Design, Visual Design and Development. We created a mobile experience that invites international beer enthusiasts and city explorers to discover Antwerp through local cafés, curated recommendations and hidden gems across the city. Using Antwerp beer cards as a starting point, the experience encourages users to explore the city one beer at a time.',
			sections: [
				{
					heading: 'The video',
					body: [
						'I created this short project presentation video to introduce Antwerp on Tap in a clear and engaging way, giving a quick overview of the concept and the experience we designed for the City of Antwerp.',
						'The goal was to visually communicate the idea in a short, accessible format. I animated it in After Effects, combining the project’s visual identity with motion to bring the concept to life.',
					],
				},
			],
		},
	},

	// User experience
	{
		slug: 'table-talk',
		title: 'Table Talk',
		category: 'user-experience',
		image: tableTalk,
		detail: {
			year: '2026',
			duration: '4 months',
			team: 'Group work',
			disciplines: ['User Experience'],
			tools: ['FigJam', 'Figma'],
			sections: [
				{
					heading: 'About the project',
					body: [
						'TableTalk is a group project for the Experience Design course that we worked on over a period of approximately four months. Within the future scenario of an interstellar generation ship, we explored how shared meals could contribute to social connection during a space journey spanning multiple generations.',
						'Throughout the project, we followed a complete UX process based on the Double Diamond methodology. We documented our entire research and design process in FigJam, while all wireframes, user flows and interactive prototypes were developed in Figma. The final project and complete case study are available on Behance.',
					],
					image: ttIntro,
					link: {
						label: 'Case study on Behance',
						href: 'https://www.behance.net/gallery/249047479/Project-Table-Talk',
					},
				},
				{
					heading: 'My role',
					body: [],
					listTitle: 'What I worked on',
					list: [
						'UX Research',
						'UX Design',
						'Information Architecture',
						'Wireframing',
						'Prototyping',
						'User Testing',
						'Presentation & Documentation',
					],
				},
				{
					heading: 'UX Process',
					body: [
						'During this project, we worked through the second half of the Double Diamond process, with each phase supported by research and iterative testing.',
					],
					wide: ttUxProcess,
					wideScribble: 'bottom-right',
					subsections: [
						{
							heading: 'Ideation',
							body: [
								'We started by defining the problem space around social interaction during meals on a generation ship. Using various brainstorming and creative techniques, we developed multiple concepts, which we then evaluated, refined and validated to arrive at one strong final concept.',
							],
						},
						{
							heading: 'Information Architecture',
							body: [
								'We then translated the concept into a clear user experience. We defined user goals, task flows, user flows, wireflows, service blueprints and a complete information architecture to build a logical and user-friendly structure for the application.',
							],
							image: ttIa,
							imageNarrow: true,
						},
						{
							heading: 'Prototyping',
							body: [
								'Based on this structure, we developed low- and high-fidelity wireframes in Figma. Through an iterative design process, we gradually refined the interface and created an interactive prototype ready for user testing.',
							],
							image: ttPrototyping,
							imageNarrow: true,
						},
						{
							heading: 'User Testing',
							body: [
								'The prototype was tested with different target groups through multiple usability tests and a realistic simulation of the dinner event. The feedback we gathered helped us further improve both the app and the concept, ensuring they were better aligned with the users’ needs.',
							],
							image: ttTesting,
							imageNarrow: true,
						},
					],
				},
				{
					heading: 'Reflection',
					body: [
						'This project showed me how important a well-founded UX process is. I learned that research is about much more than simply gathering information; the insights it provides help shape the direction of a concept and give us a solid basis for design decisions. During the ideation phase, I also discovered the value of taking a moment after each technique to reflect on the key conclusions, ensuring that every next step was based on clear insights.',
						'I also gained a stronger understanding of the importance of iterative testing. By observing real users, we discovered problems that we would never have noticed ourselves. The testing process taught me that it is not only about collecting feedback, but also about analysing the results and translating them into concrete design improvements.',
						'Finally, this project further strengthened my interest in UX research. I learned to look more critically at my own work, better justify my design decisions and consistently keep the user at the centre of the design process. These are insights I will definitely carry with me into future projects.',
					],
					image: ttReflection,
				},
			],
		},
	},
	{
		slug: 'red-cross',
		title: 'Red Cross',
		category: 'user-experience',
		image: redCross,
		detail: {
			year: '2025',
			duration: '3 months',
			team: 'Group work',
			disciplines: ['User Experience'],
			sections: [
				{
					heading: 'The Challenge',
					body: [
						'For this Experience Design project, we investigated the user experience of blood donors at Rode Kruis-Vlaanderen. We mapped out the entire process, from scheduling a donation to leaving the donor centre, with the goal of understanding the experience from the donor’s perspective.',
					],
					listTitle: 'My role',
					list: ['UX Research', 'UX Design', 'User Journey Mapping'],
					link: {
						label: 'The project',
						href: 'https://www.behance.net/gallery/220593137/Rode-Kruis-User-Journey-Map',
					},
				},
				{
					heading: 'Research & Process',
					body: [
						'To understand the experience firsthand, we went through the donation process ourselves and documented every step. We recorded our actions, thoughts, emotions, pain points and touchpoints throughout the journey.',
						'We brought these insights together in an extensive user journey map, structured around the AIDA model.',
					],
					image: rcResearch,
					imageNarrow: true,
				},
				{
					heading: 'Insights',
					body: [
						'By visualising the complete experience, we identified several pain points and opportunities for improvement. For example, we noticed that the communication around blood donation is not equally convincing to everyone, while the lengthy questionnaire can also create confusion and uncertainty.',
					],
					image: rcCross,
					imageSide: 'left',
					imageNarrow: true,
				},
				{
					heading: 'Reflection',
					body: [
						'This project showed me how important it is to look at a user experience not only from a theoretical perspective, but to experience it firsthand. Going through the entire process as a user and analysing it afterwards gave me a better understanding of how small details, emotions and uncertainties can influence the overall experience.',
						'Translating these observations into a user journey map helped me structure the different steps and pain points clearly and identify concrete opportunities for improvement. This project further strengthened my understanding of UX research and the importance of a user-centred approach.',
					],
				},
			],
		},
	},
	{
		slug: 'tussen-rust-en-regels',
		title: 'Tussen Rust en Regels',
		category: 'user-experience',
		image: tussenRustEnRegels,
		detail: {
			year: '2025',
			duration: '4 months',
			team: 'Group work',
			disciplines: ['User Experience'],
			sections: [
				{
					heading: 'About the project',
					body: [
						'Tussen rust en regels is a UX research project for Experience Design 3, in which we explored how parents manage screen time for young children aged 0 to 6.',
						'We started with the assumption that children from single-parent families would have more screen time than children from two-parent families. Based on this hypothesis, we investigated how family structure, daily routines, workload and parenting styles influence the way screens are used.',
						'Throughout the research, we combined quantitative and qualitative methods, including secondary research, surveys, interviews and cultural probes. Rather than simply looking at how much screen time children have, we wanted to understand why, when and in what context parents choose to use screens.',
					],
					listTitle: 'My role',
					list: [
						'UX Research',
						'Secondary Research',
						'Interview & Survey Design',
						'Data Analysis',
						'Thematic Analysis',
						'Insight Development',
						'Information Design',
						'Presentation & Documentation',
					],
				},
				{
					heading: 'Research question',
					body: [],
					question:
						'How do family structures and the routines associated with them influence screen use among children aged 0 to 6?',
				},
				{
					heading: 'Research process',
					body: [],
					steps: ['Explore', 'Define', 'Research', 'Analyse', 'Insights'],
					stats: [
						{ value: '92', label: 'Survey responses' },
						{ value: '11', label: 'Interviews' },
						{ value: '5', label: 'Cultural probes' },
					],
				},
				{
					heading: 'What did we discover?',
					body: [
						'Our research challenged some of our initial assumptions about screen time, family structures and parenting.',
						'Rather than confirming a simple relationship between family structure and screen use, our findings revealed a more nuanced picture shaped by routines, practical needs and the context in which screens are used.',
						'Curious about what we found? Explore the full research process and our key insights on my Behance page.',
					],
					link: {
						label: 'Read the research on Behance',
						href: 'https://www.behance.net/lindedhauwe',
					},
				},
			],
		},
	},

	// Development
	{
		slug: 'portfolio-0-1',
		title: 'Portfolio 0.1',
		category: 'development',
		image: portfolioHeader,
		detail: {
			year: '2025',
			duration: '4 months',
			team: 'Solo',
			disciplines: ['Development'],
			cover: portfolioHeader,
			coverStyle: 'bleed-right',
			intro:
				'This project was about creating my own portfolio website from scratch. Instead of making a traditional online CV, I wanted to create a website that not only presents my school work, but also gives visitors a better idea of who I am and what I’m interested in.',
			disclaimer:
				'Disclaimer: the content of the portfolio was of no importance for this assignment. It was purely focused on the coding functionalities.',
			introLink: {
				label: 'Visit the site',
				href: 'https://lindedhauwe.github.io/portfolio/',
			},
			sections: [
				{
					heading: 'The concept',
					body: [
						'The portfolio acts as my digital calling card as a Digital Design & Development student. I wanted the website to combine my work, skills and personality in one place.',
						'The homepage introduces me and gives visitors an overview of my work, while the different sections allow them to explore my projects, learn more about me and get in touch.',
						'I also wanted to include content that wasn’t strictly related to school. To make the portfolio feel more personal, I created a small music blog where I share my favourite tracks of the month. This gives visitors another way to discover my personality and interests while adding content that changes over time.',
					],
					image: portfolioAbout,
				},
				{
					heading: 'School projects',
					body: [
						'The main part of the portfolio is my school project collection, where I showcase the projects I have created throughout my studies.',
						'Each project has its own page where I can explain the concept, process, design choices and development behind the work. This allowed me to present projects as more than just finished visuals and show the thinking and skills behind them.',
						'The project collection is managed through Astro content collections and Markdown files, making it easy to add new projects as my portfolio grows.',
					],
					image: portfolioProjects,
				},
				{
					heading: 'Music blog',
					body: [
						'Alongside my projects, I created a personal music section where I share my top tracks of the month.',
						'The idea was to make the portfolio feel more like a reflection of me rather than only a professional showcase. Every month, I can add a new selection of songs and write about the music I’m listening to.',
						'This also gave me the opportunity to experiment with a second type of recurring content in Astro, separate from my school projects.',
					],
					image: portfolioBlog,
				},
				{
					heading: 'From idea to website',
					body: [
						'I started by researching other designer and developer portfolios to explore different ways of presenting work, personal information and additional content.',
						'After defining the structure and visual direction, I translated the design into reusable components and pages. I wanted the website to have a consistent visual identity while still allowing different types of content, such as projects and music posts, to have their own layouts.',
					],
				},
				{
					heading: 'Development',
					body: [
						'The website was developed using Astro, HTML, CSS and JavaScript. I used Astro’s content collections to manage both my school projects and music blog through Markdown files.',
						'I also worked with reusable components and multiple Astro layouts to keep the code organised and make the website easier to maintain.',
						'The project was developed using GitHub Flow, working with feature branches and milestone branches throughout the development process.',
					],
					image: portfolioDatabase,
				},
				{
					heading: 'Responsive design',
					body: [
						'The portfolio was designed mobile-first and then adapted for larger screens. I focused on creating flexible layouts that work across different screen sizes instead of designing completely separate versions for mobile and desktop.',
						'This meant paying particular attention to navigation, typography, spacing, images and the way project content is displayed on smaller screens.',
					],
					image: portfolioResponsive,
					imageNarrow: true,
				},
				{
					heading: 'Visual identity & interaction',
					body: [
						'I wanted the visual style of the portfolio to feel minimal while still having a strong personal character. Typography, colour, spacing and small interactions work together to create a consistent identity.',
						'I also used animations and microinteractions throughout the website to make the experience feel more dynamic. Rather than adding animations purely for decoration, I used them to guide attention and give feedback when interacting with different elements.',
					],
					image: portfolioPersonal,
					imageNarrow: true,
					imageSide: 'left',
				},
				{
					heading: 'What I learned',
					body: [
						'This project helped me improve my skills in Astro, JavaScript, responsive CSS and Git. I learned how to use content collections and reusable components to build a larger, more structured website. I also gained experience making dynamic project and blog pages from Markdown files instead of coding each page separately.',
						'Most importantly, I learned how to approach a website as a complete codebase, rather than as a collection of individual pages.',
					],
				},
			],
		},
	},
	{
		slug: 'walter-van-beirendonck',
		title: 'Walter Van Beirendonck',
		category: 'development',
		image: wvbHeader,
		detail: {
			heading: 'Inside the Head of Walter Van Beirendonck',
			year: '2026',
			duration: '1 month',
			team: 'Solo',
			disciplines: ['Visual Design', 'User Experience', 'Development'],
			cover: wvbHeader,
			coverStyle: 'bleed-right',
			intro:
				'Inside the Head of Walter Van Beirendonck is an interactive longread exploring the creative mind of Belgian fashion designer Walter Van Beirendonck. Instead of simply showcasing his work, we wanted to explore the ideas, statements and visual language behind his designs. The experience takes users through different parts of his creative world, from his identity and patterns to his design process and an interactive brain dump of his work.',
			introLink: {
				label: 'Visit the site',
				href: 'https://lindedhauwe.github.io/integration3/',
			},
			goal:
				'The goal was to create a longread that gives users a deeper understanding of Walter Van Beirendonck and the ideas behind his work. Rather than presenting his career chronologically, we translated his way of thinking into an interactive experience where users can explore, interact and discover connections themselves.',
			hmw:
				'How might we give users an insight into Walter Van Beirendonck’s creative mind through an interactive digital experience?',
			sections: [
				{
					heading: 'Concept & Story',
					body: [
						'The concept is based on the idea of entering Walter’s mental landscape. His work brings together politics, identity, gender, the body, humour and activism, often resulting in a visual world that feels bold and overwhelming.',
						'The longread is therefore divided into different parts of his creative universe. Users can create their own statement from elements of his work, explore the patterns that define his visual language, follow ideas from thought to form and freely navigate through a chaotic collection of his work.',
					],
					image: wvbOutfit,
				},
				{
					heading: 'Development',
					body: [
						'My main focus within the project was the development and interactive side. I translated the designs from Figma into a responsive website using HTML, CSS and JavaScript, while making sure the visual language and interactions remained consistent across different screen sizes.',
						'A major challenge was bringing the more experimental interactions to life in code. I worked on interactions such as drag & drop, hover states, scroll-based animations and interactive patterns. The Brain Dump was particularly challenging, as the images needed to feel chaotic and unpredictable while still being easy to interact with.',
						'I also used After Effects to animate some of the visual elements and integrated these animations into the website.',
					],
					image: wvbBraindump,
				},
				{
					heading: 'Challenges',
					body: [
						'One of the biggest challenges was finding the balance between visual experimentation and usability. The project contains many animations, images and interactive elements, so I had to make sure these strengthened the story instead of becoming distracting.',
						'Translating the experience to mobile also required rethinking certain interactions rather than simply scaling down the desktop version.',
					],
					image: wvbScroll,
				},
				{
					heading: 'Reflection',
					body: [
						'This project taught me to bring design and development together from an earlier stage. I became more confident in translating complex visual designs into code and learned that an interaction should not only work technically, but also contribute to the story and overall user experience.',
					],
				},
			],
		},
	},
	{
		slug: 'the-big-click',
		title: 'The Big Click',
		category: 'development',
		image: theBigClick,
		detail: {
			year: '2025',
			duration: '3 months',
			team: 'Solo',
			disciplines: ['Development', 'Creative Coding'],
			tools: ['HTML', 'CSS', 'JavaScript'],
			cover: bcStart,
			coverStyle: 'bleed-right',
			intro:
				'The Big Click is my space-themed clicker game developed for a Creative Coding assignment. The goal was to create an interactive experience where clicking is the main mechanic, while combining it with upgrades, automatic income, animations and microinteractions.',
			introLink: {
				label: 'Play the game',
				href: 'https://lindedhauwe.be/TheBigClick/',
			},
			sections: [
				{
					heading: 'The concept',
					body: [
						'The game starts in complete darkness. The player has to press “S” to trigger the beginning of the experience. A bright sun then bursts onto the screen, becoming the centre of the game.',
						'By clicking the sun, the player collects stars. These stars can be spent on planets and other upgrades for their solar system. Each new planet increases the number of stars earned, allowing the player to build an increasingly productive solar system.',
						'The game also includes unexpected purchasable items and bonuses to make the experience more than a traditional clicker game. The combination of a simple click mechanic with the growing solar system creates a progression that becomes increasingly visual and interactive.',
					],
					image: bcBegin,
				},
				{
					heading: 'From concept to game',
					body: [
						'Before starting the development, I translated the idea into a simple game flow and wireframe. This helped me determine how the different elements would work together and where the main interactions would take place.',
						'I wanted the interface to remain visually simple so that the solar system would stay the main focus. At the same time, animations give the interface a sense of movement and make the player’s actions feel more responsive.',
					],
					steps: [
						'Click the sun',
						'Earn stars',
						'Buy upgrades',
						'Generate more stars',
						'Expand the solar system',
					],
				},
				{
					heading: 'Development',
					body: [
						'The project was built from scratch using HTML, CSS and JavaScript, without external frameworks or libraries.',
						'A major part of the development was using DOM manipulation and event handlers to make the game respond to the player’s actions. I also implemented localStorage so that the player’s progress could be saved, as well as setInterval() and setTimeout() for automatic income and timed interactions.',
						'One of the biggest technical challenges was creating the solar system itself. Each planet needed to move independently around the sun while remaining visually connected to the rest of the system. I also experimented with timed interactions, such as objects appearing and disappearing at specific moments.',
					],
				},
				{
					heading: 'Design & interaction',
					body: [
						'In this project, design was definitely not the main focus. The visual style is inspired by outer space, using a dark background contrasted with bright planets, stars and the glowing sun. This creates a strong visual hierarchy and makes the interactive elements stand out.',
						'I used CSS animations and microinteractions to make the game feel more alive. The sun has a glowing hover effect, planets continuously orbit around it, and progress indicators provide visual feedback while the player saves up for new upgrades.',
						'These small interactions were important because they turn otherwise simple actions, such as clicking a button or earning a star, into something that feels more dynamic and rewarding.',
					],
					image: bcGame,
				},
				{
					heading: 'What I learned',
					body: [
						'This project challenged me to combine JavaScript functionality with visual interaction design. Instead of treating animation and interaction as separate elements, I learned how they can support the gameplay and make the experience more engaging.',
						'I also gained more experience with DOM manipulation, event handling, timers, local storage and CSS animations. Most importantly, I learned how a relatively simple mechanic can become a complete interactive experience when progression, feedback and visual design are carefully combined.',
					],
					image: bcFinal,
				},
			],
		},
	},
];

export const projectsIn = (id: CategoryId) =>
	projects.filter((p) => p.category === id);

/** Projects shown in the home-page "Selected work" teaser. */
export const featuredWork = ['table-talk', 'kickstarter', 'antwerp-on-tap']
	.map((slug) => projects.find((p) => p.slug === slug))
	.filter((p): p is Project => Boolean(p))
	.map((p) => ({
		title: p.title,
		image: p.image,
		alt: `${p.title} project`,
		href: withBase(`/projects/${p.slug}/`),
	}));
