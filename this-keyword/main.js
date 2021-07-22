const i = 10

console.log(this) // empty -> window

function hi() { console.log(this) }
hi() // global -> window

const fn = () => console.log(this)
fn() // empty -> window