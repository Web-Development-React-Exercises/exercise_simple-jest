const {add} = require('../index');

describe('Testing a plus b', ()=> {
    test('Test correct answer', ()=> {
        expect(add(1, 2)).toBe(3);
    })

    test('Test boundaries', ()=> {
        expect(add(1, 1)).not.toBe(3);
        expect(add(1, 3)).not.toBe(3)
    })
})



