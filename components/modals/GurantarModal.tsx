import Form from "../Form";

export default function GurantarModal() {
	let description = "";
	let imageURL = "";

	return (
		<div>
			<div className="h-10 w-auto m-2">
				<ol className="flex">
					<li className="flex flex-1 flex-col text-center relative rounded-full top-5  h-[2px] bg-gray-400 -order-1">
						<div className="relative rounded-full ">
							<h3 className="m-auto text-sm">1</h3>
						</div>
					</li>
					<li className="flex flex-1 flex-col text-center relative top-5 h-[2px] bg-gray-400 -order-1">
						<h3 className="text-sm relative rounded-full">2</h3>
					</li>
					<li className="flex flex-1 flex-col text-center relative top-5 h-[2px] bg-gray-400 -order-1">
						<h3 className="text-sm relative rounded-full">3</h3>
					</li>
				</ol>
			</div>
			<div className="h-auto w-auto m-2">
				<div>
					<p>{description}</p>
					<img className="rounded-t-lg" src={imageURL} alt="" />
				</div>
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							保証金
						</label>
						<Form />
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							金利
						</label>
						<Form />
					</div>
				</form>
			</div>
		</div>
	);
}
