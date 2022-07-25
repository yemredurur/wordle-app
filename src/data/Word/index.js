
const API_URL = " http://localhost:5000/getData";

export default async function getWordleWord() {
    const response  = await fetch(API_URL);
    const data = await response.json();
    const randomItemNumber = Math.floor(Math.random() * (data.length / 2));
    return data[randomItemNumber];
}