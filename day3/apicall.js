$(document).ready(()=>{
    $('#search-button').click(()=>{
        const input = $('#username')
        const name = input.val()

        if (name){
            return search(name);
        }
        displayError('you must enter a name')
    })
})


function search(name){
    console.log('about to search')

    //regular version below
    $.get("https://api.github.com/users/nall1234", createCard)
}

//Promises version below
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)

//     new Promise((resolve, reject)=>{
//         $.get({
//             url : `https://api.github.com/users/${name}`,
//             success: resolve,
//             error: reject,
//         });
//     })
//         .then(createCard)
//         .catch(error =>{
//             displayError(`you have an error with ${name}`)
//         })


function createCard(data){
    console.log('about to create card')

    const card = `
    <div>
        <p>${data.name}</P>
    </div>`

    $('.user-content').show().append(card)
    console.log('created card')

}



function displayError(message){
    $('#error')
    .empty()
    .show()
    .append(`<p>${message}</p>`)

}

// $(document).ready(function(){
//     var favoritePokemon;
//     // the given link is for Bulbasaur's information
//     $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){     
//         favoritePokemon = data.name;
//         console.log("Got my favorite Pokemon", favoritePokemon);
//     });
//           // Predict the output!
// });   