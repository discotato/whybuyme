function EventedArray(handler) {
	this.stack = [];
	this.mutationHandler = handler || function() {};
	this.setHandler = function(f) {
		this.mutationHandler = f;
	};
	this.callHandler = function() { 
		if(typeof this.mutationHandler === 'function') {
			this.mutationHandler();
		}
	};
	this.push = function(obj) {
		this.stack.push(obj);
		this.callHandler();
	};
	this.pop = function() {
		this.callHandler();
		return this.stack.pop();
	};
	this.getArray = function() {
		return this.stack;
	}
}

Store = function(id, name, description, itemPushed, itemPopped) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.itemList = [];
	this.address = "";
	this.imageUrl = "";
	this.getAddress = function() {
		return this.address;
	};

	this.addItem = function(item) {
		this.itemList.push(item);
		//this.itemList[item.id] = item;
		this.callPushHandler();
	};
	
	this.removeItem = function(item) {
		this.itemList.pop(item);
		//delete this.itemList[item.id];
		this.callPopHandler();
	};
	
	this.getStoreItemTotal = function() {
		var total = 0;
		for	(i = 0; i < this.itemList.length; i++) {
			total += this.itemList[i].cartQty;
		}
		return total;
	};	
	
	//Item push handler
	this.pushHandler = itemPushed || function() {};
	this.setItemPushHandler = function(f) {
		this.pushHandler = f;
	};
	this.callPushHandler = function() { 
		if(typeof this.pushHandler === 'function') {
			this.pushHandler();
		}
	};
	
	//Item pop handler
	this.popHandler = itemPopped || function() {};
	this.setItemPopHandler = function(f) {
		this.popHandler = f;
	};
	this.callPopHandler = function() { 
		if(typeof this.popHandler === 'function') {
			this.popHandler();
		}
	};
}

Item = function(id, storeId, name, description, unit, qty, price) {
	this.id = id;
	this.storeId = storeId;
	this.name = name;
	this.description = description;
	this.unit = unit;
	this.qty = qty;
	this.cartQty = 0;
	this.price = price;
	
	this.incrementQtyBy = function(amount) {
		this.qty += amount;
	};
	
	this.decrimentQtyBy = function(amount) {
		this.qty -= amount;
	};
	
	this.incrementCartQtyBy = function(amount) {
		this.cartQty += amount;
	};
	
	this.decrimentCartQtyBy = function(amount) {
		this.cartQty -= amount;
	};
	
	this.getTotalPrice = function() {
		return this.qty * this.price;
	};
	
	this.getCartTotalPrice = function() {
		return this.cartQty * this.price;
	};
	
	this.getTotalUnitAmount = function() {
		return this.qty * this.unit;
	};
	
	this.getCartTotalUnitAmount = function() {
		return this.cartQty * this.unit;
	};
}

Stores = function(storePushed, storePopped) {
	this.storeList = [];
	
	this.addStore = function(store) {
		this.storeList.push(store);
		//this.itemList[store.id] = store;
		this.callPushHandler();
	};
	
	this.removeStore = function(store) {
		this.storeList.pop(store);
		//delete this.itemList[store.id];
		this.callPopHandler();
	};
	
	this.getStoreCopy = function(storeId) {
		return JSON.parse(JSON.stringify(this.itemList[storeId]));
	};
	
	//Store push handler
	this.pushHandler = storePushed || function() {};
	this.setStorePushHandler = function(f) {
		this.pushHandler = f;
	};
	this.callPushHandler = function() { 
		if(typeof this.pushHandler === 'function') {
			this.pushHandler();
		}
	};
	
	//Store pop handler
	this.popHandler = storePopped || function() {};
	this.setStorePopHandler = function(f) {
		this.popHandler = f;
	};
	this.callPopHandler = function() { 
		if(typeof this.popHandler === 'function') {
			this.popHandler();
		}
	};
}

Address = function (address, city, region, country, code) {
	this.id = "";
	this.address = address;
	this.city = city;
	this.region = region;
	this.country = country;
	this.code = code;
	this.notes = "";
}

//clone a store before adding to cart
//var cloneOfA = JSON.parse(JSON.stringify(a));
//http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
Cart = function (storePushed, storePopped){
	this.storeList = []; //a list of stores in the cart (should have item qty 0)
	
	this.addStore = function(store) {
		this.storeList.push(store);
		this.callPushHandler();
	};
	
	this.removeStore = function(store) {
		this.storeList.pop(store);
		this.callPopHandler();
	};
	
	this.setCartItemQty = function(storeId, itemId, qty) {
		var i = this.getCartItem(storeId, itemId);
		i.cartQty = qty;
	};
	
	this.getCartStore = function(storeId) {
		for	(i = 0; i < this.storeList.length; i++) {
			if(this.storeList[i].id == storeId) {
				return this.storeList[i];
			}
		}
	};
	
	this.getCartItem = function(storeId, itemId) {
		var s = this.getCartStore(storeId);
		for	(i = 0; i < s.itemList.length; i++) {
			if(s.itemList[i].id == itemId) {
				return s.itemList[i];
			}
		}
	};
	
	this.incrementCartItemQty = function(storeId, itemId) {
		var i = this.getCartItem(storeId, itemId);
		i.cartQty += 1;
	};
	
	this.decrimentCartItemQty = function(storeId, itemId) {
		var i = this.getCartItem(storeId, itemId);
		i.cartQty -= 1;
	};
	
	this.getCartTotal = function() {
		var cartTotal = 0;
		for	(i = 0; i < this.storeList.length; i++) {
			var s = this.storeList[i];
			for	(n = 0; n < s.itemList.length; n++) {
				if(s.itemList[n].cartQty != 0){
					cartTotal += s.itemList[n].cartQty * s.itemList[n].price;
				}
			}
		}
		return cartTotal;
	};
	
	this.getStoreTotal = function(storeId) {
		var s = this.getCartStore(storeId);
		var storeTotal = 0;
		for	(n = 0; n < s.itemList.length; n++) {
			if(s.itemList[n].cartQty != 0){
				storeTotal += s.itemList[n].cartQty * s.itemList[n].price;
			}
		}
		return storeTotal;
	};
	
	this.getItemTotal = function(storeId, itemId) {
		var i = this.getCartItem(storeId, itemId);
		if(i != null){
			return i.cartQty * i.price;
		}
		return 0;
	};
	
	//store push handler
	this.pushHandler = storePushed || function() {};
	this.setStorePushHandler = function(f) {
		this.pushHandler = f;
	};
	this.callPushHandler = function() { 
		if(typeof this.pushHandler === 'function') {
			this.pushHandler();
		}
	};
	
	//Store pop handler
	this.popHandler = storePopped || function() {};
	this.setStorePopHandler = function(f) {
		this.popHandler = f;
	};
	this.callPopHandler = function() { 
		if(typeof this.popHandler === 'function') {
			this.popHandler();
		}
	};
}
