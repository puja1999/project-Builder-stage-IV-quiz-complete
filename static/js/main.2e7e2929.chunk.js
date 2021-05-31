(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},44:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),i=s(28),a=s.n(i),r=(s(36),s(31)),o=s(9),l=s(10),d=s(12),j=s(11),u=(s(37),s(8)),h=s(0),b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"home-parent",children:Object(h.jsxs)("div",{className:"home-cont",children:[Object(h.jsx)("h1",{children:"Quiz App"}),Object(h.jsx)(u.b,{to:"/quiz",children:Object(h.jsx)("button",{children:"Play"})})]})})}}]),s}(n.Component),p=(s(44),s(30)),x=s.n(p),m=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).next=function(){n.state.index_value<9?n.setState({index_value:n.state.index_value+1}):alert("Quiz Completed Quit Now")},n.previous=function(){0===n.state.index_value?alert("Please Start"):n.state.index_value>0&&n.setState({index_value:n.state.index_value-1})},n.hide=function(){document.getElementById("ans").style.display="none"},n.verifyAns=function(e){var t=e.target.value,s=document.getElementById("ans");console.log(n.state.datas[n.state.index_value].answer+" "+t),n.props.isAttempt(),n.state.datas[n.state.index_value].answer===t?(s.innerText="Correct!",s.style.backgroundColor="green",s.style.display="block",s.style.border=" 1px solid green",n.next(),n.setState({correct:n.state.correct+1}),n.props.checkCorrect()):(s.innerText="Wrong!!!",s.style.backgroundColor="red",s.style.animation="hideIt 1s forwards",s.style.display="block",s.style.border=" 1px solid red",n.next(),n.setState({wrong:n.state.attempt-n.state.correct+1}),n.props.checkWrong())},n.state={index_value:0,datas:[],attempt:0,currentCount:120},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions").then((function(t){e.setState({datas:t.data})})),this.intervalId=setInterval(this.timer.bind(this),1e3)}},{key:"timer",value:function(){var e=document.getElementById("hide"),t=document.getElementById("show");this.setState({currentCount:this.state.currentCount-1}),this.state.currentCount<1&&(clearInterval(this.intervalId),e.style.display="none",t.style.display="block")}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.datas.length,t=this.state.datas[this.state.index_value];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"quiz-parent",children:e>0?Object(h.jsxs)("div",{className:"quiz-cont",id:"quiz-cont",children:[Object(h.jsx)("div",{id:"show",style:{display:"none"},children:Object(h.jsx)("h2",{children:"Time up!!!"})}),Object(h.jsxs)("div",{id:"quiz-container",children:[Object(h.jsx)("div",{className:"head",children:"Question"}),Object(h.jsxs)("div",{className:"question-num",children:[Object(h.jsxs)("p",{className:"timer-text",children:["Time Left: ",Object(h.jsx)("span",{className:"timer",children:this.state.currentCount})]}),Object(h.jsxs)("p",{id:"numbers",children:[t.id," of 10"]}),Object(h.jsx)("p",{id:"question",children:t.question})]}),Object(h.jsxs)("div",{className:"options-container",children:[Object(h.jsxs)("div",{className:"option-cont-1",children:[Object(h.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-1",value:t.options[0],children:t.options[0]}),Object(h.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-2",value:t.options[1],children:t.options[1]})]}),Object(h.jsxs)("div",{className:"option-cont-2",children:[Object(h.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-3",value:t.options[2],children:t.options[2]}),Object(h.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-4",value:t.options[3],children:t.options[3]})]})]})]}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)("button",{onClick:this.previous,id:"prev",children:"Previous"}),Object(h.jsx)("button",{onClick:this.next,id:"next",children:"Next"}),Object(h.jsx)("button",{id:"quit",children:Object(h.jsx)(u.b,{to:"/Result",className:"link",children:"Quit"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"ans"})})]}):Object(h.jsx)("div",{})})})}}]),s}(n.Component),O=(s(63),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return console.log(this.props),Object(h.jsxs)("div",{className:"result-parent",children:[Object(h.jsxs)("div",{className:"result",children:[Object(h.jsx)("i",{class:"fa fa-check-circle","aria-hidden":"true"}),Object(h.jsx)("h1",{className:"result-heading",children:"Result"})]}),Object(h.jsxs)("div",{className:"result-cont",children:[10*this.props.correct<60?Object(h.jsx)("p",{className:"status",children:"You need more practice !"}):Object(h.jsx)("p",{children:"Well Done"}),Object(h.jsxs)("p",{className:"score",children:["Your Score: ",10*this.props.correct]}),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("p",{children:["Total number of question:",Object(h.jsx)("span",{children:" 10"})]}),Object(h.jsxs)("p",{children:["Number of attempted question:",Object(h.jsx)("span",{children:this.props.attempt})]}),Object(h.jsxs)("p",{children:["Number of Correct Answers:",Object(h.jsxs)("span",{children:[" ",this.props.correct]})]}),Object(h.jsxs)("p",{children:["Number of Wrong Answers:",Object(h.jsx)("span",{children:this.props.wrong})]})]})]}),Object(h.jsxs)("div",{className:"btn-container",children:[Object(h.jsx)("button",{className:"play",children:Object(h.jsx)(u.b,{to:"/Quiz",className:"link",children:" Play Again"})}),Object(h.jsx)("button",{className:"back",children:Object(h.jsx)(u.b,{to:"/project-Builder-stage-IV-quiz-complete",className:"link",children:"Back to Home"})})]})]})}}]),s}(n.Component)),v=s(2),f=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).checkCorrect=function(){e.setState({correct:e.state.correct+1})},e.isAttempt=function(){e.setState({attempt:e.state.attempt+1})},e.checkWrong=function(){e.setState({wrong:e.state.attempt-e.state.correct+1})},e.state={correct:0,attempt:0,wrong:0},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/project-Builder-stage-IV-quiz-complete",children:Object(h.jsx)(b,{})}),Object(h.jsx)(v.a,{path:"/Quiz",children:Object(h.jsx)(m,{checkCorrect:this.checkCorrect,isAttempt:this.isAttempt,checkWrong:this.checkWrong})}),Object(h.jsx)(v.a,{children:Object(h.jsx)(v.a,{path:"/Result",children:Object(h.jsx)(O,Object(r.a)({},this.state))})})]})})})}}]),s}(n.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),y()}},[[64,1,2]]]);
//# sourceMappingURL=main.2e7e2929.chunk.js.map