const {series} = require('nps-utils');

module.exports = {
	scripts: {
		default: 'nps start',
		lint: {
			fix: {
				script: 'xo --fix',
				description: 'Auto fix your code',
			},
			script: 'xo',
			description: 'Lint your code',
		},
		start: {
			script: 'cross-env NODE_ENV=production node dist/app.js',
			description: 'Starts the builded app',
		},
		serve: {
			inspector: {
				script: series(
					'nps banner.serve',
					'nodemon --watch src --watch .env --inspect'
				),
				description: 'Serves the current app and attach inspector to it.',
			},
			script: series('nps banner.serve', 'nodemon --watch src --watch .env'),
			description: 'Serves the current app and watches for changes',
		},
		banner: {
			serve: banner('serve'),
		},
	},
};

function banner(name) {
	return {
		hiddenFromHelp: true,
		silent: true,
		description: `Shows ${name} banners to the console`,
		script: runFast(`./commands/banner.ts ${name}`),
	};
}

function runFast(path) {
	return `ts-node --transpile-only ${path}`;
}
