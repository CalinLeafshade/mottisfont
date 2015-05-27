
var videoRoot = "video/";
var vidExt = ".mp4";
var imgExt = ".jpg";

Person = function (name, topics) {
    this.name = name;
    this.topics = topics;
};

Person.prototype.loopingVideo = function () {
    return (videoRoot + this.name + "/" + "loop" + vidExt).toLowerCase();
//	return (videoRoot + this.name + "/" + "loop" + imgExt).toLowerCase();
};

Person.prototype.introVideo = function () {
    return (videoRoot + this.name + "/" + "intro" + vidExt).toLowerCase();
};

Person.prototype.topicVideo = function (idx) {
    if (idx === 0)
        return (videoRoot + this.name + "/" + "intro" + vidExt).toLowerCase();
    else
        return (videoRoot + this.name + "/" + "topic" + idx + vidExt).toLowerCase();
};




Model = {
    people: [
        new Person("Catherine", [ "Catherine, the Outdoor Ranger", "Catherine and The Nuthatch", "Catherine's Flock", "Foraging", "Why I love the seasons", "<span class=\"biggo\">Zoonotic Diseases</span><span class=\"smallo\">(may put you off your scone!)</span>" ]),
        new Person("Dylan", [ "Dylan, the Countryside Manager", "Change at Mottisfont", "Conservation & Visitor access", "Mottisfont history", "Mottisfont is very special to me", "Challenging and enjoyable roles" ]),
        new Person("Helen", [ "My Journey to Mottisfont","I didn't expect the challenges", "I was the wild card", "Mottisfont has so much to offer", "Mottisfont means everything to me", "One of many moments at Mottisfont" ]),
        new Person("Howard", [ "I'm Howard, a Volunteer", "About Mottisfont", "The meaning of water at Mottisfont", "Mottisfont is a thin place", "Reaching Beyond Religion", "The Font" ]),
        new Person("Jonny", [ "Jonny, the Head Gardener", "Challenges in my role", "How I became a gardener","My passion for gardening", "Roses research", "the Mottisfont Roses" ]),
        new Person("Louise", [ "My Journey to Mottisfont", "Hospitality at Mottisfont", "Magical Mottisfont", "Mottisfont, Art and Maud Russell", "The National Trust", "The Whistler Room" ])
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
