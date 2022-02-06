import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
	const [toggleMenu, setToggleMenu] = useState(0);
	const AlterMenu = () => {
		setToggleMenu(!toggleMenu);
	};
	return (
		<div className="header">
			<div className="logo_container">
				<Link to="/" className="logo_main">
					<img src="images/logo1.png" alt="" />
				</Link>
			</div>

			<div className="nav-bar">
				<div className="menu_icon">
					{toggleMenu ? (
						<img
							onClick={AlterMenu}
							style={{ width: "1.2rem" }}
							src="images/times-solid.svg"
							alt=""
						/>
					) : (
						<img
							onClick={AlterMenu}
							style={{ width: "1.2rem" }}
							src="images/bars-solid.svg"
							alt=""
						/>
					)}
				</div>
				<ul className="max-device-menu">
					<li>
						<Link to="#">
							<img className="logo_img" src="./images/menu-logo.png" alt="" />
						</Link>
					</li>
					<li>
						<NavLink exact activeClassName="nav-active" to="/">
							About
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-active" to="/parsel">
							Presale
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-active" to="/rank">
							ShareBox (Comming soon)
						</NavLink>
					</li>
				</ul>
				<div className="mobil-menu">
					{toggleMenu ? (
						<ul className="mobile-menu">
							<li>
								<Link to="#">
									<img
										className="logo_img"
										src="./images/menu-logo.png"
										alt=""
									/>
								</Link>
							</li>
							<li>
								<NavLink exact activeClassName="nav-mobile-active" to="/">
									About
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="nav-mobile-active" to="/parsel">
									Presale
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="nav-mobile-active" to="/rank">
									ShareBox (Comming soon)
								</NavLink>
							</li>
						</ul>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Menu;
