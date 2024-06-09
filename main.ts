

 function describe_city (nameofcity :string ,country :string = "Pakistan" ) {
    return '${nameofcity} ${country}'
 }

 let city1 = describe_city("karachi")
 let city2 = describe_city("Islamabad")
 let city3 = describe_city("Lahore")
 let city4 = describe_city("Dubai","Usa")
 console.log(city1);
 console.log(city2);
 console.log(city3);
 console.log(city4);