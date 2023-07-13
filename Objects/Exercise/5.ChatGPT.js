function lowest(input) {
    const lowestPrices = new Map();
    const townMap = new Map();
  
    for (let i = 0; i < input.length; i++) {
      const [town, product, price] = input[i].split(' | ');
  
      const currentPrice = Number(price);
  
      if (!lowestPrices.has(product)) {
        lowestPrices.set(product, currentPrice);
        townMap.set(product, town);
      } else {
        const existingPrice = lowestPrices.get(product);
        if (currentPrice < existingPrice) {
          lowestPrices.set(product, currentPrice);
          townMap.set(product, town);
        }
      }
    }
  
    for (const [product, price] of lowestPrices.entries()) {
      const town = townMap.get(product);
      console.log(`${product} -> ${price} (${town})`);
    }
  }
  
  lowest([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
  ]);
  