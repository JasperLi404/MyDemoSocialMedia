(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{137:function(e,t,n){e.exports={activeLink:"DialogItem_activeLink__1IQU6",dialog:"DialogItem_dialog__3tDA2"}},139:function(e,t,n){e.exports={friendImg:"Sitebar_friendImg__1wTH3"}},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",item:"NavBar_item__2RAQQ",activeLink:"NavBar_activeLink__W7BJ4"}},175:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var s,r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,303)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),a(e),o(e)}))},a=n(1),o=n.n(a),c=n(66),i=n.n(c),u=(n(169),n(26)),l=n(27),d=n(29),j=n(28),p=n(11),h=n(12),b=n(13),f=(n(175),n(7)),O=n.n(f),g=n(14),m=n(3),v=n(30),x=n(22),A=n(134),P=A.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6218fa8f-9964-4e58-a8a6-4824b7900c49"}}),w={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return P.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return P.post("follow/".concat(e))},unfollow:function(e){return P.delete("follow/".concat(e))},getProfile:function(e){return P.get("profile/".concat(e))}},S=function(e){return P.get("profile/status/".concat(e))},y=function(e){return P.put("profile/status",{status:e})},k=function(e){var t=new FormData;return t.append("image",e),P.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},N=function(e){return P.put("profile",e)},C=function(){return P.get("auth/me")},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return P.post("auth/login",{email:e,password:t,rememberMe:n})},D=function(){return P.delete("auth/login")},M=function(){return P.get("security/get-captcha-url")},L="SET-USER-DATA",E="GET-CAPTCHA-URL-SUCCESS",_=(s={isFetching:!1,userId:null},Object(v.a)(s,"userId",null),Object(v.a)(s,"login",null),Object(v.a)(s,"isAuth",!1),Object(v.a)(s,"captchaURL",null),s),U=function(e,t,n,s,r){return{type:L,payload:{userId:e,email:t,login:n,isAuth:s,captcha:r}}},F=function(e){return{type:E,payload:{captchaURL:e}}},B=function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n,s,r,a,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,s=n.data.data,r=s.id,a=s.email,o=s.login,0===n.data.resultCode&&t(U(r,a,o,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n=e.sent,s=n.data.url,t(F(s));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case E:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},H=n(40),R="ADD-MESSAGE",q={dialogsData:[{id:1,name:"Olga"},{id:2,name:"Sasha"},{id:3,name:"Jane"},{id:4,name:"Denny"},{id:5,name:"Diego"},{id:6,name:"Ben"}],messagesData:[{id:1,src:"https://images.pexels.com/photos/4869063/pexels-photo-4869063.jpeg",message:"Hi"},{id:2,src:"https://images.pexels.com/photos/5999928/pexels-photo-5999928.jpeg",message:"How are u doin?"},{id:3,src:"https://images.pexels.com/photos/3574779/pexels-photo-3574779.jpeg",message:"Hey!"},{id:4,src:"https://images.pexels.com/photos/2820523/pexels-photo-2820523.jpeg",message:"Ba-Da-Boom!"},{id:5,src:"https://images.pexels.com/photos/5712114/pexels-photo-5712114.jpeg",message:"Yesks!"}]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:var n={id:6,src:"https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg",message:t.newMessageBody};return Object(m.a)(Object(m.a)({},e),{},{messagesData:[].concat(Object(H.a)(e.messagesData),[n])});default:return e}},K="ADD-POST",J="SET_USER_PROFILE",X="SET_STATUS",V="DELETE-POST",Q="SAVE-PHOTO-SUCCESS",W={postData:[{id:1,post:"My first post, I have been waiting for it  forever",likes:654},{id:2,post:"Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!",likes:56}],profile:null,status:""},Y=function(e){return{type:X,status:e}},Z=function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getProfile(e);case 2:s=t.sent,console.log(s),n((r=s.data,{type:J,profile:r}));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:var n={id:3,post:t.newPostBody,likes:28};return Object(m.a)(Object(m.a)({},e),{},{postData:[].concat(Object(H.a)(e.postData),[n])});case J:return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case X:return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case V:return Object(m.a)(Object(m.a)({},e),{},{postData:Object(H.a)(e.postData.filter((function(e){return e.id!=t.postId})))});case Q:return Object(m.a)(Object(m.a)({},e),{},{postData:Object(m.a)(Object(m.a)({},e.postData),{},{photos:t.photos})});default:return e}},ee={friends:[{id:1,src:"https://images.pexels.com/photos/6467886/pexels-photo-6467886.jpeg",name:"Sasha"},{id:2,src:"https://images.pexels.com/photos/2970225/pexels-photo-2970225.jpeg",name:"Jane"},{id:3,src:"https://images.pexels.com/photos/5606414/pexels-photo-5606414.jpeg",name:"Olga"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;return e},ne=function(e,t,n,s){e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),s):Object(m.a)({},e)}))},se="FOLLOW",re="UNFOLLOW",ae="SET_USERS",oe="SET_CURRENT_PAGE",ce="TOGGLE_IS_FETCHING",ie="SET_TOTAL_USERS_COUNT",ue="TOGGLE_IS_FOLLOWING_PROGRESS",le={users:[],pageSize:4,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:!0},de=function(e){return{type:se,userId:e}},je=function(e){return{type:re,userId:e}},pe=function(e){return{type:oe,currentPage:e}},he=function(e){return{type:ce,isFetching:e}},be=function(e){return{type:ue,isFetching:e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(m.a)(Object(m.a)({},e),{},{users:ne(e.users,t.userId,"id",{followed:!0})});case re:return Object(m.a)(Object(m.a)({},e),{},{users:ne(e.users,t.userId,"id",{followed:!1})});case ae:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case oe:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case ie:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case ce:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching.isFetching});case ue:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Oe=n(135),ge=n(131),me=" INITIALIZED-SUCCESS",ve={initialized:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},Ae=n(9),Pe=(0,n(9).combineReducers)({profilePage:$,dialogsPage:G,sitebar:te,usersPage:fe,form:ge.a,auth:T,app:xe}),we=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.compose,Se=Object(Ae.createStore)(Pe,we(Object(Ae.applyMiddleware)(Oe.a))),ye=n.p+"static/media/loading.e2e5d642.svg",ke=n(94),Ne=n.n(ke),Ce=n(0),Ie=function(){return Object(Ce.jsx)("div",{className:Ne.a.load,children:Object(Ce.jsx)("img",{className:Ne.a.loader,src:ye})})},De=n(137),Me=n.n(De),Le=function(e){var t="/dialogs/"+e.id;return Object(Ce.jsx)("div",{className:Me.a.dialog,children:Object(Ce.jsx)(b.b,{to:t,children:e.name})})},Ee=n(42),_e=n.n(Ee),Ue=n(71),Fe=n.n(Ue),Be=function(e){return Object(Ce.jsxs)("div",{className:Fe.a.cover,children:[Object(Ce.jsx)("img",{className:Fe.a.img,src:e.message.src,alt:""}),Object(Ce.jsx)("div",{className:Fe.a.message,children:e.message.message})]})},ze=n(129),Te=n(130),He=function(e){if(!e)return"Field is required"},Re=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},qe=n(36),Ge=n(55),Ke=n.n(Ge),Je=function(e){e.input;var t=e.meta,n=(e.element,Object(qe.a)(e,["input","meta","element"])),s=t.touched&&t.error;return Object(Ce.jsxs)("div",{className:Ke.a.formControl+" "+(s?Ke.a.error:""),children:[Object(Ce.jsx)("div",{children:n.children}),s&&Object(Ce.jsx)("span",{children:"error"})]})},Xe=function(e){var t=e.input,n=(e.meta,e.child,Object(qe.a)(e,["input","meta","child"]));return Object(Ce.jsx)(Je,Object(m.a)(Object(m.a)({},e),{},{children:Object(Ce.jsx)("textarea",Object(m.a)(Object(m.a)({},t),n))}))},Ve=function(e){var t=e.input,n=(e.meta,e.child,Object(qe.a)(e,["input","meta","child"]));return Object(Ce.jsx)(Je,Object(m.a)(Object(m.a)({},e),{},{children:Object(Ce.jsx)("input",Object(m.a)(Object(m.a)({},t),n))}))},Qe=function(e,t,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(ze.a,Object(m.a)({validate:n,placeholder:e,name:t,component:s},r))," ",a]})},We=Re(50),Ye=Object(Te.a)({form:"dialogAddMessageForm"})((function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,className:_e.a.cover,children:[Object(Ce.jsx)("div",{className:_e.a.textarea,children:Object(Ce.jsx)(ze.a,{component:Xe,name:"newMessageBody",placeholder:"Enter your message...",validate:[He,We]})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:_e.a.button,children:Object(Ce.jsx)("h4",{children:"Send"})})})]})})),Ze=function(e){var t=e.dialogsData.map((function(e){return Object(Ce.jsx)(Le,{name:e.name,id:e.id})})),n=e.messagesData.map((function(e){return Object(Ce.jsx)(Be,{message:e})}));return Object(Ce.jsxs)("div",{className:_e.a.dialogs,children:[Object(Ce.jsx)("div",{className:_e.a.dialogItems,children:t}),Object(Ce.jsx)("div",{className:_e.a.messages,children:n}),Object(Ce.jsx)(Ye,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})},$e=function(e){return{isAuth:e.auth.isAuth}},et=function(e){var t=function(t){Object(d.a)(s,t);var n=Object(j.a)(s);function s(){return Object(u.a)(this,s),n.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(Ce.jsx)(e,Object(m.a)({},this.props)):Object(Ce.jsx)(h.a,{to:"/login"})}}]),s}(o.a.Component);return Object(p.b)($e)(t)},tt=Object(Ae.compose)(et,Object(p.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData}}),(function(e){return{addMessage:function(t){e(function(e){return{type:R,newMessageBody:e}}(t))}}})))(Ze),nt=n(73),st=n.n(nt),rt=n(139),at=n.n(rt),ot=function(e){return Object(Ce.jsx)("div",{children:e.sitebar.map((function(e){return Object(Ce.jsx)("img",{className:at.a.friendImg,src:e.src,alt:e.name},e.id)}))})},ct=Object(p.b)((function(e){return{sitebar:e.sitebar.friends}}))(ot),it=function(e){return console.log("xfm"),Object(Ce.jsxs)("header",{className:st.a.header,children:[Object(Ce.jsx)("div",{className:st.a.circle,children:Object(Ce.jsx)("div",{className:st.a.loginBlock,children:e.isAuth?Object(Ce.jsxs)("div",{children:[e.login," ",Object(Ce.jsx)("button",{onClick:e.logout,children:"LOG OUT"})," "]}):Object(Ce.jsx)(b.b,{to:"/login",children:"LOGIN"})})}),Object(Ce.jsx)(ct,{})]})},ut=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(Ce.jsx)(it,Object(m.a)({},this.props))}}]),n}(o.a.Component),lt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:B,logout:function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ut),dt=function(e){var t=e.handleSubmit,n=e.error,s=e.captchaURL;return Object(Ce.jsxs)("form",{onSubmit:t,children:[Qe("Email","email",[He],Ve),Qe("Password","password",[He],Ve,{type:"password"}),Qe(null,"rememberMe",[],Ve,{type:"checkbox"},"Remember Me"),s&&Object(Ce.jsx)("img",{src:s}),s&&Qe("symbols from img","captcha",[He],Ve),n&&Object(Ce.jsx)("div",{className:Ke.a.formSummaryError,children:n}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{children:"Login"})})]})},jt=Object(Te.a)({form:"login"})(dt),pt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{login:function(e,t,n,s){return function(){var r=Object(g.a)(O.a.mark((function r(a){var o,c;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I(e,t,n,s);case 2:0===(o=r.sent).data.resultCode?a(B()):(10===o.data.resultCode&&a(z()),c=o.data.messages.length>0?o.data.messages[0]:"Some Error",a(Object(x.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return console.log(e.captchaURL),e.isAuth?Object(Ce.jsx)(h.a,{to:"profile"}):Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("h1",{children:"Login"}),Object(Ce.jsx)(jt,{onSubmit:function(t){console.log(t.captcha),e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:e.captchaURL})]})})),ht=(n(298),function(){return Object(Ce.jsx)("div",{children:"Music"})}),bt=n(17),ft=n.n(bt),Ot=function(){return Object(Ce.jsxs)("nav",{className:ft.a.nav,children:[Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/profile",children:"Profile"})}),Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/users",children:"Users"})}),Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/news",children:"News"})}),Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/music",children:"Music"})}),Object(Ce.jsx)("div",{className:ft.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:ft.a.activeLink,to:"/settings",children:"Settings"})})]})},gt=(n(299),function(){return Object(Ce.jsx)("div",{children:"News"})}),mt=(n(300),n(41)),vt="data:image/png;base64,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",xt=function(e){var t=Object(a.useState)(!1),n=Object(mt.a)(t,2),s=n[0],r=n[1],o=Object(a.useState)(e.status),c=Object(mt.a)(o,2),i=c[0],u=c[1];return Object(a.useEffect)((function(){u(e.status)}),[e.status]),Object(Ce.jsxs)("div",{children:[!s&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"~~~~~~~~~~~~~~~~~"})}),s&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},value:i})})]})},At=n(70),Pt=n.n(At),wt=Object(Te.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,s=e.error;return Object(Ce.jsxs)("form",{onSubmit:t,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{children:"SAVE"})}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Full Name:"})," ",Qe("Full Name","fullName",[],Ve)]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Looking for a job:"})," ",Qe("","lookingForAJob",[],Ve,{type:"checkbox"})]}),Object(Ce.jsxs)("div",{children:["My professional skills:",Qe("My professional skills","lookingForAJobDescrition",[],Xe)," "]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"About Me:"})," ",Qe("About Me","aboutMe",[],Xe)]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Contacts: "}),Object.keys(n.contacts).map((function(e){return Object(Ce.jsxs)("div",{className:"contact",children:[Object(Ce.jsxs)("b",{children:[e,":"]})," ",Qe("".concat(e),"contacts."+e,[],Ve)]},e)}))]}),s&&Object(Ce.jsx)("div",{className:Pt.a.formSummaryError,children:s})]})})),St=function(e){var t=e.profile,n=e.status,s=e.isOwner,r=e.updateStatus,o=e.savePhoto,c=e.saveProfile,i=Object(a.useState)(!1),u=Object(mt.a)(i,2),l=u[0],d=u[1];if(!t)return Object(Ce.jsx)(Ie,{});return Object(Ce.jsx)("div",{children:Object(Ce.jsxs)("div",{children:[Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("img",{className:Pt.a.profilePhoto,src:null!==t.photos.large?t.photos.large:vt}),s&&Object(Ce.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}})]}),l?Object(Ce.jsx)(wt,{onSubmit:function(e){c(e).then((function(){d(!1)}))},initialValues:t,profile:t}):Object(Ce.jsx)(yt,{profile:t,isOwner:s,goToEditMode:function(){d(!0)}}),Object(Ce.jsx)(xt,{status:n,updateStatus:r})]})})},yt=function(e){var t=e.profile,n=e.isOwner,s=e.goToEditMode;return Object(Ce.jsxs)("div",{children:[n&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{onClick:s,children:"edit"})}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Full Name:"})," ",t.fullName," "]}),Object(Ce.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),Object(Ce.jsxs)("div",{children:["About me: ",t.aboutMe]}),Object(Ce.jsx)("div",{children:t.lookingForAJob&&Object(Ce.jsxs)("div",{children:["My professional skills: ",t.lookingForAJobDescription," "]})})]})},kt=n(57),Nt=n.n(kt),Ct=n(74),It=n.n(Ct),Dt=function(e){return Object(Ce.jsxs)("div",{className:It.a.item,children:[Object(Ce.jsx)("img",{className:It.a.ava,src:"https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg",alt:""}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("span",{children:e.message})}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("img",{className:It.a.like,src:"https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/195_heart_love_favorite_like-512.png",alt:""}),e.likes]})]})},Mt=Re(300),Lt=function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Ce.jsx)("div",{className:Nt.a.textarea,children:Object(Ce.jsx)(ze.a,{component:Xe,name:"newPostBody",validate:[He,Mt],placeholder:"Write here..."})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:Nt.a.button,children:Object(Ce.jsx)("h4",{children:"Add Post"})})})]})},Et=Object(Te.a)({form:"profileAddPostForm"})(Lt),_t=o.a.memo((function(e){var t=e.postData.map((function(e){return Object(Ce.jsx)(Dt,{message:e.post,likes:e.likes},e.id)}));return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("h3",{children:"My Posts"}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)(Et,{onSubmit:function(t){e.addPost(t.newPostBody)}})}),Object(Ce.jsx)("div",{className:Nt.a.posts,children:t})]})})),Ut=Object(p.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:K,newPostBody:e}}(t))}}}))(_t),Ft=function(e){return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(St,{profile:e.profile,isOwner:e.isOwner,savePhoto:e.savePhoto,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),Object(Ce.jsx)(Ut,{})]})},Bt=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(Ce.jsx)(Ft,Object(m.a)(Object(m.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(o.a.Component),zt=Object(Ae.compose)(et,h.f,Object(p.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.userId,isAuth:e.profilePage.isAuth}}),{getUserProfile:Z,getStatus:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:s=t.sent,n(Y(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:0===t.sent.data.resultCode&&n(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:0===(s=t.sent).data.resultCode&&n((r=s.data.data.photos,{type:Q,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n,s){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s().auth.userId,t.next=3,N(e);case 3:0===(a=t.sent).data.resultCode?n(Z(r)):n(Object(x.a)("edit-profile",{_error:a.data.messages[0]}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(Bt),Tt=(n(301),function(){return Object(Ce.jsx)("div",{children:"Settings"})}),Ht=function(e){return e.usersPage.users},Rt=function(e){return e.usersPage.pageSize},qt=function(e){return e.usersPage.totalUsersCount},Gt=function(e){return e.usersPage.currentPage},Kt=function(e){return e.usersPage.isFetching},Jt=function(e){return e.usersPage.followingInProgress},Xt=n(75),Vt=n.n(Xt),Qt=n(99),Wt=n.n(Qt),Yt=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,r=void 0===s?1:s,o=e.onPageChanged,c=void 0===o?function(e){return e}:o,i=e.portionSize,u=void 0===i?10:i,l=Math.ceil(t/n),d=[],j=1;j<=l;j++)d.push(j);var p=Math.ceil(l/u),h=Object(a.useState)(1),b=Object(mt.a)(h,2),f=b[0],O=b[1],g=(f-1)*u+1,m=f*u;return Object(Ce.jsxs)("div",{className:Wt()(Vt.a.pageList),children:[f>1&&Object(Ce.jsx)("button",{onClick:function(){O(f-1)},children:"PREV"}),d.filter((function(e){return e>=g&&e<=m})).map((function(e){return Object(Ce.jsx)("span",{className:Wt()(Object(v.a)({},Vt.a.selectedPage,r===e),Vt.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),p>f&&Object(Ce.jsx)("button",{onClick:function(){O(f+1)},children:"NEXT"})]})},Zt=n(31),$t=n.n(Zt),en=function(e){var t=e.user,n=e.follow,s=e.unfollow;Object(qe.a)(e,["user","follow","unfollow"]);return Object(Ce.jsx)("div",{children:Object(Ce.jsxs)("div",{className:$t.a.cover,children:[Object(Ce.jsxs)("span",{className:$t.a.img_cover,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)(b.b,{to:"/profile/"+t.id,children:Object(Ce.jsx)("img",{className:$t.a.userPhoto,src:null!=t.photos.small?t.photos.small:vt})})}),Object(Ce.jsx)("div",{children:t.followed?Object(Ce.jsx)("button",{className:$t.a.button,onClick:function(){s(t.id)},children:Object(Ce.jsx)("h4",{children:"UNFOLLOW"})}):Object(Ce.jsx)("button",{className:$t.a.button,onClick:function(){n(t.id)},children:Object(Ce.jsx)("h4",{children:"FOLLOW"})})})]}),Object(Ce.jsx)("span",{className:$t.a.name_cover,children:Object(Ce.jsx)("div",{className:$t.a.name,children:t.name})}),Object(Ce.jsx)("span",{children:Object(Ce.jsx)("span",{className:$t.a.location})})]},t.id)})},tn=function(e){for(var t=e.currentPage,n=e.onPageChanged,s=e.totalUsersCount,r=e.users,a=e.pageSize,o=e.follow,c=e.unfollow,i=Object(qe.a)(e,["currentPage","onPageChanged","totalUsersCount","users","pageSize","follow","unfollow"]),u=Math.ceil(i.totalUsersCount/i.pageSize),l=[],d=1;d<=u;d++)l.push(d);return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(Yt,{currentPage:t,onPageChanged:n,totalItemsCount:s,pageSize:a}),r.map((function(e){return Object(Ce.jsx)(en,{user:e,follow:o,unfollow:c})}))]})},nn=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestGetUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestGetUsers(t,n)}},{key:"render",value:function(){return Object(Ce.jsx)(Ce.Fragment,{children:this.props.isFetching?Object(Ce.jsx)(Ie,{}):Object(Ce.jsx)(tn,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})})}}]),n}(o.a.Component),sn=Object(Ae.compose)(et,Object(p.b)((function(e){return{users:Ht(e),pageSize:Rt(e),totalUsersCount:qt(e),currentPage:Gt(e),isFetching:Kt(e),followingInProgress:Jt(e)}}),{follow:de,unfollow:je,setCurrentPage:pe,toggleFollowingProgress:be,requestGetUsers:function(e,t){return function(){var n=Object(g.a)(O.a.mark((function n(s){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(he({isFetching:!0})),s(pe(e)),n.next=4,w.getUsers(e,t);case 4:r=n.sent,s(he({isFetching:!1})),s((o=r.items,{type:ae,users:o})),s((a=r.totalCount-10260,{type:ie,count:a})),s(pe(e));case 9:case"end":return n.stop()}var a,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(nn),rn=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Ce.jsxs)("div",{className:"app-wrapper",children:[Object(Ce.jsx)(lt,{}),Object(Ce.jsx)(Ot,{}),Object(Ce.jsxs)("div",{className:"app-wrapper-content",children:[Object(Ce.jsx)(h.b,{path:"/dialogs",render:function(){return Object(Ce.jsx)(tt,{})}}),Object(Ce.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(Ce.jsx)(zt,{})}}),Object(Ce.jsx)(h.b,{path:"/login",render:function(){return Object(Ce.jsx)(pt,{})}}),Object(Ce.jsx)(h.b,{path:"/users",render:function(){return Object(Ce.jsx)(sn,{})}}),Object(Ce.jsx)(h.b,{path:"/news",render:function(){return Object(Ce.jsx)(gt,{})}}),Object(Ce.jsx)(h.b,{path:"/music",render:function(){return Object(Ce.jsx)(ht,{})}}),Object(Ce.jsx)(h.b,{path:"/settings",render:function(){return Object(Ce.jsx)(Tt,{})}})]})]}):Object(Ce.jsx)(Ie,{})}}]),n}(a.Component),an=Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(B()),e.next=3,Promise.all([n]);case 3:t({type:me});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(rn),on=function(e){return Object(Ce.jsx)(b.a,{basename:"/MyDemoSocialMedia",children:Object(Ce.jsx)(p.a,{store:Se,children:Object(Ce.jsx)(an,{})})})};i.a.render(Object(Ce.jsx)(on,{}),document.getElementById("root")),r()},31:function(e,t,n){e.exports={cover:"users_cover__1FE5F",name_cover:"users_name_cover__h-YFt",status:"users_status__2-fS8",img_cover:"users_img_cover__17d9S",userPhoto:"users_userPhoto__1_En6",button:"users_button__2y6Lc",location:"users_location__2R4ze",name:"users_name__2Xz29"}},42:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogItems:"Dialogs_dialogItems__3flRc",messages:"Dialogs_messages__1w_Up",active:"Dialogs_active__2sQhs",cover:"Dialogs_cover__1iMzH",textarea:"Dialogs_textarea__PRKXN",button:"Dialogs_button__UnW0m"}},55:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},57:function(e,t,n){e.exports={textarea:"MyPosts_textarea__3KLbu",button:"MyPosts_button__2WbpQ",posts:"MyPosts_posts__3tZ1c"}},70:function(e,t,n){e.exports={imageMainPost:"ProfileInfo_imageMainPost__1YGNm",profilePhoto:"ProfileInfo_profilePhoto__9KLOb"}},71:function(e,t,n){e.exports={cover:"MessageItem_cover__2S4dF",message:"MessageItem_message___BN8i",img:"MessageItem_img__3fR9N"}},73:function(e,t,n){e.exports={header:"Header_header__1VCKf",circle:"Header_circle__1DvNz",sitebar:"Header_sitebar__2EY99","login-block":"Header_login-block__q58a8"}},74:function(e,t,n){e.exports={like:"Post_like__oViQh",item:"Post_item__ihtu9",ava:"Post_ava__2EGbS"}},75:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",unSelectedPage:"Paginator_unSelectedPage__EP-RC",pageList:"Paginator_pageList__2KIPm"}},94:function(e,t,n){e.exports={load:"preloader_load__gRR3Q",loader:"preloader_loader__19fHW"}}},[[302,1,2]]]);
//# sourceMappingURL=main.a1988ed8.chunk.js.map