var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = null;
	this.inputString = inputString;
	
	this.result = undefined;
	this.found = false;
}

Regularize.prototype.check = function () {
	this.found = this.value.test(this.inputString);
	
	return this;
};

Regularize.prototype.beginsWith = function (patternString) {
	var result;
	
	this.value = new RegExp(patternString, 'g');
	
	return this;
};

Regularize.prototype.execute = function () {
	
	this.result = this.value.exec(this.inputString);
	
	return this;
};