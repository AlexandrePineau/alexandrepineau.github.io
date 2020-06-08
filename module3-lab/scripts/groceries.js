
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},

	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.39
	},

	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.09
	},

	{
		name: "salt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.68
	},

	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},

	{
		name: "oats",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.11
	},

	{
		name: "penne pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.55
	},

	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},

	{
		name: "cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price:7.08
	},

	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price:12.61
	},

	{
		name: "organic yogurt",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price:5.44
	},

	{
		name: "organic bannans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price:4.03
	},

	{
		name: "organic tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price:3.16
	},
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	//Sort list of products by price
	for(var i = 0; i < prods.length-1; i++){
		for(var j = i+1; j < prods.length; j++){
			if(prods[j].price < prods[i].price){
				var temp = prods[i];
				prods[i] = prods[j];
				prods[j] = temp;
			}
		}
	}


	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
		else if((restriction == "GFV") && (prods[i].glutenFree == true && prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
