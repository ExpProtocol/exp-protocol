import Header from "./atoms/Header";

export default function Layout({ children }: any) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	);
}
