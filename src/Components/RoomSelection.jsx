import React from "react";
import { Link } from "react-router-dom";

const RoomSelection = () => {
	return (
		<div className="container room_section_full">
			<h2>Room Slection</h2>
			<div className="room_section_one">
				<div className="row room_section_row">
					<div className="col-lg-4">
						<div className="single_room_item">
							<img
								className="pentagon_image"
								src="./images/pentagone-bg.png"
								alt=""
							/>
							<h4>BTH</h4>
							<img className="innter_img" src="images/p2-1.png" alt="" />

							<img
								className="pentagon_bottom_img"
								src="./images/pentagon-bottom.png"
								alt=""
							/>

							<Link className="link-text" to="/bnb">
								Select
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single_room_item">
							<img
								className="pentagon_image"
								src="./images/pentagone-bg.png"
								alt=""
							/>
							<h4>BTH</h4>
							<img className="innter_img" src="images/p2-2.png" alt="" />
							<img
								className="pentagon_bottom_img"
								src="./images/pentagon-bottom.png"
								alt=""
							/>
							<Link to="/bnb">Select</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single_room_item">
							<img
								className="pentagon_image"
								src="./images/pentagone-bg.png"
								alt=""
							/>
							<h4>BTH</h4>
							<img className="innter_img" src="images/p2-3.png" alt="" />
							<img
								className="pentagon_bottom_img"
								src="./images/pentagon-bottom.png"
								alt=""
							/>
							<Link to="/bnb">Select</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="room_section_two">
				<div className="row room_selection_bottom">
					<div className="col-lg-6">
						<div className="single_room_item">
							<img
								className="pentagon_image"
								src="./images/pentagone-bg.png"
								alt=""
							/>
							<h4>BTH</h4>
							<img className="innter_img" src="images/p2-5.png" alt="" />
							<img
								className="pentagon_bottom_img"
								src="./images/pentagon-bottom.png"
								alt=""
							/>
							<Link to="/bnb">Select</Link>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="single_room_item">
							<img
								className="pentagon_image"
								src="./images/pentagone-bg.png"
								alt=""
							/>
							<h4>BTH</h4>
							<img className="innter_img" src="images/p2-4.png" alt="" />
							<img
								className="pentagon_bottom_img"
								src="./images/pentagon-bottom.png"
								alt=""
							/>
							<Link to="/bnb">Select</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomSelection;
