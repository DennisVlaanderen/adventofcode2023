import fs from 'fs';

export function parseInput(input) {
	return fs.readFileSync(input, 'utf8')
		.trim()
		.split('\r\n');
}

export function parseInputWithSplit(input, split) {
	return fs.readFileSync(input, 'utf8')
		.trim()
		.split(split);
}

export function parseInputWithRegexReplace(input, regex, replace) {
	return fs.readFileSync(input, 'utf8')
		.trim()
		.replace(regex, replace)
		.split('\r\n');
}

export function parseInputWithRegexSplit(input, regex) {
	return fs.readFileSync(input, 'utf8')
		.trim()
		.split(regex);
}

export function parseInputWithRegexReplaceAndSplit(input, regex, replace, split) {
	return fs.readFileSync(input, 'utf8')
		.trim()
		.split('\r\n')
		.map(line => line.replace(regex, replace))
		.map(line => line.split(split));
}
