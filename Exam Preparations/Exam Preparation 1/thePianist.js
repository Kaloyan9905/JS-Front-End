function solve(array) {
  function pieceInCollection(currentPiece, collection) {
    for (let element of collection) {
      if (element.piece === currentPiece) {
        return true;
      }
    }
    return false;
  }

  function findIndexOfCollection(currentPiece, collection) {
    for (let index in collection) {
      if (collection[index].piece === currentPiece) {
        return index;
      }
    }
    return false;
  }

  let numberOfPieces = Number(array.shift());
  let pieces = [];

  for (let index = 0; index < numberOfPieces; index++) {
    let [piece, composer, key] = array.shift().split("|");
    pieces.push({ piece: piece, composer: composer, key: key });
  }

  while (true) {
    let command = array.shift();

    if (command === "Stop") {
      for (const piece of pieces) {
        console.log(
          `${piece.piece} -> Composer: ${piece.composer}, Key: ${piece.key}`
        );
      }
      break;
    }

    if (command.includes("Add")) {
      let [_, piece, composer, key] = command.split("|");

      if (pieceInCollection(piece, pieces)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        pieces.push({ piece: piece, composer: composer, key: key });
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (command.includes("Remove")) {
      let [_, piece] = command.split("|");

      if (pieceInCollection(piece, pieces)) {
        pieces = pieces.filter((current) => current.piece !== piece);
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command.includes("ChangeKey")) {
      let [_, piece, newKey] = command.split("|");
      let index = findIndexOfCollection(piece, pieces);
      if (index !== false) {
        pieces[index].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
