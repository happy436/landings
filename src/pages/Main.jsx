import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@tremor/react";
import images from "../assets";

function Main() {
	const linkList = [
		{ name: "Organic Food", img: images.organicFood, link: "/organicFood" },
		{ name: "Restaurant", img: images.restaurant, link: "/restaurant" },
	];
	return (
		<main className="flex justify-center items-center flex-col w-screen h-screen gap-3">
			<h1>Landings</h1>
			<ul className="flex flex-wrap gap-3 h-full">
				{linkList.map((item, index) => (
					<li key={index} className="">
						<Link to={item.link}>
							<Card className="flex flex-col gap-3 shadow-xl transition-all hover:bottom-[10px] hover:shadow-none">
								<img
									src={item.img}
									alt={item.name}
									className="max-w-[200px] rounded-[10px]"
								/>
								<h2 className="font-bold text-center">{item.name}</h2>
							</Card>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

export default Main;
