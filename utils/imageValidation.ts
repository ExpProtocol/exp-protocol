export const imageValidation = (image: string | undefined) => {
    if (!image) {
        return "/noimage.jpg";
    }
    return image;
};
