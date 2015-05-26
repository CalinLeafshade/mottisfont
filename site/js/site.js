
var currentPerson;

function backToMain () {
    var t = $('#main-template').html();
    $('.container').html(Mustache.render(t, Model));
    currentPerson = null;
}

function gotoPerson (name) {
    var t = $('#person-template').html();
    currentPerson = Model.personByName(name);
    var view = {
        loopingVideo: currentPerson.loopingVideo,
        name: currentPerson.name,
        topics: currentPerson.topics.map(function(e,i) {
          return { id: i, text: e };
        })
    }
    $('.container').html(Mustache.render(t, view));
}

function gotoTopic (idx) {
    var view = {
        video: currentPerson.topicVideo(idx),
        name: currentPerson.name,
        topic: currentPerson.topics[idx]
    };
    var t = $('#topic-template').html();
    $('.container').html(Mustache.render(t, view));
}

$(function() {
    backToMain();

    $('body').on('click', '.nav-link', function (ev) {
        var target = $(this).data('target');
        if (target == "topic") {
            var index = Number($(this).data('index'));
            gotoTopic(index);
        }
        else if (target == "main") {
            backToMain();
        }
        else if (target == "person") {
            gotoPerson(currentPerson.name);
        }
        else {
            gotoPerson($(this).data('name'));
        }
    });

});
