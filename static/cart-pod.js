//NOTE: requires cart.js and pod.js
//This class combines the functionality of the Shoppting Cart class and the POD database storage class
//Shopping Cart data is stored using a web service called POD.
PODCart = function(serviceURL, appId) {
	this.service = serviceURL;
	this.appId = appId;
	this.pod = new POD(serviceURL, appId);
	//category strings for Shopping Cart objects
	this.stores = "Stores";
	this.items = "Items";
	this.customers = "Customers";
	this.orders = "Orders";
	
	this.getAllStores = function(callback) {
		this.pod.getObjectByCategory(callback, this.stores, "1");
	};
	
	this.getStoreByName = function(callback, storeName) {
		this.pod.getObjectByCategory(callback, this.stores + "." + storeName, "2");
	};
	
	this.getStoreItems = function(callback, storeName) {
		this.pod.getObjectByCategory(callback, storeName + "." + this.items, "2");
	};
	
	this.getStoreCustomers = function(callback, storeName) {
			this.pod.getObjectByCategory(callback, storeName + "." + this.customers, "2");
	};
	
	this.getCustomerOrders = function(callback, customerName) {
			this.pod.getObjectByCategory(callback, customerName + "." + this.orders, "1");
	};
	
	this.getOrderByName = function(callback, orderName) {
			this.pod.getObjectByCategory(callback, orderName, "1");
	};
}
