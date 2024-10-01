import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="bg-white  w-full h-12">
				<div className="flex flex-col justify-center items-center h-full">
					<span className="text-sm font-semibold text-slate-500">
						iiivents | Made by Dhruv
					</span>
					<span className="text-xs font-semibold text-slate-500">
						Built with Next.js & shadcn
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
