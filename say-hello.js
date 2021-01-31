function SayHello() {}
SayHello.prototype = Object.create(HTMLElement.prototype);
SayHello.prototype.createdCallback = function() {
  var shadow = this.createShadowRoot();
  shadow.appendChild(
    document.getElementById('sayHelloTemplate').content
  );
};

document.registerElement('say-hello', SayHello); 