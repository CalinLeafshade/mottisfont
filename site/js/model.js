
var videoRoot = "video/";
var vidExt = ".mp4";

Person = function (name, topics) {
	this.name = name,
	this.topics = topics
}

Person.prototype.loopingVideo = function() {
	return (videoRoot + this.name + "/" + "loop" + vidExt).toLowerCase();
};

Person.prototype.topicVideo = function(idx) {
	return (videoRoot + this.name + "/" + "topic" + idx + vidExt).toLowerCase();
};


Model = {
	people: [
		new Person("Ann", [ "Topic 1", "Topic 2" ]),
		new Person("Bennie", [ "Topic 1", "Topic 2" ]),
		new Person("Charlie", [ "Topic 1", "Topic 2" ]),
		new Person("Dustin", [ "Topic 1", "Topic 2" ]),
		new Person("Englebert", [ "Topic 1", "Topic 2" ]),
		new Person("Frances", [ "Topic 1", "Topic 2" ])
	],
	personByName: function (name) {
		return Model.people.find(function (e) {
			if (e.name === name)
				return e;
			else
				return false;
		})
	}
}