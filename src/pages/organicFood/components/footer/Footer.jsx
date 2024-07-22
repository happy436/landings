import React from "react";
import { images } from "../../constants";

function Footer() {
	const fastLinks = [
		{ name: "How It Works", link: "steps" },
		{ name: "About", link: "about" },
		{ name: "Why Choose Us", link: "choose" },
	];
	const packages = [
		{ name: "Detox", link: "programs" },
		{ name: "Balanced", link: "programs" },
		{ name: "Vegan", link: "programs" },
	];
	return (
		<footer className="flex flex-wrap flex-row bg-white text-black container mx-auto my-[2rem] justify-center">
			<div className="lg:w-1/2 py-[30px] flex flex-col gap-5 w-full">
				<img src={images.logoBlack} alt="" className="w-[200px]"/>
				<p className="text-slate-500">
					© 2024 Plate. All Rights Reserved. Design by Zemez
				</p>
			</div>
			<div className="lg:w-1/2 py-[30px]  flex flex-col gap-5 w-full">
				<h2 className="font-bold uppercase">contacts</h2>
				<div className="flex gap-3">
					<div>
						<p>Ph. </p>
						<p>Mail. </p>
					</div>
					<div>
						<p>1-800-123-1234</p>
						<p>Info@demolink.org</p>
					</div>
				</div>
			</div>
			<div className="lg:w-1/2 py-[30px]  flex flex-col gap-5 w-full">
				<h2 className="uppercase font-bold">quick links</h2>
				<ul className="flex flex-col gap-3">
					{fastLinks.map((item) => (
						<li key={item.name}>
							<a href={`#${item.link}`}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="lg:w-1/2 py-[30px]  flex flex-col gap-5 w-full">
				<h2 className="uppercase font-bold">quick links</h2>
				<ul className="flex flex-col gap-3">
					{packages.map((item) => (
						<li key={item.name}>
							<a href={`#${item.link}`}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
