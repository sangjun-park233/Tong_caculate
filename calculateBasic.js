const input = document.getElementById('calcInput');
const resultDiv = document.getElementById('calcResult');

function appendValue(val) {
    input.value += val;
    updateResult();
}

function clearInput() {
    input.value = '';
    resultDiv.textContent = '0';
}

function deleteLast() {
    input.value = input.value.slice(0, -1);
    updateResult();
}

function updateResult() {
    resultDiv.textContent = calculateMathExpression(input.value);
}

function calculateMathExpression(expr) {
    if(!expr.trim()) return '0';
    
    // 허용 문자: 숫자, 연산자, 괄호, ^, √
    const validChars = /^[0-9+\-*/()., \s^√]*$/;
    if(!validChars.test(expr)) return '잘못된 입력';
    
    try {
        // 모든 √를 Math.sqrt()로 치환
        let mathExpr = expr.replace(/√(\d+(\.\d+)?|\([^\)]+\))/g, (match, p1) => {
            return `Math.sqrt(${p1})`;
        });

        // Math 함수 처리
        mathExpr = mathExpr.replace(/\b(sin|cos|tan|sqrt|pow|log|abs)\b/g, 'Math.$1');

        // ^ 연산 처리
        while(/\d+(\.\d+)?\s*\^\s*\d+(\.\d+)?/.test(mathExpr)) {
            mathExpr = mathExpr.replace(/(\d+(\.\d+)?)\s*\^\s*(\d+(\.\d+)?)/g, 'Math.pow($1,$3)');
        }

        return new Function('return ' + mathExpr)();
    } catch {
        return '오류';
    }
}
