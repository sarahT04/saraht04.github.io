import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/sarahT04/saraht04.github.io.git', // Update to point to your repository
		user: {
			name: 'Sarah Tan', // update to use your name
			email: 'sarahtanujaya@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
