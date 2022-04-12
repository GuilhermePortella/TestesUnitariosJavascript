const { sum, inOnerHour } = require('./my-code')

describe('math functions', () => {
    
    //antes de todos 
    beforeAll(() => {
        console.log('before all')
    })

    //antes de cada caso de teste
    beforeEach(() => {
        console.log('before each')
    })

    //depois de todos
    afterAll(() => {
        console.log('After all')
    })

    //depois de cada um
    afterEach(() => {
        console.log('after each')
    })

    it('sum 2 numbers', () => {
        expect(sum(1,2)).toBe(3)
    })

    it('sum 2 numbers', () => {
        expect(sum(6,2)).toBe(8)
    })
})

describe('time functions', () => {
    it('returns the timestamp for one hour ahead', () =>{
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = () => 0
        expect(inOnerHour()).toBe(3600000)
        global.Date.now = realDateNow
        console.log(global.Date.now())
    })
})