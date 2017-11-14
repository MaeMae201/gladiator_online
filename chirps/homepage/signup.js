function numbersLetters(password) {
    var letterNumberPunctuation = /^[0-9a-zA-Z.,:;!?]*$/;
    if (password.match(letterNumberPunctuation)) {
        return true;
    }
    return false;
}

function Numbers(password) {
    return (
        /\d/.test(password) &&
        /[.,:;!?]/.test(password) &&
        /[a-zA-Z]/.test(password)
    );
}

function passwordHtml(password) {
    var error = [];
    if (password.length < 12 || password.length > 13) {
        error.push(
            '<li id="error2">password must be between 12 to 13  characters</li>'
        );
    }
    if (numbersLetters(password) === false) {
        error.push(
            '<li id="error2">Password can only contain letter and number.</li>'
        );
    }
    if (Numbers(password) === false) {
        error.push(
            '<li id="error2">Password must contain atleast 1 number</li>'
        );
    }
    return error.join('');
}
function showPasswordErrors(password) {
    const h = passwordHtml(password);
    $('#password-errors').html(h);
}
function addPasswordValidation() {
    const input = $('#password-input');
    input.on('input', function(event) {
        showPasswordErrors(event.currentTarget.value);
    });
}

function NumbersAndLetters(username) {
    var letterNumber = /^[0-9a-zA-Z]*$/;
    if (username.match(letterNumber)) {
        return true;
    }
    return false;
}
function showUsernameErrors(username) {
    const h = usernameErrorHtml(username);
    $('#username-error').html(h);
}
function addUsernameValidation() {
    const input = $('#username-input');
    input.on('input', function(event) {
        showUsernameErrors(event.currentTarget.value);
    });
}

$('#login').on('click', function() {
    $('.dropdown-content').toggle();
});
function login() {
    $('.login-button').on('click', function() {
        var info = $.post(
            'https://bcca-chirper.herokuapp.com/api/login/',
            JSON.stringify({
                username: $('#username-info2').val(),
                password: $('#password-info2').val()
            })
        )
            .then(function handleFeedResponse(response) {
                PAGE_DATA = response;
                var key = window.localStorage.setItem('key', PAGE_DATA.key);
                window.location =
                    'file:///home/basecamp/Projects/Dailey_exercises/November/chirper-frontend/user_homepage/index.html?user=' +
                    $('#username-info2').val() +
                    '';
            })
            .catch(function handleFeedReason(reason) {
                console.log('Failure:', reason);
                $('#login-error').html(
                    '<li id="error" >Sorry incorrect username or password</li>'
                );
            });
    });
}

function UserInformation() {
    $('.signup-button').on('click', function() {
        var name = $('#name-input').val();
        var username = $('#username-input').val();
        var email = $('#email-input').val();
        var password = $('#password-input').val();
        signup({
            name: name,
            username: username,
            email: email,
            password: password
        });
    });
}

function signup(data) {
    $.post(
        'https://bcca-chirper.herokuapp.com/api/signup/',
        JSON.stringify(data)
    )
        .then(function handleFeedResponse(response) {
            console.log(response);
            window.localStorage.setItem('key', response.key);
            PAGE_DATA = response;
            console.log(PAGE_DATA);
            window.location =
                'file:///home/basecamp/Projects/Dailey_exercises/October/chirper-feed/index.html?user=' +
                $('#username-input').val() +
                '';
        })
        .catch(function handleFeedReason(reason) {
            console.log('Failure:', reason);
            $('#username-error').html(
                '<li id="error" >A user with that username already exists.</li>'
            );
        });
}

function main() {
    UserInformation();
    login();
}

$(main);
main();
