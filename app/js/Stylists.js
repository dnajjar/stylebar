'use strict';

angular.module('app').factory('Stylists', function () {
    var tiers = ['Silver', 'Gold', 'Platinum'];
    var events = ['Wedding', 'Interview', 'Date night', "Public Appearance", "Glam Event"];
    var tags = ['Modern', 'Chic', 'Formal', 'Vintage', 'Casual','Style'];
    var locations = ["New York", "Houston", "Jersey City", "Boston", "Chicago"];
    var ratings = [5,4,3];
    var names = ['Sofia', "Anna", "Lisa", "Brianna", "Heather", "Chenyu", "Dana", "Sara", "Julia"]
    var stylists = [];

    stylists.push({
            img:'img/stylist-sofia.jpg', 
            icon:'img/stylist-1.jpg', 
            tier: tiers.join(),
            event: events.join(),
            tags: tags.join(),
            location: locations.join(),
            rating: 5,
            name: names[0]
        });

    for(var i=1;i<9;i++){
        var tier = Math.floor(Math.random() * tiers.length);
        var event = Math.floor(Math.random() * events.length);
        var rating = (i<4)? 5:4;

        var img = Math.floor(Math.random() * 7) + 1;
        var icon = Math.floor(Math.random() * 4) + 1;

        stylists.push({
            img:'img/stylist-work-'+(i+1)+'.jpg', 
            icon:'img/stylist-'+(i+1)+'.jpg', 
            tier: tiers[tier], 
            event: events[event],
            tags: 'Modern Chic Formal Vintage Casual',
            location: '"New York", "Houston", "Jersey City", "Boston", "Chicago"',
            rating: ratings[rating],
            name: names[i]
        });
    }



    return {
        stylists: stylists,
        tiers: tiers,
        locations: locations,
        events: events,
        ratings: ratings,
        tags: tags
    }
});