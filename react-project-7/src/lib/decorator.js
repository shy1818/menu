
function util_decorator (target) {
    target.prototype.formatNumber = (str) => {
        return parseFloat(str) * ( str.indexOf('万') >= 0 ? 10000 : 1 )
    }
}

export { util_decorator }