
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		img: "brocoli.jpg"
	},

	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.39,
		img: "carrot.jpg"
	},

	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.09,
		img: "onion.jpg"
	},

	{
		name: "salt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.68,
		img: "salt.jpg"
	},

	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		img: "bread.jpg"
	},

	{
		name: "oats",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.11,
		img: "oats.jpg"
	},

	{
		name: "penne pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.55,
		img: "penne.jpeg"
	},

	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		img: "salmon.jpg"
	},

	{
		name: "cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price:7.08,
		img: "cheese.jpg"
	},

	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price:12.61,
		img: "steak.jpg"
	},

	{
		name: "organic yogurt",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price:5.44,
		img: "yogurt.jpg"
	},

	{
		name: "organic bannans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price:4.03,
		img: "bannas.jpg"
	},

	{
		name: "organic tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price:3.16,
		img: "tomatoes.jpg"
	},
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
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

	if (restrictions[0] == true){
		for (var j = 0; j<prods.length; j+=1){
			product_names.push(prods[j]);
		}
		return product_names;
	}
	else{
		for (let i=0; i<prods.length; i+=1) {
			if ((restrictions[1] == true) && (prods[i].glutenFree == true)){
				product_names.push(prods[i]);
			}
			else if((restrictions[2] == true) && (prods[i].vegetarian == true)){
				product_names.push(prods[i]);
			}
			else if((restrictions[3] == true) && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}
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
