function isPalindrome(palavra){
    let palindrome = palavra.split('').reverse().join('')

    if (palavra === palindrome){
        return true
    }

    return false
}


console.log(isPalindrome('pedro'))
console.log(isPalindrome('ana'))
console.log(isPalindrome('amor'))
console.log(isPalindrome('radar'))
