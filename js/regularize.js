(function (exports) {
	var R;

	function Regularize(inputString) {
		this.inputString = inputString;
		this.pattern = undefined;
		this.flags = '';
		this.result = undefined;
	}

	R = Regularize;
	
	R.prototype.exp = function () {};
	
	R.prototype.search = function () {};
	
	R.prototype.match = function () {};
			
	R.prototype._match = function () {};
	
	R.prototype.replace = function () {};
	
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
	
	R.prototype.ignore = function () {};
	
	R.prototype.all = function () {};
	
	R.prototype.notAll = function () {};
	
	R.prototype.notIgnore = function () {};
	
	R.prototype.anyCharacter = function () {};
	
	R.prototype.anyWord = function () {};
	
	R.prototype.anyDigit = function () {};
	
	R.prototype.anyDigits = function () {};
	
	R.prototype.anyDigitsAndWords = function () {};
	
	R.prototype.followedBy = function () {};
	
	R.prototype.build = function () {};
	
	R.prototype.getResult = function () {};

	R.prototype.getBuildResult = function () {};
	
	
	R.fn = Regularize.prototype;

	exports.Regularize = Regularize;
	exports.R = Regularize;
} (window));
