var PAGE_DATA = {
    user: {
        profile_pic: 'mE.jpg',
        name: 'Raymond Hettinger',
        username: 'raymondh',
        description:
            'Python core developer. Freelance programmer/consultant/trainer. Husband to Rachel. Father to Matthew.',
        location: 'Santa Clara, CA',
        website: 'rhettinger.wordpress.com',
        joined: {
            month: 3,
            year: 2008
        }
    },
    chirps: [
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 28,
                year: 2017
            },
            message:
                '#python tip:  iter(C, sentinel) returns an iterator that invokes the callable C until it returns a sentinel signaling the iterator is done.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 25,
                year: 2017
            },
            message:
                '#python teaching tip:  When teaching adults, half of your time should be spent helping students unlearn pre-existing incorrect knowledge.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 23,
                year: 2017
            },
            message:
                '#python insight of the day:  Directories are a namespace and behave like dictionaries where the key is a filename and the value is an inode.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 5,
                year: 2017
            },
            message: '#python news:  #PyPy version 5.9 has just been released.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'Put another way. With "yield" the consumer controls execution. With "await" the producer controls execution. Very different points of view.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'With #python iterators, we think of next() as initiating execution. With coroutines, we "await" a downstream event to initiate execution.'
        }
    ],
    suggestedFriends: [
        {
            name: 'David Beazley',
            username: 'dabeaz',
            img_url:
                'https://pbs.twimg.com/profile_images/848508178639749120/x8ltNamO_bigger.jpg'
        },
        {
            name: 'Guido Van Rossum',
            username: 'gvanrossum',
            img_url:
                'https://pbs.twimg.com/profile_images/424495004/GuidoAvatar_bigger.jpg'
        },
        {
            name: 'Brandon Rhodes',
            username: 'brandon_rhodes',
            img_url:
                'https://pbs.twimg.com/profile_images/378800000204519400/f6f79294738b8b6afa67dd21c5463633_bigger.jpeg'
        },
        {
            name: 'Python Software',
            username: 'ThePSF',
            img_url:
                'https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_bigger.png'
        },
        {
            name: 'Python Weekley',
            username: 'pycoders',
            img_url:
                'https://pbs.twimg.com/profile_images/429285908953579520/InZKng9-_bigger.jpeg'
        }
    ]
};

function showProfilePic() {
    var user = PAGE_DATA.user;
    var html = '<img id="profile_img" src="' + user.profile_pic + '">';
    $('.follow_blank').append(html);
}

function personalData() {
    var html = '<h2>' + PAGE_DATA.user.name + '</h2>';
    html +=
        '<p><i class="fa fa-at" aria-hidden="true"></i>' +
        PAGE_DATA.user.username +
        '</p>';
    html += '<p>' + PAGE_DATA.user.description + '</p>';
    html +=
        '<p><i class="fa fa-map-marker" aria-hidden="true"></i> ' +
        PAGE_DATA.user.location +
        ' </p>';
    html +=
        '<i class="fa fa-link" aria-hidden="true"></i> ' +
        '<a href="https://' +
        PAGE_DATA.user.website +
        '">' +
        PAGE_DATA.user.website +
        '</a>';
    html +=
        '<p><i class="fa fa-calendar" aria-hidden="true"></i> Joined March ' +
        PAGE_DATA.user.joined.year +
        '</p>';
    $('#personal-data').html(html);
}

function chirps(chirp) {
    var html =
        '<h3>' +
        chirp.author.name +
        ' @' +
        chirp.author.username +
        ' ' +
        chirp.date.month +
        '/' +
        chirp.date.day +
        '/' +
        chirp.date.year +
        '</h3>';
    html += chirp.message;

    return html;
}
function showchirps() {
    var html = PAGE_DATA.chirps.map(function(chirp) {
        return chirps(chirp);
    });
    $('#chirps').append(html);
}

function suggestions(suggest) {
    var html = '<img class="friendpicture" src="' + suggest.img_url + '">';
    html +=
        '<a id="person">' +
        suggest.name +
        '</br><a id="personUname">@' +
        suggest.username +
        '</br></a>';
    return html;
}

function showSuggestions(suggest) {
    var html = PAGE_DATA.suggestedFriends.map(function(suggest) {
        return suggestions(suggest);
    });
    $('#friends').html(html);
}

$('#post-chirp').on('submit', function(event) {
    event.preventDefault();
    // get the data from the textarea
    // insert it into the chirp data
    // clear the text area
    function myFunction() {
        var x = document.getElementById('Textarea').value;
        document.getElementById('chirp-message').innerHTML = x;
    }

    showchirps();
});

function main() {
    showProfilePic();
    personalData();
    showchirps();
    showSuggestions();
    chirps();
}

$(main);
