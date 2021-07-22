const fn = function () {
    console.log(`In Fn`)
    console.log(this)
    console.log(this.nm)
    console.log(this.length)
}

const fnTmp = function () {
    console.log(`In FnTmp`)
    console.log(this)
}

const obj = {
    nm: 'android'
}

// fn.apply(obj)
fn.call(1, 2)
function hi() {
    (function () {
        console.log(`Hi `)
    }).call()
}

hi()