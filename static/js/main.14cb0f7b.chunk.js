(this.webpackJsonpuploadfiles=this.webpackJsonpuploadfiles||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(34),i=c.n(r),l=(c(41),c(42),c(16)),o=c(17),d=c(19),j=c(18),m=c(12),b=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(a.jsx)("span",{className:"navbar-brand",style:{color:"red"},children:Object(a.jsx)(m.b,{className:"navbar-nav",to:"/home",style:{color:"red",textDecoration:"none"},children:"MovieFlix"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("span",{className:"nav-link",children:Object(a.jsx)(m.b,{className:"navbar-nav",to:"/homepage",style:{textDecoration:"none"},children:"Home"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("span",{className:"nav-link",children:Object(a.jsx)(m.b,{className:"navbar-nav",to:"/addmovie",style:{textDecoration:"none"},children:"Upload Movie"})})})]})})]})})})}}]),c}(s.a.Component),h=c(13),u=c(6),p=c.n(u),O="https://imran1124.pythonanywhere.com/movie/",x="https://imran1124.pythonanywhere.com/country/",v="https://imran1124.pythonanywhere.com/state/?country_id=",f="https://imran1124.pythonanywhere.com/city/?state_id=",g=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={item:[],pic:""},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(O,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(t){console.log(JSON.parse(t)),e.setState({item:JSON.parse(t)})}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:this.state.item.map((function(e,t){return Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"card",style:{width:"370px"},children:[Object(a.jsx)("img",{className:"card-img-top",src:e.image,alt:e.image,style:{width:"100%"}}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h4",{className:"card-title",children:e.title}),Object(a.jsx)("img",{className:"card-img-top",src:"https://th.bing.com/th/id/OIP.ltajFjUQtHvaTQFrRl-zgAHaDj?pid=Api&rs=1",alt:e.image,style:{width:"15%"}}),Object(a.jsx)("span",{className:"text text-success",children:Object(a.jsxs)("strong",{children:["\xa0",e.imdb]})}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("strong",{children:"Description:"})," ",e.desc]}),Object(a.jsx)("a",{href:e.video,type:"button",className:"btn btn-outline-primary btn-sm",children:"Play Online"})]})]})]},t)}))})]})]})}}]),c}(n.Component),y=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={title:"",content:"",desc:"",imdb:"",image:null,video:null},a.state.handleChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.state.handleImageChange=function(e){a.setState({image:e.target.files[0]})},a.state.handleVideoChange=function(e){a.setState({video:e.target.files[0]})},a.state.handleSubmit=function(e){e.preventDefault(),console.log(a.state);var t=new FormData;t.append("image",a.state.image,a.state.image.name),t.append("video",a.state.video,a.state.video.name),t.append("title",a.state.title),t.append("content",a.state.content),t.append("desc",a.state.desc),t.append("imdb",a.state.imdb);p.a.post("https://imran1124.pythonanywhere.com/movie/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return alert("Successfully Inserted")})).then((function(e){a.props.history.push("/home")})).catch((function(e){return console.log(e)}))},a}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:this.state.handleSubmit,children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Title"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",placeholder:"Title",id:"title",value:this.state.title,onChange:this.state.handleChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Content"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",placeholder:"Content",id:"content",value:this.state.content,onChange:this.state.handleChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Description"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",placeholder:"Description",id:"desc",value:this.state.desc,onChange:this.state.handleChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"IMDb"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",placeholder:"IMDb",id:"imdb",value:this.state.imdb,onChange:this.state.handleChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("input",{type:"file",id:"image",accept:"image/png, image/jfif, image/jpeg",onChange:this.state.handleImageChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("input",{type:"file",id:"video",onChange:this.state.handleVideoChange,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("input",{type:"submit",className:"btn btn-outline-info"})})})]})]})})}}]),c}(n.Component),N=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={item:[],pic:""},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get(O+"?search="+t).then((function(t){e.setState({item:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:this.state.item.map((function(e,t){return Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"card",style:{width:"370px"},children:[Object(a.jsx)("img",{className:"card-img-top",src:e.image,alt:e.image,style:{width:"100%"}}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h4",{className:"card-title",children:e.title}),Object(a.jsx)("img",{className:"card-img-top",src:"https://th.bing.com/th/id/OIP.ltajFjUQtHvaTQFrRl-zgAHaDj?pid=Api&rs=1",alt:e.image,style:{width:"20%"}}),Object(a.jsx)("span",{className:"text text-success",children:Object(a.jsxs)("strong",{children:["\xa0",e.imdb]})}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("strong",{children:"Description:"})," ",e.desc]}),Object(a.jsx)("a",{href:e.video,type:"button",className:"btn btn-outline-primary btn-sm",children:"Play Online"})]})]})]},t)}))})]})]})}}]),c}(n.Component),w=c(3),C=c.n(w),S=c(7),D=c(2),F=c(14),k=c(4),q=function(){var e=Object(n.useState)({item:[]}),t=Object(F.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)({filter:""}),i=Object(F.a)(r,2),l=i[0],o=i[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://imran1124.pythonanywhere.com/movie/?search="+l.filter);case 2:t=e.sent,s({item:t.data.reverse()});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",id:"filter",name:"filter",onChange:function(e){o(Object(D.a)(Object(D.a)({},l),{},Object(h.a)({},e.target.name,e.target.value))),console.log(l.filter),d()},placeholder:"Search...."}),Object(a.jsx)("div",{className:"row",children:c.item.map((function(e,t){return Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"card",style:{width:"370px"},children:[Object(a.jsx)("img",{className:"card-img-top",src:e.image,alt:e.image,style:{width:"100%"}}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h4",{className:"card-title",children:e.title}),Object(a.jsx)("img",{className:"card-img-top",src:"https://th.bing.com/th/id/OIP.ltajFjUQtHvaTQFrRl-zgAHaDj?pid=Api&rs=1",alt:e.image,style:{width:"15%"}}),Object(a.jsx)("span",{className:"text text-success",children:Object(a.jsxs)("strong",{children:["\xa0",e.imdb]})}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("strong",{children:"Description:"})," ",e.desc]}),Object(a.jsx)("a",{href:e.video,type:"button",className:"btn btn-outline-primary btn-sm",children:"Play Online"})]})]})]},t)}))})]})]})},I=function(){var e=Object(n.useState)({title:"",content:"",desc:"",imdb:"",image:null,video:null}),t=Object(F.a)(e,2),c=t[0],s=t[1],r=Object(k.f)(),i=function(e){s(Object(D.a)(Object(D.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(D.a)(Object(D.a)({},c),{},{image:t.target.files[0]}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(D.a)(Object(D.a)({},c),{},{video:t.target.files[0]}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c);var t=new FormData;t.append("image",c.image,c.image.name),t.append("video",c.video,c.video.name),t.append("title",c.title),t.append("content",c.content),t.append("desc",c.desc),t.append("imdb",c.imdb);p.a.post("https://imran1124.pythonanywhere.com/movie/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return alert("Successfully Inserted")})).then((function(e){r.push("/homepage")})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Title"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"title",placeholder:"Title",id:"title",value:c.title,onChange:i,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Content"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"content",placeholder:"Content",id:"content",value:c.content,onChange:i,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Description"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"desc",placeholder:"Description",id:"desc",value:c.desc,onChange:i,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"IMDb"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"imdb",placeholder:"IMDb",id:"imdb",value:c.imdb,onChange:i,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Upload Image File"}),Object(a.jsx)("input",{type:"file",id:"image",name:"image",accept:"image/png, image/jfif, image/jpeg",onChange:l,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Upload Video File"}),Object(a.jsx)("input",{type:"file",id:"video",name:"video",onChange:o,required:!0}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("input",{type:"submit",className:"btn btn-outline-info"})})})]})]})})},E=function(){var e=Object(n.useState)({name:"",email:"",mobile:"",address:"",selectCountry:[],selectState:[],selectCity:[]}),t=Object(F.a)(e,2),c=t[0],s=t[1],r=Object(k.f)();Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/country/");case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectCountry:a.data})),console.log(c.selectCountry);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){s(Object(D.a)(Object(D.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/state/?country_id="+t.target.value);case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectState:a.data,country:t.target.value})),console.log(c.selectState);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/city/?state_id="+t.target.value);case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectCity:a.data,state:t.target.value})),console.log(c.selectCity);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(D.a)(Object(D.a)({},c),{},{city:t.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c);var t=new FormData;t.append("name",c.name),t.append("email",c.email),t.append("mobile",c.mobile),t.append("address",c.address),t.append("country",c.country),t.append("state",c.state),t.append("city",c.city);p.a.post("https://imran1124.pythonanywhere.com/singup/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return alert("Successfully Inserted")})).then((function(e){r.push("/create")})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"name",placeholder:"Name",id:"username",value:c.username,onChange:l,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"email",placeholder:"Email",id:"email",value:c.email,onChange:l,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Mobile"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"mobile",placeholder:"Mobile",id:"mobile",value:c.mobile,onChange:l,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Address"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"address",placeholder:"Address",id:"address",value:c.address,onChange:l,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Country"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"country",onChange:function(e){return o(e)},children:[Object(a.jsx)("option",{children:"--Select--"}),c.selectCountry.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.country_name},t)}))]})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"State"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"state",onChange:d,children:[Object(a.jsx)("option",{children:"--Select--"}),c.selectState.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.state_name},t)}))]})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"City"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"city",onChange:j,children:[Object(a.jsx)("option",{children:"--Select--"}),c.selectCity.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.city_name},t)}))]})]})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("input",{type:"submit",className:"btn btn-outline-info btn-sm"})})})]})]})})},M=function(){var e=Object(n.useState)({item:[]}),t=Object(F.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://192.168.43.219:8000/singup/");case 2:t=e.sent,s({item:t.data.reverse()});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{class:"card",children:[Object(a.jsx)("div",{class:"card-header",children:"List User"}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Mobile"}),Object(a.jsx)("th",{children:"Address"}),Object(a.jsx)("th",{children:"Country"}),Object(a.jsx)("th",{children:"State"}),Object(a.jsx)("th",{children:"City"}),Object(a.jsx)("th",{children:"Edit"})]})}),Object(a.jsx)("tbody",{children:c.item.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.mobile}),Object(a.jsx)("td",{children:e.address}),Object(a.jsx)("td",{children:e.country}),Object(a.jsx)("td",{children:e.state}),Object(a.jsx)("td",{children:e.city}),Object(a.jsx)("td",{children:Object(a.jsx)(m.b,{to:"/edit1/".concat(e.id),className:"btn btn-outline-primary btn-sm",children:"Edit"})})]},t)}))})]})})})]})})})]})})},A=function(){var e=Object(n.useState)({selectCountry:[],selectState:[],selectCity:[]}),t=Object(F.a)(e,2),c=t[0],s=t[1],r=Object(k.f)(),i=Object(k.g)().id;Object(n.useEffect)((function(){b(),l()}),[]);var l=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/country/");case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectCountry:a.data})),console.log(c.selectCountry);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/state/?country_id="+t.target.value);case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectState:a.data,country:t.target.value})),console.log(c.selectState);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f,e.next=3,p.a.get("https://imran1124.pythonanywhere.com/city/?state_id="+t.target.value);case 3:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{selectCity:a.data,state:t.target.value})),console.log(c.selectCity);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(D.a)(Object(D.a)({},c),{},{city:t.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(D.a)(Object(D.a)({},c),{},Object(h.a)({},t.target.name,t.target.value)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://192.168.43.219:8000/singup/".concat(i,"/"));case 2:a=e.sent,s(Object(D.a)(Object(D.a)({},c),{},{name:a.data.name,email:a.data.email,mobile:a.data.mobile,address:a.data.address,country:a.data.country,state:a.data.state,city:a.data.city}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c);var t=new FormData;t.append("name",c.name),t.append("email",c.email),t.append("mobile",c.mobile),t.append("address",c.address),t.append("country",c.country),t.append("state",c.state),t.append("city",c.city);p.a.post("https://imran1124.pythonanywhere.com/singup/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return alert("Successfully Inserted")})).then((function(e){r.push("/create")})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"name",placeholder:"Name",id:"name",value:c.name,onChange:m,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"email",placeholder:"Email",id:"email",value:c.email,onChange:m,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Mobile"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"mobile",placeholder:"Mobile",id:"mobile",value:c.mobile,onChange:m,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Address"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",name:"address",placeholder:"Address",id:"address",value:c.address,onChange:m,required:!0})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"Country"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"country",onChange:o,children:[Object(a.jsx)("option",{value:c.country,children:c.country}),Object(a.jsx)("option",{children:"--Select--"}),c.selectCountry.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.country_name},t)}))]})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"State"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"state",onChange:d,children:[Object(a.jsx)("option",{value:c.state,children:c.state}),Object(a.jsx)("option",{children:"--Select--"}),c.selectState.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.state_name},t)}))]})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("label",{children:"City"}),Object(a.jsxs)("select",{className:"custom-select custom-select-sm",name:"city",onChange:j,children:[Object(a.jsx)("option",{value:c.city,children:c.city}),Object(a.jsx)("option",{children:"--Select--"}),c.selectCity.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.city_name},t)}))]})]})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("input",{type:"submit",className:"btn btn-outline-info btn-sm"})})})]})]})})};var _=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/home",component:g}),Object(a.jsx)(k.a,{path:"/filter/:id",component:N}),Object(a.jsx)(k.a,{path:"/upload",component:y}),Object(a.jsx)(k.a,{path:"/homepage",component:q}),Object(a.jsx)(k.a,{path:"/addmovie",component:I}),Object(a.jsx)(k.a,{path:"/create",component:E}),Object(a.jsx)(k.a,{path:"/list",component:M}),Object(a.jsx)(k.a,{path:"/edit1/:id",component:A})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(m.a,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),T()}},[[66,1,2]]]);
//# sourceMappingURL=main.14cb0f7b.chunk.js.map