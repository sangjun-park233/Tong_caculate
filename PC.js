function factorialRecursive(n) {
    if(n === 0 || n === 1) return 1
    return n * factorialRecursive(n-1)
}
function calculateFactorial() {
    const n = parseInt(document.getElementById('n').value)
    
    const resultDiv = document.getElementById('result')

    if(isNaN(n) || n < 0) {
        resultDiv.textContent = '0이상의 정수를 입력하세요'
        return
    }

    if(n > 1000) {
        resultDiv.textContent = '1000이하의 자연수를 입력하세요'
        return
}
    const result = factorialRecursive(n)
    resultDiv.textContent = `${n}! = ${result}`
}
function calculatePermutation() {
    const n = parseInt(document.getElementById('n').value)
    const r = parseInt(document.getElementById('r').value)
    const resultDiv = document.getElementById("result")

    if(isNaN(n) || isNaN(r) || n < 0 || r < 0) {
        resultDiv.textContent = '0 이상의 정수를 입력하세요.'
        return
    }
    if(r> n) {
        resultDiv.textContent = 'r은 n보다 클 수 없습니다.'
        return
    }
    if(n > 1000) {
        resultDiv.textContent = '1000이하의 자연수를 입력하세요'
        return
}
    const result = factorialRecursive(n) / factorialRecursive(n - r)
    resultDiv.textContent = `p(${n}, ${r}) = ${result}`
}
function calculateCombination() {
    const n = parseInt(document.getElementById('n').value)
    const r = parseInt(document.getElementById('r').value)
    const resultDiv = document.getElementById("result")
    
    if(isNaN(n) || isNaN(r) || n < 0 || r < 0) {
        resultDiv.textContent = '0 이상의 정수를 입력하세요'
        return
    }
    if(r > n){
        resultDiv.textContent = 'r은 n보다 클 수 없습니다.'
        return
    }
    if(n > 1000){
        resultDiv.textContent = '1000이하의 자연수를 입력하세요'
        return
    }
    const before = factorialRecursive(n) / factorialRecursive(n - r)
    const result = before / factorialRecursive(r)
    resultDiv.textContent = `C(${n},${r}) = ${result}`
}
