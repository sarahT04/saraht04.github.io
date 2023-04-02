import Reports from '../assets/img/snapshots/reports.png';
import Erika from '../assets/img/snapshots/erika.png';
import Skk from '../assets/img/snapshots/skk.png';
export type ProjectKeys = 'React' | 'Python' | 'Svelte';
export type ProjectValues = {
	none?: boolean;
	title: string;
	src: string;
	description: string;
	href: string;
	technologyUsed: string;
};
type ProjectDatas = {
	[key in ProjectKeys]: ProjectValues[];
};


export const projectDatas: ProjectDatas = {
	React: [
		{
			title: 'Reports',
			src: Reports,
			description:
				"A simple website to store, see, and create teacher's reports of a student's performance.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Next 12, TanStack Query, Chakra UI, Mongodb, etc.'
		},
		{
			title: 'Little Lemon',
			src: Reports,
			description:
				"Front-End Capstone project for META.",
			href: 'https://github.com/sarahT04/meta-capstone',
			technologyUsed: 'React, React-router, Figma, Jest, etc.'
		},
		{
			title: 'Studio Kotak Katik',
			src: Skk,
			description:
				"Website for Studio Kotak Katik, a learning community.",
			href: 'https://skk-website-eta.vercel.app/',
			technologyUsed: 'Next 13, NextAuth Material UI, MySQL, PWA, etc.'
		},
		{
			title: 'Erika',
			src: Erika,
			description:
				"RISTEK Sistech bootcamp Software Engineering division Final Project.",
			href: 'https://github.com/sarahT04/sistech-finpro',
			technologyUsed: 'Next 12, React Router, Redux, Firestore, etc.'
		},
	],
	Svelte: [
		{
			title: 'Codenames Chat',
			src: Reports,
			description:
				"A chatting app where you only need the room name and passcode.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Firestore, Tailwind, etc.'
		},
		{
			title: 'Namecard',
			src: Reports,
			description:
				"To create my online namecard.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Tailwind, etc.'
		},
		{
			none: true, title: 'None1',
			src: Reports,
			description:
				"A chatting app where you only need the room name and passcode.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Firestore, Tailwind, etc.'
		},
		{
			none: true, title: 'None2',
			src: Reports,
			description:
				"A chatting app where you only need the room name and passcode.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Firestore, Tailwind, etc.'
		},
	],
	Python: [
		{
			title: 'CLI Scheduler',
			src: Reports,
			description:
				"A CLI scheduler with Python and JSON.",
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'JSON, CLI prompts, etc.'
		},
		{
			title: 'TDD & Vigenere Cipher',
			src: Reports,
			description:
				"Login and register data encryption using Vigenere Cipher with Test Driven Development.",
			href: 'https://github.com/sarahT04/TDD-Vigenere',
			technologyUsed: 'MySQL, unittest, etc.'
		},
		{
			title: 'Treasure Hunt CMD',
			src: Reports,
			description:
				"Ever want to try to play a treasure hunt in your CMD?",
			href: 'https://github.com/sarahT04/treasure-hunt',
			technologyUsed: 'randint, pythagoras, string loop, etc.'
		},
		{
			title: 'DOCX Image Extractor',
			src: Reports,
			description:
				"Extract the images inside an unzipped DOCX file and rename it.",
			href: 'https://github.com/sarahT04/docx_image_extractor',
			technologyUsed: 'zipfile, etc.'
		},
	],
};
