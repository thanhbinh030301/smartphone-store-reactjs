export function formatNumber (n) {
    if (n < 0) { throw 'must be non-negative: ' + n; } 
    if (n === 0) { return '0'; }
    
    var output = [];
    
    for (; n >= 1000; n = Math.floor(n/1000)) {
        output.unshift(String(n % 1000).padStart(3, '0'));
    }
    output.unshift(n);
    
    return output.join('.');
}