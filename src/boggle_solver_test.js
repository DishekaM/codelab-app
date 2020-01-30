//Disheka Moore
//01/19/20
//Solving Boggle Part 2
//The goal is to polish and test my solver.
//  The tests should be black-box only

const findAllSolutions = require('./boggle_solver.js')

test('Empty dictionary', () => {
    expect(
        findAllSolutions([["A","B"],["C", "D"]], [])
    ).toEqual([]);
})

test('No words found', () => {
    expect(
        findAllSolutions([["A","B"],["C", "D"]], ["B","AC","ACA","AFB","DE"])
    ).toEqual([]);
})

test('3x2 grid', () => {
    expect(
        findAllSolutions([["A","B","C"],["D", "E","F"]], ["B","AC","ACA","AED","WA"])
    ).toEqual(["AED"]);
})

test('2x3 grid', () => {
    expect(
        findAllSolutions([["A","B"],["D", "C"], ["E","F"]], ["B","AC","CEF", "DAB"])
    ).toEqual(["DAB","CEF"]);
})

test('Dictonary contains a letter thats not in the grid', () => {
    expect(
        findAllSolutions([["A","B"],["E", "D"]], ["Z","ACZ","ACA","AEB","DE"])
    ).toEqual(["AEB"]);
})

test('Grid containing Qu and returning more than 1 word found in dictionary', () => {
    expect(
        findAllSolutions([["A","B"],["Qu", "D"],["O", "G"]], ["QuA","DOG","AEB","DE"])
    ).toEqual(["QuA","DOG"]);
})
