(this["webpackJsonpxlsx-merge-for-timashoff"]=this["webpackJsonpxlsx-merge-for-timashoff"]||[]).push([[0],{15:function(e,a){},19:function(e,a,t){e.exports={button:"style_button__1PJKE"}},24:function(e,a,t){},3:function(e,a,t){e.exports={app:"style_app__3zg94",header:"style_header__3Q95X",menu:"style_menu__iTiLp",main:"style_main___Jt4a",mainForm:"style_mainForm__bZgzH",label:"style_label__1hM64",labelText:"style_labelText__cNTSe",input:"style_input__3czM7",buttons:"style_buttons__3Kleu",logs:"style_logs__2LjcW",logsTitle:"style_logsTitle__lnG8q",logsTitleText:"style_logsTitleText__2rglZ",logsTitleButtons:"style_logsTitleButtons__Anp1s",eraseButton:"style_eraseButton__EaP15",logsBody:"style_logsBody__LSdWO",log:"style_log__Vniio"}},31:function(e,a){},32:function(e,a){},34:function(e,a,t){"use strict";t.r(a);var n,l=t(5),o=t(16),c=t.n(o),s=(t(24),t(1)),i=t(7),r=t.n(i),_=t(2),d=t(10),O=t(8),b=t(6),u=t(17);!function(e){e.SET_ORIG_TEXT="SET_ORIG_TEXT",e.SET_ORIG_VALUE="SET_ORIG_VALUE",e.SET_ORIG_LOADING="SET_ORIG_LOADING",e.SET_ORIG_LOADED="SET_ORIG_LOADED",e.SET_ORIG_DATA="SET_ORIG_DATA",e.SET_WORKBOOK="SET_WORKBOOK",e.SET_MAP="SET_MAP",e.SET_WRONG_FILE_FORMAT="SET_WRONG_FILE_FORMAT",e.SET_DIFF_TEXT="SET_DIFF_TEXT",e.SET_DIFF_VALUE="SET_DIFF_VALUE",e.SET_DIFF_LOADING="SET_DIFF_LOADING",e.SET_DIFF_LOADED="SET_DIFF_LOADED",e.SET_DIFF_DATA="SET_DIFF_DATA",e.SET_DOWNLOAD_DISABLED="SET_DOWNLOAD_DISABLED",e.SET_LOG_VALUE="SET_LOG_VALUE",e.CLEAR_LOG="CLEAR_LOG",e.SET_MODAL_OPENED="SET_MODAL_OPENED",e.RESET_APP="RESET_APP",e.UPLOAD_TEMPLATE="UPLOAD_TEMPLATE",e.UPLOAD_TEMPLATE_SUCCESS="UPLOAD_TEMPLATE_SUCCESS",e.UPLOAD_TEMPLATE_FAIL="UPLOAD_TEMPLATE_FAIL",e.SAVE_TEMPLATE_DATA="SAVE_TEMPLATE_DATA"}(n||(n={}));var j=function(e){return{type:n.SET_ORIG_TEXT,payload:e}},f=function(e){return{type:n.SET_ORIG_VALUE,payload:e}},p=function(e){return{type:n.SET_ORIG_LOADING,payload:e}},T=function(e){return{type:n.SET_ORIG_LOADED,payload:e}},E=function(e){return{type:n.SET_ORIG_DATA,payload:e}},m=function(e){return{type:n.SET_WORKBOOK,payload:e}},L=function(e){return{type:n.SET_MAP,payload:e}},g=function(e){return{type:n.SET_WRONG_FILE_FORMAT,payload:e}},D=function(e){return{type:n.SET_DIFF_TEXT,payload:e}},A=function(e){return{type:n.SET_DIFF_LOADING,payload:e}},x=function(e){return{type:n.SET_DIFF_LOADED,payload:e}},y=function(e){return{type:n.SET_DOWNLOAD_DISABLED,payload:e}},S=function(e){return{type:n.SET_LOG_VALUE,payload:e}},h=function(e){return{type:n.SET_MODAL_OPENED,payload:e}},F={origText:"",origValue:"",isOrigLoading:!1,origLoaded:!1,origData:[],workBook:null,map:{},wrongFileFormat:!1,diffText:"",diffValue:"",isDiffLoading:!1,diffLoaded:!1,diffData:[],downloadIsDisabled:!0,isTemplateLoading:!1,templateLoaded:!1,templateFileName:"",templateItem:{},templateData:[],templateWorkBook:null,logValue:[],modalOpened:!1},N=function(){var e,a,t,l,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,c=arguments.length>1?arguments[1]:void 0;return(l={},Object(_.a)(l,n.SET_ORIG_TEXT,Object(s.a)(Object(s.a)({},o),{},{origText:c.payload})),Object(_.a)(l,n.SET_ORIG_VALUE,Object(s.a)(Object(s.a)({},o),{},{origValue:c.payload})),Object(_.a)(l,n.SET_ORIG_LOADING,Object(s.a)(Object(s.a)({},o),{},{isOrigLoading:c.payload})),Object(_.a)(l,n.SET_ORIG_LOADED,Object(s.a)(Object(s.a)({},o),{},{origLoaded:c.payload})),Object(_.a)(l,n.SET_ORIG_DATA,Object(s.a)(Object(s.a)({},o),{},{origData:c.payload})),Object(_.a)(l,n.SET_WORKBOOK,Object(s.a)(Object(s.a)({},o),{},{workBook:c.payload})),Object(_.a)(l,n.SET_MAP,Object(s.a)(Object(s.a)({},o),{},{map:c.payload})),Object(_.a)(l,n.SET_WRONG_FILE_FORMAT,Object(s.a)(Object(s.a)({},o),{},{wrongFileFormat:c.payload})),Object(_.a)(l,n.SET_DIFF_TEXT,Object(s.a)(Object(s.a)({},o),{},{diffText:c.payload})),Object(_.a)(l,n.SET_DIFF_VALUE,Object(s.a)(Object(s.a)({},o),{},{diffValue:c.payload})),Object(_.a)(l,n.SET_DIFF_LOADING,Object(s.a)(Object(s.a)({},o),{},{isDiffLoading:c.payload})),Object(_.a)(l,n.SET_DIFF_LOADED,Object(s.a)(Object(s.a)({},o),{},{diffLoaded:c.payload})),Object(_.a)(l,n.SET_DIFF_DATA,Object(s.a)(Object(s.a)({},o),{},{diffData:c.payload})),Object(_.a)(l,n.SET_DOWNLOAD_DISABLED,Object(s.a)(Object(s.a)({},o),{},{downloadIsDisabled:c.payload})),Object(_.a)(l,n.SET_LOG_VALUE,Object(s.a)(Object(s.a)({},o),{},{logValue:o.logValue.concat(c.payload)})),Object(_.a)(l,n.CLEAR_LOG,Object(s.a)(Object(s.a)({},o),{},{logValue:[]})),Object(_.a)(l,n.SET_MODAL_OPENED,Object(s.a)(Object(s.a)({},o),{},{modalOpened:c.payload})),Object(_.a)(l,n.UPLOAD_TEMPLATE,Object(s.a)(Object(s.a)({},o),{},{downloadIsDisabled:!1,isTemplateLoading:!0})),Object(_.a)(l,n.UPLOAD_TEMPLATE_SUCCESS,Object(s.a)(Object(s.a)({},o),{},{isTemplateLoading:!1,templateFileName:null===(e=c.payload)||void 0===e?void 0:e.fileName,templateItem:null===(a=c.payload)||void 0===a?void 0:a.data,templateWorkBook:null===(t=c.payload)||void 0===t?void 0:t.workBook,templateLoaded:!0})),Object(_.a)(l,n.UPLOAD_TEMPLATE_FAIL,Object(s.a)(Object(s.a)({},o),{},{isTemplateLoading:!1,templateLoaded:!1})),Object(_.a)(l,n.SAVE_TEMPLATE_DATA,Object(s.a)(Object(s.a)({},o),{},{templateData:c.payload})),Object(_.a)(l,n.RESET_APP,Object(s.a)(Object(s.a)({},o),F)),l)[c.type]||o},I=function(e,a){return e.SheetNames[a]},v=function(e,a){return new Promise((function(t,n){var l=new FileReader;l.readAsArrayBuffer(e),l.onload=function(){var e=l.result,n=Object(b.read)(e,{type:"buffer"}),o=n.Sheets[n.SheetNames[0]],c=b.utils.sheet_to_json(o,a);t([c,n])},l.onerror=function(){console.log("error",l.error),n(l.error)}}))},k=function(){var e=Object(l.useReducer)(N,F),a=Object(O.a)(e,2),t=a[0],o=a[1],c=t.origText,i=t.origValue,k=t.isOrigLoading,P=t.origLoaded,M=t.origData,R=t.workBook,G=t.map,C=t.wrongFileFormat,w=t.diffText,V=t.diffValue,B=t.isDiffLoading,U=t.diffLoaded,W=t.diffData,K=t.downloadIsDisabled,X=t.logValue,z=t.modalOpened,J=t.isTemplateLoading,Q=t.templateFileName,Y=t.templateLoaded,q=function(){var e=Object(d.a)(r.a.mark((function e(a){var t,n,l,c,s,i,d,b,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=37;break}return n=a.target.files[0],f(a.target.value),o(y(!0)),o(g(!1)),o(j(a.target.files[0].name)),o(p(!0)),l=Date.now(),o(S("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ".concat(a.target.files[0].name))),e.prev=9,e.next=12,v(n,{defval:"",header:"A",range:1});case 12:c=e.sent,s=Object(O.a)(c,2),i=s[0],d=s[1],b=Date.now(),o(S("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0437\u0430 ".concat(b-l," \u043c\u0441"))),console.log(i),o(E(i)),o(m(d)),u=i.reduce((function(e,a,t){return a.D&&a.D.trim()&&Object.assign(e,Object(_.a)({},a.D.trim(),t)),e}),{}),console.log(u),console.log(i.length-Object.keys(u).length),Object.keys(u).length?(o(L(u)),o(T(!0))):(o(g(!0)),o(T(!1))),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(9),console.log(e.t0),o(T(!1));case 32:return e.prev=32,o(p(!1)),e.finish(32);case 35:e.next=40;break;case 37:o(j("")),o(f("")),o(T(!1));case 40:case"end":return e.stop()}}),e,null,[[9,28,32,35]])})));return function(a){return e.apply(this,arguments)}}(),$=function(){var e=Object(d.a)(r.a.mark((function e(a){var t,l,c,s,i,_,d,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=20;break}return o({type:n.UPLOAD_TEMPLATE}),l=a.target.files[0],c=a.target.files[0].name,e.prev=4,e.next=7,v(l);case 7:s=e.sent,i=Object(O.a)(s,2),_=Object(O.a)(i[0],1),d=_[0],b=i[1],console.log(d,b),o((r={data:d,fileName:c,workBook:b},{type:n.UPLOAD_TEMPLATE_SUCCESS,payload:r})),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0),o({type:n.UPLOAD_TEMPLATE_FAIL});case 20:case"end":return e.stop()}var r}),e,null,[[4,16]])})));return function(a){return e.apply(this,arguments)}}();return{onSubmit:function(e){return e.preventDefault()},origValue:i,onOrigChange:q,isOrigLoading:k,origLoaded:P,origText:c,wrongFileFormat:C,diffValue:V,diffText:w,onDiffChange:function(){var e=Object(d.a)(r.a.mark((function e(a){var t,l,c,s,i,_,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=29;break}return o(y(!0)),o(D(a.target.files[0].name)),l=a.target.files[0],o(A(!0)),c=Date.now(),o(S("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ".concat(a.target.files[0].name))),e.prev=7,e.next=10,v(l,{header:"A"});case 10:s=e.sent,i=Object(O.a)(s,1),_=i[0],d=Date.now(),console.log(_),o(S("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0437\u0430 ".concat(d-c," \u043c\u0441"))),o((b=_,{type:n.SET_DIFF_DATA,payload:b})),o(x(!0)),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0),o(x(!1));case 24:return e.prev=24,o(A(!1)),e.finish(24);case 27:e.next=32;break;case 29:o(D("")),o((r="",{type:n.SET_DIFF_VALUE,payload:r})),o(x(!1));case 32:case"end":return e.stop()}var r,b}),e,null,[[7,20,24,27]])})));return function(a){return e.apply(this,arguments)}}(),isDiffLoading:B,diffLoaded:U,onProcessClick:function(){var e=0,a=Object(u.pluralize)(e,"\u043f\u043e\u0437\u0438\u0446\u0438\u044f","\u043f\u043e\u0437\u0438\u0446\u0438\u0438","\u043f\u043e\u0437\u0438\u0446\u0438\u0439"),t=M.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{K:0})})),n=W.reduce((function(a,t){var n=t[H],l=t[Z];if("string"===typeof n&&"number"===typeof l){var o=n.match(/\[(\d+)\]/);if(null!==o&&o[1].length&&void 0!==G[o[1]]){var c=a.newData;e++,c[G[o[1]]].K=l}}return a}),{newData:t,templateData:[]}),l=n.newData;n.templateData;if(null!==R){var c=Object(s.a)({},R),i=I(R,0),r=Object(s.a)({},function(e,a){return e.Sheets[I(e,a)]}(R,0));b.utils.sheet_add_json(r,l,{skipHeader:!0,origin:"A2"}),c.Sheets[i]=r,o(m(c))}o(S("\u0411\u044b\u043b\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0438 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e ".concat(e," ").concat(a))),o(E(l)),o(y(!1))},onSaveFileClick:function(){R&&function(e,a){Object(b.writeFile)(e,"new_".concat(a),{compression:!0})}(R,c),o({type:n.RESET_APP})},downloadIsDisabled:K,logValue:X,onLogErase:function(){return o({type:n.CLEAR_LOG})},onModalOpen:function(){return o(h(!0))},onModalClose:function(){return o(h(!1))},modalOpened:z,onTemplateUpload:$,isTemplateLoading:J,templateFileName:Q,templateLoaded:Y}},P=t(18),M=t.n(P),R=t(19),G=t.n(R),C=t(0),w=function(e){var a=e.icon,t=e.disabled,n=e.onClick;return Object(C.jsx)("button",{className:G.a.button,type:"submit",disabled:t,onClick:n,children:Object(C.jsx)("i",{className:M()("fas ",a)})})},V=t(4),B=t.n(V),U=function(e){var a=e.open,t=e.title,n=e.children,l=e.onModalClose;return a?Object(C.jsx)("div",{className:B.a.layer,onClick:l,children:Object(C.jsxs)("div",{className:B.a.modal,onClick:function(e){e.stopPropagation()},children:[Object(C.jsxs)("header",{className:B.a.header,children:[Object(C.jsx)("span",{className:B.a.title,children:t}),Object(C.jsx)("button",{className:B.a.close,onClick:l,children:Object(C.jsx)("i",{className:"fas fa-times"})})]}),Object(C.jsx)("div",{className:B.a.body,children:n}),Object(C.jsx)("footer",{className:B.a.footer})]})}):null},W=t(3),K=t.n(W),X=t(9),z=t.n(X),J=function(){return Object(C.jsx)("div",{className:z.a.item,children:Object(C.jsxs)("label",{className:z.a.checkBoxLabel,children:[Object(C.jsx)("input",{className:z.a.checkbox,type:"checkbox"}),Object(C.jsx)("span",{className:z.a.checkBoxLabelText,children:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u043e\u0433\u0438"})]})})},H="B",Z="C",Q=function(){var e=k(),a=e.onSubmit,t=e.origValue,n=e.onOrigChange,l=e.isOrigLoading,o=e.origLoaded,c=e.origText,s=e.wrongFileFormat,i=e.diffValue,r=e.diffText,_=e.onDiffChange,d=e.isDiffLoading,O=e.diffLoaded,b=e.onProcessClick,u=e.onSaveFileClick,j=e.downloadIsDisabled,f=e.logValue,p=e.onLogErase,T=e.onModalOpen,E=e.onModalClose,m=e.modalOpened,L=e.onTemplateUpload,g=e.isTemplateLoading,D=e.templateFileName,A=e.templateLoaded;return Object(C.jsxs)("div",{className:K.a.app,children:[Object(C.jsx)("button",{className:K.a.menu,onClick:T,children:Object(C.jsx)("i",{className:"fas fa-bars"})}),Object(C.jsx)("header",{className:K.a.header}),Object(C.jsxs)("main",{className:K.a.main,children:[Object(C.jsxs)("form",{action:"",className:K.a.mainForm,onSubmit:a,children:[Object(C.jsxs)("label",{className:K.a.label,children:[Object(C.jsx)("input",{type:"file",className:K.a.input,onChange:n,accept:".xlsx",value:t}),Object(C.jsx)("span",{className:K.a.labelText,children:l?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":(s?"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442":c)||"\u041c\u043e\u0439 \u0448\u0430\u0431\u043b\u043e\u043d"}),l?Object(C.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(C.jsx)("i",{className:"fas fa-file-excel"})]}),Object(C.jsxs)("label",{className:K.a.label,children:[Object(C.jsx)("input",{type:"file",className:K.a.input,onChange:_,accept:".xlsx",value:i}),Object(C.jsx)("span",{className:K.a.labelText,children:d?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":r||"\u041e\u0441\u0442\u0430\u0442\u043a\u0438"}),d?Object(C.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(C.jsx)("i",{className:"fas fa-file-excel"})]}),Object(C.jsxs)("label",{className:K.a.label,children:[Object(C.jsx)("input",{type:"file",className:K.a.input,onChange:L,accept:".xlsx",value:""}),Object(C.jsx)("span",{className:K.a.labelText,children:g?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":D||"\u0428\u0430\u0431\u043b\u043e\u043d \u041e\u0437\u043e\u043d"}),g?Object(C.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(C.jsx)("i",{className:"fas fa-file-excel"})]}),Object(C.jsxs)("div",{className:K.a.buttons,children:[Object(C.jsx)(w,{icon:"fa-cogs",disabled:!(o&&O&&A),onClick:b}),Object(C.jsx)(w,{icon:"fa-file-download",disabled:!o||!O||!A||j,onClick:u})]})]}),!!f.length&&Object(C.jsxs)("div",{className:K.a.logs,children:[Object(C.jsxs)("p",{className:K.a.logsTitle,children:[Object(C.jsx)("span",{className:K.a.logsTitleText,children:"\u041b\u043e\u0433\u0438:"}),Object(C.jsx)("span",{className:K.a.logsTitleButtons,children:Object(C.jsx)("button",{className:K.a.eraseButton,onClick:p,children:Object(C.jsx)("i",{className:"fas fa-eraser"})})})]}),Object(C.jsx)("div",{className:K.a.logsBody,children:f.map((function(e,a){return Object(C.jsx)("span",{className:K.a.log,children:e},a)}))})]}),Object(C.jsx)(U,{open:m,title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",onModalClose:E,children:Object(C.jsx)(J,{})})]})]})};c.a.render(Object(C.jsx)(Q,{}),document.getElementById("root"))},4:function(e,a,t){e.exports={layer:"Modal_layer__3H1TR",modal:"Modal_modal__2Kv2A",header:"Modal_header__32LJt",close:"Modal_close__1Yvz5",title:"Modal_title__3lTgK",body:"Modal_body__YIivT",icon:"Modal_icon__1fQxp",message:"Modal_message__21its",footer:"Modal_footer__2zuj_",buttons:"Modal_buttons__r9gVu"}},9:function(e,a,t){e.exports={item:"style_item__ZjR_F",checkBoxLabel:"style_checkBoxLabel__uAy01",checkbox:"style_checkbox__1MuOU",checkBoxLabelText:"style_checkBoxLabelText__1_65I"}}},[[34,1,2]]]);