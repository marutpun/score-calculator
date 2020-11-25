import { useSetRecoilState } from 'recoil';
import { tScoreState } from '../atoms/tScoreState';

function TScoreTable({ rawScoreList }) {
	const setTScoreList = useSetRecoilState(tScoreState);

	const _deleteStudent = (student) => {
		const newList = rawScoreList.filter((item) => {
			return item.id !== student.id;
		});
		setTScoreList(newList);
	};

	return (
		<div className="table-responsive-md">
			<table className="table table-hover table-sm">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Raw Score</th>
						<th scope="col">Z-Score</th>
						<th scope="col">T-Score</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{rawScoreList.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.rawScore}</td>
							<td>{item.zScore}</td>
							<td>{item.tScore}</td>
							<td>
								<button className="btn btn-danger" onClick={() => _deleteStudent(item)}>
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

export default TScoreTable;
