function PopupWithForm(props) {
	return (
		<div className="overlay overlay_type_${props.name} ${isOpen ? 'popup_is-opened' : ''}">
			<section className="modal modal_${props.name}">
				<button
					className="modal__close-button"
					type="button"
					onClick={
						props.onClose
					}
				></button>
				<div className="modal__contents">
					<h2 className="modal__text">
						{
							props.title
						}
					</h2>
					<form
						// onSubmit={
						// 	handleSubmit
						// }
						className="form form-${props.name}"
					>
						<div
							className="modal__form-control"
							id="input"
						>
							{
								props.children
							}
							<button
								className="button"
								disabled
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
export default PopupWithForm;
