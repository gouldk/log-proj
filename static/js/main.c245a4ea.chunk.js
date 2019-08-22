(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o);a(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);var c=a(2),s=a(3),i=a(5),d=a(4),m=a(6),u=(a(7),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"shadow-sm p-3 mb-5 bg-light rounded"},r.a.createElement("textarea",{rows:"12",className:"form-control",placeholder:"Drag & drop // copy & paste your log here...",type:"text",value:this.props.displayText,onChange:this.props.onChange}))}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-outline-primary m-2 w-50",disabled:!1,onClick:this.props.onSubmit}," ","Submit"," ",r.a.createElement("span",{role:"img","aria-label":"send"},"\u270d\ud83c\udffc")))}}]),t}(n.Component),b=(a(23),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("select",{className:"custom-select w-50",onChange:function(t){return e.props.onSelect(t.target.value)},value:this.state.id,disabled:!0},r.a.createElement("option",{value:"Roku"},"Roku"),r.a.createElement("option",{value:"FTV"},"Fire TV"))}}]),t}(n.Component)),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card alert-success mb-2"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"device: ",this.props.model),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"app: ",this.props.an),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"version: ",this.props.version),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"cable provider: ",this.props.provider),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"adobe ID: ",this.props.adobeID))),r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{className:"img-fluid m-2",src:"https://i.imgur.com/AAt5SUh.png",alt:"Roku device"})))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={seenEvents:[]},a.pullLogContext=function(){var e=a.props.log.split(/\r?\n/),t=e.indexOf(a.props.text);return-1===t?["Error: Couldn't find context within log..."]:t<1?[e[0],e[1],e[2]]:[e[t-1],e[t],e[t+1]]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.pullLogContext(),t=this.props.id;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-sm btn-outline-link","data-toggle":"modal","data-target":"#Modal"+t},r.a.createElement("span",{role:"img","aria-label":"Magnifying glass"},"\ud83d\udd0e")),r.a.createElement("div",{className:"modal fade",id:"Modal"+t,tabIndex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-xl",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"ModalLabel"},"Log context"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body bg-dark"},r.a.createElement("span",null,r.a.createElement("p",{className:"text-white-50 text-monospace",style:{fontSize:"13px"}},e[0]+"\n"),r.a.createElement("p",{className:"text-white text-monospace",style:{fontSize:"13px"}},e[1]+"\n"),r.a.createElement("p",{className:"text-white-50 text-monospace",style:{fontSize:"13px"}},e[2]+"\n"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),t}(n.Component),f=a(13),g=a.n(f),E=a(9),y=a.n(E),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a.renderTableData=function(e){return String.prototype.hashCode=function(){var e=0;if(0===this.length)return e;for(var t=0;t<this.length;t++){e=(e<<5)-e+this.charCodeAt(t),e&=e}return e},e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"mr-0"},e),r.a.createElement("td",{className:"mr-0"},r.a.createElement("div",{className:"btn-group-vertical-sm",role:"group","aria-label":"tools"},r.a.createElement("a",{"data-tip":!0,"data-for":"peek"},r.a.createElement(v,{log:a.props.rawData,text:e,id:(e+t).hashCode()})),r.a.createElement(y.a,{place:"left",effect:"solid",type:"info",id:"peek"},"Peek in log"),r.a.createElement("a",{"data-tip":!0,"data-for":"copy"}," ",r.a.createElement(g.a,{text:e},r.a.createElement("button",{className:"btn btn-sm btn-outline-link"},r.a.createElement("span",{role:"img","aria-label":"Scissor"},"\u2702\ufe0f")))),r.a.createElement(y.a,{place:"left",effect:"solid",type:"info",id:"copy"},"Copy"))))})},a.renderRoku=function(){return r.a.createElement("span",null,r.a.createElement(h,{provider:a.props.tableData.deviceInfo.provider,version:a.props.tableData.deviceInfo.version,model:a.props.tableData.deviceInfo.model,adobeID:a.props.tableData.deviceInfo.adobeID,an:a.props.tableData.deviceInfo.an}),a.renderTable(a.props.tableData.pubAd,"Pub Ads"),a.renderTable(a.props.tableData.streamID,"Stream IDs"),a.renderTable(a.props.tableData.error,"Errors"))},a.renderFTV=function(){return r.a.createElement("span",null,r.a.createElement(h,{provider:a.props.tableData.deviceInfo.provider,version:a.props.tableData.deviceInfo.version,model:a.props.tableData.deviceInfo.model,adobeID:a.props.tableData.deviceInfo.adobeID,an:a.props.tableData.deviceInfo.an}),a.renderTable(a.props.tableData.pubAd,"Pub Ads"),a.renderTable(a.props.tableData.streamID,"Stream IDs"),a.renderTable(a.props.tableData.error,"Errors"))},a.renderDevice=function(){switch(a.props.deviceID){case"Roku":return console.log("Rendering Roku..."),a.renderRoku();case"FTV":return console.log("Rendering FTV..."),a.renderFTV()}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderTable",value:function(e,t){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{"data-toggle":"collapse","data-target":"#"+t.charAt(0),className:"dropdown-toggle",style:{width:"95%"}},t," ",r.a.createElement("span",{className:"badge badge-info m-1"},e.length)),r.a.createElement("th",{className:"thead-light",style:{width:"5%"}}))),r.a.createElement("tbody",{id:t.charAt(0),className:"collapse"},this.renderTableData(e)))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderDevice())}}]),t}(n.Component),D=a(15),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-secondary m-2 w-10",onClick:this.props.handleExport},"Export"))}}]),t}(n.Component),w="Roku",I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={preSubmission:!0,deviceID:w,entryText:"",parsedText:[]},a.handleSubmit=function(){console.log("Submit requested.");var e=a.state.entryText;switch(a.state.deviceID){case"Roku":a.rokuLogParse(e);break;case"FTV":a.ftvLogParse(e)}a.setState({preSubmission:!1})},a.handleSelect=function(e){console.log("Selection changed:",e),a.setState({deviceID:e})},a.ftvLogParse=function(e){},a.rokuLogParse=function(e){var t=e.split(/\r?\n/),n=t.filter(function(e){return e.includes("/ads?")}),r=t.filter(function(e){return e.includes("streamid")}),o=t.filter(function(e){return e.includes("ERROR")}),l=t.filter(function(e){return e.includes("app_version:")}),c=t.filter(function(e){return e.includes("cable_provider:")}),s=t.filter(function(e){return e.includes("device_model_info:")}),i=t.filter(function(e){return e.includes("adobe_id:")}),d=t.filter(function(e){return e.includes("an:")}),m={pubAd:n,streamID:r,deviceInfo:void 0!==s[0]?{provider:c[0].substring(21,c[0].length-1),version:l[0].substring(18,l[0].length-1),model:s[0].substring(24,s[0].length-1),adobeID:i[0].substring(15,i[0].length-1),an:d[0].substring(9,d[0].length-1)}:{provider:"",version:"",model:"Unable to detect...",adobeID:"",an:""},error:o};a.setState({parsedText:m})},a.onDrop=function(e){var t=new FileReader,n=e[0];console.log(n),t.onload=function(e){var t=e.target.result;a.setState({entryText:t}),a.handleSubmit()},t.readAsText(n)},a.handleTextChange=function(e){a.setState({entryText:e.target.value})},a.prepareStringExport=function(){var e=a.state.parsedText;return"------ Session Info ------\n"+e.deviceInfo.model+"\n"+e.deviceInfo.an+"\n"+e.deviceInfo.version+"\n"+e.deviceInfo.provider+"\n"+e.deviceInfo.adobeID+"\n\n------ Pub Ads ------\n"+e.pubAd.join("\n")+"\n\n------ Stream IDs ------\n"+e.streamID.join("\n")+"\n\n------ Errors ------\n"+e.error.join("\n")},a.handleExport=function(){console.log("Exporting...");var e=String((new Date).toJSON().slice(0,10).replace(/-/g,"/")),t=a.state.parsedText.deviceInfo.model+" "+e;console.log("Downloading "+t);var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a.prepareStringExport())),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},a.titleTag=function(){return a.state.preSubmission?r.a.createElement("img",{src:"icon.png",style:{display:"block",margin:"10px auto"},height:"100vh"}):r.a.createElement("img",{src:"icon.png",style:{float:"right",display:"block",margin:"10px 0"},height:"100vh"})},a.child=r.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},this.titleTag()),!this.state.preSubmission&&r.a.createElement("div",{className:"col-6"},r.a.createElement("span",{align:"right"},r.a.createElement(N,{handleExport:this.handleExport})))),this.state.preSubmission&&r.a.createElement("div",{className:"centered"},r.a.createElement(D.a,{onDrop:this.onDrop},function(t){var a=t.getRootProps;return r.a.createElement("div",a(),r.a.createElement(u,{onChange:e.handleTextChange,displayText:e.state.entryText}))}),r.a.createElement(b,{id:this.deviceID,onSelect:this.handleSelect}),r.a.createElement(p,{onSubmit:this.handleSubmit}),r.a.createElement("div",{className:"custom-control custom-switch"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customSwitch1",disabled:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},"Only show critical errors"))),!this.state.preSubmission&&r.a.createElement(x,{deviceID:this.state.deviceID,tableData:this.state.parsedText,rawData:this.state.entryText}))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.c245a4ea.chunk.js.map