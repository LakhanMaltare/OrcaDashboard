(this["webpackJsonporca-dash"]=this["webpackJsonporca-dash"]||[]).push([[0],{144:function(e,a,t){e.exports=t.p+"static/media/user.6db09181.png"},154:function(e,a,t){e.exports=t(223)},220:function(e,a,t){},223:function(e,a,t){"use strict";t.r(a);var l=t(3),s=t.n(l),i=t(91),r=t.n(i),n=t(20),c=t(60),o=t(1),d=t(2),m=t(6),h=t(4),u=t(5),g="YOUR_GOOGLE_SHEETS_API_KEY",p="1nmVjMSfpUHPwwpuIW3dIinocEemQU1VuTa60aONLUg0",f=t(140),y=t.n(f);function v(e){var a,t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"m"},{value:1e9,symbol:"g"},{value:1e12,symbol:"t"},{value:1e15,symbol:"p"},{value:1e18,symbol:"e"}];for(a=t.length-1;a>0&&!(e>=t[a].value);a--);return(e/t[a].value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t[a].symbol}var b=t(92),w=t(93);function E(){var e=Object(b.a)([""]);return E=function(){return e},e}function k(){var e=Object(b.a)([""]);return k=function(){return e},e}var x=w.a.div(k()),N=w.a.nav(E()),D=t(229),C=t(144),O=t.n(C),A={$schema:"https://vega.github.io/schema/vega-lite/v4.json",title:"Species call counts",description:"A basic stacked bar chart example.",width:1150,height:300,padding:5,background:"transparent",data:{name:"table"},mark:"bar",encoding:{x:{field:"date_time",type:"temporal",timeUnit:"yearmonthdatehoursminutes",scale:{type:"utc"},axis:{labelAngle:15},title:"Date-time"},y:{field:"calls",type:"quantitative",title:"Calls per 15 minutes"},color:{field:"type",type:"nominal",scale:{domain:["Blue_whale","Fin_whale"]},legend:{title:"Type"}},tooltip:[{field:"date_time",type:"temporal",timeUnit:"yearmonthdatehoursminutes"},{field:"calls",type:"quantitative"},{field:"type",type:"nominal"}]}},_={$schema:"https://vega.github.io/schema/vega/v5.json",title:"Diel plot for Blue whale",description:"A basic scatter plot example depicting automobile statistics.",background:"transparent",width:500,height:300,padding:5,data:[{name:"source",transform:[{type:"filter",expr:"datum['HourOfDay'] != null && datum['Day'] != null && datum['Calls'] != null"}]}],scales:[{name:"x",type:"linear",round:!0,nice:!0,zero:!0,domain:{data:"source",field:"HourOfDay"},range:"width"},{name:"y",type:"linear",round:!0,nice:!0,zero:!1,domain:{data:"source",field:"Day"},range:"height"},{name:"size",type:"linear",round:!0,nice:!1,zero:!0,domain:{data:"source",field:"Calls"},range:[4,361]}],axes:[{scale:"x",grid:!0,domain:!1,orient:"bottom",tickCount:6,title:"Hour of day (local time)"},{scale:"y",grid:!0,domain:!1,orient:"left",tickCount:5,titlePadding:5,title:"Day of month"}],legends:[{size:"size",title:"Calls",format:"s",symbolStrokeColor:"#4682b4",symbolStrokeWidth:2,symbolOpacity:.5,symbolType:"circle"}],marks:[{name:"marks",type:"symbol",from:{data:"source"},encode:{update:{x:{scale:"x",field:"HourOfDay"},y:{scale:"y",field:"Day"},size:{scale:"size",field:"Calls"},shape:{value:"circle"},strokeWidth:{value:2},opacity:{value:.5},stroke:{value:"#4682b4"},fill:{value:"transparent"}}}}]},S={$schema:"https://vega.github.io/schema/vega/v5.json",title:"Diel plot for Fin whale",description:"A basic scatter plot example depicting automobile statistics.",background:"transparent",width:500,height:300,padding:5,data:[{name:"source",transform:[{type:"filter",expr:"datum['HourOfDay'] != null && datum['Day'] != null && datum['Calls'] != null"}]}],scales:[{name:"x",type:"linear",round:!0,nice:!0,zero:!0,domain:{data:"source",field:"HourOfDay"},range:"width"},{name:"y",type:"linear",round:!0,nice:!0,zero:!1,domain:{data:"source",field:"Day"},range:"height"},{name:"size",type:"linear",round:!0,nice:!1,zero:!0,domain:{data:"source",field:"Calls"},range:[4,361]}],axes:[{scale:"x",grid:!0,domain:!1,orient:"bottom",tickCount:6,title:"Hour of day (local time)"},{scale:"y",grid:!0,domain:!1,orient:"left",tickCount:5,titlePadding:5,title:"Day of month"}],legends:[{size:"size",title:"Calls",format:"s",symbolStrokeColor:"#4682b4",symbolStrokeWidth:2,symbolOpacity:.5,symbolType:"circle"}],marks:[{name:"marks",type:"symbol",from:{data:"source"},encode:{update:{x:{scale:"x",field:"HourOfDay"},y:{scale:"y",field:"Day"},size:{scale:"size",field:"Calls"},shape:{value:"circle"},strokeWidth:{value:2},opacity:{value:.5},stroke:{value:"#4682b4"},fill:{value:"transparent"}}}}]},z={$schema:"https://vega.github.io/schema/vega/v3.0.json",background:"transparent",width:150,height:150,autosize:"pad",signals:[{name:"startAngle",value:0},{name:"endAngle",value:6.29},{name:"padAngle",value:0},{name:"sort",value:!0},{name:"strokeWidth",value:2},{name:"selected",value:"",on:[{events:"mouseover",update:"datum"}]}],data:[{name:"table",values:[{category:"Blue whale",calls:8},{category:"Other sounds",calls:10},{category:"Fin whale",calls:5}],transform:[{type:"pie",field:"calls",startAngle:{signal:"startAngle"},endAngle:{signal:"endAngle"},sort:{signal:"sort"}}]},{name:"fieldSum",source:"table",transform:[{type:"aggregate",fields:["calls"],ops:["sum"],as:["sum"]}]}],legends:[{fill:"color",title:"Type",orient:"none",padding:{value:10},encode:{symbols:{enter:{fillOpacity:{value:1}}},legend:{update:{x:{signal:"(width / 2) + if(selected && selected.category == datum.category, if(width >= height, height, width) / 2 * 1.1 * 0.8, if(width >= height, height, width) / 2 * 0.8)",offset:20},y:{signal:"(height / 2)",offset:-50}}}}}],scales:[{name:"color",type:"ordinal",range:{scheme:"category20"}}],marks:[{type:"arc",from:{data:"table"},encode:{enter:{fill:{scale:"color",field:"category"},x:{signal:"width / 2"},y:{signal:"height / 2"}},update:{startAngle:{field:"startAngle"},endAngle:{field:"endAngle"},padAngle:{signal:"if(selected && selected.category == datum.category, 0.015, 0.015)"},innerRadius:{signal:"if(selected && selected.category == datum.category, if(width >= height, height, width) / 2 * 0.45, if(width >= height, height, width) / 2 * 0.5)"},outerRadius:{signal:"if(selected && selected.category == datum.category, if(width >= height, height, width) / 2 * 1.05 * 0.8, if(width >= height, height, width) / 2 * 0.8)"},opacity:{signal:"if(selected && selected.category !== datum.category, 1, 1)"},stroke:{signal:"scale('color', datum.category)"},strokeWidth:{signal:"strokeWidth"},fillOpacity:{signal:"if(selected && selected.category == datum.category, 0.8, 0.8)"}}}},{type:"text",encode:{enter:{fill:{value:"#ffffff"},text:{value:""}},update:{opacity:{value:1},x:{signal:"width / 2"},y:{signal:"height / 2"},align:{value:"center"},baseline:{value:"middle"},fontSize:{signal:"if(width >= height, height, width) * 0.05"},text:{value:""}}}},{name:"mark_calls",type:"text",from:{data:"table"},encode:{enter:{text:{signal:"if(datum['endAngle'] - datum['startAngle'] < 0.3, '', datum['calls'])"},x:{signal:"if(width >= height, height, width) / 2"},y:{signal:"if(width >= height, height, width) / 2"},radius:{signal:"if(selected && selected.category == datum.category, if(width >= height, height, width) / 2 * 1.05 * 0.65, if(width >= height, height, width) / 2 * 0.65)"},theta:{signal:"(datum['startAngle'] + datum['endAngle'])/2"},fill:{value:"#FFFFFF"},fontSize:{value:12},align:{value:"center"},baseline:{value:"middle"}}}}]},F="https://sheets.googleapis.com/v4/spreadsheets/".concat(p,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(g),j=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(h.a)(a).call(this))).getData=function(a){for(var t,l,s=e.state.items,i=s.length,r=0,n=0,c=0,o=[],d=[],m=[],h=[],u=[],g=0,p=0;p<i;p++){var f=(E=s[p].Date_time.split(" "))[0].split("/"),y=E[1].split(":"),b=parseInt(y[0])+y[1]/60;d.push({date_time:s[p].Date_time,calls:s[p].Blue_whale,type:"Blue_whale"}),d.push({date_time:s[p].Date_time,calls:s[p].Fin_whale,type:"Fin_whale"}),m.push({HourOfDay:b,Day:f[1],Calls:s[p].Blue_whale}),h.push({HourOfDay:b,Day:f[1],Calls:s[p].Fin_whale})}for(var w=0;w<i;w++){var E;a===(E=s[w].Date_time.split(" "))[0]&&(g+=1,r+=parseInt(s[w].Blue_whale),n+=parseInt(s[w].Fin_whale),c+=parseInt(s[w].Other))}var k=v(r/g*4),x=v(n/g*4),N=v(c/g*4),D=parseInt(k)+parseInt(x)+parseInt(N);u.push({category:"Blue whale",calls:v(k/D*100)}),u.push({category:"Fin whale",calls:v(x/D*100)}),u.push({category:"Other sounds",calls:v(N/D*100)}),console.log(u),o.push({label:"Blue Whale",value:k,displayValue:"".concat(k," Calls")}),o.push({label:"Fin Whale",value:x,displayValue:"".concat(x," Calls")}),t=r+n+c,l=a,e.setState({bwCalls:k,fwCalls:x,otCalls:N,totalCalls:v(t/g*4),avgCallsTrend:o,pieData:{table:u},barData:{table:d},bwdielData:{source:m},fwdielData:{source:h},selectedValue:l})},e.updateDashboard=function(a){e.getData(a.value),e.setState({selectedValue:a.value})},e.state={items:[],dropdownOptions:[],selectedValue:null,bwCalls:null,fwCalls:null,otCalls:null,totalCalls:null,pieData:{table:[]},barData:{table:[]},bwdielData:{source:[]},fwdielData:{source:[]},avgCallsTrend:[]},e}return Object(u.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(F).then((function(e){return e.json()})).then((function(a){for(var t=a.valueRanges[0].values,l=[],s=1;s<t.length;s++){for(var i={},r=0;r<t[s].length;r++)i[t[0][r]]=t[s][r];l.push(i)}for(var n=[],c=0;c<l.length;c++){var o=l[c].Date_time.split(" ");n.push(o[0])}n=Array.from(new Set(n)).reverse(),e.setState({items:l,dropdownOptions:n,selectedValue:"03/18/20"},(function(){return e.getData("03/18/20")}))}))}},{key:"render",value:function(){return s.a.createElement(x,null,s.a.createElement(N,{className:"navbar navbar-expand-lg fixed-top is-white is-dark-text"},s.a.createElement(x,{className:"navbar-brand h1 mb-0 text-large font-medium"},"Orca Dashboard"),s.a.createElement(x,{className:"navbar-nav ml-auto"},s.a.createElement(x,{className:"user-detail-section"},s.a.createElement("span",{className:"pr-2"},"Your Profile"),s.a.createElement("span",{className:"img-container"},s.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"user"}))))),s.a.createElement(N,{className:"navbar fixed-top nav-secondary is-dark is-light-text"},s.a.createElement(x,{className:"text-medium"},"Summary"),s.a.createElement(x,{className:"navbar-nav ml-auto"},s.a.createElement(y.a,{className:"pr-2 custom-dropdown",options:this.state.dropdownOptions,onChange:this.updateDashboard,value:this.state.selectedValue,placeholder:"Select an option"}))),s.a.createElement(x,{className:"container-fluid pr-5 pl-5 pt-5 pb-5"},s.a.createElement(x,{className:"row"},s.a.createElement(x,{className:"col-md-4 col-lg-3 is-light-text mb-4"},s.a.createElement(x,{className:"card grid-card is-card-dark"},s.a.createElement(x,{className:"card-heading mb-3"},s.a.createElement(x,{className:"is-dark-text-light letter-spacing text-small"},"Percentage Avg Calls/hr")),s.a.createElement(D.a,{spec:z,data:this.state.pieData,theme:"dark"}))),s.a.createElement(x,{className:"col-md-8 col-lg-9 is-light-text mb-4"},s.a.createElement(x,{className:"card is-card-dark chart-card"},s.a.createElement(x,{className:"row full-height"},s.a.createElement(x,{className:"col-sm-4 full height"},s.a.createElement(x,{className:"grid-card is-card-dark"},s.a.createElement(x,{className:"card-heading"},s.a.createElement(x,{className:"is-dark-text-light letter-spacing text-small"},"Blue Whale Avg Calls/hr")),s.a.createElement(x,{className:"card-value pt-4 text-x-large"},this.state.bwCalls))),s.a.createElement(x,{className:"col-sm-4 full-height border-left border-right"},s.a.createElement(x,{className:"chart-container full-height"},s.a.createElement(x,{className:"grid-card is-card-dark"},s.a.createElement(x,{className:"card-heading"},s.a.createElement(x,{className:"is-dark-text-light letter-spacing text-small"},"Fin Whale Avg Calls/hr")),s.a.createElement(x,{className:"card-value pt-4 text-x-large"},this.state.fwCalls)))),s.a.createElement(x,{className:"col-sm-4 full-height"},s.a.createElement(x,{className:"chart-container full-height"},s.a.createElement(x,{className:"grid-card is-card-dark"},s.a.createElement(x,{className:"card-heading"},s.a.createElement(x,{className:"is-dark-text-light letter-spacing text-small"},"Other Avg Sounds/hr")),s.a.createElement(x,{className:"card-value pt-4 text-x-large"},this.state.otCalls)))))))),s.a.createElement(x,{className:"row",style:{minHeight:"400px"}},s.a.createElement(x,{className:"col-md-12 mb-4"},s.a.createElement(x,{className:"card is-card-dark chart-card"},s.a.createElement(x,{className:"chart-container large full-height"},s.a.createElement(D.a,{spec:A,data:this.state.barData,theme:"dark"}))))),s.a.createElement(x,{className:"row",style:{minHeight:"400px"}},s.a.createElement(x,{className:"col-md-6 mb-4"},s.a.createElement(x,{className:"card is-card-dark chart-card"},s.a.createElement(x,{className:"chart-container large full-height"},s.a.createElement(D.a,{spec:_,data:this.state.bwdielData,theme:"dark"})))),s.a.createElement(x,{className:"col-md-6 mb-4"},s.a.createElement(x,{className:"card is-card-dark chart-card"},s.a.createElement(x,{className:"chart-container large full-height"},s.a.createElement(D.a,{spec:S,data:this.state.fwdielData,theme:"dark"})))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(219),t(220),t(221);var W=Object(n.a)();r.a.render(s.a.createElement(c.b,{history:W},s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"/",component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.771cdcbf.chunk.js.map