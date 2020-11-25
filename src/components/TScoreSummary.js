import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import * as atoms from '../atoms/tScoreState';

function TScoreSummary() {
	const [tempC, setTempC] = useRecoilState(atoms.tScoreState);
	const _resetList = useResetRecoilState(atoms.tScoreState);
	const mean = useRecoilValue(atoms.getMean);
	const stdValue = useRecoilValue(atoms.getStdValue);

	const _calculateZTScore = () => {
		const newVal = tempC.map((item) => {
			return {
				...item,
				zScore: parseFloat(((item.rawScore - mean) / stdValue).toFixed(6)),
				tScore: parseFloat((50 + ((item.rawScore - mean) / stdValue) * 10).toFixed(6)),
			};
		});
		setTempC(newVal);
	};

	return (
		<footer className="pt-3">
			<p>Mean (คะแนนเฉลี่ย): {mean.toFixed(6)}</p>
			<p>S.D. (ส่วนเบี่ยงเบนมาตรฐาน): {stdValue.toFixed(6)}</p>

			<button className="btn btn-primary btn-sm btn-block" onClick={_calculateZTScore}>
				Calculate
			</button>
			<button className="btn btn-secondary btn-sm btn-block" onClick={_resetList}>
				Reset
			</button>
		</footer>
	);
}

export default TScoreSummary;
