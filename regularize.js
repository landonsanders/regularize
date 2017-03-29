var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = new RegExp(inputString);
	this.input = inputString;
	this.ignoreCaseValue = new RegExp(inputString, 'i');
	this.globalValue = new RegExp(inputString, 'g');
	this.multiLineValue = new RegExp(inputString, 'm'); 
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

Regularize.prototype._setIgnoreCaseValue = function (inputString) {
	var result;
	this.value = this.ignoreCaseValue;
	
	result = this.value;
	return result;
};

Regularize.prototype._getGlobalValue = function (inputString) {
	var result;
	this.value = this.globalValue;
	
	result = this.value;
	return result;
};

Regularize.prototype._setMultiLineValue = function (inputString) {
	var result;
	this.value = this.multiLineValue;
	
	result = this.value;
	return result;
};

Regularize.prototype._getIgnoreCaseValue = function (inputString) {
	var result;
	result = this.ignoreCaseValue(inputString);
	
	return result;
};

Regularize.prototype._getGlobalValue = function (inputString) {
	var result;
	result = this.globalValue;
	
	return result;
};

Regularize.prototype._getMultiLineValue = function (inputString) {
	var result;
	result = this.multiLineValue;
	
	return result;
};


Regularize.prototype.search = function (inputString) {
	var result;
	result = this._search(inputString);
	
	this._setIndex(result);
	this.result = result;
	return this;
};




