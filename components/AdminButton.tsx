"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const AdminButton = () => {
	const router = useRouter();
	return (
		<div>
			<Button
				onClick={() => {
					router.push("/admin");
				}}
				variant="destructive">
				Admin
			</Button>
		</div>
	);
};

export default AdminButton;
