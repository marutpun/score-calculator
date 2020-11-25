import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { generate } from 'shortid';

import { tScoreState } from '../atoms/tScoreState';

function useTScore(initialValue) {
	const [name, setName] = useState(initialValue);
	const [rawScore, setRawScore] = useState(initialValue);
	const setList = useSetRecoilState(tScoreState);

	function _handleChangeInput(event) {
		const {
			target: { value, name },
		} = event;
		switch (name) {
			case 'firstName':
				setName(value);
				break;
			case 'rawScore':
				setRawScore(value);
				break;
			default:
				throw new Error();
		}
	}

	function _handleSubmitForm(event) {
		event.preventDefault();
		setName('');
		setRawScore('');
		setList((prevList) =>
			prevList.concat({
				id: generate(),
				name,
				rawScore: parseFloat(rawScore),
				zScore: '',
				tScore: '',
			})
		);
	}

	return [name, rawScore, _handleChangeInput, _handleSubmitForm];
}

export default useTScore;
