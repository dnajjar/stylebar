'use strict';

angular.module('app').factory('Stylists', function () {
    var tiers = ['Silver', 'Gold', 'Platinum'];
    var events = ['Wedding', 'Interview', 'Data night'];
    var tags = ['Modern', 'Chic', 'Formal', 'Vintage', 'Casual'];
    var locations = ["New York", "Houston", "Jersey City", "Boston", "Chicago"];
    var ratings = [5,4,3,2,1];
    var names = ['Sofia', "Anna", "Lisa", "Brianna", "Heather", "Chenyu", "Dana", "Sara", "Julia"]
    var stylists = [];
    for(var i=0;i<9;i++){
        var tier = Math.floor(Math.random() * tiers.length);
        var event = Math.floor(Math.random() * events.length);
        var rating = Math.floor(Math.random() * ratings.length);

        var img = Math.floor(Math.random() * 7) + 1;
        var icon = Math.floor(Math.random() * 4) + 1;

        stylists.push({
            img:'img/stylist-work-'+(i+1)+'.jpg', 
            icon:'img/product'+icon+'.jpg', 
            tier: tiers[tier], 
            event: events[event],
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