module.exports = class Algorithm {

    encode(st) {
        const cmSp = this.toCommaSeperatedEncode(st)
        const words = cmSp.split(',')
        const encoded = words.map(word => `${word.length}${word[0]}`).join('')
        return encoded
    }

    decode(st) {

        const len = st.length

        let i = 0;
        let j = 1;

        let decoded = ''
        while (true) {
            if (j >= len) break;
            else {
                decoded += this.printNTimes(st[i], st[j])
                i += 2
                j = i + 1
            }
        }
        return decoded
    }

    toCommaSeperatedEncode(st) {
        const len = st.length
        let stCmSp = ''
        let i = 0
        let j = 1

        while (true) {
            if (i == len) break;
            else {
                if (st[i] == st[j - 1]) {
                    stCmSp += st[i]
                    i++;
                    j = i;
                } else {
                    stCmSp += ','
                    j++;
                }
            }
        }
        return stCmSp
    }

    printNTimes(n, ch) {
        return ch.repeat(parseInt(n))
    }
}