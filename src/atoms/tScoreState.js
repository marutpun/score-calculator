import { max, min, std } from 'mathjs';

import { atom, selector } from 'recoil';

export const tScoreState = atom({
	key: 'tScoreState',
	default: [],
});

export const getMean = selector({
	key: 'getMean',
	get: ({ get }) => {
		const arr = get(tScoreState);
		let totalScore = 0;
		let totalField = arr.length;

		if (arr.length > 0) {
			arr.forEach((item) => (totalScore += item.rawScore));
			return totalScore / totalField;
		} else {
			return 0;
		}
	},
});

export const getStdValue = selector({
	key: 'getStdValue',
	get: ({ get }) => {
		const arr = get(tScoreState);
		let numberArray = [];
		if (arr.length > 1) {
			arr.forEach((item) => numberArray.push(item.rawScore));

			return std(numberArray, 'uncorrected');
		} else {
			return 0;
		}
	},
});

export const calRange = selector({
	key: 'calRange',
	get: ({ get }) => {
		const arr = get(tScoreState);
		let numberArray = [];
		if (arr.length > 1) {
			arr.forEach((item) => numberArray.push(item.tScore));
			return (max(numberArray) - min(numberArray)) / arr.length;
		} else {
			return 0;
		}
	},
});
