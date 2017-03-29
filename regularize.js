var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = null;
	this.inputString = inputString;
	
	this.ignoreCaseValueFlag = false;
	this.ignoreGlobalValueFlag = false;
	this.ignoreMultiLineValueFlag = false;
	
	this.result = undefined;
}

Regularize.prototype._setIgnoreCase = function (inputString) {
	this.ignoreCaseValueFlag = true;
};

Regularize.prototype._setGlobal = function (inputString) {
	this.globalValueFlag = true;
};

Regularize.prototype._setMultiLine = function (inputString) {
	this.multiLineValueFlag = true;
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
	this.flags = flags;
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
