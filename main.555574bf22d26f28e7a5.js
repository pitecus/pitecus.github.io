(self.webpackChunkresume=self.webpackChunkresume||[]).push([["main"],{8255:e=>{function t(e){return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=()=>[],t.resolve=t,t.id=8255,e.exports=t},5770:(e,t,s)=>{"use strict";var i=s(9624),n=s(5614),o=s(8937);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&n._UZ(0,"router-outlet")},directives:[o.lC],encapsulation:2}),e})();const l=JSON.parse('{"build":{"description":"Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)","emoji":"\ud83d\ude80","title":"Builds"},"chore":{"description":"Other changes that don\'t modify src or test files","emoji":"\ud83e\uddf9","title":"Chores"},"ci":{"description":"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)","emoji":"\ud83d\udea5","title":"Continuous Integrations"},"docs":{"description":"Documentation only changes","emoji":"\ud83d\udcda","title":"Documentation"},"feat":{"description":"A new feature","emoji":"\ud83c\udf1f","title":"Features"},"fix":{"description":"A bug fix","emoji":"\ud83d\udc1e","title":"Bug Fixes"},"perf":{"description":"A code change that improves performance","emoji":"\ud83d\udcb0","title":"Performance Improvements"},"refactor":{"description":"A code change that neither fixes a bug nor adds a feature","emoji":"\u267b\ufe0f","title":"Code Refactoring"},"revert":{"description":"Reverts a previous commit","emoji":"\ud83d\udc8a","title":"Reverts"},"style":{"description":"Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)","emoji":"\ud83c\udfa8","title":"Styles"},"test":{"description":"Adding missing tests or correcting existing tests","emoji":"\ud83d\ude93","title":"Tests"}}');var a=s(2693),c=s(1116);function g(e,t){if(1&e&&(n.TgZ(0,"li",14),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.Oqu(e.message.subject)}}function p(e,t){if(1&e&&(n.TgZ(0,"div",9),n.TgZ(1,"h3",10),n._uU(2),n.TgZ(3,"span",11),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"ul",12),n.YNc(6,g,2,1,"li",13),n.qZA(),n.qZA()),2&e){const e=t.$implicit,s=n.oxw(2);n.xp6(2),n.hij(" ",s.commitTypes[e.type].emoji," "),n.xp6(2),n.Oqu(s.commitTypes[e.type].title),n.xp6(2),n.Q6J("ngForOf",e.changes)}}function u(e,t){if(1&e&&(n.TgZ(0,"div",5),n.TgZ(1,"h2",6),n._uU(2),n.qZA(),n.TgZ(3,"div",7),n.YNc(4,p,7,3,"div",8),n.qZA(),n.qZA()),2&e){const e=t.$implicit;n.xp6(2),n.hij(" Release ",e.version," "),n.xp6(2),n.Q6J("ngForOf",e.changes)}}let d=(()=>{class e{constructor(e){this.releases=[],this.commitTypes=l,this.sortingTypes={feat:1,fix:2,perf:3,test:4,style:5,revert:6,build:7,refactor:8,chore:9,docs:10,ci:11},e.get("/assets/changelog.json").subscribe(e=>{let t,s;e.forEach(e=>{const i=e.decoration.replace(/[ \(\)]/g,"").split(",").filter(e=>!0===e.startsWith("tag:")).pop();void 0===i&&void 0!==t||(s={},t=void 0!==i?{changes:[],version:i.replace("tag:","")}:{changes:[],version:""},this.releases.push(t));const[n,o]=e.subject.split(":",2);void 0===s[n]&&(s[n]=[],t.changes.push({type:n,changes:s[n]})),s[n].push({commiter:e.commiter,date:e.date,message:{scope:"",subject:o.trim(),type:n}})}),this.releases.forEach(e=>{e.changes.sort((e,t)=>this.sortingTypes[e.type]-this.sortingTypes[t.type])})})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-changelog"]],decls:7,vars:1,consts:[[1,"flex","justify-center"],[1,"flex","flex-col","justify-between","max-w-4xl","min-w-full","p-4","space-y-2"],[1,"border-b-2","border-gray-300","font-bold","text-2xl","text-indigo-900","flex","justify-between"],[1,"flex","flex-col"],["class","rounded-lg bg-white shadow px-2 pt-2 mb-2",4,"ngFor","ngForOf"],[1,"rounded-lg","bg-white","shadow","px-2","pt-2","mb-2"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900","flex","justify-between"],[1,"mt-2","flex","flex-row","flex-wrap"],["class","shadow p-2 rounded-lg bg-gray-50 w-96 mr-2 mb-2",4,"ngFor","ngForOf"],[1,"shadow","p-2","rounded-lg","bg-gray-50","w-96","mr-2","mb-2"],[1,"text-lg","text-gray-700","border-b-2"],[1,"ml-2"],[1,"list-disc","list-inside"],["class","",4,"ngFor","ngForOf"],[1,""]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"header"),n.TgZ(3,"h1",2),n._uU(4," Changelog "),n.qZA(),n.qZA(),n.TgZ(5,"main",3),n.YNc(6,u,5,2,"div",4),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(6),n.Q6J("ngForOf",t.releases))},directives:[c.sg],styles:[""]}),e})();var f=s(1462);function h(e,t){1&e&&(n.O4$(),n.TgZ(0,"svg",38),n._UZ(1,"path",39),n.qZA())}function m(e,t){1&e&&(n.O4$(),n.TgZ(0,"svg",38),n._UZ(1,"path",40),n.qZA())}function x(e,t){if(1&e&&(n.TgZ(0,"a",35),n.YNc(1,h,2,0,"svg",36),n.YNc(2,m,2,0,"svg",37),n._uU(3),n.qZA()),2&e){const e=t.$implicit;n.s9C("href",e.url,n.LSH),n.xp6(1),n.Q6J("ngIf","Twitter"==e.network),n.xp6(1),n.Q6J("ngIf","LinkedIn"==e.network),n.xp6(1),n.hij(" ",e.username," ")}}function Z(e,t){if(1&e&&(n.TgZ(0,"div",41),n.TgZ(1,"span",42),n._uU(2),n.qZA(),n.qZA()),2&e){const e=n.oxw(2);n.xp6(2),n.hij("v",e.release.version,"")}}function w(e,t){if(1&e&&(n.TgZ(0,"header",16),n.TgZ(1,"div",17),n._UZ(2,"img",18),n.TgZ(3,"div",19),n.TgZ(4,"h1",20),n._uU(5),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA(),n.TgZ(8,"p",21),n._uU(9),n.qZA(),n.TgZ(10,"p",22),n.O4$(),n.TgZ(11,"svg",23),n._UZ(12,"path",24),n.qZA(),n.kcU(),n.TgZ(13,"a",25),n._uU(14),n.qZA(),n.qZA(),n.TgZ(15,"p",22),n.O4$(),n.TgZ(16,"svg",23),n._UZ(17,"path",26),n.qZA(),n.kcU(),n.TgZ(18,"a",25),n._uU(19),n.qZA(),n.qZA(),n.TgZ(20,"p",27),n.O4$(),n.TgZ(21,"svg",28),n._UZ(22,"path",29),n.qZA(),n.kcU(),n.TgZ(23,"a",25),n._uU(24),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(25,"div",30),n.TgZ(26,"p",31),n._uU(27),n.qZA(),n.TgZ(28,"div",32),n.YNc(29,x,4,4,"a",33),n.YNc(30,Z,3,1,"div",34),n.qZA(),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.xp6(5),n.Oqu(e.resume.basics.name),n.xp6(2),n.Oqu(e.resume.basics.label),n.xp6(2),n.lnq("",null==e.resume.basics.location?null:e.resume.basics.location.city,", ",null==e.resume.basics.location?null:e.resume.basics.location.region,", ",null==e.resume.basics.location?null:e.resume.basics.location.countryCode," "),n.xp6(4),n.MGl("href","tel:",e.resume.basics.phone,"",n.LSH),n.xp6(1),n.hij(" ",e.resume.basics.phone," "),n.xp6(4),n.MGl("href","mailto:",e.resume.basics.email,"",n.LSH),n.xp6(1),n.hij(" ",e.resume.basics.email," "),n.xp6(4),n.s9C("href",e.resume.basics.website,n.LSH),n.xp6(1),n.hij(" ",e.resume.basics.website," "),n.xp6(3),n.Oqu(e.resume.basics.summary),n.xp6(2),n.Q6J("ngForOf",e.resume.basics.profiles),n.xp6(1),n.Q6J("ngIf",e.release)}}function b(e,t){1&e&&n._UZ(0,"img",60)}function A(e,t){1&e&&n._UZ(0,"img",61)}function v(e,t){1&e&&n._UZ(0,"img",62)}function T(e,t){1&e&&(n.TgZ(0,"span"),n._uU(1," Current "),n.qZA())}function q(e,t){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const e=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.xi3(2,1,e.endDate,"MMM yy")," ")}}function y(e,t){if(1&e&&(n.TgZ(0,"p",63),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.hij(" ",e," ")}}const U=function(e){return{"border-b":e}};function _(e,t){if(1&e&&(n.TgZ(0,"div",49),n.YNc(1,b,1,0,"img",50),n.YNc(2,A,1,0,"img",51),n.YNc(3,v,1,0,"img",52),n.TgZ(4,"div",53),n.TgZ(5,"h3",54),n._uU(6),n.qZA(),n.TgZ(7,"div",55),n._uU(8),n.ALo(9,"date"),n.TgZ(10,"span",56),n._uU(11,"-"),n.qZA(),n.YNc(12,T,2,0,"span",57),n.YNc(13,q,3,4,"span",57),n.qZA(),n.qZA(),n.TgZ(14,"h4",58),n._uU(15),n.qZA(),n.YNc(16,y,2,1,"p",59),n.qZA()),2&e){const e=t.$implicit;n.Q6J("ngClass",n.VKq(14,U,!1===t.last)),n.xp6(1),n.Q6J("ngIf","ADP"===e.company),n.xp6(1),n.Q6J("ngIf","Google"===e.company),n.xp6(1),n.Q6J("ngIf","The New York Times"===e.company),n.xp6(3),n.AsE(" ",e.company," - ",e.position," "),n.xp6(2),n.hij(" ",n.xi3(9,11,e.startDate,"MMM yy")," "),n.xp6(4),n.Q6J("ngIf","Current"===e.endDate),n.xp6(1),n.Q6J("ngIf","Current"!==e.endDate),n.xp6(2),n.Oqu(e.summary),n.xp6(1),n.Q6J("ngForOf",e.highlights)}}function k(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",43),n.TgZ(1,"h2",44),n.TgZ(2,"span"),n._uU(3,"Experience"),n.qZA(),n.TgZ(4,"label",45),n.TgZ(5,"input",46),n.NdJ("click",function(){return n.CHM(e),n.oxw().filterWork()}),n.qZA(),n.TgZ(6,"span",47),n._uU(7,"Whitin last 7 years"),n.qZA(),n.qZA(),n.qZA(),n.YNc(8,_,17,16,"div",48),n.qZA()}if(2&e){const e=n.oxw();n.xp6(5),n.Q6J("ngModel",e.isWorkFiltered),n.xp6(3),n.Q6J("ngForOf",e.filteredWork)}}function j(e,t){1&e&&n._UZ(0,"img",60)}function O(e,t){if(1&e&&(n.TgZ(0,"div",66),n.YNc(1,j,1,0,"img",50),n.TgZ(2,"div",53),n.TgZ(3,"h3",54),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"h4",67),n.TgZ(6,"span"),n._uU(7),n.qZA(),n.TgZ(8,"span",68),n._uU(9),n.ALo(10,"date"),n.qZA(),n.qZA(),n.TgZ(11,"p",63),n._uU(12),n.qZA(),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.Q6J("ngIf","ADP Global Product & Development Connect Conference"===e.publisher),n.xp6(3),n.hij(" ",e.publisher," "),n.xp6(3),n.Oqu(e.name),n.xp6(2),n.Oqu(n.xi3(10,5,e.releaseDate,"MMM yyyy")),n.xp6(3),n.hij(" ",e.summary," ")}}function F(e,t){if(1&e&&(n.TgZ(0,"div",43),n.TgZ(1,"h2",64),n.TgZ(2,"span"),n._uU(3,"Conferences"),n.qZA(),n.qZA(),n.YNc(4,O,13,8,"div",65),n.qZA()),2&e){const e=n.oxw();n.xp6(4),n.Q6J("ngForOf",e.resume.publications)}}function M(e,t){1&e&&n._UZ(0,"img",71)}function J(e,t){if(1&e&&(n.TgZ(0,"div",66),n.YNc(1,M,1,0,"img",69),n.TgZ(2,"div",53),n.TgZ(3,"h3",54),n._uU(4),n.qZA(),n.TgZ(5,"div",55),n._uU(6),n.ALo(7,"date"),n.TgZ(8,"span",56),n._uU(9,"-"),n.qZA(),n._uU(10),n.ALo(11,"date"),n.qZA(),n.qZA(),n.TgZ(12,"h4",70),n._uU(13),n.qZA(),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.Q6J("ngIf","Pontif\xedcia Universidade Cat\xf3lica (PUCRS)"===e.institution),n.xp6(3),n.hij(" ",e.institution," "),n.xp6(2),n.hij(" ",n.xi3(7,6,e.startDate,"MMM yy")," "),n.xp6(4),n.hij(" ",n.xi3(11,9,e.endDate,"MMM yy")," "),n.xp6(3),n.AsE("",e.studyType," ",e.area,"")}}function N(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"h2",64),n._uU(2," Education "),n.qZA(),n.YNc(3,J,14,12,"div",65),n.qZA()),2&e){const e=n.oxw(2);n.xp6(3),n.Q6J("ngForOf",e.resume.education)}}function Y(e,t){1&e&&(n.TgZ(0,"span"),n._uU(1,"\ud83c\udde7\ud83c\uddf7"),n.qZA())}function I(e,t){1&e&&(n.TgZ(0,"span"),n._uU(1,"\ud83c\uddfa\ud83c\uddf8"),n.qZA())}function Q(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"p",74),n.YNc(2,Y,2,0,"span",57),n.YNc(3,I,2,0,"span",57),n.TgZ(4,"span",75),n._uU(5),n.qZA(),n._uU(6,": "),n.TgZ(7,"span"),n._uU(8),n.qZA(),n.qZA(),n.qZA()),2&e){const e=t.$implicit;n.xp6(2),n.Q6J("ngIf","Portugues"===e.language),n.xp6(1),n.Q6J("ngIf","English"===e.language),n.xp6(2),n.Oqu(e.language),n.xp6(3),n.Oqu(e.fluency)}}function C(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"h2",64),n._uU(2," Languages "),n.qZA(),n.TgZ(3,"div",72),n.YNc(4,Q,9,4,"div",73),n.qZA(),n.qZA()),2&e){const e=n.oxw(2);n.xp6(4),n.Q6J("ngForOf",e.resume.languages)}}function $(e,t){if(1&e&&(n.TgZ(0,"div",43),n.YNc(1,N,4,1,"div",57),n.YNc(2,C,5,1,"div",57),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.resume.education),n.xp6(1),n.Q6J("ngIf",e.resume.education)}}function z(e,t){if(1&e&&(n.ynx(0),n.TgZ(1,"dt",77),n._uU(2),n.qZA(),n.TgZ(3,"dd",78),n._uU(4),n.qZA(),n.BQk()),2&e){const e=t.$implicit;n.xp6(2),n.Oqu(e.name),n.xp6(2),n.hij(" ",null==e.keywords?null:e.keywords.join(", ")," ")}}function D(e,t){if(1&e&&(n.TgZ(0,"div",76),n.TgZ(1,"h2",64),n._uU(2," Technical Skills "),n.qZA(),n.TgZ(3,"dl"),n.YNc(4,z,5,2,"ng-container",73),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.xp6(4),n.Q6J("ngForOf",e.resume.skills)}}const L=[{component:(()=>{class e{constructor(e){this.isWorkFiltered=!1,this.filteredWork=[];const t=new Date;t.setFullYear(t.getFullYear()-7);const s=`${t.getMonth()}`.padStart(2,"0"),i=`${t.getDate()}`.padStart(2,"0");this.dateFilter=`${t.getFullYear()}-${s}-${i}`,e.get("/assets/resume.json").subscribe(e=>{this.resume=e,this.filterWork()}),e.get("/assets/release.json").subscribe(e=>{this.release=e})}filterWork(){var e;this.isWorkFiltered=!1===this.isWorkFiltered,!1!==this.isWorkFiltered?this.resume&&this.resume.work&&(this.filteredWork=this.resume.work.filter(e=>e.endDate>this.dateFilter)):this.filteredWork=(null===(e=this.resume)||void 0===e?void 0:e.work)||[]}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-resume"]],decls:21,vars:5,consts:[[1,"min-h-screen","flex","justify-center"],[1,"flex","flex-col","justify-between","p-4","space-y-2","min-h-screen","max-w-4xl"],["class","p-2 rounded-lg bg-white shadow print:shadow-none flex sm:flex-row flex-col sm:space-x-4 print:flex-row print:space-x-4",4,"ngIf"],[1,"flex-grow","place-self-stretch"],["class","rounded-lg bg-white shadow p-2 mb-2 print:shadow-none",4,"ngIf"],["class","rounded-lg bg-white shadow p-2 print:shadow-none",4,"ngIf"],[1,"rounded-lg","bg-white","shadow","p-2","flex","space-x-6","text-sm","text-indigo-600","font-bold","print:hidden"],["href","https://github.com/pitecus/meirelles","target","_blank","rel","noopener noreferrer",1,"whitespace-nowrap"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"inline","mr-1"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"],[1,"inline","align-middle"],["routerLink","/changelog",1,"whitespace-nowrap"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"inline","h-6","w-6","stroke-current","text-black","mr-1"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"],[1,"flex","flex-col","justify-center"],["src","https://github.com/pitecus/meirelles/actions/workflows/node.js.yml/badge.svg","alt","GitHub actions build status badge"],[1,"p-2","rounded-lg","bg-white","shadow","print:shadow-none","flex","sm:flex-row","flex-col","sm:space-x-4","print:flex-row","print:space-x-4"],[1,"whitespace-nowrap","sm:border-r","sm:pr-2","text-center","sm:profile-card"],["width","200","height","200","alt","portrait","src","assets/leo-meirelles.jpeg",1,"rounded-full","shadow-md","border-indigo-200","print:hidden","m-auto","mt-2","border"],[1,"sm:pb-0","pb-4","print:pb-0"],[1,"font-semibold","text-2xl","text-indigo-900"],[1,"text-gray-500","text-sm","mb-2"],[1,"flex","pb-1","text-indigo-600"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"],["rel","noopener noreferrer",1,"pl-2",3,"href"],["d","M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"],[1,"flex","text-indigo-600"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"inline","h-6","w-6","stroke-current","text-black"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"flex","flex-col","w-full","justify-between"],[1,"pb-2","text-md","print:text-sm"],[1,"flex","flex-row","space-x-6","text-indigo-600"],["rel","noopener noreferrer","target","_blank",3,"href",4,"ngFor","ngForOf"],["class","flex flex-grow items-end justify-end place-items-end text-gray-400 text-xs",4,"ngIf"],["rel","noopener noreferrer","target","_blank",3,"href"],["class","mr-1 inline ","xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",4,"ngIf"],["class","mr-1 inline","xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"mr-1","inline"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"],[1,"flex","flex-grow","items-end","justify-end","place-items-end","text-gray-400","text-xs"],[1,"text-right","-mb-1"],[1,"rounded-lg","bg-white","shadow","p-2","mb-2","print:shadow-none"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900","flex","justify-between"],[1,"flex","items-center","text-sm","print:hidden"],["type","checkbox",1,"form-checkbox","h-4","w-4","text-indigo-500",3,"ngModel","click"],[1,"ml-2"],["class","mt-2 border-b",3,"ngClass",4,"ngFor","ngForOf"],[1,"mt-2","border-b",3,"ngClass"],["width","24","height","24","alt","ADP Logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-adp.jpeg",4,"ngIf"],["width","24","height","24","alt","Google logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-google.png",4,"ngIf"],["width","24","height","24","alt","The New York Times logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-nyt.png",4,"ngIf"],[1,"flex","justify-between","space-x-2"],[1,"font-bold","text-lg","w-full"],[1,"text-sm","w-20","pl-1","sm:w-36","sm:text-right","print:w-36"],[1,"hidden","sm:inline"],[4,"ngIf"],[1,"bg-gray-100","rounded-lg","italic","p-1","mb-1","print:px-0"],["class","mb-2 text-sm print:text-xs",4,"ngFor","ngForOf"],["width","24","height","24","alt","ADP Logo","src","assets/logo-adp.jpeg",1,"float-left","rounded-full","w-6","shadow","mr-3"],["width","24","height","24","alt","Google logo","src","assets/logo-google.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],["width","24","height","24","alt","The New York Times logo","src","assets/logo-nyt.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],[1,"mb-2","text-sm","print:text-xs"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"bg-gray-100","rounded-lg","italic","p-1","mb-1","print:px-0","flex","justify-between"],[1,"not-italic","text-sm"],["width","24","height","24","alt","ADP Logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-pucrs.png",4,"ngIf"],[1,"p-1","mb-1"],["width","24","height","24","alt","ADP Logo","src","assets/logo-pucrs.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],[1,"mt-2","flex","flex-row","flex-wrap"],[4,"ngFor","ngForOf"],[1,"mr-4"],[1,"pl-2","font-bold"],[1,"rounded-lg","bg-white","shadow","p-2","print:shadow-none"],[1,"font-bold","text-lg","mb-1","mt-2"],[1,"text-sm"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,w,31,14,"header",2),n.TgZ(3,"main",3),n.YNc(4,k,9,2,"div",4),n.YNc(5,F,5,1,"div",4),n.YNc(6,$,3,2,"div",4),n.YNc(7,D,5,1,"div",5),n.qZA(),n.TgZ(8,"footer",6),n.TgZ(9,"a",7),n.O4$(),n.TgZ(10,"svg",8),n._UZ(11,"path",9),n.qZA(),n.kcU(),n.TgZ(12,"p",10),n._uU(13,"Git Repo"),n.qZA(),n.qZA(),n.TgZ(14,"a",11),n.O4$(),n.TgZ(15,"svg",12),n._UZ(16,"path",13),n.qZA(),n.kcU(),n.TgZ(17,"p",10),n._uU(18,"Changelog"),n.qZA(),n.qZA(),n.TgZ(19,"div",14),n._UZ(20,"img",15),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngIf",t.resume&&t.resume.basics),n.xp6(2),n.Q6J("ngIf",t.resume&&t.resume.work),n.xp6(1),n.Q6J("ngIf",t.resume&&t.resume.publications),n.xp6(1),n.Q6J("ngIf",t.resume&&(t.resume.education||t.resume.languages)),n.xp6(1),n.Q6J("ngIf",t.resume&&t.resume.skills))},directives:[c.O5,o.yS,c.sg,f.Wl,f.JJ,f.On,c.mk],pipes:[c.uU],styles:[".profile-card[_ngcontent-%COMP%]{min-width:224px}"]}),e})(),path:"resume",pathMatch:"full"},{component:d,path:"changelog",pathMatch:"full"},{path:"",pathMatch:"full",redirectTo:"resume"},{path:"**",pathMatch:"full",redirectTo:"resume"}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.Bz.forRoot(L,{useHash:!0})],o.Bz]}),e})();var W=s(2159);let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e,bootstrap:[r]}),e.\u0275inj=n.cJS({providers:[],imports:[[i.b2,a.JF,S,f.u5,W.Wr.register("ngsw-worker.js",{enabled:!0,registrationStrategy:"registerWhenStable:30000"})]]}),e})();(0,n.G48)(),i.q6().bootstrapModule(B).catch(e=>console.error(e))}},e=>{"use strict";e.O(0,["vendor"],()=>e(e.s=5770)),e.O()}]);
//# sourceMappingURL=main.555574bf22d26f28e7a5.js.map