(function (exports) {
	var R;

	function Regularize(inputString) {
		this.inputString = inputString || '';
		this.pattern = null;
		this.flag = '';
		this.result = null;
	}

	R = Regularize;
	
	R.prototype.exp = function (value) {
		this.inputString = value;
		return this;
	};
	
	R.prototype.search = function (value) {
		this.pattern = new RegExp(value, this.flag);
		this.result = (this.inputString.search(this.pattern));
		return this;
	};
	
	R.prototype.match = function (value) {
		this.pattern = new RegExp(value, this.flag);
		this.result = (this.inputString.match(this.pattern));
		return this;
	};
			
	R.prototype._match = function () {
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.replace = function (value, replacement) {
		this.pattern = new RegExp(value, this.flag);
		this.result = (this.inputString.replace(this.pattern, replacement));
		return this;
	};
	
	R.prototype.inText = function (value) {
		this.pattern = value;
		this.match(this.pattern);
		return this;
	};	
	
	R.prototype.startsText = function (value) {
		this.pattern = '^' + value;
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.endsText = function (value) {
		this.pattern = value + '$';
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.endsWith = function (value) {
		this.pattern = '.+' + value;
		this.match(this.pattern);
		return this;
	};	
	
	R.prototype.startsWith = function (value) {
		this.pattern = value + '.+';
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.words = function () {
		this.pattern = '\\w{2,}';
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.digits = function () {
		this.pattern = '\\d+';
		this.match(this.pattern);
		return this;		
	};
	
	R.prototype.wordsAndDigits = function () {
		this.pattern = '[a-zA-Z0-9]+';
		this.match(this.pattern);
		return this;
	};
	
	R.prototype.characters = function () {
		this.pattern = '[a-zA-Z0-9]';
		this.match(this.pattern);
		return this;		
	};
	
	R.prototype.firstMatch = function () {
		return this.result[0];		
	};
	
	R.prototype.lastMatch = function () {	
		return this.result[this.result.length - 1];
	};
	
	R.prototype.nthMatch = function (n) {
		return this.result[n];
	};

	R.prototype.count = function () {
		return this.result.length;		
	};
	
	R.prototype.ignore = function () {
		if (this.flag.indexOf('i') === -1) {
			this.flag = this.flag + 'i';
		}
		return this;
	};
	
	R.prototype.all = function () {
		if (this.flag.indexOf('g') === -1) {
			this.flag = this.flag + 'g';
		}
		return this;		
	};
	
	R.prototype.isEmail = function () {
		var result;
		
		result = (this.inputString.indexOf('@') > -1);
		return result;
	};
	
	R.prototype.getResult = function () {
		return this.result;
	};
	
	R.fn = Regularize.prototype;

	exports.Regularize = Regularize;
	exports.R = Regularize;
} (window));


