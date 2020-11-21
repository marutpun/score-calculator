import { generate } from 'shortid';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { gradeState } from '../atoms/gradeState';

function useGrade(initialValue) {
	const [subject, setSubject] = useState(initialValue);
	const [weight, setWeight] = useState(initialValue);
	const [grade, setGrade] = useState(initialValue);

	// Atoms (set)
	const setGradeList = useSetRecoilState(gradeState);

	// Handle onChange input
	function _handleChangeInput(event) {
		const { name, value } = event.target;
		switch (name) {
			case 'subject':
				setSubject(value);
				break;
			case 'weight':
				setWeight(value);
				break;
			case 'grade':
				setGrade(value);
				break;
			default:
				throw new Error();
		}
	}

	// Handle onSubmit form
	function _handleSubmitGrade(event) {
		event.preventDefault();
		setSubject('');
		setWeight('');
		setGrade('');
		setGradeList((prevList) =>
			prevList.concat({
				id: generate(),
				subject,
				weight: parseFloat(weight),
				grade: parseFloat(grade),
			})
		);
	}

	return [subject, weight, grade, _handleChangeInput, _handleSubmitGrade];
}

export default useGrade;
