import { test, describe, expect } from 'vitest';
import { CHARACTERS_LIST } from "../mocks"
import { sortCharacters } from "./sortCharacters"

describe('sortCharacters', () => {

    test('should sort data by name', () => {
        const result = sortCharacters(CHARACTERS_LIST, 'name')

        expect(result[0].name).toEqual("A")
        expect(result[1].name).toEqual("B")
        expect(result[2].name).toEqual("C")
    })

    test('should sort data by date', () => {
        const result = sortCharacters(CHARACTERS_LIST, 'created')

        expect(result[0].name).toEqual("B")
        expect(result[1].name).toEqual("C")
        expect(result[2].name).toEqual("A")
    })
})