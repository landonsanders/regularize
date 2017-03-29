var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = new RegExp(inputString);
	this.input = inputString;
	this.result = undefined;
	this.type = this._getType();
	this.index = this._getIndex() || undefined;
}

Regularize.prototype._setType = function (value) {
	var result;
	result = typeof value;
	this.type = result;
};

Regularize.prototype._getType = function () {
	var result;
	result = typeof this.result;
	
	return result;
};

Regularize.prototype._setIndex = function (value) {
	var result;
	result = value;
	this.index = result;
	
	return result;
};

Regularize.prototype._getIndex = function () {
	var result;
	result = this.index;
	
	return result;
}

Regularize.prototype._search = function (input) {
	var result;
	result = this.value.search(value);
	
	return result;
};

Regularize.prototype._index = function (value) {
	var result;
	result = this._search(value);
	
	return result;
};

Regularize.prototype.index = function (inputString) {
	var result;
	result = this._index(inputString);
	
	this._setIndex(result);
	return this;
};




