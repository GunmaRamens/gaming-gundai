export default function enableHidden() {
    const cardElement = document.querySelector(".card-text .no-overflow");
    if (!cardElement) return;
    const playCountUnderTextElement = cardElement.getElementsByTagName("p")[1];
    if (!playCountUnderTextElement) return;

    playCountUnderTextElement.innerHTML = "想定最大利用者乳首数：4,000";
}
