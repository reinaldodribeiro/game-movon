export function makeImage (src: string) {
    const img = new Image();
    img.src = src;
    img.style.backgroundColor = "transparent";
    img.style.boxShadow = "10px 20px 30px blue";
    return img;
}