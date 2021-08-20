import chalk from 'chalk';
import * as figlet from 'figlet';

figlet.text(
	process.argv[2],
	{
		font: 'Standard',
		horizontalLayout: 'fitted',
		verticalLayout: 'fitted',
	},
	(error: any, data: any) => {
		if (error) {
			return process.exit();
		}

		console.log(chalk.bold.blue(data));
		console.log('');
		return process.exit(0);
	}
);
