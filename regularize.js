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

Regularize.prototype._search = function (inputString) {
	var result;
	result = this.input.search(inputString);
	
	return result;
};


Regularize.prototype.search = function (inputString) {
	var result;
	result = this._search(inputString);
	
	this._setIndex(result);
	this.result = result;
	return this;
};




