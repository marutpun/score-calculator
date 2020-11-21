import { useRecoilValue } from 'recoil';
import { useResetRecoilState } from 'recoil';

import { gradeState, subjectItemCount, totalScore } from '../atoms/gradeState';

function GradeCalculator() {
	const _resetList = useResetRecoilState(gradeState);
	const countItem = useRecoilValue(subjectItemCount);
	const calculateGrade = useRecoilValue(totalScore);
	const isEmpty = countItem <= 0 ? true : false;

	return (
		<footer className="pt-3">
			<p className={`h4 text-center mb-3 ${isEmpty ? 'text-danger' : 'text-success'}`}>
				{isEmpty ? 'Please enter your data ! ୧༼◔益◔╭∩╮༽' : `Your GPAx is ${calculateGrade} ◔ ⌣ ◔`}
			</p>
			<button className="btn btn-secondary btn-sm btn-block" onClick={_resetList} disabled={isEmpty}>
				Reset
			</button>
		</footer>
	);
}

export default GradeCalculator;
