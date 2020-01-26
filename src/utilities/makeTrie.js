import fs from 'fs'

export class TrieNode {
	constructor(value) {
		this.value = value
		this.children = {}
		this.endOfWord = false
	}
}

// const head = new TrieNode('')

export function createTrie(head) {
	let dictionary = fs
	.readFileSync(
		"./dictionary_caps.txt",
		"utf8"
	)
	.split("\n");

	dictionary.forEach((word) => {
		let curr = head

		if(word.length < 2 || word.length > 16) return
		for(let letter of word) {
			if(!curr.children[letter]){
				curr.children[letter] = new TrieNode(letter)
			}
			curr = curr.children[letter]
		}

		curr.endOfWord = true
	})

	return head
}

// module.exports = {createTrie, TrieNode}