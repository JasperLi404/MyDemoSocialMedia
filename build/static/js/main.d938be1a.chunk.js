(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={activeLink:"DialogItem_activeLink__1IQU6",dialog:"DialogItem_dialog__3tDA2",dialogText:"DialogItem_dialogText__2CSVR"}},138:function(e,t,n){e.exports={friendImg:"Sitebar_friendImg__1wTH3"}},140:function(e,t,n){e.exports={loginForm:"Login_loginForm__1Hg13"}},141:function(e,t,n){e.exports={right:"MessageItem_right__12Up9",left:"MessageItem_left__1c2SS",message:"MessageItem_message___BN8i"}},171:function(e,t,n){},177:function(e,t,n){},30:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",item:"NavBar_item__2RAQQ",activeLink:"NavBar_activeLink__W7BJ4"}},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r,a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},s=n(1),o=n.n(s),c=n(70),i=n.n(c),u=(n(171),n(26)),l=n(27),d=n(29),j=n(28),p=n(11),f=n(12),b=n(14),h=(n(177),n(7)),O=n.n(h),g=n(13),m=n(3),v=n(31),x=n(22),w=n(135),A=w.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6218fa8f-9964-4e58-a8a6-4824b7900c49"}}),P={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return A.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return A.post("follow/".concat(e))},unfollow:function(e){return A.delete("follow/".concat(e))},getProfile:function(e){return A.get("profile/".concat(e))}},N=function(e){return A.get("profile/status/".concat(e))},S=function(e){return A.put("profile/status",{status:e})},k=function(e){var t=new FormData;return t.append("image",e),A.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},y=function(e){return A.put("profile",e)},_=function(){return A.get("auth/me")},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return A.post("auth/login",{email:e,password:t,rememberMe:n})},C=function(){return A.delete("auth/login")},D=function(){return A.get("security/get-captcha-url")},M="SET-USER-DATA",L="GET-CAPTCHA-URL-SUCCESS",F=(r={isFetching:!1,userId:null},Object(v.a)(r,"userId",null),Object(v.a)(r,"login",null),Object(v.a)(r,"isAuth",!1),Object(v.a)(r,"captchaURL",null),r),E=function(e,t,n,r,a){return{type:M,payload:{userId:e,email:t,login:n,isAuth:r,captcha:a}}},U=function(e){return{type:L,payload:{captchaURL:e}}},T=function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n,r,a,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,r=n.data.data,a=r.id,s=r.email,o=r.login,0===n.data.resultCode&&t(E(a,s,o,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:n=e.sent,r=n.data.url,t(U(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:case L:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},H=n(42),G="ADD-MESSAGE",R={dialogsData:[{id:1,name:"Olga"}],messagesData:[{id:1,speaker:"Olga",message:"Hi"},{id:2,speaker:"Me",message:"How are u doin?"},{id:3,speaker:"Olga",message:"Hey!"},{id:4,speaker:"Me",message:"Ba-Da-Boom!"},{id:5,speaker:"Olga",message:"Yesks!"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:var n={id:6,speaker:"Me",message:t.newMessageBody};return Object(m.a)(Object(m.a)({},e),{},{messagesData:[].concat(Object(H.a)(e.messagesData),[n])});default:return e}},K="ADD-POST",X="SET_USER_PROFILE",J="SET_STATUS",V="DELETE-POST",Q="SAVE-PHOTO-SUCCESS",W={postData:[{id:1,post:"My first post, I have been waiting for it  forever",likes:654},{id:2,post:"Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!",likes:56}],profile:null,status:""},Y=function(e){return{type:J,status:e}},Z=function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getProfile(e);case 2:r=t.sent,console.log(r),n((a=r.data,{type:X,profile:a}));case 5:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:var n={id:3,post:t.newPostBody,likes:28};return Object(m.a)(Object(m.a)({},e),{},{postData:[].concat(Object(H.a)(e.postData),[n])});case X:return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case J:return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case V:return Object(m.a)(Object(m.a)({},e),{},{postData:Object(H.a)(e.postData.filter((function(e){return e.id!=t.postId})))});case Q:return Object(m.a)(Object(m.a)({},e),{},{postData:Object(m.a)(Object(m.a)({},e.postData),{},{photos:t.photos})});default:return e}},ee={friends:[{id:1,src:"https://images.pexels.com/photos/6467886/pexels-photo-6467886.jpeg",name:"Sasha"},{id:2,src:"https://images.pexels.com/photos/2970225/pexels-photo-2970225.jpeg",name:"Jane"},{id:3,src:"https://images.pexels.com/photos/5606414/pexels-photo-5606414.jpeg",name:"Olga"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;return e},ne=function(e,t,n,r){e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):Object(m.a)({},e)}))},re="FOLLOW",ae="UNFOLLOW",se="SET_USERS",oe="SET_CURRENT_PAGE",ce="TOGGLE_IS_FETCHING",ie="SET_TOTAL_USERS_COUNT",ue="TOGGLE_IS_FOLLOWING_PROGRESS",le={users:[],pageSize:4,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:!0},de=function(e){return{type:re,userId:e}},je=function(e){return{type:ae,userId:e}},pe=function(e){return{type:oe,currentPage:e}},fe=function(e){return{type:ce,isFetching:e}},be=function(e){return{type:ue,isFetching:e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(m.a)(Object(m.a)({},e),{},{users:ne(e.users,t.userId,"id",{followed:!0})});case ae:return Object(m.a)(Object(m.a)({},e),{},{users:ne(e.users,t.userId,"id",{followed:!1})});case se:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case oe:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case ie:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case ce:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching.isFetching});case ue:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Oe=n(136),ge=n(132),me=" INITIALIZED-SUCCESS",ve={initialized:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},we=n(9),Ae=(n.p,{news:[{id:1,theme:"Amazon rainforest plots sold via Facebook Marketplace ads",url:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13F22/production/_117289618_gettyimages-brazil-rightscleared.jpg",link:"https://www.bbc.com/news/technology-56168844"},{id:2,theme:"Cryptocurrencies: Why Nigeria is a global leader in Bitcoin trade",url:"https://ichef.bbci.co.uk/news/976/cpsprodpb/17330/production/_115542059_bitcoin.jpg",link:"https://www.bbc.com/news/world-africa-56169917"},{id:3,theme:"The mystery of India\u2019s \u2018lake of skeletons\u2019",url:"https://ichef.bbci.co.uk/news/976/cpsprodpb/DE2D/production/_117077865_atish_waghwase_1.jpg",link:"https://www.bbc.com/news/world-asia-india-56116533"}]}),Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return e},Ne=(0,n(9).combineReducers)({profilePage:$,dialogsPage:q,sitebar:te,usersPage:he,form:ge.a,auth:B,app:xe,news:Pe}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.compose,ke=Object(we.createStore)(Ne,Se(Object(we.applyMiddleware)(Oe.a))),ye=n.p+"static/media/loading.e2e5d642.svg",_e=n(94),Ie=n.n(_e),Ce=n(0),De=function(){return Object(Ce.jsx)("div",{className:Ie.a.load,children:Object(Ce.jsx)("img",{className:Ie.a.loader,src:ye})})},Me=n(61),Le=n.n(Me),Fe=n(138),Ee=n.n(Fe),Ue=function(e){return Object(Ce.jsx)("div",{children:e.sitebar.map((function(e){return Object(Ce.jsx)("img",{className:Ee.a.friendImg,src:e.src,alt:e.name},e.id)}))})},Te=(Object(p.b)((function(e){return{sitebar:e.sitebar.friends}}))(Ue),function(e){return console.log("xfm"),Object(Ce.jsxs)("header",{className:Le.a.header,children:[Object(Ce.jsx)("div",{className:Le.a.circle,children:Object(Ce.jsx)("div",{className:Le.a.loginBlock,children:e.isAuth?Object(Ce.jsxs)("div",{children:[e.login,"  "]}):Object(Ce.jsx)(b.b,{to:"/login",children:"LOG IN"})})}),Object(Ce.jsx)("div",{children:e.isAuth&&Object(Ce.jsx)("button",{className:Le.a.buttonLogOut,onClick:e.logout,children:"LOG OUT"})})]})}),ze=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(Ce.jsx)(Te,Object(m.a)({},this.props))}}]),n}(o.a.Component),Be=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:T,logout:function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===e.sent.data.resultCode&&t(E(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ze),He=n(131),Ge=function(e){if(!e)return"Field is required"},Re=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},qe=n(16),Ke=n(130),Xe=n(37),Je=n.n(Xe),Ve=function(e){e.input;var t=e.meta,n=(e.element,Object(qe.a)(e,["input","meta","element"])),r=t.touched&&t.error;return Object(Ce.jsxs)("div",{className:Je.a.formControl+" "+(r?Je.a.error:""),children:[Object(Ce.jsx)("div",{children:n.children}),r&&Object(Ce.jsx)("span",{children:"error"})]})},Qe=function(e){var t=e.input,n=(e.meta,e.child,Object(qe.a)(e,["input","meta","child"]));return Object(Ce.jsx)(Ve,Object(m.a)(Object(m.a)({},e),{},{children:Object(Ce.jsx)("textarea",Object(m.a)(Object(m.a)({},t),n))}))},We=function(e){var t=e.input,n=(e.meta,e.child,Object(qe.a)(e,["input","meta","child"]));return Object(Ce.jsx)(Ve,Object(m.a)(Object(m.a)({},e),{},{children:Object(Ce.jsx)("input",Object(m.a)(Object(m.a)({},t),n))}))},Ye=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(Ke.a,Object(m.a)({className:Je.a.field,validate:n,placeholder:e,name:t,component:r},a))," ",s]})},Ze=function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(Ce.jsxs)("form",{onSubmit:t,children:[Ye("Email","email",[Ge],We),Ye("Password","password",[Ge],We,{type:"password"}),Object(Ce.jsx)("div",{className:Je.a.checkbox,children:Ye(null,"rememberMe",[],We,{type:"checkbox"},"Remember Me")}),r&&Object(Ce.jsx)("img",{src:r}),r&&Ye("symbols from img","captcha",[Ge],We),n&&Object(Ce.jsx)("div",{className:Je.a.formSummaryError,children:n}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:Je.a.buttonLogIn,children:"LOG IN"})})]})},$e=n(140),et=n.n($e),tt=Object(He.a)({form:"login"})(Ze),nt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{login:function(e,t,n,r){return function(){var a=Object(g.a)(O.a.mark((function a(s){var o,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?s(T()):(10===o.data.resultCode&&s(z()),c=o.data.messages.length>0?o.data.messages[0]:"Some Error",s(Object(x.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(Ce.jsx)(f.a,{to:"profile"}):Object(Ce.jsxs)("div",{className:et.a.loginForm,children:[Object(Ce.jsx)("h1",{children:"LOG IN"}),Object(Ce.jsx)(tt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:e.captchaURL})]})})),rt=(n(300),function(){return Object(Ce.jsx)("div",{children:"Music"})}),at=n(30),st=n.n(at),ot=function(){return Object(Ce.jsxs)("nav",{className:st.a.nav,children:[Object(Ce.jsx)("div",{className:st.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:st.a.activeLink,to:"/profile",children:"Profile"})}),Object(Ce.jsx)("div",{className:st.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:st.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(Ce.jsx)("div",{className:st.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:st.a.activeLink,to:"/users",children:"Users"})}),Object(Ce.jsx)("div",{className:st.a.item,children:Object(Ce.jsx)(b.b,{activeClassName:st.a.activeLink,to:"/news",children:"News"})})]})},ct=n(44),it=n.n(ct),ut=function(e){var t=e.photo,n=e.text,r=e.link;return Object(Ce.jsxs)("div",{className:it.a.wrapper,children:[Object(Ce.jsx)("img",{className:it.a.picture,src:t}),Object(Ce.jsx)("h4",{className:it.a.theme,children:n}),Object(Ce.jsx)("a",{href:r,children:Object(Ce.jsx)("div",{className:it.a.link,children:"MORE DETAILS"})})]})},lt=function(e){var t=e.news;if(!t.news)return Object(Ce.jsx)(De,{});var n=t.news.map((function(e){return Object(Ce.jsx)(ut,{photo:e.url,text:e.theme,link:e.link})}));return Object(Ce.jsx)("div",{className:it.a.mainNews,children:n})},dt=(n(301),function(){return Object(Ce.jsx)("div",{children:"Settings"})}),jt=function(e){return e.usersPage.users},pt=function(e){return e.usersPage.pageSize},ft=function(e){return e.usersPage.totalUsersCount},bt=function(e){return e.usersPage.currentPage},ht=function(e){return e.usersPage.isFetching},Ot=function(e){return e.usersPage.followingInProgress},gt=n(43),mt=n(50),vt=n.n(mt),xt=n(99),wt=n.n(xt),At=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=void 0===r?1:r,o=e.onPageChanged,c=void 0===o?function(e){return e}:o,i=e.portionSize,u=void 0===i?10:i,l=Math.ceil(t/n),d=[],j=1;j<=l;j++)d.push(j);var p=Math.ceil(l/u),f=Object(s.useState)(1),b=Object(gt.a)(f,2),h=b[0],O=b[1],g=(h-1)*u+1,m=h*u;return Object(Ce.jsxs)("div",{className:wt()(vt.a.pageList),children:[h>1&&Object(Ce.jsx)("button",{className:vt.a.btnPrevNext,onClick:function(){O(h-1)},children:"PREV"}),d.filter((function(e){return e>=g&&e<=m})).map((function(e){return Object(Ce.jsx)("span",{className:wt()(Object(v.a)({},vt.a.selectedPage,a===e),vt.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),p>h&&Object(Ce.jsx)("button",{className:vt.a.btnPrevNext,onClick:function(){O(h+1)},children:"NEXT"})]})},Pt=n(38),Nt=n.n(Pt),St="data:image/png;base64,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",kt=function(e){var t=e.user;e.follow,e.unfollow,Object(qe.a)(e,["user","follow","unfollow"]);return Object(Ce.jsx)("div",{children:Object(Ce.jsxs)("div",{className:Nt.a.cover,children:[Object(Ce.jsxs)("span",{className:Nt.a.img_cover,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)(b.b,{to:"/profile/"+t.id,children:Object(Ce.jsx)("img",{className:Nt.a.userPhoto,src:null!=t.photos.small?t.photos.small:St})})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:Nt.a.buttonFolUnfol,onClick:function(e){var t=e.target.innerHTML;console.log(t),e.target.innerHTML="UNFOLLOW"==t?"FOLLOW":"UNFOLLOW"},children:"FOLLOW"})})]}),Object(Ce.jsx)("span",{className:Nt.a.name_cover,children:Object(Ce.jsx)("div",{className:Nt.a.name,children:t.name})}),Object(Ce.jsx)("span",{children:Object(Ce.jsx)("span",{className:Nt.a.location})})]},t.id)})},yt=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.users,s=e.pageSize,o=e.follow,c=e.unfollow,i=Object(qe.a)(e,["currentPage","onPageChanged","totalUsersCount","users","pageSize","follow","unfollow"]),u=Math.ceil(i.totalUsersCount/i.pageSize),l=[],d=1;d<=u;d++)l.push(d);return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(At,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:s}),a.map((function(e){return Object(Ce.jsx)(kt,{user:e,follow:o,unfollow:c},e.id)}))]})},_t=function(e){return{isAuth:e.auth.isAuth}},It=function(e){var t=function(t){Object(d.a)(r,t);var n=Object(j.a)(r);function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(Ce.jsx)(e,Object(m.a)({},this.props)):Object(Ce.jsx)(f.a,{to:"/login"})}}]),r}(o.a.Component);return Object(p.b)(_t)(t)},Ct=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestGetUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestGetUsers(t,n)}},{key:"render",value:function(){return Object(Ce.jsx)(Ce.Fragment,{children:this.props.isFetching?Object(Ce.jsx)(De,{}):Object(Ce.jsx)(yt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})})}}]),n}(o.a.Component),Dt=Object(we.compose)(It,Object(p.b)((function(e){return{users:jt(e),pageSize:pt(e),totalUsersCount:ft(e),currentPage:bt(e),isFetching:ht(e),followingInProgress:Ot(e)}}),{follow:de,unfollow:je,setCurrentPage:pe,toggleFollowingProgress:be,requestGetUsers:function(e,t){return function(){var n=Object(g.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(fe({isFetching:!0})),r(pe(e)),n.next=4,P.getUsers(e,t);case 4:a=n.sent,r(fe({isFetching:!1})),r((o=a.items,{type:se,users:o})),r((s=a.totalCount-10260,{type:ie,count:s})),r(pe(e));case 9:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ct),Mt=n(100),Lt=n.n(Mt),Ft=n.p+"static/media/photoDialogsUser.8d258679.jpeg",Et=function(e){var t="/dialogs/"+e.id;return Object(Ce.jsxs)("div",{className:Lt.a.dialog,children:[Object(Ce.jsx)("img",{src:Ft,alt:""}),Object(Ce.jsx)(b.b,{className:Lt.a.dialogText,to:t,children:e.name})]})},Ut=n(45),Tt=n.n(Ut),zt=n(141),Bt=n.n(zt),Ht=function(e){return Object(Ce.jsx)("div",{className:e.class,children:Object(Ce.jsxs)("div",{className:Bt.a.message,children:[" ",Object(Ce.jsx)("b",{id:"name",children:e.message.speaker}),"  : ",e.message.message]})})},Gt=Re(50),Rt=Object(He.a)({form:"dialogAddMessageForm"})((function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,className:Tt.a.cover,children:[Object(Ce.jsx)("div",{className:Tt.a.textarea,children:Object(Ce.jsx)(Ke.a,{component:Qe,name:"newMessageBody",placeholder:"Enter your message...",validate:[Ge,Gt]})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:Tt.a.buttonAddMess,children:" SEND "})})]})})),qt=function(e){var t=e.dialogsData.map((function(e){return Object(Ce.jsx)(Et,{name:e.name,id:e.id})})),n=e.messagesData.map((function(e){return Object(Ce.jsx)(Ht,{message:e})}));return Object(Ce.jsxs)("div",{className:Tt.a.dialogs,children:[Object(Ce.jsx)("div",{className:Tt.a.dialogItems,children:t}),Object(Ce.jsx)("div",{className:Tt.a.messages,children:n}),Object(Ce.jsx)(Rt,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})},Kt=Object(we.compose)(It,Object(p.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData}}),(function(e){return{addMessage:function(t){e(function(e){return{type:G,newMessageBody:e}}(t))}}})))(qt),Xt=(n(302),n(32)),Jt=n.n(Xt),Vt=function(e){var t=Object(s.useState)(!1),n=Object(gt.a)(t,2),r=n[0],a=n[1],o=Object(s.useState)(e.status),c=Object(gt.a)(o,2),i=c[0],u=c[1];return Object(s.useEffect)((function(){u(e.status)}),[e.status]),Object(Ce.jsxs)("div",{children:[!r&&Object(Ce.jsx)("div",{className:Jt.a.statusInfo,children:Object(Ce.jsx)("span",{onDoubleClick:function(){a(!0)},children:Object(Ce.jsxs)("i",{children:[" ",e.status||"~~~~~~~~~~~~~~~~~"," "]})})}),r&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(i)},value:i})})]})},Qt=(Object(He.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(Ce.jsxs)("form",{onSubmit:t,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{children:"SAVE"})}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Full Name:"})," ",Ye("Full Name","fullName",[],We)]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Looking for a job:"})," ",Ye("","lookingForAJob",[],We,{type:"checkbox"})]}),Object(Ce.jsxs)("div",{children:["My professional skills:",Ye("My professional skills","lookingForAJobDescrition",[],Qe)," "]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"About Me:"})," ",Ye("About Me","aboutMe",[],Qe)]}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("b",{children:"Contacts: "}),Object.keys(n.contacts).map((function(e){return Object(Ce.jsxs)("div",{className:"contact",children:[Object(Ce.jsxs)("b",{children:[e,":"]})," ",Ye("".concat(e),"contacts."+e,[],We)]},e)}))]}),r&&Object(Ce.jsx)("div",{className:Jt.a.formSummaryError,children:r})]})})),function(e){var t=e.profile,n=e.status,r=(e.isOwner,e.updateStatus),a=(e.savePhoto,e.saveProfile,Object(s.useState)(!1)),o=Object(gt.a)(a,2);o[0],o[1];if(!t)return Object(Ce.jsx)(De,{});return Object(Ce.jsxs)("div",{className:Jt.a.profileInfo,children:[Object(Ce.jsx)("div",{className:Jt.a.profileMainPhoto,children:Object(Ce.jsx)("img",{className:Jt.a.profilePhoto,src:null!==t.photos.large?t.photos.large:St})}),Object(Ce.jsx)(Vt,{status:n,updateStatus:r}),Object(Ce.jsx)("div",{className:Jt.a.Name,children:t.fullName})]})}),Wt=n(60),Yt=n.n(Wt),Zt=n(75),$t=n.n(Zt),en=function(e){var t=e.url,n=Object(qe.a)(e,["url"]);return Object(Ce.jsxs)("div",{className:$t.a.item,children:[Object(Ce.jsx)("img",{className:$t.a.ava,src:t,alt:"Main Photo"}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("span",{children:n.message})}),Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("img",{className:$t.a.like,src:"https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/195_heart_love_favorite_like-512.png",alt:""}),n.likes]})]})},tn=Re(300),nn=function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Ce.jsx)("div",{className:Yt.a.textarea,children:Object(Ce.jsx)(Ke.a,{component:Qe,name:"newPostBody",validate:[Ge,tn],placeholder:"Write here..."})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{className:Yt.a.buttonAdd,children:"ADD POST"})})]})},rn=Object(He.a)({form:"profileAddPostForm"})(nn),an=o.a.memo((function(e){var t=e.profile,n=Object(qe.a)(e,["profile"]);if(!t)return Object(Ce.jsx)(De,{});var r=n.postData.map((function(e){return Object(Ce.jsx)(en,{url:t.photos.large,message:e.post,likes:e.likes},e.id)}));return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)("h3",{children:"My Posts"}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)(rn,{onSubmit:function(e){n.addPost(e.newPostBody)}})}),Object(Ce.jsx)("div",{className:Yt.a.posts,children:r})]})})),sn=Object(p.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:K,newPostBody:e}}(t))}}}))(an),on=function(e){var t=e.profile,n=e.isOwner,r=Object(qe.a)(e,["profile","isOwner"]);return t?Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(Qt,{profile:t,isOwner:r.isOwner,savePhoto:r.savePhoto,status:r.status,updateStatus:r.updateStatus,saveProfile:r.saveProfile}),n&&Object(Ce.jsx)(sn,{profile:r.profile})]}):Object(Ce.jsx)(De,{})},cn=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(Ce.jsx)(on,Object(m.a)(Object(m.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(o.a.Component),un=Object(we.compose)(It,f.f,Object(p.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.userId,isAuth:e.profilePage.isAuth}}),{getUserProfile:Z,getStatus:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:r=t.sent,n(Y(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:0===t.sent.data.resultCode&&n(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:Q,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(g.a)(O.a.mark((function t(n,r){var a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,y(e);case 3:0===(s=t.sent).data.resultCode?n(Z(a)):n(Object(x.a)("edit-profile",{_error:s.data.messages[0]}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(cn),ln=Object(p.b)((function(e){return{news:e.news}}))(lt),dn=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Ce.jsxs)("div",{className:"app-wrapper",children:[Object(Ce.jsx)(Be,{}),Object(Ce.jsx)(ot,{}),Object(Ce.jsxs)("div",{className:"app-wrapper-content",children:[Object(Ce.jsx)(f.b,{path:"/dialogs",render:function(){return Object(Ce.jsx)(Kt,{})}}),Object(Ce.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(Ce.jsx)(un,{})}}),Object(Ce.jsx)(f.b,{path:"/login",render:function(){return Object(Ce.jsx)(nt,{})}}),Object(Ce.jsx)(f.b,{path:"/users",render:function(){return Object(Ce.jsx)(Dt,{})}}),Object(Ce.jsx)(f.b,{path:"/news",render:function(){return Object(Ce.jsx)(ln,{})}}),Object(Ce.jsx)(f.b,{path:"/music",render:function(){return Object(Ce.jsx)(rt,{})}}),Object(Ce.jsx)(f.b,{path:"/settings",render:function(){return Object(Ce.jsx)(dt,{})}})]})]}):Object(Ce.jsx)(De,{})}}]),n}(s.Component),jn=Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(T()),e.next=3,Promise.all([n]);case 3:t({type:me});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(dn),pn=function(e){return Object(Ce.jsx)(b.a,{basename:"/MyDemoSocialMedia",children:Object(Ce.jsx)(p.a,{store:ke,children:Object(Ce.jsx)(jn,{})})})};i.a.render(Object(Ce.jsx)(pn,{}),document.getElementById("root")),a()},32:function(e,t,n){e.exports={imageMainPost:"ProfileInfo_imageMainPost__1YGNm",profileInfo:"ProfileInfo_profileInfo__2IJgv",profileMainPhoto:"ProfileInfo_profileMainPhoto__ZRQYi",profilePhoto:"ProfileInfo_profilePhoto__9KLOb",Name:"ProfileInfo_Name__n3rkE",statusInfo:"ProfileInfo_statusInfo__1NEcn"}},37:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X",field:"FormsControl_field__1QdU4",checkbox:"FormsControl_checkbox__2e2PQ",buttonLogIn:"FormsControl_buttonLogIn__K1TlK"}},38:function(e,t,n){e.exports={cover:"users_cover__1FE5F",name_cover:"users_name_cover__h-YFt",status:"users_status__2-fS8",img_cover:"users_img_cover__17d9S",userPhoto:"users_userPhoto__1_En6",button:"users_button__2y6Lc",location:"users_location__2R4ze",name:"users_name__2Xz29",buttonFolUnfol:"users_buttonFolUnfol__2spVW"}},44:function(e,t,n){e.exports={wrapper:"News_wrapper__34DPz",picture:"News_picture__1ajqv",theme:"News_theme__1IGlM",link:"News_link__SrwTZ",mainNews:"News_mainNews__iXFSu"}},45:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogItems:"Dialogs_dialogItems__3flRc",messages:"Dialogs_messages__1w_Up",active:"Dialogs_active__2sQhs",cover:"Dialogs_cover__1iMzH",textarea:"Dialogs_textarea__PRKXN",buttonAddMess:"Dialogs_buttonAddMess__2kFYJ"}},50:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",unSelectedPage:"Paginator_unSelectedPage__EP-RC",pageList:"Paginator_pageList__2KIPm",btnPrevNext:"Paginator_btnPrevNext__2Hgwm"}},60:function(e,t,n){e.exports={textarea:"MyPosts_textarea__3KLbu",buttonAdd:"MyPosts_buttonAdd__so7GH",posts:"MyPosts_posts__3tZ1c"}},61:function(e,t,n){e.exports={header:"Header_header__1VCKf",circle:"Header_circle__1DvNz",sitebar:"Header_sitebar__2EY99",buttonLogOut:"Header_buttonLogOut__1Q8kN"}},75:function(e,t,n){e.exports={like:"Post_like__oViQh",item:"Post_item__ihtu9",ava:"Post_ava__2EGbS"}},94:function(e,t,n){e.exports={load:"preloader_load__gRR3Q",loader:"preloader_loader__19fHW"}}},[[303,1,2]]]);
//# sourceMappingURL=main.d938be1a.chunk.js.map