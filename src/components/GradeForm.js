import useGrade from '../hooks/useGrade';

function GradeForm() {
	const [subject, weight, grade, _handleChangeInput, _handleSubmitGrade] = useGrade('');

	return (
		<section className="mb-3">
			<form onSubmit={_handleSubmitGrade}>
				<div className="form-row align-items-center">
					<div className="form-group col-4">
						<label className="sr-only" htmlFor="form__subject">
							Subject / วิชา
						</label>
						<input
							type="text"
							className="form-control"
							name="subject"
							id="form__subject"
							placeholder="Subject / วิชา"
							required
							value={subject}
							onChange={_handleChangeInput}
						/>
					</div>
					<div className="form-group col-3">
						<label className="sr-only" htmlFor="form__weight">
							Weight / หน่วยกิต
						</label>
						<input
							type="text"
							className="form-control"
							name="weight"
							id="form__weight"
							placeholder="Weight / หน่วยกิต"
							required
							value={weight}
							onChange={_handleChangeInput}
						/>
					</div>
					<div className="form-group col-3">
						<label className="sr-only" htmlFor="form__score">
							Grade / เกรด
						</label>
						<input
							type="text"
							className="form-control"
							name="grade"
							id="form__score"
							placeholder="Grade / เกรด"
							required
							value={grade}
							onChange={_handleChangeInput}
						/>
					</div>
					<div className="form-group col-2">
						<button type="submit" className="btn btn-success btn-block">
							เพิ่ม
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default GradeForm;
