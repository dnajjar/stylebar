angular.module('app').controller('BrowsingController', function ($state, Stylists) {
    var ctrl = this;

    ctrl.filters = {};

    // var tiers = ['1', '2', '3'];
    // var events = ['Wedding', 'Interview'];
    // var ratings = [5,4,3,2,1];

    ctrl.filterOptions = [
    	{name: 'tier', category: 'Tier', options: Stylists.tiers},
    	{name: 'location', category: 'Location', options: Stylists.locations},
    	//{category: 'Tags', options: []}
    	{name: 'event', category: 'Event', options: Stylists.events},
        {name: 'tags', category: 'Tags', options: Stylists.tags}        

    ];

    ctrl.sortings = [{display: 'tier', sort: 'tier'}, {display:'rating', sort:'-rating'}];


    ctrl.stylists = Stylists.stylists;



    //console.log('BrowsingController');
});