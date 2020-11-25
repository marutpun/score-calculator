import Layout from '../components/layout';
import { useRecoilValue } from 'recoil';

import TScoreForm from '../components/TScoreForm';
import TScoreSummary from '../components/TScoreSummary';
import TScoreTable from '../components/TScoreTable';

import { tScoreState } from '../atoms/tScoreState';

function TScoreContainer() {
	const rawListInput = useRecoilValue(tScoreState);
	return (
		<Layout title="T Score Calculator">
			<TScoreForm />
			<TScoreTable rawScoreList={rawListInput} />
			<TScoreSummary />
		</Layout>
	);
}

export default TScoreContainer;
