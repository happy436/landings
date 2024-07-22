import React from "react";

function Steps() {
	const howItWorkdsList = [
		{
			title: "CHOOSE A FOOD PACKAGE",
			desc: "First, select the package that you prefer the most.",
			color: "bg-yellow-200",
		},
		{
			title: "CUSTOMIZE YOUR MENU",
			desc: "After that, feel free to change and customize your menu.",
			color: "bg-blue-200",
		},
		{
			title: "SELECT A DELIVERY ADDRESS & TIME",
			desc: "Finally, let us know where and when to deliver your food.",
			color: "bg-green-200",
		},
	];
	return (
		<section className="bg-white text-black pt-20 pb-28" id="steps">
			<div className="flex flex-col justify-center items-center">
				<h3 className="uppercase text-[20px] font-bold text-slate-400">
					how it works
				</h3>
				<h2 className="uppercase text-[40px] font-bold text-center">
					3 STEPS TO HEALTHY EATING
				</h2>
				<ul className="flex flex-wrap sm:gap-5 gap-10 items-center justify-center mt-5 flex-col sm:flex-row">
					{howItWorkdsList.map((item, index) => (
						<li
							key={index}
							className={`${item.color} pt-[51px] hover:bottom-4 shadow-xl hover:shadow-md  transition-all pr-[15px] pb-[26px] pl-[40px] relative  sm:w-1/3`}
							style={{ borderRadius: "60px 4px" }}
						>
							<span className="absolute top-[-20px] left-[-10px] rounded-full bg-white shadow-xl w-[60px] h-[60px] text-[20px] font-bold text-slate-500 flex items-center justify-center">
								{String(index + 1).padStart(2, "0")}
							</span>
							<h4 className="text-[20px] font-bold">
								{item.title}
							</h4>
							<p className="text-[16px]">{item.desc}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Steps;
