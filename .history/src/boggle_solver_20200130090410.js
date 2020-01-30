/*Disheka Moore
01/14/20
Solving Boggle Part 1
The goal is to find as many words as possible in an NxN grid of letters.**/

//Create trie tree data structure
let Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};

let Trie = function() {
  this.root = new Node();

  this.add = function(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    }
    else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
    else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    };
  };
  //Check if word is in trie (action of using trie tree)
  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      }
      else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      };
    };
    //Return true if the word is in the trie tree, else return false 
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
      true : false;
  };
  //Helper function that will put found words in an array and then print it 
  this.print = function() {
    var string ="";
    let words = [];
    let search_word = function(node, string) {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search_word(node.keys.get(letter), string.concat(letter));
        };
        if (node.isEnd()) {
          words.push(string);
        };
      }
      else {
        var stringg = string.length > 0 ? words.push(string) : undefined;
        return stringg;
      };
    };
    
    search_word(this.root, string);
    return words.length > 0 ? words : null;
  };
}
//Dfs function that is going to search the grid for words
function dfs(grid, visited,row,col,gridword,myTrie,wordBank){  
    
  if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || visited[row][col]) return;
    
  gridword += grid[row][col];

  if(myTrie.isWord(gridword)) wordBank.push(gridword);
     
    
  visited[row][col] = true;

  dfs(grid,visited,row - 1,col,gridword,myTrie,wordBank); //up
    
  dfs(grid,visited,row + 1,col,gridword,myTrie,wordBank); //down

  dfs(grid,visited,row,col + 1,gridword,myTrie,wordBank); //right

  dfs(grid,visited,row,col - 1,gridword,myTrie,wordBank); //left

  dfs(grid,visited,row - 1,col + 1,gridword,myTrie,wordBank); //rightup

  dfs(grid,visited,row + 1,col + 1,gridword,myTrie,wordBank); //rightdown

  dfs(grid,visited,row - 1,col - 1,gridword,myTrie,wordBank); //leftup

  dfs(grid,visited,row + 1,col - 1,gridword,myTrie,wordBank); //leftdown

  visited[row][col] = false;
}

// Find all solutions function that passes the grid and dictionary as parameters 
export default function findAllSolutions(grid, dictionary) {
  
  var wordBank = [];
    //Return empty results if grid is not present
  if(grid.length < 1) return;


  var visited = [];
  var temp = [];
  for (var i=0; i < grid.length; i++){
    for(var k=0;k < grid[0].length;k++){
      temp.push(false);
    }
    visited.push(temp);
    temp=[];
  }
  
  var myTrie = new Trie()
  var word;
  //Add words from dictionary into trie tree
  for (word = 0; word < dictionary.length; i++) {
    if (dictionary[word].length >= 3) {
      myTrie.add(dictionary[word]);
    }
  }
  //Call Dfs function to find words and append to word bank if found
   for (var row=0; row < grid.length; i++){
    for(var col=0;col<grid[0].length;k++){
      dfs(grid,visited,row,col,"",myTrie,wordBank);
    }
   } 
  return wordBank;
}


// var grid = [
//   ["A", "B"],
//   ["C", "D"]
// ];
// var dictionary = ["A", "B", "AC", "ACA", "ACB", "DE"];



console.log(findAllSolutions(grid, dictionary));

// exports.findAllSolutions = findAllSolutions