let Graph_pie = document.getElementById('Graph_pie');

let trace_state ={};
trace_state.type ="pie";
trace_state.title ="依大州排名(單位:百萬)";
trace_state.labels =[];
trace_state.values =[];
trace_state.domain = {
    row:0,
    column:0
};

for(let x=0; x < state.length; x++){
    trace_state.labels[x] = state[x]['name'];
    trace_state.values[x] = state[x]['count'];
}

let trace_country ={};
trace_country.type ="pie";
trace_country.title ="依國家排名";
trace_country.labels =[];
trace_country.values =[];
trace_country.domain ={
    row: 0,
    column: 1
};
for(let x =0; x < country.length; x++) {
    trace_country.labels[x] =country[x]['name'];
    trace_country.values[x] =country[x]['count'];
}


let data_pie = [];
data_pie.push(trace_state);
data_pie.push(trace_country);
let layout_pie = {
    margin:{
        t:40,
        l:0,
    },
    title: '世界人口分布',
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(Graph_pie, data_pie, layout_pie);
