
var currentPerson;

function backToMain () {
	var t = $('#main-template').html();
	$('.container').html(Mustache.render(t, Model));	
	currentPerson = null;
}

function gotoPerson (name) {
	var t = $('#person-template').html();
	currentPerson = Model.personByName(name);
	$('.container').html(Mustache.render(t, currentPerson));
}

function gotoTopic (idx) {
	var view = {
		video: currentPerson.topicVideo(idx)
	}
	var t = $('#topic-template').html();
	$('.container').html(Mustache.render(t, view));
}

$(function() {
	backToMain();	

	$('body').on('click', '.nav-link', function (ev) {
		var target = $(this).data('target');
		if (target == "topic") {
			var index = $(this).index();
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