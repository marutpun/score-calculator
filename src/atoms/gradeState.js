import { atom, selector } from 'recoil';

export const gradeState = atom({
	key: 'gradeState',
	default: [],
});

export const subjectItemCount = selector({
	key: 'subjectItemCount',
	get: ({ get }) => {
		const number = get(gradeState);

		return number.length;
	},
});

export const totalScore = selector({
	key: 'totalScore',
	get: ({ get }) => {
		const arr = get(gradeState);

		let sumWeight = 0;
		let sumScore = 0;

		// Sum weight
		arr.forEach((subject) => {
			sumWeight += subject.weight;
		});

		// Sum scores
		arr.forEach((subject) => {
			const sum = subject.weight * subject.grade;
			sumScore += sum;
		});

		return (sumScore / sumWeight).toFixed(2);
	},
});
