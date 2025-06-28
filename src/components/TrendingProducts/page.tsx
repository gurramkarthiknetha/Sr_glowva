export default function TrendingProducts() {
	const products=[
    {
      "id": 121,
      "title": "iPhone 5s",
      "price": 174.08,
      "originalPrice": 199.99,
      "discountPercentage": 12.91,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 122,
      "title": "iPhone 6",
      "price": 279.94,
      "originalPrice": 299.99,
      "discountPercentage": 6.69,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 123,
      "title": "iPhone 13 Pro",
      "price": 996.89,
      "originalPrice": 1099.99,
      "discountPercentage": 9.37,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 124,
      "title": "iPhone X",
      "price": 723.59,
      "originalPrice": 899.99,
      "discountPercentage": 19.59,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 125,
      "title": "Oppo A57",
      "price": 243.92,
      "originalPrice": 249.99,
      "discountPercentage": 2.43,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 126,
      "title": "Oppo F19 Pro Plus",
      "price": 325.38,
      "originalPrice": 399.99,
      "discountPercentage": 18.64,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 127,
      "title": "Oppo K1",
      "price": 245.13,
      "originalPrice": 299.99,
      "discountPercentage": 18.29,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 128,
      "title": "Realme C35",
      "price": 127.04,
      "originalPrice": 149.99,
      "discountPercentage": 15.30,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 129,
      "title": "Realme X",
      "price": 279.15,
      "originalPrice": 299.99,
      "discountPercentage": 6.95,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 130,
      "title": "Realme XT",
      "price": 309.71,
      "originalPrice": 349.99,
      "discountPercentage": 11.51,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 131,
      "title": "Samsung Galaxy S7",
      "price": 241.36,
      "originalPrice": 299.99,
      "discountPercentage": 19.55,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 132,
      "title": "Samsung Galaxy S8",
      "price": 402.74,
      "originalPrice": 499.99,
      "discountPercentage": 19.45,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 133,
      "title": "Samsung Galaxy S10",
      "price": 660.83,
      "originalPrice": 699.99,
      "discountPercentage": 5.59,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 134,
      "title": "Vivo S1",
      "price": 224.54,
      "originalPrice": 249.99,
      "discountPercentage": 10.17,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 135,
      "title": "Vivo V9",
      "price": 246.98,
      "originalPrice": 299.99,
      "discountPercentage": 17.67,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
      "buttonText": "+ Add"
    },
    {
      "id": 136,
      "title": "Vivo X21",
      "price": 412.89,
      "originalPrice": 499.99,
      "discountPercentage": 17.41,
      "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
      "buttonText": "+ Add"
    }
  ];
  
	return(
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-2 text-center">Trending Products</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.slice(0, 8).map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col hover:shadow-lg transition-shadow duration-200 border border-gray-100"
					>
						<div className="relative">
							<img
								src={product.thumbnail}
								alt={product.title}
								className="w-full h-56 object-cover"
							/>
							<span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
								{product.discountPercentage}% off
							</span>
							<button className="absolute bottom-3 right-3 bg-white/80 rounded-full p-2 border border-gray-200 hover:bg-pink-100 transition-colors" aria-label="Wishlist">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.54 0-2.94.792-3.687 2.008A4.125 4.125 0 0 0 3 8.25c0 7.22 8.25 11.25 8.25 11.25s8.25-4.03 8.25-11.25z" />
								</svg>
							</button>
						</div>
						<div className="flex-1 flex flex-col justify-between p-4">
							<div>
								<h2 className="text-lg font-semibold mb-1 text-gray-900">{product.title}</h2>
								<div className="flex items-center gap-2 mb-2">
									<span className="text-orange-500 font-bold text-xl">₹{Math.round(product.price)}</span>
									<span className="text-gray-400 line-through text-base">₹{Math.round(product.originalPrice)}</span>
								</div>
							</div>
							<div className="flex items-center gap-2 mt-4">
								<button className="border border-orange-400 rounded-full p-2 text-orange-500 hover:bg-orange-50 transition-colors" aria-label="WhatsApp">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
										<path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
									</svg>
								</button>
								<button className="flex-1 border border-orange-400 text-orange-500 font-semibold rounded-full py-2 transition-colors hover:bg-orange-50 text-base">
									{product.buttonText}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}