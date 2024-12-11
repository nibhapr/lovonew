import React, { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";

const PortfolioBordered = (
	overlay,
	data = " portfolioBorderedData",
	title,
	filterData,
	grid,
	className,
	target,
) => {
	const portfolioWrapper = useRef();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let allImages = portfolioWrapper.current.querySelectorAll("img");

		Promise.all(
			Array.prototype.slice
				.call(allImages)
				.filter((img) => !img.complete)
				.map(
					(img) =>
						new Promise((resolve) => {
							img.onload = img.onerror = resolve;
						}),
				),
		).then(() => {
			import("../../Functions/Utilities").then((module) => {
				const grid = module.initializeIsotop(portfolioWrapper.current);
				grid.on("arrangeComplete", () => setLoading(false));
			});
		});
	}, []);

	const style = {
		"--overlay-color":
			typeof overlay === "object"
				? `linear-gradient(to right top, ${overlay.map((item, i) => item)})`
				: overlay,
	};

	const handleFilterChange = () => {
		portfolioWrapper.current
			.querySelectorAll("li")
			.forEach((item) => item.childNodes[0]?.classList.add("appear"));
	};

	return (
		<div className="grid-wrapper">
			{/* Filter Start */}
			<Filter
				title={title}
				filterData={filterData}
				onFilterChange={handleFilterChange}
			/>
			{/* Filter End */}

			{/* Grid Start */}
			<ul
				ref={portfolioWrapper}
				className={`grid-container text-center${grid ? ` ${grid}` : ""}${className ? ` ${className}` : ""}${loading ? " loading" : ""}`}
			>
				<li className="grid-sizer"></li>
				{data.map((item, i) => {
					return (
						<li
							key={i}
							className={`grid-item${item.double_col ? " grid-item-double" : ""} ${item.category.toString().split(",").join(" ").toLowerCase()}`}
						>
							<a aria-label="link" target={target} to={item.link}>
								<motion.div
									className="portfolio-bordered"
									initial={{ opacity: 0 }}
									whileInView={!loading && { opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								>
									<div className="portfolio-image" style={style}>
										{item.img && (
											<img
												className="w-full"
												src={item.img}
												height={470}
												width={550}
												alt="portfolio-bordered"
											/>
										)}
										<div className="portfolio-border-hover">
											<div className="scale block font-serif">
												<div className="text-darkgray font-medium">
													{item.title}
												</div>
												<div className="text-spanishgray text-sm uppercase">
													{item.subtitle}
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</a>
						</li>
					);
				})}
			</ul>
			{/* Grid End */}
		</div>
	);
};

export default memo(PortfolioBordered);
