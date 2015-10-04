angular.module('app').controller('BrowsingController', function ($state, Stylists) {
    var ctrl = this;

    ctrl.filters = {location: 'New York'};

    ctrl.filterOptions = [
    	{name: 'tier', category: 'Tier', options: Stylists.tiers},
    	{name: 'location', category: 'Location', options: Stylists.locations},
    	{name: 'event', category: 'Event', options: Stylists.events},
        {name: 'tags', category: 'Tags', options: Stylists.tags}        

    ];

    ctrl.sortings = [{display: 'Tier', sort: 'tier'}, {display:'Rating', sort:'-rating'}, {display:'Name', sort:'name'}];


    ctrl.stylists = Stylists.stylists;



    //console.log('BrowsingController');
});