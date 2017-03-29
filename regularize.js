var Regularize, R;

R = Regularize;

function Regularize(inputString) {
	this.value = null;
	this.inputString = inputString;
	this.result = undefined;
}

Regularize.prototype.execute = function (pattern) {
	while ((this.result = pattern.exec(this.inputString)) != null) {
		console.log('Ok!');
	}
	return this;
};
