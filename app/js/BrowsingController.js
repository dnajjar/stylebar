angular.module('app').controller('BrowsingController', function ($state) {
    var ctrl = this;

    ctrl.filters = {};

    var tiers = ['1', '2', '3'];
    var events = ['Wedding', 'Interview'];
    var ratings = [5,4,3,2,1];

    ctrl.filterOptions = [
    	{name: 'tier', category: 'Tier', options: tiers},
    	{name: 'location', category: 'Location', options: []},
    	//{category: 'Tags', options: []}
    	{name: 'event', category: 'Event', options: events}
    ];

    ctrl.sortings = [{disply: 'tier', sort: 'tier'}, {disply:'rating', sort:'-rating'}];


    ctrl.stylists = [];
    for(var i=0;i<12;i++){
    	var tier = Math.floor(Math.random() * tiers.length);
    	var event = Math.floor(Math.random() * events.length);
    	var rating = Math.floor(Math.random() * ratings.length);

    	var img = Math.floor(Math.random() * 4) + 1;
    	var icon = Math.floor(Math.random() * 4) + 1;

    	ctrl.stylists.push({
    		img:'img/product'+img+'.jpg', 
    		icon:'img/product'+icon+'.jpg', 
    		tier: tiers[tier], 
    		event: events[event],
    		rating: ratings[rating],
    		name: 'stylist name'
    	});
    }



    //console.log('BrowsingController');
});