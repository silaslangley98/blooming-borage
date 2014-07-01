(function(angular) {
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('CartService', function() {
 
		var items = {};
		var cartToggle = false;
 
		return {

			getItems: function() {
                return items;
			},

			addItem: function(item) {
				console.log(item);
				console.log(item.guid);	
                if(!items[item.guid]) {

                    item.quantity = 1;
                    items[item.guid] = item;
                    console.log(items[item.guid]);
                }else {
                    items[item.guid].quantity += 1;
                }
			},
 
			removeItem: function(item_id) {
				console.log(items[item_id]);
                return delete items[item_id];
                console.log(items[item_id]);
			},
 
			emptyCart: function() {
				console.log(items);
                return items = {};
                console.log(items);
			},
 
			getItemCount: function() {
				
                var total = 0;
                angular.forEach(items, function(item) {
                    total += parseInt(item.quantity);
                });
                return total;
			},

			getCartTotal: function() {
				
                var total = 0;
                angular.forEach(items, function(item) {
                   total += parseInt(isNaN(item.quantity) ? 0 : item.quantity) * parseFloat(item.price);
                });
                return total;
			},

		};
 
	});
 
})(window.angular);
 