var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = new RegExp(inputString);
	this.inputString = inputString;
	this.ignoreCaseValue = new RegExp(inputString, 'i');
	this.globalValue = new RegExp(inputString, 'g');
	this.multiLineValue = new RegExp(inputString, 'm'); 
	
	this.ignoreCaseValueFlag = false;
	this.ignoreGlobalValueFlag = false;
	this.ignoreMultiLineValueFlag = false;
	
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

Regularize.prototype._setIgnoreCase = function (inputString) {
	var result;
	this.value = this.ignoreCaseValue;
	this.ignoreCaseValueFlag = true;
	
	result = this.value;
	return result;
};

Regularize.prototype._setGlobal = function (inputString) {
	var result;
	this.value = this.globalValue;
	this.globalValueFlag = true;
	
	result = this.value;
	return result;
};

Regularize.prototype._setMultiLine = function (inputString) {
	var result;
	this.value = this.multiLineValue;
	this.multiLineValueFlag = true;
	
	result = this.value;
	return result;
};

Regularize.prototype._getValue = function () {
	var result;
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

Regularize.prototype.doIgnoreCase = function () {
	this._setIgnoreCase();
	
	return this;
};

Regularize.prototype.doMultiLine = function () {
	this._setMultiLine();
	
	return this;
};

Regularize.prototype.doGlobal = function () {
	this._setGlobal();
	
	return this;
};

Regularize.prototype.addFlags = function (flags) {
	var result;
	result = new RegExp(this.inputString, flags);	
	
	this.value = result;
	
	return this;
};

Regularize.prototype.beginsWith = function (prefix) {
	var result, flag;
	result = '^' + prefix + '.+';
	
	flag = '';
	
	if (this.ignoreCaseValueFlag) {
		flag = flag + 'i';
	}
	
	if (this.globalValueFlag) {
		flag = flag + 'g';
	}

	if (this.multiLineValueFlag) {
		flag = flag + 'm';
	}
	
	this.value = new RegExp(result, flag);
	
	return this;
};

Regularize.prototype.endsWith = function (suffix) {
	var result, flag;
	result = '.+' + suffix + '$';
	
	flag = '';
	
	if (this.ignoreCaseValueFlag) {
		flag = flag + 'i';
	}
	
	if (this.globalValueFlag) {
		flag = flag + 'g';
	}

	if (this.multiLineValueFlag) {
		flag = flag + 'm';
	}
	
	this.value = new RegExp(result, flag);
	
	return this;
};

Regularize.prototype.execute = function () {
	this.result = this.value.exec(this.inputString);
	return this;
};
