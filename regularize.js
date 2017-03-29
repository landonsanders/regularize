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

Regularize.prototype._getIndex = function () {
	var result;
	result = this.index;
	
	return result;
}