angular.module('app').controller('BrowsingController', function ($state) {
    var ctrl = this;

    ctrl.filters = {};

    var tiers = ['1', '2', '3'];
    var events = ['Wedding', 'Interview'];
    //var ratings = ['5 star', '4 star', '5 star', '5 star']

    ctrl.filterOptions = [
    	{name: 'tier', category: 'Tier', options: tiers},
    	{name: 'location', category: 'Location', options: []},
    	//{category: 'Tags', options: []}
    	{name: 'event', category: 'Event', options: events}
    ];


    ctrl.stylists = [];
    for(var i=0;i<10;i++){
    	var tier = Math.floor(Math.random() * tiers.length);
    	var event = Math.floor(Math.random() * events.length);

    	var img = Math.floor(Math.random() * 4) + 1;

    	ctrl.stylists.push({img:'img/product'+img+'.jpg', tier: tiers[tier], event: events[event]});
    }



    //console.log('BrowsingController');
});