(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(17);var i=a(1),l=a(2),s=a(4),u=a(3),m=a(5),d=a(7),h=(a(6),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={textData:""},e.updateText=e.updateText.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateText",value:function(e){this.setState({textData:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"shadow-sm p-3 mb-5 bg-light rounded"},r.a.createElement("textarea",{className:"form-control",placeholder:"Paste your log here...",type:"text",value:this.state.textData,onChange:this.updateText}))}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:!1,onClick:this.props.onSubmit},"\ud83e\udd1e\ud83c\udffc"))}}]),t}(n.Component),b=(a(18),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"padded"},r.a.createElement("select",{className:"custom-select",onChange:function(t){return e.props.onSelect(t.target.value)},value:this.state.id},r.a.createElement("option",{value:"Roku"},"Roku"),r.a.createElement("option",{value:"FTV"},"Fire TV"),r.a.createElement("option",{value:"temp"},"Temp")))}}]),t}(n.Component)),v="Roku",f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={preSubmission:!0,deviceID:v},a.handleSubmit=function(){console.log("Submit requested."),a.setState({preSubmission:!1})},a.handleSelect=function(e){console.log("Selection changed:",e),a.setState({deviceID:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.preSubmission&&r.a.createElement("div",{className:"centered"},r.a.createElement(h,null),r.a.createElement(b,{id:this.deviceID,onSelect:this.handleSelect}),r.a.createElement(p,{onSubmit:this.handleSubmit})),!this.state.preSubmission&&r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.80b9bfe4.chunk.js.map