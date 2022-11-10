const encipher = (string) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let key = 'rfdklqpnwzkmvxbchsgjeaviou'
    let encodedArray = []
  string = string.toLowerCase()
    for(let i = 0; i < string.length; i++) {
      for(let j = 0; j < alphabet.length; j++) {
        if(string[i] === alphabet[j]) {
          encodedArray.push(key[j])
        }
      }
    }
    for(let k = 0; k < encodedArray.length; k++) {
      for(let l = 0; l < alphabet.length; l++)
      if(encodedArray[k] === alphabet[l]) {
        encodedArray[k] = alphabet[l += 3]
      
      }
      
    }
      let encodedString = encodedArray.join('')
  return encodedString
}

console.log(encipher('I love cryptography'))


const decipher = (string) => {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let key = 'rfdklqpnwzkmvxbchsgjeaviou'
    let decodedArray = []
   for(let k = 0; k < string.length; k++) {
      for(let l = 0; l < alphabet.length; l++)
      if(string[k] === alphabet[l]) {
        string[k] = alphabet[l -= 3]
      }
    }
}

//not completed