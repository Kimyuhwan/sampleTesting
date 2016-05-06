module.exports = Bear;

function Bear(type) {
    this.type = type;
};

Bear.prototype.growl = function(says) {
    return 'The ' + this.type + ' bear says ' + (says || 'grrr');
};
