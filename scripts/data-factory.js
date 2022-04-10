// generate random date
function randomDate() {
    const start = 1585008324467;
    const end = new Date().getTime();

    let date = new Date(+start + Math.random() * (end - start));
    let hour = randomNumber(24, 1);
    date.setHours(hour);
    return date;
}

// generate random number in range
function randomNumber(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

// generate chat object
function chatGenerator(index) {
    const names = ["Maria Espinoza", "Matthew Henderson", "Sahra Alomie", "Jacqueline Fuentes", "Abby G.", "Gail Ponier", "Paige Jenson", "Bob U.", "Walter Melon", "Nick R. Bocker", "Barb Ackue", "Buck Kinnear", "Greta Life", "Ira Membrit", "Shonda Leer", "Brock Lee", "Maya Didas", "Rick O'Shea", "Pete Sariya", "Monty Carlo", "Sal Monella", "Sue Vaneer", "Cliff Hanger", "Barb Dwyer", "Terry Aki", "Cory Ander", "Robin Banks", "Jimmy Changa", "Barry Wine", "Wilma Mumduya", "Buster Hyman", "Poppa Cherry", "Zack Lee", "Don Stairs", "Saul T. Balls", "Peter Pants", "Hal Appeno", "Otto Matic", "Moe Fugga", "Graham Cracker", "Tom Foolery", "Al Dente", "Bud Wiser", "Polly Tech", "Holly Graham", "Frank N. Stein", "Cam L. Toe", "Pat Agonia", "Tara Zona", "Barry Cade"]
    const name = names[index];
    let lastseen = randomDate().toLocaleDateString().replace(/\//g, ".");
    if (index % 3 === 0)
        lastseen = "Today";
    if (index % 4 === 0)
        lastseen = "Yesterday";

    return {
        id: Math.random().toString(32).substr(2, 10),
        name,
        username: name.replace(/[^a-zA-Z]/g, '').toLowerCase().substr(0, 8),
        online: Math.random() > .7,
        lastseen,
        unreadcount: "0",
        avatar: `https://randomuser.me/api/portraits/${index % 3 ? "women" : "men"}/${index + 1}.jpg`,
    }
}

// generate random sentences for messages
function getRandomText(sub = false) {
    // sub-string a long paragraph.
    if (sub) {
        const lorem = `Have you taken you COVID19 Booster shots yet? Research suggests that getting a booster dose can decrease your risk of infection and severe illness with COVID-19. People who have a moderately or severely weakened immune system should get an additional primary shot and a booster shot.`;
        const i1 = randomNumber(lorem.length, 6);
        const i2 = randomNumber(lorem.length, 6);
        const start = Math.min(i1, i2);
        const end = Math.min(i2, i1);
        return lorem.substr(start, end)
    }

    // make a sentences of random words
    let verbs, nouns, adjectives, adverbs, preposition;
    nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog",
        "area", "book", "business", "case", "child", "company", "country", "day", "eye",
        "fact", "family", "government", "group", "hand", "home", "job", "life", "lot"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed",
        "ask", "be", "become", "begin", "call", "can", "come", "could", "do",
        "feel", "find", "get", "give", "go", "have", "hear", "help", "keep", "know",];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "important",
        "able", "bad", "best", "better", "big", "black", "certain", "clear", "different", "early",
        "easy", "economic", "federal", "free", "full", "good", "great", "hard", "high", "human"];
    adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
    preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];


    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 30);
    var rand4 = Math.floor(Math.random() * 30);
    var rand5 = Math.floor(Math.random() * 30);
    var rand6 = Math.floor(Math.random() * 30);
    return "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand1] + " " + verbs[rand4] + " because some " + nouns[rand1]
        + " " + adverbs[rand2] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5]
        + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
}

