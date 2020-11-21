import { useRecoilValue } from 'recoil';

import Layout from '../components/layout';
import GradeForm from '../components/GradeForm';
import GradeTable from '../components/GradeTable';
import GradeCalculator from '../components/GradeSummary';

//atoms
import { gradeState } from '../atoms/gradeState';

function GpaContainer() {
	const transcript = useRecoilValue(gradeState);

	return (
		<Layout title="GPAx Calculator">
			<GradeForm />
			<GradeTable gradeList={transcript} />
			<GradeCalculator />
		</Layout>
	);
}

export default GpaContainer;
