"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function RegisterPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, password });
		router.push("/");
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<h1 className="mb-4 text-2xl font-bold">Register</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
				/>
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required
				/>
				<Button type="submit">Register</Button>
			</form>
		</div>
	);
}
