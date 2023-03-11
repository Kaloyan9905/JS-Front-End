function solve(array) {
  let songs = [];
  let numberOfSongs = array.shift();
  let typeSong = array.pop();

  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  for (const object of array) {
    let [type, name, time] = object.split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((s) => console.log(s.name));
  } else {
    let filtered = songs.filter((s) => s.type === typeSong);
    filtered.forEach((s) => {
      console.log(s.name);
    });
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
