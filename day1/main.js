// read the input of input.txt
let fs = require('fs');

// create a two dimensional array of the input where a double line break is a new array
let input = fs.readFileSync('input/input.txt', 'utf8').trim().split('\r\n');

// Part One

let partOne = input
	.filter(s => s)
	.map(s => s.match(/(\d)/gms))
	.map(n => +[n[0], n[n.length - 1]].join(''))
	.reduce((a, b) => a + b, 0)

console.log("Part One: " + partOne);

// Part Two

const map = {
	twone: [2, 1],
	sevenine: [7, 9],
	oneight: [1, 8],
	threeight: [3, 8],
	nineight: [9, 8],
	fiveight: [5, 8],
	eighthree: [8, 3],
	eightwo: [8, 2],
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9
}

let partTwo = input
		.filter(s => s)
    .map(s => s.match(new RegExp(Object.keys(map).join('|'), 'gms')))
		.map(s => s.flatMap(v => map[v]))
    .map(n => +[n[0], n[n.length - 1]].join(''))  
    .reduce((a, b) => a + b, 0)

console.log("Part Two: " + partTwo);
