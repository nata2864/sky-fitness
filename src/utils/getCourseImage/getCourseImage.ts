
export function getCourseImage(str: string): string {
  return str
    .trim()                     // убираем пробелы по краям
    .toLowerCase()              // приводим к нижнему регистру
    .replace(/\s+/g, ' ');     // заменяем несколько пробелов на один
}

