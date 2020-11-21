import { useSetRecoilState } from 'recoil';
import { gradeState } from '../atoms/gradeState';

function GradeTable({ gradeList }) {
	const setGradeList = useSetRecoilState(gradeState);

	const _deleteSubject = (subject) => {
		const newList = gradeList.filter((item) => {
			return item.id !== subject.id;
		});
		setGradeList(newList);
	};

	return (
		<div className="table-responsive-md">
			<table className="table table-hover table-sm">
				<thead>
					<tr>
						<th scope="col">Subject</th>
						<th scope="col">Weight</th>
						<th scope="col">Grade</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{gradeList.map((item) => (
						<tr key={item.id}>
							<td>{item.subject}</td>
							<td>{item.weight}</td>
							<td>{item.grade}</td>
							<td>
								<button className="btn btn-danger" onClick={() => _deleteSubject(item)}>
									ลบ
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default GradeTable;
