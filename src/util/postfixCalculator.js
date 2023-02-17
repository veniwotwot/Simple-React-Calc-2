export function calculate(postfix) {
    var stack = [];
    //console.log(`the stack is ${stack}`);
    //console.log(postfix);
    postfix = postfix.split(/ /);
    //console.log(postfix);

    for (let i in postfix) {
        let str = postfix[i];
        if (str === "")
            continue;

        switch (str) {
            case '+':
            case '-':
            case '*':
            case '/':
                var right = Number(stack.pop());
                var left = Number(stack.pop());
                var result = 0;
                switch (str) {
                    case '+':
                        result = left + right;
                        console.log(`result is ${result}. line 24.`);
                        break;
                    case '-':
                        result = left - right;
                        console.log(`result is ${result}. line 28.`);
                        break;
                    case '*':
                        result = left * right;
                        console.log(`result is ${result}. line 32.`);
                        break;
                    case '/':
                        result = left / right;
                        console.log(`result is ${result}. line 36.`);
                        break;
                    default:
                }
                //console.log(`we push ${result} onto the stack`);
                stack.push(result);
                break;
            default:
                if (!isNaN(str)) {
                    //console.log(`we push ${str} onto the stack -TARGET-`);
                    stack.push(str);
                }
                break;
        }
        //console.log(`the stack is ${stack}`);
    }
    var output = stack.pop();
    //console.log(`calculate returns ${output}`)
    return output;
}
