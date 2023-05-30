export const Join = (classes) => {
    return classes.filter(item => item !== '')
    .join(' ')
    .trim();
}