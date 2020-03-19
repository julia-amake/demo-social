(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[4],{219:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return d}));var n=a(3),r=a(218),o=a(0),c=a.n(o),i=a(220),s=a.n(i),l=a(101),u=function(e){var t=e.input,a=e.meta,o=a.touched,i=a.error,l=(a.submitFailed,e.fieldType),u=Object(r.a)(e,["input","meta","fieldType"]),m=o&&i;return c.a.createElement("div",{className:"".concat(s.a.formControl," ").concat(m&&s.a.error)},c.a.createElement(l,Object(n.a)({},t,{},u)),m&&c.a.createElement("span",{className:s.a.errorMessage},i))},m=function(e){return c.a.createElement(u,Object.assign({fieldType:"textarea"},e))},f=function(e){return c.a.createElement(u,Object.assign({fieldType:"input"},e))},d=function(e,t,a,n,r){return c.a.createElement("label",null,c.a.createElement(l.a,{type:e,name:t,component:a,placeholder:n,validate:r}))}},220:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3IZ5A",error:"FormsControls_error__1QSyu",errorMessage:"FormsControls_errorMessage__2Lxl7"}},222:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n,r=function(e){return e||"number"===typeof e?void 0:"Field is Required"},o=(n=300,function(e){return e&&e.length>n?"Must be ".concat(n," characters or less"):void 0}),c=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},224:function(e,t,a){e.exports=a.p+"static/media/unnamed.f566ef83.jpg"},225:function(e,t,a){e.exports={cover:"ProfileInfo_cover__24oLn",info:"ProfileInfo_info__2nY6a",avatar:"ProfileInfo_avatar__2z4QN",desc:"ProfileInfo_desc__3lf12",descAbout:"ProfileInfo_descAbout__3i6rf",name:"ProfileInfo_name__BDBmC",contacts:"ProfileInfo_contacts__3XFcv",contacts__item:"ProfileInfo_contacts__item__rDhza",editLink:"ProfileInfo_editLink__2MDi3",editForm:"ProfileInfo_editForm__1svSS"}},247:function(e,t,a){e.exports={wrapper:"ProfileStatus_wrapper__16ihi",status:"ProfileStatus_status__3o_Zx",statusHover:"ProfileStatus_statusHover__3sD4b",editor:"ProfileStatus_editor__C-crO"}},288:function(e,t,a){e.exports={posts:"MyPosts_posts__1P0sL",new:"MyPosts_new__1nTxl"}},289:function(e,t,a){e.exports={item:"Post_item__2yzXq",pic:"Post_pic__XwlqK"}},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=a(218),i=a(225),s=a.n(i),l=a(224),u=a.n(l),m=a(40),f=a(247),d=a.n(f);var p=function(e){var t=e.status,a=e.updateStatus,c=e.isOwner,i=o(Object(n.useState)(!1),2),s=i[0],l=i[1],u=o(Object(n.useState)(t),2),m=u[0],f=u[1],p=c?"Add status":"";return Object(n.useEffect)((function(){f(t)}),[t]),r.a.createElement("div",{className:d.a.wrapper},s?r.a.createElement("input",{className:d.a.editor,type:"text",value:m,onBlur:function(){l(!1),m!==t&&a(m)},autoFocus:!0,onChange:function(e){return f(e.target.value)}}):r.a.createElement("div",{className:d.a.status+(c?" "+d.a.statusHover:""),onClick:function(){c&&l(!0)}},m||p))},b=function(e){var t=e.contactName,a=e.contacts;return a[t]?r.a.createElement("div",{className:s.a.contacts__item},t,": ",a[t]):null},v=function(e){var t=e.contacts;return r.a.createElement("div",{className:s.a.contacts},r.a.createElement("h3",null,"Contacts"),Object.keys(t).some((function(e){return t[e]}))?r.a.createElement("div",null,Object.keys(t).map((function(e){return r.a.createElement(b,{key:e,contactName:e,contacts:t})}))):"The user didn't leave any contacts")},_=a(219),E=a(102),g=a(220),P=a.n(g),y=Object(E.a)({form:"editProfile"})((function(e){var t=e.contacts,a=e.handleSubmit,n=e.error;return r.a.createElement("form",{className:s.a.editForm,onSubmit:a},r.a.createElement("div",null,"Full name: ",Object(_.c)("text","fullName",_.a,"Your full name")),r.a.createElement("div",null,r.a.createElement("div",null,"About me: ",Object(_.c)("","aboutMe",_.b,"")),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",Object(_.c)("checkbox","lookingForAJob",_.a,"")),r.a.createElement("div",null,"My professional skills: ",Object(_.c)("","lookingForAJobDescription",_.b,"")),r.a.createElement("div",{className:s.a.contacts},r.a.createElement("h2",null,"Contacts"),Object.keys(t).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("b",null,e)," ",Object(_.c)("text","contacts.".concat(e),_.a,e))})))),n&&r.a.createElement("div",{className:P.a.errorMessage},n),r.a.createElement("button",{className:"btn"},"Save"))}));function h(e){var t=e.profile,a=e.contacts,n=e.isOwner,o=e.status,c=e.updateStatus,i=e.setEditMode,l=t.fullName,u=t.aboutMe,m=t.lookingForAJob,f=t.lookingForAJobDescription;return r.a.createElement("div",{className:s.a.desc},r.a.createElement("div",{className:s.a.name},l),r.a.createElement("div",{className:s.a.data},r.a.createElement(p,{updateStatus:c,status:o,isOwner:n}),r.a.createElement("h3",null,"About me"),r.a.createElement("div",{className:s.a.descAbout},u),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",m?"Yes":"No"),r.a.createElement("div",null,f&&f),r.a.createElement(v,{contacts:a,isOwner:n})),n&&r.a.createElement("button",{className:s.a.editLink,onClick:function(){return i(!0)}},"Edit Profile"))}var O=r.a.memo((function(e){var t=e.profile,a=e.myId,i=e.updateProfile,l=e.updateMainPic,f=Object(c.a)(e,["profile","myId","updateProfile","updateMainPic"]),d=o(Object(n.useState)(!1),2),p=d[0],b=d[1];if(!t)return r.a.createElement(m.a,null);var v=t.photos,_=t.userId,E=t.contacts,g=Object(c.a)(t,["photos","userId","contacts"]),P=a===_;return r.a.createElement("div",{className:s.a.info},r.a.createElement("div",{className:s.a.avatar},r.a.createElement("img",{src:v.large||u.a,alt:""}),P&&r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files;t.length&&l(t[0])}})),p?r.a.createElement(y,Object.assign({},f,{profile:g,isOwner:P,onSubmit:function(e){i(e,a).then((function(){return b(!1)}))},initialValues:t,contacts:E})):r.a.createElement(h,Object.assign({},f,{profile:g,contacts:E,isOwner:P,setEditMode:b})))})),j=a(51),N=a(18),S=a(288),k=a.n(S),w=a(289),I=a.n(w),F=function(e){var t=e.message,a=e.likesCount;return r.a.createElement("div",{className:I.a.item},r.a.createElement("img",{className:I.a.pic,src:"https://i.pinimg.com/736x/62/8f/49/628f49798bba23a996bbb0fe8aad174e--avatar-james-cameron-avatar-fan-art.jpg",width:"100",alt:""}),t,r.a.createElement("span",null,a," likes"))},A=a(101),M=a(222);window.props=[];var C=Object(E.a)({form:"addNewPost"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(A.a,{component:_.b,name:"newPostBody",validate:[M.c,M.b],placeholder:"Write here"}),r.a.createElement("button",{className:"btn"},"Add post"))})),x=function(e){var t=e.posts,a=e.addPost;return r.a.createElement("div",null,"My Posts",r.a.createElement("div",{className:k.a.new},r.a.createElement("h3",null,"Add new post"),r.a.createElement(C,Object.assign({onSubmit:function(e){a(e)}},e))),r.a.createElement("div",{className:k.a.posts},t.map((function(e){return r.a.createElement(F,{key:e.id,message:e.message,likesCount:e.likesCount})}))))},L={addPost:j.a},T=Object(N.b)((function(e){return{posts:e.profilePage.posts}}),L)(x),D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,e),r.a.createElement(T,null))},J=a(17),Z=a(14),B={getProfile:j.c,getStatus:j.d,updateStatus:j.g,updateProfile:j.f,updateMainPic:j.e};t.default=Object(Z.d)(Object(N.b)((function(e){return{profile:e.profilePage.profile,myId:e.auth.userId,status:e.profilePage.status,isFetching:e.profilePage.isFetching}}),B),J.f)((function(e){var t=e.myId,a=e.getProfile,o=e.getStatus,c=e.isFetching,i=e.match.params.userId,s=void 0===i?t:i,l=e.history,u=e.profile,f=e.status,d=e.updateStatus,p=e.updateProfile,b=e.updateMainPic;return Object(n.useEffect)((function(){s?(a(s),o(s)):setTimeout((function(){return l.push("/login")}),0)}),[s]),r.a.createElement(r.a.Fragment,null,(!s||c)&&r.a.createElement(m.a,null),u&&r.a.createElement(D,{profile:u,status:f,myId:t,updateStatus:d,updateProfile:p,updateMainPic:b}))}))}}]);
//# sourceMappingURL=4.3fbf5963.chunk.js.map