// Import the 'readline' module to handle input and output
const readline = require('readline');
 
// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
// Prompt the user for input
rl.question('Please enter sentences: ', (input) => {
    // Process the input
    const sentences = input.split(/[.!?]/);
  
    // Remove empty strings from the array (resulting from consecutive punctuation marks)
    const filteredSentences = sentences.filter(sentence => sentence.trim() !== '');
  
    // Iterate over each sentence
    for (const sentence of filteredSentences) {
      // Split the sentence into words
      const words = sentence.split(/\s+/);
      var reversedSentence = ""
      // Print each word
      console.log('Words in sentence:', words);
      for (word in words){
        reversedSentence =  words[word]+ " " + reversedSentence
      }
      console.log(reversedSentence)
    }
  
    // Close the readline interface
    rl.close();
  });