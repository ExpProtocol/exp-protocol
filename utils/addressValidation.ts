export const addressValidation = (address: string | null) => {
	if (!address) return "";
	if (address.length < 10) return address;
	return address.slice(0, 4) + "..." + address.slice(-4);
};
