/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;

    /* хоть по названию вроде и подразумевается start < end
     *  на всякий случай добавил эту проверку
     */
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }

    if (start % 2 == 1) {
        start++;
    }

    for (let i = start; i <= end; i += 2) {
        sum += i;
    }

    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;

    while (a > 0.1) {
        i++;
        a /= 2;
    }

    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    const SYMBOL_TO_REPLACE_NUMBER = 3;
    let length = message.length;

    if (length < SYMBOL_TO_REPLACE_NUMBER) {
        return message;
    }

    let i = 0;
    let newString = '';

    do {
        if (i % SYMBOL_TO_REPLACE_NUMBER != SYMBOL_TO_REPLACE_NUMBER - 1) {
            newString += message[i];
        } else {
            newString += '_';
        }
        i++;
    } while (i < length);

    return newString;
}
