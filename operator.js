// + - / * %
// we can find the percentage using the Operators:
// formula: D = (L - S)/L*100
var sellingprice = 200;
var listingprice = 900;
var percentage = ((listingprice-sellingprice)/ listingprice)*100;
console.log(percentage);

// Now using math library for removing pointing value
var roundpercentage = Math.round(percentage);
console.log(roundpercentage +"% off");
var result = listingprice > sellingprice;
console.log(result);