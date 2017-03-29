var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.result = undefined;
	this.input = inputString;
	this.value = new RegExp(inputString);	
	this.type = this._getType();
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
