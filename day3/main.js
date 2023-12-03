import { parseInput } from '../inputParser/inputParser.js';

let input = parseInput('input/input.txt', 'utf8');

// Part 1

function sumParts(input) {
	const numbers = find(input, /\d+/gms);
	const parts = find(input, /[^.\d]/gms);

	return numbers.filter(n =>
			parts.some(s => isAdjecent(n, s))
		)
		.map(n => parseInt(n.text))
		.reduce((a, b) => a + b, 0);
}

console.log('Part One: ' + sumParts(input));

// Part 2

function sumGears(input) {
	const numbers = find(input, /\d+/gms);
	const gears = find(input, /\*/gms);

	return gears.map(g => {
			const parts = numbers.filter(n => isAdjecent(n, g));
		return parts.length == 2
			? parts.map(p => parseInt(p.text))
					.reduce((a, b) => a * b, 1)
			: 0;
		})
		.reduce((a, b) => a + b, 0);
}

console.log('Part Two: ' + sumGears(input));

// Helper methods

function isAdjecent(number, gear) {
	return number.line - 1 <= gear.line && number.line + 1 >= gear.line && (number.start <= gear.end && number.end >= gear.start);
}

function find(input, regex) {
	return input.flatMap((line, i) =>
		Array.from(line.matchAll(regex), ({ [0]: text, index: start }) => ({text, start, end: start + text.length, line: i}))
	)
}
