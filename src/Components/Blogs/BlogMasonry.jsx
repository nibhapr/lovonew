import React, { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Components
import Pagination from "./HelperComponents/Pagination";
import Filter from "../Portfolio/Filter";

// Data
import { blogData } from "./BlogData";

// Filter the blog data category wise
const blogMasonryData = blogData.filter((item) => item.blogType === "masonry");

const BlogMasonry = (
	title,
	filterData,
	filter,
	className,
	a,
	pagination,
	grid,
	data = blogMasonryData,
) => {
	const blogWrapper = useRef();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		import("../../Functions/Utilities").then((module) => {
			const grid = module.initializeIsotop(blogWrapper.current);
			grid.on("arrangeComplete", () => setLoading(false));
		});
	}, []);

	const handleFilterChange = () => {
		blogWrapper.current
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
				ref={blogWrapper}
				className={`grid-container${grid ? ` ${grid}` : ""}${className ? ` ${className}` : ""}${loading ? " loading" : ""}${filter === false ? "" : " mt-28 md:mt-[4.5rem] sm:mt-8"}`}
			>
				<li className="grid-sizer"></li>
				{data.map((item, i) => {
					return (
						<li
							key={i}
							className={`grid-item${item.double_col ? " grid-item-double" : ""} ${item.category.toString().split(",").join(" ").toLowerCase()}`}
						>
							<motion.div
								className="blog-masonry bg-white relative overflow-hidden rounded-[5px]"
								initial={{ opacity: 0 }}
								whileInView={!loading && { opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								<div className="flex items-center font-medium py-[15px] px-[30px]">
									{item.date && (
										<span className="text-sm mr-auto text-[#262b35]">
											{" "}
											{item.date}{" "}
										</span>
									)}
									{item.likes && (
										<a
											aria-label="a"
											to="#"
											className="flex justify-center items-center text-xs"
										>
											<i className="far fa-heart mr-[4px]"></i>
											<span>{item.likes}</span>
										</a>
									)}
									{item.comments && (
										<a
											aria-label="a"
											to="#"
											className="ml-[13px] flex justify-center items-center text-xs"
										>
											<i className="far fa-comment mr-[4px]"></i>
											<span>{item.comments}</span>
										</a>
									)}
								</div>
								<div className="overflow-hidden relative">
									{item.img && (
										<a aria-label="a" to={`${a}${item.id}`}>
											<img
												height="246"
												width="340"
												src={item.img}
												alt="blog post images"
											/>
										</a>
									)}
									{item.category && (
										<div className="font-serif absolute bg-white left-0 bottom-0 top-auto rounded-none py-[13px] px-[25px] text-sm leading-[13px] font-medium">
											<a
												aria-label="a"
												to={`/blogs/category/${[item.category[0].toString().split(" ").join("").toLowerCase()]}`}
												className="category uppercase text-basecolor"
											>
												{item.category[0]}
											</a>
										</div>
									)}
								</div>
								<div className="px-[3rem] py-[2.5rem]">
									{item.title && (
										<a
											aria-label="a"
											to={`${a}${item.id}`}
											className="mb-[15px] font-medium text-darkgray text-xmd font-serif block"
										>
											{item.title}
										</a>
									)}
									{item.content && <p className="mb-[5px]">{item.content}</p>}
								</div>
							</motion.div>
						</li>
					);
				})}
			</ul>
			{/* Grid End */}

			{/* Pagination Start */}
			{pagination === true && (
				<div className="flex justify-center mt-[7.5rem] md:mt-20">
					<Pagination />
				</div>
			)}
			{/* Pagination End */}
		</div>
	);
};

export default memo(BlogMasonry);
