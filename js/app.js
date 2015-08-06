//DATA
theKitties = [{
    name: 'Binky',
    nickNames: ['El Chapo'],
    imgSrc: 'img/binky.jpg',
    clickr: 0
},
{
    name: 'Bongo',
    nickNames: ['El Señor de los Cielos'],
    imgSrc: 'img/bongo.jpg',
    clickr: 0

},
{
    name: 'Sheeba',
    nickNames: ['La Barbie'],
    imgSrc: 'img/sheeba.jpg',
    clickr: 0

},
{
    name: 'Akbar',
    nickNames: ['El Mata Amigos'],
    imgSrc: 'img/akbar.jpg',
    clickr: 0
},
{
    name: 'Jeff',
    nickNames: ['El Hummer'],
    imgSrc: 'img/jeff.jpg',
    clickr: 0

}];


//CLASS 
var Cat = function(data) {
    this.catName = ko.observable(data.name);
    this.nickNames = ko.observableArray(data.nickNames);
    this.imgSrc = ko.observable(data.imgSrc);
    this.counter = ko.observable(data.clickr);
};

function catViewModel() {
    var self = this;
    this.catList = ko.observableArray([]);
    theKitties.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
});

this.currentCat = ko.observable(self.catList()[0]);
//
this.getAnotherCat = function(cat) {
    self.currentCat(cat);
}
this.incrementCounter = function() {
    self.currentCat().counter(self.currentCat().counter() + 1); 
    };
}

ko.applyBindings(new catViewModel());
