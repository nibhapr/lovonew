import React, { useState } from "react";
import { Row, Col, Container, Dropdown, Navbar } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade, Keyboard } from "swiper/modules";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Link as ScrollTo } from "react-scroll";
import SocialIcons from "../Components/SocialIcon/SocialIcons";
import Buttons from "../Components/Button/Buttons";
import { fadeIn, fadeInRight, zoomIn } from "../Functions/GlobalAnimations";
// import Clients from "../Components/Clients/Clients";
import InteractiveBanners12 from "../Components/InteractiveBanners/InteractiveBanners12";
import InteractiveBanners13 from "../Components/InteractiveBanners/InteractiveBanners13";
import PortfolioBordered from "../Components/Portfolio/PortfolioBordered";
import InteractiveBanners01 from "../Components/InteractiveBanners/InteractiveBanners01";
// import BlogMasonry from "../Components/Blogs/BlogMasonry";
// import Instagram from "../Components/Instagram/Instagram";
// import FooterStyle01 from "../Components/Footers/FooterStyle01";
import MouseMove from "../Components/MouseMove";
// import SideButtons from "../Components/SideButtons";

// Data
import { blogData } from "../Components/Blogs/BlogData";

const InteractiveBannersData = [
	{
		subtitle: "Furniture",
		title: "Four essential mome practices for every reason",
		btn: "/blogs/blog-post-layout-04",
		img: "https://via.placeholder.com/800x557",
		icon: "line-icon-Arrow-OutRight",
	},
	{
		subtitle: "Bedroom",
		title: "Simple wall decor inspiration style saturdays",
		btn: "/blogs/blog-post-layout-03",
		img: "https://via.placeholder.com/800x557",
		icon: "line-icon-Arrow-OutRight",
	},
	{
		subtitle: "Decor",
		title: "Are you looking for the planter based cleaners",
		btn: "/blogs/blog-post-layout-02",
		img: "https://via.placeholder.com/800x557",
		icon: "line-icon-Arrow-OutRight",
	},
	{
		subtitle: "Lighting",
		title: "I shine with love and light in every moment",
		btn: "/blogs/blog-post-layout-01",
		img: "https://via.placeholder.com/800x557",
		icon: "line-icon-Arrow-OutRight",
	},
];

// const blogMasonryData = blogData;
// filter((item) => itemotion.blogType === "masonry");
// filter((item) => itemotion.category.includes("decor"));

