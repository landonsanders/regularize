var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = null;
	this.inputString = inputString;
	
	this.result = undefined;
	this.found = false;
}

Regularize.prototype.execute = function () {
	this.result = (this.value.exec(this.inputString)).toString();

	return this;
};

Regularize.prototype.next = function () {
	this.execute()

	return this;
};

Regularize.prototype.words = function () {
	this.value = /[a-zA-Z]+/g;

	return this;
};

Regularize.prototype.digits = function () {
	this.value = /[0-9]+/g;

	return this;
};

Regularize.prototype.wordsAndDigits = function () {
	this.value = /[a-zA-Z0-9]+/g;

	return this;
};


