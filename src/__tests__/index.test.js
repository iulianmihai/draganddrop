const DragAndDropPlayground = require('../index');

describe('Constructor tests', () => {
	it('should be true', () => {
		expect(true).toBe(true);
	});

	it('should check if DragAndDropPlayground is a consturctor', () => {
		const divElement = document.createElement('div');
		const dragAndDrop = new DragAndDropPlayground(divElement,  {option1: 'test'});
		expect(dragAndDrop.options.option1).toBe('test');
		expect(dragAndDrop.$element).toBeInstanceOf(Element);
	});

});
