import { printPokemon } from './pokemon'

describe('test pokemon', () => {
  it('should print pokemon', () => {
    const message = printPokemon({ name: 'pikachu', type: 'electric', attack: 9 })
    expect(message).toBe('pikachu I choose you')
  })
})
