import { romanNumerals } from './romanNumerals'

describe('Roman Numerals', () => {
  it('converts 1 to I', () => {
    expect(romanNumerals(1)).toEqual('I')
  })

  it('converts 2 to II', () => {
    expect(romanNumerals(2)).toEqual('II')
  })

  it('converts 3 to III', () => {
    expect(romanNumerals(3)).toEqual('III')
  })

  it('converts 5 to V', () => {
    expect(romanNumerals(5)).toEqual('V')
  })

  it('converts 7 to VII', () => {
    expect(romanNumerals(7)).toEqual('VII')
  })

  it('converts 6 to VI', () => {
    expect(romanNumerals(6)).toEqual('VI')
  })

  it('converts 8 to VIII', () => {
    expect(romanNumerals(8)).toEqual('VIII')
  })

  it('converts 4 to IV', () => {
    expect(romanNumerals(4)).toEqual('IV')
  })

  it('converts 9 to IX', () => {
    expect(romanNumerals(9)).toEqual('IX')
  })
  it('converts 10 to X', () => {
    expect(romanNumerals(10)).toEqual('X')
  })
  it('converts 11 to XI', () => {
    expect(romanNumerals(11)).toEqual('XI')
  })
  it('converts 12 to XII', () => {
    expect(romanNumerals(12)).toEqual('XII')
  })
  it('converts 13 to XIII', () => {
    expect(romanNumerals(13)).toEqual('XIII')
  })
  it('converts 15 to XV', () => {
    expect(romanNumerals(15)).toEqual('XV')
  })
  it('converts 14 to XIV', () => {
    expect(romanNumerals(14)).toEqual('XIV')
  })
  it('converts 20 to XX', () => {
    expect(romanNumerals(20)).toEqual('XX')
  })
  it('converts 21 to XXI', () => {
    expect(romanNumerals(21)).toEqual('XXI')
  })
  it('converts 50 to L', () => {
    expect(romanNumerals(50)).toEqual('L')
  })
  it('converts 40 to XL', () => {
    expect(romanNumerals(40)).toEqual('XL')
  })
  it('converts 88 to LXXXVIII', () => {
    expect(romanNumerals(88)).toEqual('LXXXVIII')
  })
  it('converts 1988 to MCMLXXXVIII', () => {
    expect(romanNumerals(1988)).toEqual('MCMLXXXVIII')
  })
  it('converts 900 to CM', () => {
    expect(romanNumerals(900)).toEqual('CM')
  })
  it('converts 1900 to MCM', () => {
    expect(romanNumerals(1900)).toEqual('MCM')
  })
  it('converts 1980 to MCMLXXX', () => {
    expect(romanNumerals(1980)).toEqual('MCMLXXX')
  })


})
