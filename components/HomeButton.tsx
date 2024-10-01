"use client";
import Link from "next/link";
import { Button } from "./ui/button";

const HomeButton = () => {
	return (
		<div>
			<Button asChild variant={"destructive"}>
				<Link href={"/"}>Home</Link>
			</Button>
		</div>
	);
};

export default HomeButton;
