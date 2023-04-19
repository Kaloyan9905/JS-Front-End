function sortCatalog(products) {
  const groupedProducts = {};

  for (const product of products) {
    const [name, price] = product.split(" : ");

    const initial = name.charAt(0).toUpperCase();

    if (groupedProducts[initial]) {
      groupedProducts[initial].push({ name, price });
    } else {
      groupedProducts[initial] = [{ name, price }];
    }
  }

  const sortedGroups = Object.keys(groupedProducts).sort();

  for (const group of sortedGroups) {
    console.log(group);

    groupedProducts[group].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    for (const product of groupedProducts[group]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}
