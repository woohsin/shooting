let Graph_bar = document.getElementById('Graph_bar');

let trace_taiwan = {};
trace_taiwan.type = "bar";
trace_taiwan.name ="台灣大學";
trace_taiwan.x =[];
trace_taiwan.y =[];

let trace_ching = {};
trace_ching.type = "bar";
trace_ching.name ="清華大學"
trace_ching.x = [];
trace_ching.y = [];

let trace_traffic = {};
trace_traffic.type = "bar";
trace_traffic.name ="交通大學"
trace_traffic.x = [];
trace_traffic.y = [];

let trace_success = {};
trace_success.type = "bar";
trace_success.name ="成功大學"
trace_success.x = [];
trace_success.y = [];

let trace_central = {};
trace_central.type = "bar";
trace_central.name ="中央大學"
trace_central.x = [];
trace_central.y = [];

for(let i=0; i<taiwan.length; i++) {
    trace_taiwan.x[i] = taiwan[i]['name'];
    trace_taiwan.y[i] = taiwan[i]['count'];
}

for(let i=0;i<ching.length;i++){
    trace_ching.x[i] = ching[i]['name'];
    trace_ching.y[i] = ching[i]['count'];
}

for(let i=0;i<traffic.length;i++){
    trace_traffic.x[i] = traffic[i]['name'];
    trace_traffic.y[i] = traffic[i]['count'];
}

for(let i=0;i<success.length;i++){
    trace_success.x[i] = success[i]['name'];
    trace_success.y[i] = success[i]['count'];
}

for(let i=0;i<central.length;i++){
    trace_central.x[i] = central[i]['name'];
    trace_central.y[i] = central[i]['count'];
}

let data_bar = [];

data_bar.push(trace_taiwan);
data_bar.push(trace_ching);
data_bar.push(trace_traffic);
data_bar.push(trace_success);
data_bar.push(trace_central);

let layout_bar = {
    margin:{
        t:50
    },
    title: '台灣前五大大學電機系與資工系招生人數',
    
};

Plotly.newPlot(Graph_bar, data_bar, layout_bar);
