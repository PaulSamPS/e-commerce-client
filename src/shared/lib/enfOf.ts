export const endOf = (
  length: number | null,
  first: string,
  second: string,
  third: string
) => {
  if (length === null || isNaN(length)) {
    return third; // Возвращаем третью строку по умолчанию, если length не является числом или null
  }

  const pluralRules = new Intl.PluralRules("ru-RU");

  const pluralCategory = pluralRules.select(length);

  switch (pluralCategory) {
    case "one":
      return first;
    case "few":
      return second;
    default:
      return third;
  }
};
