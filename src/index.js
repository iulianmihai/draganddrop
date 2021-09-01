const _ = require('underscore');
const dragAndDropPlaygroundTemplate = require('../templates/template.html');

function DrangAndDropPlayground (element, options) {
	this.options = options;
	this.$element = element;
	this.render();
}

DrangAndDropPlayground.prototype = {

	render: function () {
		const data = {
			leftPane: {
				title: 'Blocks'
			},
			rightPane: {
				title: 'Preview'
			}
		};
		const tpl = _.template(dragAndDropPlaygroundTemplate);
		const html = tpl(data);
		this.$element.innerHTML = html;
	},

};

module.exports = DrangAndDropPlayground;
