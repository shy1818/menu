let count = 10
let timer = null
const a = () => {
    count --;
    console.log(count)
    if ( count <= 0 ) {
        console.log('ok')
        clearTimeout(timer)
        return ;
    }
    timer = setTimeout(a, 1000)

}
a()