const HomeDecorPage = (props) => {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<div style={props.style}>
			{/* Header End */}

			{/* Section Start */}
			<section className="home-decor flex items-center justify-center overflow-hidden relative">
				<Swiper
					pagination={{ el: ".custom-pagination", clickable: true }}
					keyboard={true}
					effect="fade"
					loop={true}
					fadeEffect={{ crossFade: true }}
					modules={[Pagination, EffectFade, Mousewheel, Keyboard]}
					className="font-serif overflow-hidden h-[800px] lg:h-[545px] sm:h-[400px] xs:full-screen"
					onSlideChange={(swiperCore) => {
						const { realIndex } = swiperCore;
						setActiveSlide(realIndex);
					}}
				>
					<SwiperSlide
						className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default"
						style={{
							backgroundImage: "url('/assets/img/webp/transparent.webp')",
						}}
					>
						<motion.span
							initial={{ opacity: 0, x: -40 }}
							animate={
								activeSlide === 0
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -40 }
							}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
						>
							01
						</motion.span>
						<Container fluid="md" className="relative h-full">
							<Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[10px]">
								<Col
									xl={6}
									lg={6}
									sm={6}
									xs={12}
									className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2"
								>
									<motion.span
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 0
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1, duration: 0.6 }}
										className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs"
									>
										Lovosis Technology Dubai L.L.C
									</motion.span>
									<motion.h2
										className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 0
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1.2, duration: 0.6 }}
									>
										Seamless Integration for Total Control
									</motion.h2>
									<motion.div
										initial={{ opacity: 0 }}
										animate={
											activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }
										}
										transition={{ duration: 0.5, delay: 1.5 }}
									>
										{/* <Buttons
											ariaLabel="view collections"
											href="/shop/shop-wide"
											className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]"
											icon="line-icon-Arrow-OutRight text-[30px] inline-block"
											iconPosition="after"
											size="xl"
											color="#232323"
											themeColor="rgba(191,140,76,0.3)"
											to="/"
											title="view collections"
										/> */}
									</motion.div>
								</Col>
								<Col sm={6} className="relative xs:h-1/2">
									<motion.div
										className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
										initial={{ opacity: 0, scale: 0 }}
										animate={
											activeSlide === 0
												? { opacity: 1, scale: 1 }
												: { opacity: 0, scale: 0 }
										}
										transition={{ delay: 1.5, duration: 1 }}
									>
										<motion.div
											className="element-one inline-block"
											animate={{
												x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
												y: [1, 6, 9, 9, -6, -9, -9, -6, 1],
											}}
											transition={{
												times: [1, 6, 2, 2, 6, 2, 2, 6],
												duration: 10,
												repeat: Infinity,
											}}
										></motion.div>
									</motion.div>
									<MouseMove
										enableOnHover={true}
										speed={2}
										className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0"
									>
										<div>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 1.7, duration: 1 }}
												className="absolute top-[0] left-[155px] lg:w-[130px] lg:left-[70px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
												src=""
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2, duration: 1 }}
												className="absolute right-[-125px] bottom-[-32px] lg:w-[120px] lg:bottom-[20px] lg:right-[100px] md:right-0 sm:w-[80px] sm:bottom-0 xs:right-auto xs:left-[calc(50%+100px)] xs:-translate-x-1/2"
												src="/ip.png"
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2.2, duration: 1 }}
												className="absolute right-[-125px] bottom-[-32px] lg:w-[120px] lg:bottom-[20px] lg:right-[100px] md:right-0 sm:w-[80px] sm:bottom-0 xs:right-auto xs:left-[calc(50%+100px)] xs:-translate-x-1/2"
												src=""
											/>
										</div>
									</MouseMove>
								</Col>
							</Row>
						</Container>
					</SwiperSlide>
					<SwiperSlide
						className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default"
						style={{
							backgroundImage: "url('/assets/img/webp/transparent.webp')",
						}}
					>
						<motion.span
							initial={{ opacity: 0, x: -40 }}
							animate={
								activeSlide === 1
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -40 }
							}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
						>
							02
						</motion.span>
						<Container fluid="md" className="relative h-full">
							<Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[50px]">
								<Col
									xl={6}
									lg={6}
									sm={6}
									xs={12}
									className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2"
								>
									<motion.span
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 1
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1, duration: 0.6 }}
										className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs"
									>
										CLASSICAL HOME DECOR
									</motion.span>
									<motion.h2
										className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 1
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1.2, duration: 0.6 }}
									>
										New chair collection
									</motion.h2>
									<motion.div
										initial={{ opacity: 0 }}
										animate={
											activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }
										}
										transition={{ duration: 0.5, delay: 1.5 }}
									>
										{/* <Buttons
											ariaLabel="view collections"
											href="/shop/shop-wide"
											className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]"
											icon="line-icon-Arrow-OutRight text-[30px] inline-block"
											iconPosition="after"
											size="xl"
											color="#232323"
											themeColor="rgba(191,140,76,0.3)"
											to="/"
											title="view collections"
										/> */}
									</motion.div>
								</Col>
								<Col sm={6} className="relative xs:h-1/2">
									<motion.div
										className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
										initial={{ opacity: 0, scale: 0 }}
										animate={
											activeSlide === 1
												? { opacity: 1, scale: 1 }
												: { opacity: 0, scale: 0 }
										}
										transition={{ delay: 1.5, duration: 1 }}
									>
										<motion.div
											className="element-one inline-block"
											animate={{
												x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
												y: [1, 6, 9, 9, -6, -9, -9, -6, 1],
											}}
											transition={{
												times: [1, 6, 2, 2, 6, 2, 2, 6],
												duration: 10,
												repeat: Infinity,
											}}
										></motion.div>
									</motion.div>
									{/* <MouseMove
										speed={2}
										className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0"
									>
										<div>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 1.7, duration: 1 }}
												className="absolute top-[-20px] left-[415px] lg:w-[100px] lg:left-[150px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
												src="https://via.placeholder.com/134x287"
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2, duration: 1 }}
												className="absolute w-[545px] bottom-[35px] right-[20px] lg:w-[365px] lg:bottom-[-20px] lg:right-[300px] md:right-[60px] sm:w-[230px] sm:right-[170px] sm:bottom-0 xs:bottom-[-50px] xs:left-[calc(50%-25px)] xs:-translate-x-1/2"
												src="https://via.placeholder.com/514x498"
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2.2, duration: 1 }}
												className="absolute w-[332px] right-[-225px] bottom-[55px] lg:w-[260px] lg:bottom-[20px] lg:right-[100px] md:right-[-120px] sm:w-[180px] sm:bottom-0 sm:right-[40px] xs:bottom-[-50px] xs:left-[calc(50%+115px)] xs:-translate-x-1/2"
												src="https://via.placeholder.com/313x358"
											/>
										</div>
									</MouseMove> */}
								</Col>
							</Row>
						</Container>
					</SwiperSlide>
					<SwiperSlide
						className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default"
						style={{
							backgroundImage: "url('/assets/img/webp/transparent.webp')",
						}}
					>
						<motion.span
							initial={{ opacity: 0, x: -40 }}
							animate={
								activeSlide === 2
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -40 }
							}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
						>
							03
						</motion.span>
						<Container fluid="md" className="relative h-full">
							<Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[10px]">
								<Col
									xl={6}
									lg={6}
									sm={6}
									xs={12}
									className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2"
								>
									<motion.span
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 2
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1, duration: 0.6 }}
										className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs"
									>
										CLASSICAL HOME DECOR
									</motion.span>
									<motion.h2
										className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
										initial={{
											clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										animate={{
											clipPath:
												activeSlide === 2
													? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
													: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
										}}
										transition={{ delay: 1.2, duration: 0.6 }}
									>
										New chair collection
									</motion.h2>
									<motion.div
										initial={{ opacity: 0 }}
										animate={
											activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }
										}
										transition={{ duration: 0.5, delay: 1.5 }}
									>
										{/* <Buttons
											ariaLabel="view collections"
											href="/shop/shop-wide"
											className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]"
											icon="line-icon-Arrow-OutRight text-[30px] inline-block"
											iconPosition="after"
											size="xl"
											color="#232323"
											themeColor="rgba(191,140,76,0.3)"
											to="/"
											title="view collections"
										/> */}
									</motion.div>
								</Col>
								<Col sm={6} className="relative xs:h-1/2">
									<motion.div
										className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
										initial={{ opacity: 0, scale: 0 }}
										animate={
											activeSlide === 2
												? { opacity: 1, scale: 1 }
												: { opacity: 0, scale: 0 }
										}
										transition={{ delay: 1.5, duration: 1 }}
									>
										<motion.div
											className="element-one inline-block"
											animate={{
												x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
												y: [1, 6, 9, 9, -6, -9, -9, -6, 1],
											}}
											transition={{
												times: [1, 6, 2, 2, 6, 2, 2, 6],
												duration: 10,
												repeat: Infinity,
											}}
										></motion.div>
									</motion.div>
									<MouseMove
										speed={2}
										className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0"
									>
										<div>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 1.7, duration: 1 }}
												className="absolute top-[0] left-[200px] lg:w-[130px] lg:left-[70px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
												src="https://via.placeholder.com/179x215"
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2, duration: 1 }}
												className="absolute w-[410px] left-[40px] bottom-[100px] lg:w-[365px] lg:bottom-[-20px] lg:right-[200px] lg:left-auto md:right-[80px] sm:w-[230px] sm:right-[120px] sm:bottom-0 xs:left-[calc(50%-25px)] xs:-translate-x-1/2 xs:right-auto"
												src="https://via.placeholder.com/385x436"
											/>
											<motion.img
												height=""
												width=""
												alt="..."
												initial={{ opacity: 0 }}
												animate={
													activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }
												}
												transition={{ delay: 2.2, duration: 1 }}
												className="absolute w-[565px] right-[-265px] bottom-[15px] lg:w-[350px] lg:bottom-[0] lg:right-0 md:w-[350px] md:right-[-100px] sm:w-[250px] sm:right-[-30px] sm:bottom-0 xs:right-auto xs:left-[calc(50%+100px)] xs:-translate-x-1/2"
												src="https://via.placeholder.com/534x529"
											/>
										</div>
									</MouseMove>
								</Col>
							</Row>
						</Container>
					</SwiperSlide>
				</Swiper>
				<div className="custom-pagination container xs:text-center"></div>
			</section>
			{/* Section End */}
			<section className="furniture-shop flex items-center justify-center overflow-hidden">
				<Swiper
					ref={swiperRef}
					pagination={{ clickable: true }}
					keyboard={true}
					allowTouchMove={false}
					loop={true}
					modules={[Pagination, Mousewheel, Keyboard]}
					className="full-screen swiper-pagination-02 swiper-pagination-dark swiper-pagination-big xs:h-[664px] landscape:md:h-auto"
				>
					<div
						onClick={() => swiperRef.current.swiper.slidePrev()}
						className="btn-slider-next absolute top-1/2 z-[1] left-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden"
					>
						<button aria-label="swiper next btn" className="text-xmd">
							<i className="line-icon-Arrow-OutLeft text-[40px]"></i>
						</button>
					</div>
					{swiperData.map((item, i) => {
						return (
							<SwiperSlide
								key={i}
								className="bg-center bg-cover bg-no-repeat z-20 h-full overflow-hidden flex items-center transition-default"
								style={{ backgroundImage: `url(${item.bgImg})` }}
							>
								<m.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ ease: "easeIn", duration: 0.5 }}
								>
									<m.div
										className="big-circle sm:top-[65%] sm:right-1/2 sm:left-[-50%]"
										style={{ background: item.circleColor }}
										animate={{
											x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
											y: [1, 6, 9, 9, -6, -9, -9, -6, 1],
										}}
										transition={{
											times: [1, 6, 2, 2, 6, 2, 2, 6],
											duration: 10,
											ease: "linear",
											repeat: Infinity,
										}}
									></m.div>
								</m.div>
								<Container className="relative">
									<Row className="items-center font-serif sm:justify-center">
										<Col
											xl={6}
											lg={6}
											md={6}
											sm={12}
											className="text-darkgray sm:text-center"
										>
											<m.span
												className="uppercase tracking-[2px] leading-[17px] text-base pt-[10px] pb-[40px] px-[20px] opacity-70 text-darkgray inline-block font-medium md:text-sm sm:mt-[70px] sm:pb-[15px] xs:text-xxs"
												initial={{
													clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
												}}
												whileInView={{
													clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
												}}
												transition={{
													delay: 0.3,
													duration: 0.8,
													ease: "easeInOut",
												}}
											>
												{" "}
												{item.subTitle}
											</m.span>
											<m.h2
												className="heading-6 leading-[90px] text-[100px] font-normal lg:text-[80px] px-[20px] pb-[30px] -tracking-[3px] lg:leading-none md:text-[60px] xs:text-[40px] sm:text-center"
												initial={{
													clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
												}}
												whileInView={{
													clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
												}}
												transition={{
													delay: 1.2,
													duration: 0.8,
													ease: "easeOut",
												}}
											>
												<strong className="font-semibold block">
													{item.titleOne}
												</strong>
												{item.titleTwo}
											</m.h2>
											<m.div
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{
													duration: 0.8,
													ease: "easeOut",
													delay: 1.4,
												}}
											>
												<Buttons
													ariaLabel="shop wide"
													to="/shop/shop-wide/"
													className="font-medium text-[8px] mx-3 uppercase rounded-none shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#fff] hover:bg-white hover:text-white border-none"
													color="#000"
													size="lg"
													themeColor="#000"
													title="Discover Now"
												/>
											</m.div>
										</Col>
										<Col sm={6} className="relative">
											<m.img
												className="mx-auto mt-[80px] sm:h-full md:p-8 xs:p-28"
												src={item.img}
												alt=""
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 0.5, delay: 2.1 }}
											/>
											<div className="small-circle">
												<m.div
													initial={{ opacity: 0 }}
													whileInView={{ opacity: 1 }}
													transition={{ ease: "easeIn", delay: 1.9 }}
												>
													<m.div
														className="element-one inline-block"
														animate={{
															x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
															y: [1, 6, 9, 9, -6, -9, -9, -6, 1],
														}}
														transition={{
															times: [1, 6, 2, 2, 6, 2, 2, 6],
															duration: 10,
															repeat: Infinity,
														}}
													></m.div>
												</m.div>
												<m.div
													className="element-two top-[40px] right-[20px] text-white bg-[#F06F42] justify-center items-center text-center flex-col flex w-[120px] h-[120px] rounded-full absolute lg:w-[90px] lg:h-[90px] sm:w-[80px] sm:h-[80px] xs:h-[60px] xs:w-[60px]"
													initial={{ scale: 0, opacity: 0 }}
													whileInView={{ scale: 1, opacity: 1 }}
													transition={{
														type: "spring",
														stiffness: 50,
														ease: "circOut",
														duration: 1.8,
														delay: 2.3,
													}}
												>
													<m.div
														initial={{ opacity: 0, scale: 0 }}
														whileInView={{ opacity: 1, scale: 1 }}
														transition={{ duration: 0.5, delay: 2.5 }}
														className="text-xmd uppercase block lg:text-sm sm:text-xs xs:text-[10px]"
													>
														Only
													</m.div>
													<m.span
														initial={{ opacity: 0, scale: 0 }}
														whileInView={{ opacity: 1, scale: 1 }}
														transition={{ duration: 0.5, delay: 2.8 }}
														className="text-[37px] font-normal lg:text-[33px] sm:text-[27px] xs:text-[22px]"
													>
														{item.price}
													</m.span>
												</m.div>
											</div>
										</Col>
									</Row>
								</Container>
							</SwiperSlide>
						);
					})}
					<div
						onClick={() => swiperRef.current.swiper.slideNext()}
						className="btn-slider-prev absolute top-1/2 z-[1] right-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden"
					>
						<button aria-label="swiper prev btn" className="text-xmd">
							<i className="line-icon-Arrow-OutRight text-[40px]"></i>
						</button>
					</div>
				</Swiper>
			</section>

			{/* Section Start */}
			<section className="py-[90px] md:py-[75px] sm:py-[50px] border-b border-mediumgray">
				<Container>
					<Row className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-center gap-y-10">
						<Col>
							<motion.div
								className="flex items-center"
								{...{ ...fadeIn, transition: { delay: 0.2, duration: 1.2 } }}
							>
								<i className="line-icon-Headset text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
								<div>
									{" "}
									<div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
										Expert support
									</div>{" "}
									<span>Contact support team</span>
								</div>
							</motion.div>
						</Col>
						<Col>
							<motion.div
								className="flex items-center"
								{...{ ...fadeIn, transition: { delay: 0.4, duration: 1.2 } }}
							>
								<i className="line-icon-Like-2 text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
								<div>
									{" "}
									<div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
										Perfect quality
									</div>{" "}
									<span>Perfect design quality</span>{" "}
								</div>
							</motion.div>
						</Col>
						<Col>
							<motion.div
								className="flex items-center"
								{...{ ...fadeIn, transition: { delay: 0.6, duration: 1.2 } }}
							>
								<i className="line-icon-Shield text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
								<div>
									{" "}
									<div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
										Security checkout
									</div>{" "}
									<span>Safe and trustworthy</span>{" "}
								</div>
							</motion.div>
						</Col>
						<Col>
							<motion.div
								className="flex items-center"
								{...{ ...fadeIn, transition: { delay: 0.8, duration: 1.2 } }}
							>
								<i className="line-icon-Coin text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
								<div>
									<div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
										Instant discounts
									</div>{" "}
									<span>Use your coupon now</span>{" "}
								</div>
							</motion.div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Section End */}

			{/* Parallax Start */}

			<section
				className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
				style={{
					backgroundImage: "url(/assets/img/webp/home-decor-bg-img-02.webp)",
				}}
			>
				<Container>
					<Row className="justify-center items-center">
						<Col
							lg={6}
							md={10}
							className="relative mb-[20px] md:mb-32 sm:mb-40 xs:mb-0"
						>
							<div className="relative">
								<ParallaxProvider>
									<Parallax className="lg-no-parallax w-[70%] mb-16" speed={0}>
										{" "}
										<img
											alt=""
											src="https://via.placeholder.com/700x1027"
											className="w-full"
											width="385.34"
											height="565.34"
										/>{" "}
									</Parallax>
								</ParallaxProvider>
								<ParallaxProvider>
									<Parallax
										className="lg-no-parallax flex justify-center items-center w-[55%] bg-no-repeat absolute bottom-0 right-[15px] lg:!ml-auto lg:!top-[145px]"
										speed={20}
									>
										<img
											alt=""
											src="https://via.placeholder.com/317x477"
											width="317"
											height="477"
										/>
									</Parallax>
								</ParallaxProvider>
							</div>
						</Col>
						<Col lg={{ span: 5, offset: 1 }} md={10}>
							<div className="font-serif text-md font-medium mb-[30px] flex">
								<span className="w-[40px] h-[1px] bg-basecolor opacity-70 self-center mr-[20px] shrink-0"></span>
								<div className="grow-[1]">
									{" "}
									<span className="text-basecolor uppercase">
										About our company
									</span>{" "}
								</div>
							</div>
							<h1 className="heading-4 font-serif text-darkgray font-semibold w-[85%] mb-[35px] lg:w-full sm:mb-[25px]">
								Classic beautiful and modern decor presence of design
							</h1>
							<p className="mb-[25px] w-[80%] lg:w-full">
								Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod
								tempor incididunt ut labore dolore magna enim veniam nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
							<ScrollTo
								href="#"
								to="specialization"
								offset={0}
								delay={0}
								spy={true}
								smooth={true}
								duration={800}
							>
								{/* <Buttons
									type="submit"
									ariaLabel="Our services"
									className="btn-fill btn-fancy rounded-none font-medium font-serif uppercase hover:text-black mt-[20px]"
									themeColor="#232323"
									size="md"
									color="#fff"
									title="Our services"
								/> */}
							</ScrollTo>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Parallax End */}

			{/* Section Start */}
			<section
				id="specialization"
				className="bg-[#f9f6f3] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
			>
				<Container>
					<Row className="justify-center">
						<Col md={6} className="text-center mb-[4.5rem] md:mb-12">
							<div className="flex flex-row items-center justify-center text-center mb-[10px]">
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
								<div className="font-serif text-xmd text-basecolor px-[10px]">
									our specialization
								</div>
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
							</div>
							<h2 className="heading-5 font-serif font-bold text-darkgray uppercase tracking-[-1px]">
								Distinctive Interiors
							</h2>
						</Col>
					</Row>
				</Container>
				<Container>
					{/* <InteractiveBanners12
						grid="gap-y-10 justify-center"
						animation={fadeIn}
						animationDelay={0.2}
					/> */}
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
				<Container>
					<Row className="justify-center">
						<Col md={6} className="text-center mb-[77px] md:mb-12">
							<div className="flex flex-row items-center justify-center text-center mb-[10px]">
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
								<div className="font-serif text-xmd text-basecolor px-[10px]">
									stylish and simple
								</div>
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
							</div>
							<h2 className="heading-5 font-serif font-bold text-darkgray uppercase tracking-[-1px]">
								DECOR PRODUCTS
							</h2>
						</Col>
					</Row>
					{/* <InteractiveBanners13
						grid="row row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-10 items-center"
						animation={zoomIn}
						animationTransition="circOut"
						animationDuration={1}
					/> */}
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="bg-lightgray">
				<Container fluid>
					<Row>
						<motion.div
							className="bg-cover bg-center md:h-[450px] xs:h-[300px] col-xl-6 col-lg-4"
							style={{
								backgroundImage: `url("https://via.placeholder.com/1024x903")`,
							}}
							{...fadeInRight}
						></motion.div>
						<Col xl={6} lg={8}>
							<Row>
								<motion.div
									className="bg-cover bg-center xs:h-[300px] order-1 col-sm-6 order-sm-1"
									style={{
										backgroundImage: `url("https://via.placeholder.com/700x617")`,
									}}
									{...{ ...fadeIn, transition: { delay: 0.4 } }}
								></motion.div>
								<motion.div
									className="px-28 py-32 xl:px-12 xl:py-16 md:py-24 bg-[#f9f6f3] bg-no-repeat bg-[right_5px_bottom_-25px] order-2 col-sm-6 order-sm-2"
									style={{
										backgroundImage: `url("https://via.placeholder.com/140x153")`,
									}}
									{...{ ...fadeIn, transition: { delay: 0.5 } }}
								>
									<span className="font-serif font-semibold text-darkgray text-lg mb-[20px] block">
										{" "}
										Creativity ideas{" "}
									</span>
									<p className="mb-[30px]">
										{" "}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
										do eiusmod tempor incididunt ut labore et dolore.{" "}
									</p>
									{/* <Buttons
										className="btn-fill font-medium font-serif uppercase rounded-none"
										themeColor="#bf8c4c"
										color="#fff"
										size="sm"
										title="View collection"
									/> */}
								</motion.div>
								<motion.div
									className="px-28 py-32 xl:px-12 xl:py-16 md:py-24 bg-[#f9f6f3] bg-no-repeat bg-[right_25px_bottom_-35px] order-4 col-sm-6 order-sm-3"
									style={{
										backgroundImage: `url("https://via.placeholder.com/168x172")`,
									}}
									{...{ ...fadeIn, transition: { delay: 0.8 } }}
								>
									<span className="font-serif font-semibold text-darkgray text-lg mb-[20px] block">
										{" "}
										Innovation concept{" "}
									</span>
									<p className="mb-[30px]">
										{" "}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
										do eiusmod tempor incididunt ut labore et dolore.{" "}
									</p>
									{/* <Buttons
										className="btn-fill font-medium font-serif uppercase rounded-none"
										themeColor="#bf8c4c"
										color="#fff"
										size="sm"
										title="View collection"
									/> */}
								</motion.div>
								<motion.div
									className="bg-cover bg-center xs:h-[300px] order-3 col-sm-6 order-sm-4"
									style={{
										backgroundImage: `url("https://via.placeholder.com/700x617")`,
									}}
									{...{ ...fadeIn, transition: { delay: 0.7 } }}
								></motion.div>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="border-b border-mediumgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
				<Container>
					{/* <Clients
						grid="row-cols-1 row-cols-md-4 row-cols-sm-2 row-cols-lg-4 gap-y-[40px]"
						theme="client-logo-style-02"
						data={ClientData}
						animation={fadeIn}
						animationDelay={0.1}
					/> */}
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
				<Container fluid>
					<Row className="justify-center">
						<Col md={6} className="col-12 text-center mb-[4.5rem] md:mb-12">
							<div className="flex flex-row items-center justify-center text-center mb-[10px]">
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
								<div className="font-serif text-xmd text-basecolor px-[10px]">
									stylish and simple
								</div>
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
							</div>
							<h2 className="heading-5 font-serif font-bold text-darkgray uppercase tracking-[-1px]">
								LATEST PRODUCTS
							</h2>
						</Col>
					</Row>
					<Row className="justify-center">
						{/* <Col xl={9} lg={11}>
							<PortfolioBordered
								overlay={[" #828282", "#fff", "#f9f6f3", "#fff", "#828282"]}
								grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large text-center"
								data={portfolioBorderedMasonryData}
							/>
						</Col> */}
						<Col className="col-12 text-center mt-20">
							{/* <Buttons
								ariaLabel="view all products"
								to="/portfolio/portfolio-bordered-masonry"
								className="mx-3 font-medium font-serif uppercase tracking-[1px] hover:text-white rounded-none md:mb-[15px] bg-[#fff]"
								color="#BF8C4C"
								size="lg"
								themeColor="#BF8C4C"
								title="view all products"
							/> */}
						</Col>
					</Row>
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="overflow-hidden">
				<Container fluid className="px-0">
					<InteractiveBanners01
						grid="row-cols-1"
						data={InteractiveBannersData}
						animation={fadeIn}
					/>
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<section className="bg-[#f9f6f3] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
				<Container>
					<Row className="justify-center">
						<Col md={6} className="col-12 text-center mb-[4.5rem] md:mb-12">
							<div className="flex flex-row items-center justify-center text-center mb-[10px]">
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
								<div className="font-serif text-xmd text-basecolor px-[10px]">
									Lovosis Technology Dubai L.L.C
								</div>
								<span className="w-[25px] h-[1px] bg-basecolor opacity-40"></span>
							</div>
							<h2 className="heading-5 font-serif font-bold text-darkgray uppercase tracking-[-1px]">
								DECOR BLOGS
							</h2>
						</Col>
					</Row>
					<Row>
						<Col className="sm:px-0">
							{/* <BlogMasonry
								filter={false}
								grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
								data={blogMasonryData}
							/> */}
						</Col>
					</Row>
				</Container>
			</section>
			{/* Section End */}

			{/* Section Start */}
			<motion.section
				className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
				{...fadeIn}
			>
				<Container>
					<Row className="justify-center">
						<Col md={12}>
							{/* <Instagram
								carousel={true}
								carouselOption={{
									loop: true,
									slidesPerView: 2,
									spaceBetween: 15,
									autoplay: { delay: 3500, disableOnInteraction: false },
									keyboard: { enabled: true, onlyInViewport: true },
									breakpoints: {
										1200: { slidesPerView: 6 },
										992: { slidesPerView: 3 },
										768: { slidesPerView: 3 },
									},
								}}
								total_posts={8}
								title="#instagram decor"
								grid=""
							/> */}
						</Col>
					</Row>
				</Container>
			</motion.section>
			{/* Section Start */}

			{/* Footer Start */}
			{/* <FooterStyle01 theme="dark" className="text-[#7F8082] bg-darkgray" /> */}
			{/* Footer End */}
		</div>
	);
};

export default HomeDecorPage;
