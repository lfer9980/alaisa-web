import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import isologotypeWhite from "@icons/isologotype-white.svg";

function Footer() {
	const {
		footerText,
	} = useContext(AppContext);


	return (
		<footer className="footer">
			<div className="footer__main">
				<Link to="/">
					<figure>
						<img src={isologotypeWhite} alt="alaisa logo" />
					</figure>
				</Link>
				<div className="footer__main__container">
					{footerText &&
						<>
							<h4>
								{footerText[0]}
							</h4>
							<p>
								{footerText[1]}
							</p>
						</>
					}
				</div>
			</div>
			<div className="footer__secondary">
				<div className="footer__inari">
					{footerText &&
						<p dangerouslySetInnerHTML={{ __html: `${footerText[2]}` }} />
					}
				</div>
				<ul className="footer__links">
					{footerText &&
						<>
							<li>
								<Link to="/acerca">
									<span>
										{footerText[3]}
									</span>
								</Link>
							</li>
							<li>
								<Link to="/privacidad">
									<span>
										{footerText[4]}
									</span>
								</Link>
							</li>
						</>
					}
				</ul>
			</div>
		</footer>
	);
}

export { Footer };