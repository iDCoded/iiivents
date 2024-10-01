"use client";
import Link from "next/link";
import { Button } from "./ui/button";

const AdminButton = () => {
	return (
		<div>
			<Button asChild variant="destructive">
				<Link href={"/admin"}>Admin</Link>
			</Button>
		</div>
	);
};

export default AdminButton;
