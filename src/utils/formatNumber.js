export function formatNumber (n) {
    
    var output = [];
    
    for (; n >= 1000; n = Math.floor(n/1000)) {
        output.unshift(String(n % 1000).padStart(3, '0'));
    }
    output.unshift(n);
    
    return output.join('.');
}