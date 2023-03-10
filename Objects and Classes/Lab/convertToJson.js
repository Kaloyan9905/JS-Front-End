function solve(name, lastName, hairColor) {
    let object = { name, lastName, hairColor }
    const jsonString = JSON.stringify(object)

    return jsonString
}

console.log(solve('George', 'Jones', 'Brown'));