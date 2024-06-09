function describe_city(nameofcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return '${nameofcity} ${country}';
}
var city1 = describe_city("karachi");
var city2 = describe_city("Islamabad");
var city3 = describe_city("Lahore");
var city4 = describe_city("Dubai", "Usa");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
