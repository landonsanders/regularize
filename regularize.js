var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.result = undefined;
	this.input = inputString;
	this.value = new RegExp(inputString);	
}

Regularize.prototype._index = function (patternString) {
	var result;
	result = this.input.search(patternString);
	
	return result;
};

Regularize.prototype._match = function (patternString) {
	var result;
	result = this.input.match(patternString) + '';
	
	return result;
};

Regularize.prototype._replace = function (from, to) {
	var result;
	
	result = this.input.replace(from, to);
	return result;
};

Regularize.prototype.index = function (patternString) {
	var result;
	this.result = this._index(patternString);
	
	return this;
};

Regularize.prototype.match = function (patternString) {
	var result;
	this.result = this._match(patternString);
	
	return this;
};

Regularize.prototype.replace = function (from, to) {
	var result;
	
	this.result = this._replace(from, to);
	return this;
};

Regularize.prototype.get = function () {
	var result;
	
	result = this.result;
	return result;
};
