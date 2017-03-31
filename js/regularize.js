(function (exports) {
	var R;

	function Regularize(inputString) {
		this.inputString = inputString;
		this.pattern = undefined;
		this.flag = '';
		this.result = undefined;
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
	
	R.prototype.inText = function () {};	
	
	R.prototype.startsText = function () {};
	
	R.prototype.endsText = function () {};
	
	R.prototype.endsWith = function () {};	
	
	R.prototype.startsWith = function () {};
	
	R.prototype.words = function () {};
	
	R.prototype.digits = function () {};
	
	R.prototype.wordsAndDigits = function () {};
	
	R.prototype.characters = function () {};
	
	R.prototype.firstMatch = function () {};
	
	R.prototype.lastMatch = function () {};
	
	R.prototype.nthMatch = function () {};

	R.prototype.count = function () {};
	
	R.prototype.ignore = function () {
		if (this.flag.indexOf('i') === -1) {
			this.flag = this.flag + 'i';
		}
		return this;
	};
	
	R.prototype.all = function () {};
	
	R.prototype.notAll = function () {};
	
	R.prototype.notIgnore = function () {};
	
	R.prototype.anyCharacter = function () {};
	
	R.prototype.anyWord = function () {};
	
	R.prototype.anyDigit = function () {};
	
	R.prototype.anyDigits = function () {};
	
	R.prototype.anyDigitsAndWords = function () {};
	
	R.prototype.followedBy = function () {
		return this;		
	};
	
	R.prototype.build = function () {};
	
	R.prototype.getResult = function () {
		return this.result;
	};

	R.prototype.getBuildResult = function () {};
	
	
	R.fn = Regularize.prototype;

	exports.Regularize = Regularize;
	exports.R = Regularize;
} (window));


