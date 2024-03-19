const adventures = {
    any: [
        "Find the best ice cream in town.",
        "Take a photo with the funniest street art you can find.",
        "Visit the oldest building in your city."
    ],
    food: [
        "Try a cuisine you've never had before.",
        "Find the highest-rated dessert spot near you."
    ],
    outdoors: [
        "Find a nearby hiking trail with a view.",
        "Visit the closest national park."
    ],
    culture: [
        "Visit a local museum you've never been to.",
        "Attend a cultural event happening this week."
    ],
    entertainment: [
        "Find a live music event happening tonight.",
        "Visit the nearest arcade or game cafe."
    ]
};

function generateAdventure() {
    const type = document.getElementById('activity-type').value;
    const prompt = adventures[type][Math.floor(Math.random() * adventures[type].length)];
    document.getElementById('adventure-text').innerText = prompt;
}
