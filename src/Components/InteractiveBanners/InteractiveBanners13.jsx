import React, { memo } from "react";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion";

const InteractiveBanners13 = (
	data = InteractiveBannersData13,
	animationDelay = "0.2",
	grid,
	className,
	animation,
	animationDuration,
	animationTransition,
) => {
	return (
		<>
			<Row className={`${grid} ${className}`}>
				{data.map((item, i) => {
					return (
						<motion.div
							key={i}
							className="text-center will-change-transform"
							{...{
								...animation,
								transition: {
									delay: i * animationDelay,
									ease: animationTransition,
									duration: animationDuration,
								},
							}}
						>
							<div className="interactive-banners-style-13">
								<a
									aria-label="link"
									to="/shop/shop-wide"
									className="text-dark-golden-yellow-hover"
								>
									<img
										width=""
										height=""
										className="block pb-[30px]"
										src={item.img}
										alt=""
										data-no-retina=""
									/>
									<span className="interactive-banners-text font-serif font-medium inline-block">
										{item.title}
									</span>
									<i
										className={` ${item.icon} text-[40px] interactive-banners-icon align-middle ml-[10px]`}
									></i>
								</a>
							</div>
						</motion.div>
					);
				})}
			</Row>
		</>
	);
};

export default memo(InteractiveBanners13);
