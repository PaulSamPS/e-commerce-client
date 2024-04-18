export const priceRu = (price: number | null): string => {
  if (price === null || isNaN(price)) {
    return "";
  }

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0, // Количество знаков после запятой
  });

  return formatter.format(price).replace(/\s/g, " "); // Убираем пробелы между разрядами
};
