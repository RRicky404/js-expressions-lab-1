// Step Define Data: Temp Data
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//Step 2: Temp Conversions:
const day1TempC = (day1TempF - 32) * (5/9)
const day3TempC = (day3TempF - 32) * (5/9)
const day5TempC = (day5TempF - 32) * (5/9)
const day7TempC = (day7TempF - 32) * (5/9)
const day9TempC = (day9TempF - 32) * (5/9)
const day11TempC = (day11TempF - 32) * (5/9)
const day13TempC = (day13TempF - 32) * (5/9)
const day15TempC = (day15TempF - 32) * (5/9)
const day17TempC = (day17TempF - 32) * (5/9)
const day19TempC = (day19TempF - 32) * (5/9)
const day21TempC = (day21TempF - 32) * (5/9)
const day23TempC = (day23TempF - 32) * (5/9)
const day25TempC = (day25TempF - 32) * (5/9)
const day27TempC = (day27TempF - 32) * (5/9)
const day29TempC = (day29TempF - 32) * (5/9)

const day2TempF = (day2TempC * (9/5) + 32)
const day4TempF = (day4TempC * (9/5) + 32)
const day6TempF = (day6TempC * (9/5) + 32)
const day8TempF = (day8TempC * (9/5) + 32)
const day10TempF = (day10TempC * (9/5) + 32)
const day12TempF = (day12TempC * (9/5) + 32)
const day14TempF = (day14TempC * (9/5) + 32)
const day16TempF = (day16TempC * (9/5) + 32)
const day18TempF = (day18TempC * (9/5) + 32)
const day20TempF = (day20TempC * (9/5) + 32)
const day22TempF = (day22TempC * (9/5) + 32)
const day24TempF = (day24TempC * (9/5) + 32)
const day26TempF = (day26TempC * (9/5) + 32)
const day28TempF = (day28TempC * (9/5) + 32)
const day30TempF = (day30TempC * (9/5) + 32)


//Step 3: Calculate total and Average temp

const tot_temperature_in_celsius = (day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC);
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);

const avg_temperature_in_celsius = (tot_temperature_in_celsius / 30);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);


const tot_temperature_in_fahrenheit = (day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF);
console.log("Total Temerature in Fahrenheit:", tot_temperature_in_fahrenheit);

const avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit / 30);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit)
