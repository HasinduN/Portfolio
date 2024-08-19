export const getimageUrl = (path, className) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};