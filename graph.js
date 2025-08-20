function drawScatterPlotFromInputs(){
    const xInput = document.getElementById('xValues').value
    const yInput = document.getElementById('yValues').value

    try{
        let xData = JSON.parse(xInput).map(num => parseFloat(num)).filter(num => !isNaN(num));
        let yData = JSON.parse(yInput).map(num => parseFloat(num)).filter(num => !isNaN(num));

        if(xData.length === 0 || yData.length === 0 || xData.length !== yData.length) {
            alert('X축과 Y축 배열은 같은 길이여야 하고 비어있지 않아야 합니다.');
            return;
        }

        drawScatterPlot(xData, yData); 
        
    } catch (error){
        alert('옳바른 배열 형식으로 입력하세요(예 [1,2,3]');
    }

}

function drawScatterPlot(xData,yData) {
    const canvas = document.getElementById('scatterPlot');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);

    const padding = 20;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    const maxX = Math.max(...xData);
    const maxY = Math.max(...yData);

    for(let i = 0; i < xData.length; i++) {
        const x = padding + (xData[i] / maxX) * width;
        const y = canvas.height - padding - (yData[i] / maxY) * height;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#eb416cff';
        ctx.fill();
    }
}