(this["webpackJsonpxlsx-merge-for-timashoff"]=this["webpackJsonpxlsx-merge-for-timashoff"]||[]).push([[0],{15:function(e,a){},19:function(e,a,t){e.exports={button:"style_button__1PJKE"}},24:function(e,a,t){},3:function(e,a,t){e.exports={app:"style_app__3zg94",header:"style_header__3Q95X",menu:"style_menu__iTiLp",main:"style_main___Jt4a",mainForm:"style_mainForm__bZgzH",label:"style_label__1hM64",labelText:"style_labelText__cNTSe",input:"style_input__3czM7",buttons:"style_buttons__3Kleu",logs:"style_logs__2LjcW",logsTitle:"style_logsTitle__lnG8q",logsTitleText:"style_logsTitleText__2rglZ",logsTitleButtons:"style_logsTitleButtons__Anp1s",eraseButton:"style_eraseButton__EaP15",logsBody:"style_logsBody__LSdWO",log:"style_log__Vniio"}},31:function(e,a){},32:function(e,a){},34:function(e,a,t){"use strict";t.r(a);var o,n=t(6),l=t(16),c=t.n(l),s=(t(24),t(1)),i=t(7),r=t.n(i),_=t(2),O=t(10),d=t(9),b={"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043a\u043b\u0430\u0434\u0430":"\u041a\u0412\u0418\u041a\u041f\u0410\u0420\u0422 (19731513076000)","\u0410\u0440\u0442\u0438\u043a\u0443\u043b":"","\u0418\u043c\u044f (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)":"","\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e":"","\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u044f\u0447\u0435\u0435\u043a  ":"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b"},u=t(4),j=t(17);!function(e){e.SET_ORIG_TEXT="SET_ORIG_TEXT",e.SET_ORIG_VALUE="SET_ORIG_VALUE",e.SET_ORIG_LOADING="SET_ORIG_LOADING",e.SET_ORIG_LOADED="SET_ORIG_LOADED",e.SET_ORIG_DATA="SET_ORIG_DATA",e.SET_WORKBOOK="SET_WORKBOOK",e.SET_MAP="SET_MAP",e.SET_WRONG_FILE_FORMAT="SET_WRONG_FILE_FORMAT",e.SET_DIFF_TEXT="SET_DIFF_TEXT",e.SET_DIFF_VALUE="SET_DIFF_VALUE",e.SET_DIFF_LOADING="SET_DIFF_LOADING",e.SET_DIFF_LOADED="SET_DIFF_LOADED",e.SET_DIFF_DATA="SET_DIFF_DATA",e.SET_DOWNLOAD_DISABLED="SET_DOWNLOAD_DISABLED",e.SET_LOG_VALUE="SET_LOG_VALUE",e.CLEAR_LOG="CLEAR_LOG",e.SET_MODAL_OPENED="SET_MODAL_OPENED",e.RESET_APP="RESET_APP",e.UPLOAD_TEMPLATE="UPLOAD_TEMPLATE",e.UPLOAD_TEMPLATE_SUCCESS="UPLOAD_TEMPLATE_SUCCESS",e.UPLOAD_TEMPLATE_FAIL="UPLOAD_TEMPLATE_FAIL",e.SAVE_TEMPLATE_WORKBOOK="SAVE_TEMPLATE_WORKBOOK"}(o||(o={}));var f=function(e){return{type:o.SET_ORIG_TEXT,payload:e}},p=function(e){return{type:o.SET_ORIG_VALUE,payload:e}},T=function(e){return{type:o.SET_ORIG_LOADING,payload:e}},E=function(e){return{type:o.SET_ORIG_LOADED,payload:e}},m=function(e){return{type:o.SET_ORIG_DATA,payload:e}},L=function(e){return{type:o.SET_WORKBOOK,payload:e}},g=function(e){return{type:o.SET_MAP,payload:e}},D=function(e){return{type:o.SET_WRONG_FILE_FORMAT,payload:e}},A=function(e){return{type:o.SET_DIFF_TEXT,payload:e}},x=function(e){return{type:o.SET_DIFF_LOADING,payload:e}},y=function(e){return{type:o.SET_DIFF_LOADED,payload:e}},S=function(e){return{type:o.SET_DOWNLOAD_DISABLED,payload:e}},h=function(e){return{type:o.SET_LOG_VALUE,payload:e}},F=function(e){return{type:o.SET_MODAL_OPENED,payload:e}},N={origText:"",origValue:"",isOrigLoading:!1,origLoaded:!1,origData:[],workBook:null,map:{},wrongFileFormat:!1,diffText:"",diffValue:"",isDiffLoading:!1,diffLoaded:!1,diffData:[],downloadIsDisabled:!0,isTemplateLoading:!1,templateLoaded:!1,templateFileName:"",templateData:[],templateWorkBook:null,logValue:[],modalOpened:!1},I=function(){var e,a,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,l=arguments.length>1?arguments[1]:void 0;return(t={},Object(_.a)(t,o.SET_ORIG_TEXT,Object(s.a)(Object(s.a)({},n),{},{origText:l.payload})),Object(_.a)(t,o.SET_ORIG_VALUE,Object(s.a)(Object(s.a)({},n),{},{origValue:l.payload})),Object(_.a)(t,o.SET_ORIG_LOADING,Object(s.a)(Object(s.a)({},n),{},{isOrigLoading:l.payload})),Object(_.a)(t,o.SET_ORIG_LOADED,Object(s.a)(Object(s.a)({},n),{},{origLoaded:l.payload})),Object(_.a)(t,o.SET_ORIG_DATA,Object(s.a)(Object(s.a)({},n),{},{origData:l.payload})),Object(_.a)(t,o.SET_WORKBOOK,Object(s.a)(Object(s.a)({},n),{},{workBook:l.payload})),Object(_.a)(t,o.SET_MAP,Object(s.a)(Object(s.a)({},n),{},{map:l.payload})),Object(_.a)(t,o.SET_WRONG_FILE_FORMAT,Object(s.a)(Object(s.a)({},n),{},{wrongFileFormat:l.payload})),Object(_.a)(t,o.SET_DIFF_TEXT,Object(s.a)(Object(s.a)({},n),{},{diffText:l.payload})),Object(_.a)(t,o.SET_DIFF_VALUE,Object(s.a)(Object(s.a)({},n),{},{diffValue:l.payload})),Object(_.a)(t,o.SET_DIFF_LOADING,Object(s.a)(Object(s.a)({},n),{},{isDiffLoading:l.payload})),Object(_.a)(t,o.SET_DIFF_LOADED,Object(s.a)(Object(s.a)({},n),{},{diffLoaded:l.payload})),Object(_.a)(t,o.SET_DIFF_DATA,Object(s.a)(Object(s.a)({},n),{},{diffData:l.payload})),Object(_.a)(t,o.SET_DOWNLOAD_DISABLED,Object(s.a)(Object(s.a)({},n),{},{downloadIsDisabled:l.payload})),Object(_.a)(t,o.SET_LOG_VALUE,Object(s.a)(Object(s.a)({},n),{},{logValue:n.logValue.concat(l.payload)})),Object(_.a)(t,o.CLEAR_LOG,Object(s.a)(Object(s.a)({},n),{},{logValue:[]})),Object(_.a)(t,o.SET_MODAL_OPENED,Object(s.a)(Object(s.a)({},n),{},{modalOpened:l.payload})),Object(_.a)(t,o.UPLOAD_TEMPLATE,Object(s.a)(Object(s.a)({},n),{},{downloadIsDisabled:!1,isTemplateLoading:!0})),Object(_.a)(t,o.UPLOAD_TEMPLATE_SUCCESS,Object(s.a)(Object(s.a)({},n),{},{isTemplateLoading:!1,templateFileName:null===(e=l.payload)||void 0===e?void 0:e.fileName,templateWorkBook:null===(a=l.payload)||void 0===a?void 0:a.workBook,templateLoaded:!0})),Object(_.a)(t,o.UPLOAD_TEMPLATE_FAIL,Object(s.a)(Object(s.a)({},n),{},{isTemplateLoading:!1,templateLoaded:!1})),Object(_.a)(t,o.SAVE_TEMPLATE_WORKBOOK,Object(s.a)(Object(s.a)({},n),{},{templateWorkBook:l.payload})),Object(_.a)(t,o.RESET_APP,Object(s.a)(Object(s.a)({},n),N)),t)[l.type]||n},v=function(e,a){return e.SheetNames[a]},k=function(e,a){return e.Sheets[v(e,a)]},P=function(e,a){return new Promise((function(t,o){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(){var e=n.result,o=Object(u.read)(e,{type:"buffer"}),l=o.Sheets[o.SheetNames[0]],c=u.utils.sheet_to_json(l,a);t([c,o])},n.onerror=function(){console.log("error",n.error),o(n.error)}}))},R=function(e,a){Object(u.writeFile)(e,"new_".concat(a),{compression:!0})},M=function(){var e=Object(n.useReducer)(I,N),a=Object(d.a)(e,2),t=a[0],l=a[1],c=t.origText,i=t.origValue,M=t.isOrigLoading,G=t.origLoaded,B=t.origData,C=t.workBook,w=t.map,V=t.wrongFileFormat,U=t.diffText,K=t.diffValue,W=t.isDiffLoading,X=t.diffLoaded,z=t.diffData,J=t.downloadIsDisabled,H=t.logValue,Z=t.modalOpened,Q=t.isTemplateLoading,$=t.templateFileName,ee=t.templateLoaded,ae=t.templateWorkBook,te=function(){var e=Object(O.a)(r.a.mark((function e(a){var t,o,n,c,s,i,O,b,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=37;break}return o=a.target.files[0],p(a.target.value),l(S(!0)),l(D(!1)),l(f(a.target.files[0].name)),l(T(!0)),n=Date.now(),l(h("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ".concat(a.target.files[0].name))),e.prev=9,e.next=12,P(o,{defval:"",header:"A",range:1});case 12:c=e.sent,s=Object(d.a)(c,2),i=s[0],O=s[1],b=Date.now(),l(h("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0437\u0430 ".concat(b-n," \u043c\u0441"))),console.log(i),l(m(i)),l(L(O)),u=i.reduce((function(e,a,t){return a.D&&a.D.trim()&&Object.assign(e,Object(_.a)({},a.D.trim(),t)),e}),{}),console.log(u),console.log(i.length-Object.keys(u).length),Object.keys(u).length?(l(g(u)),l(E(!0))):(l(D(!0)),l(E(!1))),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(9),console.log(e.t0),l(E(!1));case 32:return e.prev=32,l(T(!1)),e.finish(32);case 35:e.next=40;break;case 37:l(f("")),l(p("")),l(E(!1));case 40:case"end":return e.stop()}}),e,null,[[9,28,32,35]])})));return function(a){return e.apply(this,arguments)}}(),oe=function(){var e=Object(O.a)(r.a.mark((function e(a){var t,n,c,s,i,_;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=18;break}return l({type:o.UPLOAD_TEMPLATE}),n=a.target.files[0],c=a.target.files[0].name,e.prev=4,e.next=7,P(n);case 7:s=e.sent,i=Object(d.a)(s,2),_=i[1],console.log(_),l((r={fileName:c,workBook:_},{type:o.UPLOAD_TEMPLATE_SUCCESS,payload:r})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),l({type:o.UPLOAD_TEMPLATE_FAIL});case 18:case"end":return e.stop()}var r}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return{onSubmit:function(e){return e.preventDefault()},origValue:i,onOrigChange:te,isOrigLoading:M,origLoaded:G,origText:c,wrongFileFormat:V,diffValue:K,diffText:U,onDiffChange:function(){var e=Object(O.a)(r.a.mark((function e(a){var t,n,c,s,i,_,O;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=a.target.files)||void 0===t?void 0:t.length)){e.next=29;break}return l(S(!0)),l(A(a.target.files[0].name)),n=a.target.files[0],l(x(!0)),c=Date.now(),l(h("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ".concat(a.target.files[0].name))),e.prev=7,e.next=10,P(n,{header:"A"});case 10:s=e.sent,i=Object(d.a)(s,1),_=i[0],O=Date.now(),console.log(_),l(h("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0437\u0430 ".concat(O-c," \u043c\u0441"))),l((b=_,{type:o.SET_DIFF_DATA,payload:b})),l(y(!0)),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0),l(y(!1));case 24:return e.prev=24,l(x(!1)),e.finish(24);case 27:e.next=32;break;case 29:l(A("")),l((r="",{type:o.SET_DIFF_VALUE,payload:r})),l(y(!1));case 32:case"end":return e.stop()}var r,b}),e,null,[[7,20,24,27]])})));return function(a){return e.apply(this,arguments)}}(),isDiffLoading:W,diffLoaded:X,onProcessClick:function(){var e=0,a=Object(j.pluralize)(e,"\u043f\u043e\u0437\u0438\u0446\u0438\u044f","\u043f\u043e\u0437\u0438\u0446\u0438\u0438","\u043f\u043e\u0437\u0438\u0446\u0438\u0439"),t=B.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{K:0})})),n=z.reduce((function(a,t){var o=t[Y],n=t[q];if("string"===typeof o&&"number"===typeof n){var l=o.match(/\[(\d+)\]/);if(null!==l&&l[1].length&&void 0!==w[l[1]]){var c=a.newData,i=a.templateData,r=Object(s.a)(Object(s.a)({},b),{},{"\u0410\u0440\u0442\u0438\u043a\u0443\u043b":l[1],"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e":n});e++,c[w[l[1]]].K=n,i.push(r)}}return a}),{newData:t,templateData:[]}),c=n.newData,i=n.templateData;if(console.log(i),null!==C){var r=Object(s.a)({},C),_=v(C,0),O=Object(s.a)({},k(C,0));u.utils.sheet_add_json(O,c,{skipHeader:!0,origin:"A2"}),r.Sheets[_]=O,l(L(r))}if(null!==ae){var d=Object(s.a)({},ae),f=v(d,1),p=Object(s.a)({},k(d,1));u.utils.sheet_add_json(p,i),d.Sheets[f]=p,l(function(e){return{type:o.SAVE_TEMPLATE_WORKBOOK,payload:e}}(d))}l(h("\u0411\u044b\u043b\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0438 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e ".concat(e," ").concat(a))),l(m(c)),l(S(!1))},onSaveFileClick:function(){C&&R(C,c),ae&&R(ae,$),l({type:o.RESET_APP})},downloadIsDisabled:J,logValue:H,onLogErase:function(){return l({type:o.CLEAR_LOG})},onModalOpen:function(){return l(F(!0))},onModalClose:function(){return l(F(!1))},modalOpened:Z,onTemplateUpload:oe,isTemplateLoading:Q,templateFileName:$,templateLoaded:ee}},G=t(18),B=t.n(G),C=t(19),w=t.n(C),V=t(0),U=function(e){var a=e.icon,t=e.disabled,o=e.onClick;return Object(V.jsx)("button",{className:w.a.button,type:"submit",disabled:t,onClick:o,children:Object(V.jsx)("i",{className:B()("fas ",a)})})},K=t(5),W=t.n(K),X=function(e){var a=e.open,t=e.title,o=e.children,n=e.onModalClose;return a?Object(V.jsx)("div",{className:W.a.layer,onClick:n,children:Object(V.jsxs)("div",{className:W.a.modal,onClick:function(e){e.stopPropagation()},children:[Object(V.jsxs)("header",{className:W.a.header,children:[Object(V.jsx)("span",{className:W.a.title,children:t}),Object(V.jsx)("button",{className:W.a.close,onClick:n,children:Object(V.jsx)("i",{className:"fas fa-times"})})]}),Object(V.jsx)("div",{className:W.a.body,children:o}),Object(V.jsx)("footer",{className:W.a.footer})]})}):null},z=t(3),J=t.n(z),H=t(8),Z=t.n(H),Q=function(){return Object(V.jsx)("div",{className:Z.a.item,children:Object(V.jsxs)("label",{className:Z.a.checkBoxLabel,children:[Object(V.jsx)("input",{className:Z.a.checkbox,type:"checkbox"}),Object(V.jsx)("span",{className:Z.a.checkBoxLabelText,children:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u043e\u0433\u0438"})]})})},Y="B",q="C",$=function(){var e=M(),a=e.onSubmit,t=e.origValue,o=e.onOrigChange,n=e.isOrigLoading,l=e.origLoaded,c=e.origText,s=e.wrongFileFormat,i=e.diffValue,r=e.diffText,_=e.onDiffChange,O=e.isDiffLoading,d=e.diffLoaded,b=e.onProcessClick,u=e.onSaveFileClick,j=e.downloadIsDisabled,f=e.logValue,p=e.onLogErase,T=e.onModalOpen,E=e.onModalClose,m=e.modalOpened,L=e.onTemplateUpload,g=e.isTemplateLoading,D=e.templateFileName,A=e.templateLoaded;return Object(V.jsxs)("div",{className:J.a.app,children:[Object(V.jsx)("button",{className:J.a.menu,onClick:T,children:Object(V.jsx)("i",{className:"fas fa-bars"})}),Object(V.jsx)("header",{className:J.a.header}),Object(V.jsxs)("main",{className:J.a.main,children:[Object(V.jsxs)("form",{action:"",className:J.a.mainForm,onSubmit:a,children:[Object(V.jsxs)("label",{className:J.a.label,children:[Object(V.jsx)("input",{type:"file",className:J.a.input,onChange:o,accept:".xlsx",value:t}),Object(V.jsx)("span",{className:J.a.labelText,children:n?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":(s?"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442":c)||"\u041c\u043e\u0439 \u0448\u0430\u0431\u043b\u043e\u043d"}),n?Object(V.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(V.jsx)("i",{className:"fas fa-file-excel"})]}),Object(V.jsxs)("label",{className:J.a.label,children:[Object(V.jsx)("input",{type:"file",className:J.a.input,onChange:_,accept:".xlsx",value:i}),Object(V.jsx)("span",{className:J.a.labelText,children:O?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":r||"\u041e\u0441\u0442\u0430\u0442\u043a\u0438"}),O?Object(V.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(V.jsx)("i",{className:"fas fa-file-excel"})]}),Object(V.jsxs)("label",{className:J.a.label,children:[Object(V.jsx)("input",{type:"file",className:J.a.input,onChange:L,accept:".xlsx",value:""}),Object(V.jsx)("span",{className:J.a.labelText,children:g?"\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...":D||"\u0428\u0430\u0431\u043b\u043e\u043d \u041e\u0437\u043e\u043d"}),g?Object(V.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(V.jsx)("i",{className:"fas fa-file-excel"})]}),Object(V.jsxs)("div",{className:J.a.buttons,children:[Object(V.jsx)(U,{icon:"fa-cogs",disabled:!(l&&d&&A),onClick:b}),Object(V.jsx)(U,{icon:"fa-file-download",disabled:!l||!d||!A||j,onClick:u})]})]}),!!f.length&&Object(V.jsxs)("div",{className:J.a.logs,children:[Object(V.jsxs)("p",{className:J.a.logsTitle,children:[Object(V.jsx)("span",{className:J.a.logsTitleText,children:"\u041b\u043e\u0433\u0438:"}),Object(V.jsx)("span",{className:J.a.logsTitleButtons,children:Object(V.jsx)("button",{className:J.a.eraseButton,onClick:p,children:Object(V.jsx)("i",{className:"fas fa-eraser"})})})]}),Object(V.jsx)("div",{className:J.a.logsBody,children:f.map((function(e,a){return Object(V.jsx)("span",{className:J.a.log,children:e},a)}))})]}),Object(V.jsx)(X,{open:m,title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",onModalClose:E,children:Object(V.jsx)(Q,{})})]})]})};c.a.render(Object(V.jsx)($,{}),document.getElementById("root"))},5:function(e,a,t){e.exports={layer:"Modal_layer__3H1TR",modal:"Modal_modal__2Kv2A",header:"Modal_header__32LJt",close:"Modal_close__1Yvz5",title:"Modal_title__3lTgK",body:"Modal_body__YIivT",icon:"Modal_icon__1fQxp",message:"Modal_message__21its",footer:"Modal_footer__2zuj_",buttons:"Modal_buttons__r9gVu"}},8:function(e,a,t){e.exports={item:"style_item__ZjR_F",checkBoxLabel:"style_checkBoxLabel__uAy01",checkbox:"style_checkbox__1MuOU",checkBoxLabelText:"style_checkBoxLabelText__1_65I"}}},[[34,1,2]]]);