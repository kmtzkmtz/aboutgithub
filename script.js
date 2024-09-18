function toggleText(section) {
    const text = section.querySelector('.function_T');
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block"; // Показываем текст
    } else {
        text.style.display = "none"; // Скрываем текст
    }
}