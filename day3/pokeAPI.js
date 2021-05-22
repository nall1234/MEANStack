

$(document).ready(() => {
    $('#search-button').click(() => {
        const input = $('#user-name').first();
        //.trim removes white space 
        const name = input.val().trim();
        //hides this section. reveals later when we get the info
        $('.user-content').first().hide();
        //resets the input since we now have the val in name?
        input.val('');
        //actual search
        if (name) {
            return search(name);
        }

        displayError('You must provide a username');
    });
});

function search(name) {
    //hides any error sections that would be on screen
    $('#error-section').hide();
    //async search with a promise
    console.log('about to search')
    new Promise((resolve, reject) => {
        $.get({
            url: `https://api.github.com/users/${name}`,
            success: resolve,
            error: reject,
        });
    })
        .then(createCard)
        .catch(error => {
            displayError(`Something went wrong, ensure the user you are requesting exists: ${name}`);
        });
}

function createCard(user) {
    console.log('user ', user);

    const element = `
<div #id='card' class='card'>
    <img class='img avatar' src="${user.avatar_url}" alt="avatar">
    <p>Login: ${user.login}</p>
    <p>Name: ${user.name || 'N/A'}</p>
    <p>Repos: ${user.public_repos}</p>
    <p>Gists: ${user.public_gists}</p>
</div>
`;

    $('.user-content').first().empty().show().append(element);
}

function displayError(message) {
    $('#error-section')
        .empty()
        .show()
        .append(`<p>${message}</p>`);
}

