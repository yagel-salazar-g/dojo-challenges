/*
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

const generateParentheses = (n) => {
    const currentString = [];
    const validAnswers = [];
    
    const recurse = (forwardParensNeeded, backwardsParensNeeded) => {
        if (forwardParensNeeded === 0 && backwardsParensNeeded === 0) {
            validAnswers.push(currentString.join(''));
        }
            
 
        if (forwardParensNeeded > 0) {
            currentString.push('(');
            recurse(forwardParensNeeded - 1, backwardsParensNeeded);
 
        }
            
        if (backwardsParensNeeded > 0 && forwardParensNeeded < backwardsParensNeeded) {
            currentString.push(')');
            recurse(forwardParensNeeded, backwardsParensNeeded - 1);
        }
 
        if (currentString.length > 0) {
            currentString.pop();
        }
    };
    
    recurse(n, n);
    
    return validAnswers;
};

console.log('Test 1... ', generateParentheses(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log('Test 2... ', generateParentheses(1)) // ["()"]
