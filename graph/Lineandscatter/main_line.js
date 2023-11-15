let Graph_line = document.getElementById('Graph_line');

let trace_tao_high = {};
trace_tao_high.mode = "markers+lines";
trace_tao_high.type = "scatter";
trace_tao_high.name = "桃園最高溫";
trace_tao_high.marker = {
    size: 10
}
trace_tao_high.x = [];
trace_tao_high.y = [];
trace_tao_high.text = [];
trace_tao_high.textposition = "bottom center";
trace_tao_high.textfont = {
    size:15
};

let trace_tao_low = {};
trace_tao_low.mode = "lines+markers";
trace_tao_low.type = "scatter";
trace_tao_low.name = "桃園最低溫";
trace_tao_low.marker = {
    size: 10
}
trace_tao_low.x =[];
trace_tao_low.y =[];
trace_tao_low.text = [];
trace_tao_low.textposition = "bottom center";
trace_tao_low.textfont = { 
    size:15
};

let trace_tai_high = {};
trace_tai_high.mode = "markers+lines";
trace_tai_high.type = "scatter";
trace_tai_high.name = "台中最高溫";
trace_tai_high.marker = {
    size: 10
}
trace_tai_high.x = [];
trace_tai_high.y = [];
trace_tai_high.text = [];
trace_tai_high.textposition = "bottom center";
trace_tai_high.textfont = {
    size:15
};

let trace_tai_low = {};
trace_tai_low.mode = "lines+markers";
trace_tai_low.type = "scatter";
trace_tai_low.name = "台中最低溫";
trace_tai_low.marker = {
    size: 10
}
trace_tai_low.x =[];
trace_tai_low.y =[];
trace_tai_low.text = [];
trace_tai_low.textposition = "bottom center";
trace_tai_low.textfont = { 
    size:15
};

for(let i = 0; i < tao_high.length; i++){
    trace_tao_high.x[i] = tao_high[i][0];
    trace_tao_high.y[i] = tao_high[i][1];
    trace_tao_high.text[i] = tao_high[i][2];
}

for(let i = 0; i < tao_low.length; i++){
    trace_tao_low.x[i] = tao_low[i][0];
    trace_tao_low.y[i] = tao_low[i][1];
    trace_tao_low.text[i] = tao_low[i][2];
}

for(let i = 0; i < tai_high.length; i++){
    trace_tai_high.x[i] = tai_high[i][0];
    trace_tai_high.y[i] = tai_high[i][1];
    trace_tai_high.text[i] = tai_high[i][2];
}

for(let i = 0; i < tai_low.length; i++){
    trace_tai_low.x[i] = tai_low[i][0];
    trace_tai_low.y[i] = tai_low[i][1];
    trace_tai_low.text[i] = tai_low[i][2];
}

let data_line = [];
data_line.push(trace_tao_high);
data_line.push(trace_tao_low);
data_line.push(trace_tai_high);
data_line.push(trace_tai_low);

let layout_line = {
    margin: {
        t: 50
    },
    xaxis: {
        range: [-1, 8]
    },
    yaxis: {
        range: [10, 30]
    },
    title: '台中與桃園一周間最高溫與最低溫比較',
    updatemenus: [
        {
            y: 1.2,
            x: 0.3,
            yanchor: 'top'
        }
    ]
};


Plotly.newPlot(Graph_line, data_line, layout_line);
