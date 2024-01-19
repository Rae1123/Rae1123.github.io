// 샘플 데이터 생성
function generateData(shift) {
    var data = [];
    for (var i = 0; i < 100; i++) {
        data[i] = [];
        for (var j = 0; j < 100; j++) {
            data[i][j] = Math.abs(Math.sin((i + shift) / 20) * Math.cos(j / 50));
        }
    }
    return data;
}

function generateData2(shift) {
    var data = [];
    for (var i = 0; i < 100; i++) {
        data[i] = [];
        for (var j = 0; j < 100; j++) {
            data[i][j] = Math.abs(Math.sin((i + shift) / 10) * Math.cos(j / 10));
        }
    }
    return data;
}

function generateData3(shift) {
    var data = [];
    for (var i = 0; i < 100; i++) {
        data[i] = [];
        for (var j = 0; j < 100; j++) {
            data[i][j] = Math.abs(Math.sin((i + shift) / 50) * Math.cos(j / 15));
        }
    }
    return data;
}

// 초기 플롯 생성
var layout = {
    title: '3D Surface Plot',
    autosize: false,
    width: 500,
    height: 500,
    margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
    }
};

var config = {
    displayModeBar: false  // 편집 메뉴를 숨깁니다.
};

Plotly.newPlot('myDiv1', [{ z: generateData(0), type: 'surface', colorscale: 'Jet', showscale: false }], layout, config);
Plotly.newPlot('myDiv2', [{ z: generateData2(0), type: 'surface', colorscale: 'Jet', showscale: false }], layout, config);
Plotly.newPlot('myDiv3', [{ z: generateData3(0), type: 'surface', colorscale: 'Jet', showscale: false }], layout, config);

// 'Play' 버튼 클릭 이벤트 핸들러
function handlePlayButton(plotId, shift, intervalId, generateDataFunc) {
    var button = document.getElementById('playButton1');
    if (button.textContent === 'Play') {
        button.textContent = 'Stop';
        intervalId = setInterval(function() {
            shift += 10;
            Plotly.update(plotId, { z: [generateDataFunc(shift)] });
        }, 100);
    } else {
        button.textContent = 'Play';
        clearInterval(intervalId);
    }
}

function handlePlayButton2(plotId, shift, intervalId, generateDataFunc) {
    var button = document.getElementById('playButton2');
    if (button.textContent === 'Play') {
        button.textContent = 'Stop';
        intervalId = setInterval(function() {
            shift += 10;
            Plotly.update(plotId, { z: [generateDataFunc(shift)] });
        }, 100);
    } else {
        button.textContent = 'Play';
        clearInterval(intervalId);
    }
}

function handlePlayButton3(plotId, shift, intervalId, generateDataFunc) {
    var button = document.getElementById('playButton3');
    if (button.textContent === 'Play') {
        button.textContent = 'Stop';
        intervalId = setInterval(function() {
            shift += 10;
            Plotly.update(plotId, { z: [generateDataFunc(shift)] });
        }, 100);
    } else {
        button.textContent = 'Play';
        clearInterval(intervalId);
    }
}