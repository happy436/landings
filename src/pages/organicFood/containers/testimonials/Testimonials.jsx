import React, { useState } from "react";
import { images } from "../../constants";

function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(1);
	const handleActive = (index) => {
		setActiveIndex(index);
	};
	const list = [
		{
			name: "SOPHIE SMITH",
			comment:
				"I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!",
			img: images.testim01,
		},
		{
			name: "ANN PETERS",
			comment:
				"Both the food and your customer service are excellent in every way, and I just wanted to express how happy I am with your company. Wishing you all the best!",
			img: images.testim02,
		},
		{
			name: "PETER LEE",
			comment:
				"Thank you so much for your Balanced menu, it has been such a big help to me and I feel the food I am eating from you has really helped boost my immune system.",
			img: images.testim03,
		},
	];
	return (
		<section className="container text-black mx-auto py-[40px] w-full" id="clients">
			<div className="w-full flex sm:flex-col gap-3 flex-wrap lg:flex-row gap-3 lg:w-full lg:justify-center">
				<div className="organicFood__testimonials_img sm:order-1 lg:w-[400px]">
					<ul className="flex lg:flex-col first-of-type:items-end">
						{list.map((item, index) => (
							<li
								key={index}
								onClick={() => {
									handleActive(index);
								}}
								className={`w-1/3 px-[1rem] lg:w-1/2 my-[20px] lg:w-full flex ${
									index % 2 === 1 ? "lg:justify-end" : null
								} `}
							>
								<div
									className={`${
										index === activeIndex &&
										"border border-4 border-[#71B85F] rounded-full"
									} p-4 transition-all`}
								>
									<img
										src={item.img}
										className="w-full lg:w-[150px]"
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col lg:w-1/2 lg:order-2 justify-center gap-5 mx-[20px]">
					<div className=" sm:ml-[60px] max-h-min ">
						<h3 className="uppercase text-[20px] font-bold text-slate-400 sm:text-center">
							what our clients say
						</h3>
						<h2 className="uppercase text-[40px] font-bold sm:text-center">
							testimonials
						</h2>
					</div>
					<div className="organicFood__testimonials_info flex sm:gap-10 gap-3 ">
						<div className="lg:w-[60px]">
							<img src={images.quotes} alt="" className="w-full"/>
						</div>
						<ul>
							{list.map((item, index) => {
								if (activeIndex === index) {
									return (
										<li
											key={index}
											className="flex flex-col gap-5"
										>
											<p className="text-[18px]">
												{item.comment}
											</p>
											<p className="text-[20px] font-bold">
												{item.name}
											</p>
										</li>
									);
								}
							})}
						</ul>
					</div>
					<button className="ml-[60px] uppercase organicFood__bg text-white sm:py-5 sm:px-10 py-2 px-5 hover:bg-slate-800 hover:border-slate-800 rounded-full font-bold border-b-4 border-emerald-800 max-w-max order-4">
						Send your review
					</button>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
