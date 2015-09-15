# whybuyme
Simple javascript shopping cart. The cart is used to power https://whybuy.me

This code is under development currently.

To use this code:
1. Visit http://whybuy.me and download the source from the website (view source). View the website and see how the cart works. This webiste will be upgraded to suport mobile web browswers using elements from bootstrap and google polymer. Google polymer is prefered because it has more modern UI elements such as buttons.
2. I have developed javascript classes which assist in cart management. The classes help as a data container for shopping cart data. This file is /static/cart.js. It is a javascript shopping cart.
3. In order to pull shopping cart information from the server, use the file /static/cart-pod.js. POD is the name for a simple object database which allows you to save shopping cart information to persistent storage.
4. All interaction with these classes is contained in /test/cart.html. cart.html is where we will be doing our work to test the shopping cart. In this file you will see how I use the various classes.

Work to do:
- We will redesign whybuy.me using google polymer elements (or where required we can use bootstrap).
- We will use cart-pod.js and cart.js to store shopping cart data. We will use additional libraries such as modernizer, angular.js, and vault
- We will create a file called cart-ui.html in the test folder which will contain our redesign of whybuy.me

Design concepts;
- Mobile support using bootstrap and polymer
- The objective is to make the most simple shopping cart in the world. Whybuy.me is the most simple shopping cart I could make, so it can be used as a good template.
- The website will support multiple stores. We will display a list of stores and the user can select the store to shop.
- We will need to find a way to deal with URL handling so, for example, the visiting whybuy.me/stores/store1 will show the correct store. This may be tricky but javascript model view controller libraries like Angular will help.

Contact:
Joseph Dietz: matcha@gmail.com
Website: discotato.com