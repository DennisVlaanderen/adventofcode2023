import fs from 'fs';

export function parseInput(input) {
	return fs.readFileSync(input, 'utf8').trim().split('\r\n');
}
