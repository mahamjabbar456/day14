// Question 40
function make_album(artist, title) {
    const distionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return distionaries;
}
console.log(make_album("Maham", "Red"));
console.log(make_album("Sabar", "Light wave"));
console.log(make_album("Daniyal", "green"));
// let album:object = make_album("Maham","Maham Jabbar");
// console.log(album);
// Question 41
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
let magicians = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
show_magicians(magicians);
// Question 42
let magicians2 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is the best.";
    }
}
make_great(magicians2);
show_magicians(magicians2);
export {};
