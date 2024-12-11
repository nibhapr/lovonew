import React from "react";

//Libraries

const Pagination = () => {
	return (
		<ul className="pagination pagination-style-01 font-sans font-medium items-center">
			<li className="page-item">
				<a aria-label="a" className="page-a" to="#">
					<i className="feather-arrow-left text-lg"></i>
				</a>
			</li>
			<li className="page-item">
				<a aria-label="a" className="page-a" to="#">
					{" "}
					01{" "}
				</a>
			</li>
			<li className="page-item active">
				<a aria-label="a" className="page-a" to="#">
					{" "}
					02{" "}
				</a>
			</li>
			<li className="page-item">
				<a aria-label="a" className="page-a" to="#">
					{" "}
					03{" "}
				</a>
			</li>
			<li className="page-item">
				<a aria-label="a" className="page-a" to="#">
					{" "}
					04{" "}
				</a>
			</li>
			<li className="page-item">
				<a aria-label="a" className="page-a" to="#">
					<i className="feather-arrow-right text-lg"></i>
				</a>
			</li>
		</ul>
	);
};

export default Pagination;
