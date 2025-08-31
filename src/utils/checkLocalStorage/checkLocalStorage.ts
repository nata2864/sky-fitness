export function checkLocalStorage() {
  try {
    const data = window.localStorage.getItem("userInfo");
    if (!data) return null;

    const parsed = JSON.parse(data);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof parsed.name === "string" &&
      typeof parsed.token === "string"
    ) {
      return parsed;
    } else {
      console.warn("Некорректная структура данных в localStorage");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при парсинге localStorage userInfo:", error);
    return null;
  }
}

