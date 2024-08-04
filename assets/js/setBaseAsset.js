// assets/js/setBase.js
(function() {
    // Create a base element for the assets
    var base = document.createElement('base');
    // Set the base href to the assets directory
    base.href = '/assets/';
    // Append the base element to the head of the document
    document.head.appendChild(base);
})();