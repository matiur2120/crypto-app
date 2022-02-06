import React, { useState } from "react";

const BnbAmount = () => {
	const [amount, setAmount] = useState("");
	const [amountErro, setAmountError] = useState({});
	const handleSubmit = (event) => {
		event.preventDefault();
		const isValid = formValidation();
		setAmount("");
	};
	const inputControl = (event) => {
		setAmount(event.target.value);
	};
	const formValidation = () => {
		let isValid = true;
		const amountErro = {};
		if (!Number(amount)) {
			amountErro.notNumber = "Input value must be number!";
			isValid = false;
		}
		setAmountError(amountErro);
		return isValid;
	};
	return (
		<div className="bnb_full_container">
			<h2>Enter BNB Amount</h2>
			<form onSubmit={handleSubmit} action="">
				<div className="bnb_body_container">
					<div className="form_content">
						<img
							className="pentagon_image"
							src="./images/pentagone-bg.png"
							alt=""
						/>
						<img
							className="img_bottom_bg"
							src="./images/pentagon-bottom.png"
							alt=""
						/>
						<div className="error_mesg">
							{Object.keys(amountErro).map((key) => {
								return <p>{amountErro[key]}</p>;
							})}
						</div>
						<div className="input_container">
							<p>Enter Amount</p>
							<input
								onChange={inputControl}
								value={amount}
								required
								type="text"
							/>
						</div>

						<div className="bnb_pra_text">
							<p>Expected Max Price in</p>
							<p>24 hours</p>
						</div>
						<img className="bnb_innter_logo" src="images/p2-2.png" alt="" />
						<button className="form_button" type="submit">
							Sumbit
						</button>
					</div>
				</div>
			</form>
			<div className="image_container_bnb">
				<img src="./images/p-3-mobile.png" alt="" />
				<img src="./images/p-3.bitcoin.png" alt="" />
			</div>
		</div>
	);
};

export default BnbAmount;
