import { parseInput } from '../inputParser/inputParser.js';

let input = parseInput('input/input.txt', 'utf8');

// Part One

const possible = {
	red: 12,
	green: 13,
	blue: 14
}

const partOne = input
	.map((s, i) => (game =>
		game
			.map(s => s.match(/(\d+) (\w+)/ms).slice(1))
			.every(c => c[0] <= possible[c[1]])
	)(s.match(/(\d+ \w+)/gms)) && i + 1)
	.filter(Boolean)
	.reduce((a, b) => a + b, 0);

console.log('Part One:', partOne);

// Part Two

const partTwo = input
	.map(s => s.match(/(\d+ \w+)/gms))
	.map(game => game
			.map(s => s.split(' '))
			.reduce((minSet, [count, color]) => {
				return minSet.set(color, Math.max(minSet.get(color) || 0, count))
			}, new Map())
			.values()
	)
	.map(game => [...game].reduce((a, b) => a * b, 1))
	.reduce((a, b) => a + b, 0);

console.log('Part Two:', partTwo);
