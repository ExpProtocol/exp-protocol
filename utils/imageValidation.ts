export const imageValidation = (image: string) => {
	if (image == "") {
		return "/noimage.jpg";
	}
	return image;
};
