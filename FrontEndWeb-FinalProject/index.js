var myINV = {
    'Nike Shoes': '$70.00',
    'Nike Socks': '$20.00',
    'Nike Workout Shirts': '$30.00',
    'Nike Workout Shorts': '$40.00'
};
var myJSON = JSON.stringify(myINV);
// window.location = 'demo_json.php?x=' + myJSON;

function add_item() {}

function add_to_inventory() {}

function purchase() {}

function add_to_shopping_cart() {}

function main() {
    $('#game-over').html(
        'Game Over <i class="fa fa-gamepad" aria-hidden="true"></i>'
    );
}

$(main);
