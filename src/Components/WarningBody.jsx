import React from "react";

const WarningBody = () => {
	return (
		<div className="warning-page-body">
			<div className="warning-container">
				<div className="cripto">
					<img src="images/cripto-currency.png" alt="" />
					<p className="cripto_text">
						You can guess crypto currency price in the future 24 hours
					</p>
				</div>
			</div>
			<div className="triangle-container">
				<img src="images/trainagle-background.png" alt="" />
				<h4>Warning</h4>
				<div className="triangle-text">
					<p>Unable to connect Main SSC Network </p>
					<p>Please change your</p>
					<p> Metamask Network</p>
				</div>
			</div>
		</div>
	);
};

export default WarningBody;
