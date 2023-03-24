export const romanNumerals = (inputNumber: number):string => {
  const digits: [number, string, number, string][] = [
    [1000, 'M', 100, 'C'],
    [500, 'D', 100, 'C'],
    [100, 'C', 10, 'X'],
    [50, 'L', 10, 'X'],
    [10, 'X', 1, 'I'],
    [5, 'V', 1, 'I'],
    [1, 'I', 0, '']
  ]

  // console.log(inputNumber);
  if (inputNumber === 0) return ''

  for (const [arabic, roman, arabicUnit, romanUnit] of digits) {
    const lessByUnit = arabic - arabicUnit
    if (inputNumber >=  lessByUnit && inputNumber < arabic) return `${romanUnit}${roman}${romanNumerals(inputNumber - lessByUnit)}`
    if (inputNumber >= arabic) return `${roman}${romanNumerals(inputNumber - arabic)}`
  }

  return '*'
}
