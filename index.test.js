const utils = require('./index.js')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const inputCopy = { ...input }
    const actual = utils.trimProperties(input)

    expect(input).toEqual(inputCopy)
    expect(actual).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    expect(actual).toEqual(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 2 }]
    const result = utils.findLargestInteger(integers)
    expect(result).toBe(2)
  })
  test('[5.1] returns the largest number in an array of objects [{ integer: 2 }, { integer: 5 }, { integer: 3 }]', () => {
    const integers = [{ integer: 2 }, { integer: 5 }, { integer: 3 }]
    const result = utils.findLargestInteger(integers)
    expect(result).toBe(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const result = counter.countDown()
    expect(result).toBe(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const result = counter.countDown()
    expect(result).toBe(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const result = counter.countDown()
    expect(result).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe("fall")
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("winter")
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("spring")
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("summer")
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    // After 39 calls, it should be the same as the 39 % 4 = 3rd position, which is "spring"
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30)
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
    expect(focus.drive(50)).toBe(150)
  })

  test('[16] driving the car uses gas', () => {
    focus.drive(60)
    expect(focus.tank).toBe(18)
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    focus.tank = 10
    expect(focus.drive(100)).toBe(700)
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(10)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const evenNumber = 2
    const result = await utils.isEvenNumberAsync(evenNumber)

    expect(result).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const oddNumber = 3
    const result = await utils.isEvenNumberAsync(oddNumber)

    expect(result).toBe(false)
  })
})
