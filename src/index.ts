// import { RecordHandler, loader } from './loader'

interface Pokemon {
  id: string
  attack: number
  defense: number
}

interface BaseRecord {
  id: string
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void
  get(id: string): T | undefined
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {}

  set(newValue: T): void {
    this.db[newValue.id] = newValue
  }

  get(id: string): T | undefined {
    return this.db[id]
  }
}

const pokemonDB = new InMemoryDatabase<Pokemon>()
pokemonDB.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
})

console.log(pokemonDB.get('Bulbasaur'))
