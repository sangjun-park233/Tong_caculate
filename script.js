function calculateStats(){
    const input = document.getElementById('numbers').value;
    let data;

    try {
        data = JSON.parse(input);

        if(!Array.isArray(data)){
            throw new Error('배열이 아닙니다.');
        }

        data = data.map(num => parseFloat(num)).filter(num => !isNaN(num));
        if(data.length === 0) {
            document.getElementById('result').innerHTML = '<p>배열 안에 수가 없습니다.</p>';
            return;
        }

        const mean = data.reduce((a,b) => a + b , 0)/ data.length;

        let median;
        const mid = Math.floor(data.length / 2);
        if(data.length % 2 !== 0){
            median = data[mid];
        }else{
            median = (data[mid - 1] + data[mid]) / 2;
        }

        const frequency = {};
        data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
        let maxFreq = 0;
        let modes = [];
        for (let num in frequency) {
            if(frequency[num] > maxFreq){
                maxFreq = frequency[num];
                modes = [Number(num)];
            }else if (frequency[num] === maxFreq) {
                modes.push(Number(num));
            }
        }

        const deviations = data.map( x => x - mean);
        const variance = deviations.reduce((sum, dev) => sum + dev * dev, 0) / data.length
        const stdDev = Math.sqrt(variance);


        document.getElementById('results').innerHTML = `<p><b>평균 : </b>${mean.toFixed(2)}</p>
        <p><b>중앙값 : </b>${median}</p>
        <p><b>최빈값 : </b>${modes.join(',')}</p>
        <p><b>분산:</b> ${variance.toFixed(2)}</p>
        <p><b>표준편차:</b> 루트${variance.toFixed(2)}</p>
        <p><b>정확한 표준편차:</b> ${stdDev.toFixed(2)}</p>`;

    } catch(error){
        document.getElementById('results').innerHTML = '<p>올바른 배열 형식으로 입력하세요 (예: [1,2,3,4])</p>';
    }
}
