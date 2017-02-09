fetch('https://deckofcardsapi.com/api/deck/r4sf1y70xtda/draw/?count=2')
.then(response => response.json())
.then(data => console.log(data))


fetch('https://deckofcardsapi.com/api/deck/wt2vrz9lpzt6/draw/?count=4')
.then(response => response.json())
.then(data => console.log(data))


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
.then(response => response.json())
.then(data => console.log(data))


// Brand New Deck
fetch('https://deckofcardsapi.com/api/deck/new/')
.then(response => response.json())
.then(data => console.log(data))


// Reshuffle the cards
fetch('https://deckofcardsapi.com/api/deck/pkuz341f72st/shuffle/')
.then(response => response.json())
.then(data => console.log(data))
