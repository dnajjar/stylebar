'use strict';

angular.module('app').factory('Stylists', function () {
    var tiers = ['1', '2', '3'];
    var events = ['Wedding', 'Interview'];
    var ratings = [5,4,3,2,1];

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
            name: 'stylist name'
        });
    }



    return {
        stylists: stylists,
        tiers: tiers,
        events: events,
        ratings: ratings
    }
});