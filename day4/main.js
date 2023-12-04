import { parseInputWithRegexReplaceAndSplit } from '../inputParser/inputParser.js';

let input = parseInputWithRegexReplaceAndSplit(
	'input/input.txt',
	/Card\s*\d*: /g,
	'',
	'|'
);

// Part 1

let partOne = input
	.map((card) => card.map((set) => set.split(' ').filter((s) => s !== '')))
	.map((card) =>
		card[0]
			.map((number) => (card[1].includes(number) ? 1 : 0))
			.reduce((a, b) => a + b)
	)
	.reduce((a, b) => (b === 0 ? a : a + 2 ** (b - 1)), 0);

console.log('Part One: ' + partOne);

// Part 2

// use countSpawnedCards to count the number of cards spawned by a match
let matchList = input
	.map((card) => card.map((set) => set.split(' ').filter((s) => s !== '')))
	.map((card) =>
		card[0]
			.map((number) => (card[1].includes(number) ? 1 : 0))
			.reduce((a, b) => a + b)
	);

let partTwo = 0;

for (let i = 0; i < matchList.length; i++) {
	partTwo += countSpawnedCards(matchList, i);
}

console.log('Part Two: ' + partTwo);

// Helper functions

function countSpawnedCards(matchList, i) {
	let count = 1;
	for (let j = 0; j < matchList[i]; j++) {
		count += countSpawnedCards(matchList, i + 1 + j);
	}
	return count;
}
