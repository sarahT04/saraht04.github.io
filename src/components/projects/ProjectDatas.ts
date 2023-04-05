import Reports from '../assets/img/snapshots/reports.png';
import Erika from '../assets/img/snapshots/erika.png';
import Skk from '../assets/img/snapshots/skk.png';
import LittleLemon from '../assets/img/snapshots/little_lemon.png';
import Tdd from '../assets/img/snapshots/tdd.png';
import TreasureHunt from '../assets/img/snapshots/treasure_hunt.png';
import Scheduler from '../assets/img/snapshots/scheduler.png';
import Namecard from '../assets/img/snapshots/namecard.png';
import CS50 from '../assets/img/snapshots/cs50.png';
import Codenames from '../assets/img/snapshots/codenames.png';

export type ProjectKeys = 'React' | 'Python' | 'Svelte';
export type ProjectValues = {
	title: string;
	src: string;
	description: string;
	href: string;
	technologyUsed: string;
};
export type None = {
	none: true;
	title: string;
};
type ProjectDatas = Record<ProjectKeys, (ProjectValues | None)[]>;

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
			src: LittleLemon,
			description: 'Front-End Developer Capstone project for META.',
			href: 'https://github.com/sarahT04/meta-capstone',
			technologyUsed: 'React, React-router, Figma, Jest, etc.'
		},
		{
			title: 'Studio Kotak Katik',
			src: Skk,
			description: 'Website for Studio Kotak Katik, a learning community.',
			href: 'https://skk-website-eta.vercel.app/',
			technologyUsed: 'Next 13, NextAuth, Material UI, MySQL, AWS, etc.'
		},
		{
			title: 'Erika',
			src: Erika,
			description: 'RISTEK Sistech Mentorship Program Software Engineering division Final Project.',
			href: 'https://github.com/sarahT04/sistech-finpro',
			technologyUsed: 'Next 12, React-router, Redux, Firestore, etc.'
		}
	],
	Svelte: [
		{
			title: 'Codenames Chat',
			src: Codenames,
			description:
				'A chatting app with no credentials. Access with only a nickname, room name and passcode.',
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Firestore, Tailwind, etc.'
		},
		{
			title: 'Namecard',
			src: Namecard,
			description: 'To access my online namecard.',
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'Tailwind, etc.'
		},
		{
			none: true,
			title: 'NoneSvelte1'
		},
		{
			none: true,
			title: 'NoneSvelte2'
		}
	],
	Python: [
		{
			title: 'Harvard CS50 Django',
			src: CS50,
			description:
				"My Django projects to graduate from Harvard's CS50 Web Programming with Python & JS.",
			href: 'https://github.com/me50/sarahT04/tree/main',
			technologyUsed: 'Django, etc.'
		},
		{
			title: 'CLI Scheduler',
			src: Scheduler,
			description: 'A CLI scheduler with Python and JSON.',
			href: 'https://github.com/sarahT04/reports',
			technologyUsed: 'JSON, CLI prompts, etc.'
		},
		{
			title: 'TDD & Vigenere Cipher',
			src: Tdd,
			description:
				'Login and register data encryption using Vigenere Cipher with Test Driven Development.',
			href: 'https://github.com/sarahT04/TDD-Vigenere',
			technologyUsed: 'MySQL, unittest, etc.'
		},
		{
			title: 'Treasure Hunt',
			src: TreasureHunt,
			description: 'Ever want to try to play a treasure hunt game with a CLI?',
			href: 'https://github.com/sarahT04/treasure-hunt',
			technologyUsed: 'randint, pythagoras, string loop, etc.'
		}
	]
};
