import Header from "./molecules/Header";

export default function Layout({ children }: any) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
