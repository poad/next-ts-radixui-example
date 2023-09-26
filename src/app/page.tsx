import { Inter } from "next/font/google";
import TestDialog from "../components/Dialog";
import { Button } from "../components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main
				style={{
					height: "30rem",
				}}
			>
				<TestDialog
					buttonText="Open Dialog"
					dialogTitle="Test Dialog"
					dialogText="test"
				/>
        <Button>test</Button>
			</main>
		</>
	);
}
