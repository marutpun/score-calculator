import useTScore from '../hooks/useTScore';

function TScoreForm() {
	const [name, rawScore, _handleChangeInput, _handleSubmitForm] = useTScore('');

	return (
		<section className="mb-3">
			<form onSubmit={_handleSubmitForm}>
				<div className="form-row align-items-center">
					<div className="form-group col-7">
						<label className="sr-only" htmlFor="form__subject">
							Name / ชื่อ - นามสกุล
						</label>
						<input
							type="text"
							className="form-control"
							name="firstName"
							id="form__subject"
							placeholder="Name / ชื่อ - นามสกุล"
							onChange={_handleChangeInput}
							value={name}
						/>
					</div>
					<div className="form-group col-3">
						<label className="sr-only" htmlFor="form__weight">
							Score / คะแนน
						</label>
						<input
							type="text"
							className="form-control"
							name="rawScore"
							id="form__weight"
							placeholder="Score / คะแนน"
							required
							onChange={_handleChangeInput}
							value={rawScore}
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

export default TScoreForm;
