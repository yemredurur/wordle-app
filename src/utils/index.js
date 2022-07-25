export const getFindIndex = (guesses) => {
    return guesses.findIndex(val => val === null);
}