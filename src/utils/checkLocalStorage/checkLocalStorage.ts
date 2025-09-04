export function checkLocalStorage() {
  try {
    const data = window.localStorage.getItem("userInfo");
    if (!data) return null;

    const parsedData = JSON.parse(data);

    if (
      typeof parsedData === "object" &&
      parsedData !== null &&
      typeof parsedData.name === "string" &&
      typeof parsedData.token === "string"
    ) {
      return parsedData;
    } else {
      console.warn("Некорректная структура данных в localStorage");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при парсинге localStorage userInfo:", error);
    return null;
  }
}

