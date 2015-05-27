
var videoRoot = "video/";
var vidExt = ".mp4";
var imgExt = ".jpg";

Person = function (name, topics) {
    this.name = name,
    this.topics = topics
}

Person.prototype.loopingVideo = function() {
    return (videoRoot + this.name + "/" + "loop" + vidExt).toLowerCase();
//	return (videoRoot + this.name + "/" + "loop" + imgExt).toLowerCase();
};

Person.prototype.introVideo = function() {
    return (videoRoot + this.name + "/" + "intro" + vidExt).toLowerCase();
}

Person.prototype.topicVideo = function(idx) {
    return (videoRoot + this.name + "/" + "topic" + (idx+1) + vidExt).toLowerCase();
};




Model = {
    people: [
        new Person("Catherine", [ "Catherine and The Nuthatch", "Catherine's Flock", "Foraging", "Catherine, the Outdoor Ranger", "Why I love the Seasons at Mottisfont", "Zoonotic Diseases" ]),
        new Person("Dylan", [ "Change at Mottisfont", "Conservation and Visitor access", "Dylan, the Countryside Manager", "Mottisfont History", "Mottisfont is very special to me", "Challenging and enjoyable roles" ]),
        new Person("Helen", [ "I didn't expect the Challenges", "I was the wild card", "Mottisfont has so much to offer", "Mottisfont means everything to me", "My Journey to Mottisfont", "One of many moments at Mottisfont" ]),
        new Person("Howard", [ "About Mottisfont", "Indian encounter", "Mottisfont is a thin place", "My name is Howard, I'm a volunteer", "Reaching Beyond Religion", "The Font" ]),
        new Person("Jonny", [ "Challenges in my role", "Hello I'm Jonny The Head Gardener", "My passion for gardening", "Roses research", "the Mottisfont Roses" ]),
        new Person("Louise", [ "Hospitality at Mottisfont", "Magical Mottisfont", "Mottisfont, Art and Maud Russell", "My Journey to Mottisfont", "The National Trust", "The Whistler Room" ])
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
