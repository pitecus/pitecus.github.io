"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([["main"],{4997:(d,_,s)=>{var u=s(318),e=s(6723),l=s(1631),h=s(3173);let v=(()=>{class i{constructor(){this.navigation=[{label:"resume",link:"/resume"},{label:"changelog",link:"/changelog"}],this.menuState="open"}ngOnInit(){setTimeout(()=>{this.toggleMenu()},1e3)}toggleMenu(){this.menuState="open"!==this.menuState?"open":"closed"}closeNav(){this.menuState="closed"}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-root"]],decls:16,vars:0,consts:[[1,"flex","h-10","bg-white","print:hidden","shadow"],[1,"flex","flex-grow","justify-between","max-w-4xl","align-middle","px-2"],[1,"h-10","py-2"],[1,"p-1","rounded","shadow-md","font-bold","text-white","bg-indigo-700"],["role","navigation",1,"inline","text-md","text-indigo-600","font-black","capitalize","ml-3"],["routerLink","resume"],["routerLink","changelog"],[1,"text-right","h-10","py-2"],["onClick","{window.print}",1,"sm:hidden","inline","h-6","w-6","text-gray-500","stroke-current"],[1,"sr-only"],[1,"calc(min-h-screen","-","h-10)","flex","justify-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"LM"),e.qZA(),e.TgZ(5,"nav",4)(6,"a",5),e._uU(7,"Resume"),e.qZA(),e.TgZ(8,"a",6),e._uU(9,"Changelog"),e.qZA()()(),e.TgZ(10,"div",7)(11,"a",8)(12,"span",9),e._uU(13,"Print"),e.qZA()()()()(),e.TgZ(14,"div",10),e._UZ(15,"router-outlet"),e.qZA())},directives:[h.yS,h.lC],encapsulation:2,data:{animation:[(0,l.X$)("openClose",[(0,l.SB)("open",(0,l.oB)({})),(0,l.SB)("closed",(0,l.oB)({transform:"translateX(-100%)"})),(0,l.eR)("open => closed",[(0,l.jt)("350ms")]),(0,l.eR)("closed => open",[(0,l.jt)("350ms")])])]}}),i})();const Z=JSON.parse('{"build":{"description":"Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)","emoji":"\u{1f680}","title":"Builds"},"chore":{"description":"Other changes that don\'t modify src or test files","emoji":"\u{1f9f9}","title":"Chores"},"ci":{"description":"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)","emoji":"\u{1f6a5}","title":"Continuous Integrations"},"docs":{"description":"Documentation only changes","emoji":"\u{1f4da}","title":"Documentation"},"feat":{"description":"A new feature","emoji":"\u{1f31f}","title":"Features"},"fix":{"description":"A bug fix","emoji":"\u{1f41e}","title":"Bug Fixes"},"perf":{"description":"A code change that improves performance","emoji":"\u{1f4b0}","title":"Performance Improvements"},"refactor":{"description":"A code change that neither fixes a bug nor adds a feature","emoji":"\u267b\ufe0f","title":"Code Refactoring"},"revert":{"description":"Reverts a previous commit","emoji":"\u{1f48a}","title":"Reverts"},"style":{"description":"Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)","emoji":"\u{1f3a8}","title":"Styles"},"test":{"description":"Adding missing tests or correcting existing tests","emoji":"\u{1f693}","title":"Tests"}}');var x=s(8784),m=s(6362);function b(i,n){if(1&i&&(e.TgZ(0,"li",15),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.message.subject)}}function T(i,n){if(1&i&&(e.TgZ(0,"div",10)(1,"h3",11),e._uU(2),e.TgZ(3,"span",12),e._uU(4),e.qZA()(),e.TgZ(5,"ul",13),e.YNc(6,b,2,1,"li",14),e.qZA()()),2&i){const t=n.$implicit,o=e.oxw(2);e.xp6(2),e.hij(" ",o.commitTypes[t.type].emoji," "),e.xp6(2),e.Oqu(o.commitTypes[t.type].title),e.xp6(2),e.Q6J("ngForOf",t.changes)}}function y(i,n){if(1&i&&(e.TgZ(0,"div",6)(1,"h2",7),e._uU(2),e.qZA(),e.TgZ(3,"div",8),e.YNc(4,T,7,3,"div",9),e.qZA()()),2&i){const t=n.$implicit;e.xp6(2),e.hij(" Release ",t.version," "),e.xp6(2),e.Q6J("ngForOf",t.changes)}}let A=(()=>{class i{constructor(t){this.releases=[],this.commitTypes=Z,this.sortingTypes={feat:1,fix:2,perf:3,test:4,style:5,revert:6,build:7,refactor:8,chore:9,docs:10,ci:11},t.get("/assets/changelog.json").subscribe(o=>{let a,c;o.forEach(r=>{const g=r.decoration.replace(/[ \(\)]/g,"").split(",").filter(re=>!0===re.startsWith("tag:")).pop();(void 0!==g||void 0===a)&&(c={},a=void 0!==g?{changes:[],version:g.replace("tag:","")}:{changes:[],version:""},this.releases.push(a));const[p,se]=r.subject.split(":",2);void 0===c[p]&&(c[p]=[],a.changes.push({type:p,changes:c[p]})),c[p].push({commiter:r.commiter,date:r.date,message:{scope:"",subject:se.trim(),type:p}})}),this.releases.forEach(r=>{r.changes.sort((g,p)=>this.sortingTypes[g.type]-this.sortingTypes[p.type])})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.eN))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-changelog"]],decls:7,vars:1,consts:[[1,"flex","justify-center"],[1,"flex","flex-col","justify-between","max-w-4xl","min-w-full","p-2","space-y-2"],[1,"print:hidden"],[1,"ml-10","lg:ml-0","border-b-2","border-gray-300","font-bold","text-2xl","text-indigo-900","flex","justify-between"],[1,"flex","flex-col"],["class","rounded-lg bg-white shadow px-2 pt-2 mb-2",4,"ngFor","ngForOf"],[1,"rounded-lg","bg-white","shadow","px-2","pt-2","mb-2"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900","flex","justify-between"],[1,"mt-2","flex","flex-row","flex-wrap","-mr-2"],["class","shadow p-2 rounded-lg bg-gray-50 sm:w-72 print:w-72 mr-2 mb-2 flex-grow",4,"ngFor","ngForOf"],[1,"shadow","p-2","rounded-lg","bg-gray-50","sm:w-72","print:w-72","mr-2","mb-2","flex-grow"],[1,"text-lg","text-gray-700","border-b-2"],[1,"ml-2"],[1,"list-disc","list-inside"],["class","",4,"ngFor","ngForOf"],[1,""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"header",2)(3,"h1",3),e._uU(4," Changelog "),e.qZA()(),e.TgZ(5,"main",4),e.YNc(6,y,5,2,"div",5),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngForOf",o.releases))},directives:[m.sg],styles:[""]}),i})();var C=s(5646),f=s(1876);function U(i,n){1&i&&(e.O4$(),e.TgZ(0,"svg",41),e._UZ(1,"path",42),e.qZA())}function q(i,n){1&i&&(e.O4$(),e.TgZ(0,"svg",41),e._UZ(1,"path",43),e.qZA())}function j(i,n){1&i&&(e.O4$(),e.TgZ(0,"svg",41),e._UZ(1,"path",44),e.qZA())}function k(i,n){if(1&i&&(e.TgZ(0,"a",39),e.YNc(1,U,2,0,"svg",40),e.YNc(2,q,2,0,"svg",40),e.YNc(3,j,2,0,"svg",40),e._uU(4),e.qZA()),2&i){const t=n.$implicit;e.s9C("href",t.url,e.LSH),e.xp6(1),e.Q6J("ngIf","Twitter"==t.network),e.xp6(1),e.Q6J("ngIf","LinkedIn"==t.network),e.xp6(1),e.Q6J("ngIf","GitHub"==t.network),e.xp6(1),e.hij(" ",t.username," ")}}function F(i,n){if(1&i&&(e.TgZ(0,"div",45)(1,"span",46),e._uU(2),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(2),e.hij("v",t.release.version," ")}}function R(i,n){if(1&i&&(e.TgZ(0,"header",16)(1,"div",17),e._UZ(2,"img",18),e.TgZ(3,"div",19)(4,"h1",20),e._uU(5),e.qZA(),e.TgZ(6,"div",21)(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p",22),e._uU(10),e.qZA()(),e.TgZ(11,"p",23),e._uU(12),e.qZA(),e.TgZ(13,"p",24),e.O4$(),e.TgZ(14,"svg",25),e._UZ(15,"path",26),e.qZA(),e.kcU(),e.TgZ(16,"a",27),e._uU(17),e.qZA()(),e.TgZ(18,"p",24),e.O4$(),e.TgZ(19,"svg",25),e._UZ(20,"path",28),e.qZA(),e.kcU(),e.TgZ(21,"a",27),e._uU(22),e.qZA()(),e.TgZ(23,"p",29),e.O4$(),e.TgZ(24,"svg",30),e._UZ(25,"path",31),e.qZA(),e.kcU(),e.TgZ(26,"a",27),e._uU(27),e.qZA()()()(),e.TgZ(28,"div",32)(29,"p",33),e._UZ(30,"img",34),e._uU(31),e.qZA(),e.TgZ(32,"div",35)(33,"div",36),e.YNc(34,k,5,5,"a",37),e.qZA(),e.YNc(35,F,3,1,"div",38),e.qZA()()()),2&i){const t=e.oxw();e.xp6(5),e.Oqu(t.resume.basics.name),e.xp6(3),e.Oqu(t.resume.basics.label),e.xp6(2),e.Oqu(t.resume.basics.pronoun),e.xp6(2),e.lnq(" ",null==t.resume.basics.location?null:t.resume.basics.location.city,", \xa0 ",null==t.resume.basics.location?null:t.resume.basics.location.region,", \xa0 ",null==t.resume.basics.location?null:t.resume.basics.location.countryCode," "),e.xp6(4),e.MGl("href","tel:",t.resume.basics.phone,"",e.LSH),e.xp6(1),e.hij(" ",t.resume.basics.phone," "),e.xp6(4),e.MGl("href","mailto:",t.resume.basics.email,"",e.LSH),e.xp6(1),e.hij(" ",t.resume.basics.email," "),e.xp6(4),e.s9C("href",t.resume.basics.website,e.LSH),e.xp6(1),e.hij(" ",t.resume.basics.website," "),e.xp6(3),e.s9C("src",t.qrCode,e.LSH),e.xp6(1),e.hij(" ",t.resume.basics.summary," "),e.xp6(3),e.Q6J("ngForOf",t.resume.basics.profiles),e.xp6(1),e.Q6J("ngIf",t.release)}}function O(i,n){1&i&&e._UZ(0,"img",64)}function M(i,n){1&i&&e._UZ(0,"img",65)}function N(i,n){1&i&&e._UZ(0,"img",66)}function J(i,n){if(1&i&&(e.TgZ(0,"p",67),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}const Y=function(i){return{"border-b":i}};function I(i,n){if(1&i&&(e.TgZ(0,"div",53),e.YNc(1,O,1,0,"img",54),e.YNc(2,M,1,0,"img",55),e.YNc(3,N,1,0,"img",56),e.TgZ(4,"div",57)(5,"h3",58),e._uU(6),e.qZA(),e.TgZ(7,"div",59),e._uU(8),e.ALo(9,"date"),e._UZ(10,"br",60),e.TgZ(11,"span",61),e._uU(12," to "),e.qZA(),e._uU(13),e.ALo(14,"date"),e.qZA()(),e.TgZ(15,"h4",62),e._uU(16),e.qZA(),e.YNc(17,J,2,1,"p",63),e.qZA()),2&i){const t=n.$implicit;e.Q6J("ngClass",e.VKq(16,Y,!1===n.last)),e.xp6(1),e.Q6J("ngIf","ADP"===t.company),e.xp6(1),e.Q6J("ngIf","Google"===t.company),e.xp6(1),e.Q6J("ngIf","The New York Times"===t.company),e.xp6(3),e.AsE(" ",t.company," - ",t.position," "),e.xp6(2),e.hij(" ",e.xi3(9,10,t.startDate,"MMM/yyyy")," "),e.xp6(5),e.hij(" ",e.xi3(14,13,t.endDate,"MMM/yyyy")," "),e.xp6(3),e.Oqu(t.summary),e.xp6(1),e.Q6J("ngForOf",t.highlights)}}function D(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",47)(1,"h2",48)(2,"span"),e._uU(3,"Experience"),e.qZA(),e.TgZ(4,"label",49)(5,"input",50),e.NdJ("click",function(){return e.CHM(t),e.oxw().filterWork()}),e.qZA(),e.TgZ(6,"span",51),e._uU(7,"Whitin last 7 years"),e.qZA()()(),e.YNc(8,I,18,18,"div",52),e.qZA()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.isWorkFiltered),e.xp6(3),e.Q6J("ngForOf",t.filteredWork)}}function Q(i,n){1&i&&e._UZ(0,"img",64)}function S(i,n){if(1&i&&(e.TgZ(0,"div",70),e.YNc(1,Q,1,0,"img",54),e.TgZ(2,"div",57)(3,"h3",71),e._uU(4),e.qZA(),e.TgZ(5,"div",72),e._uU(6),e.ALo(7,"date"),e.qZA()(),e.TgZ(8,"h4",73)(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"p",67),e._uU(12),e.qZA()()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf","ADP Global Product & Development Connect"===t.publisher),e.xp6(3),e.Oqu(t.publisher),e.xp6(2),e.hij(" ",e.xi3(7,5,t.releaseDate,"MMM/yyyy")," "),e.xp6(4),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.summary," ")}}function z(i,n){if(1&i&&(e.TgZ(0,"div",47)(1,"h2",68)(2,"span"),e._uU(3,"Conferences"),e.qZA()(),e.YNc(4,S,13,8,"div",69),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.resume.publications)}}function L(i,n){1&i&&e._UZ(0,"img",79)}function $(i,n){if(1&i&&(e.TgZ(0,"div",70),e.YNc(1,L,1,0,"img",76),e.TgZ(2,"div",57)(3,"h3",77),e._uU(4),e.qZA(),e.TgZ(5,"div",59),e._uU(6),e.ALo(7,"date"),e._UZ(8,"br",60),e.TgZ(9,"span",61),e._uU(10," to "),e.qZA(),e._uU(11),e.ALo(12,"date"),e.qZA()(),e.TgZ(13,"h4",78),e._uU(14),e.qZA()()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf","Pontif\xedcia Universidade Cat\xf3lica (PUCRS)"===t.institution),e.xp6(3),e.hij(" ",t.institution," "),e.xp6(2),e.hij(" ",e.xi3(7,6,t.startDate,"MMM/yyyy")," "),e.xp6(5),e.hij(" ",e.xi3(12,9,t.endDate,"MMM/yyyy")," "),e.xp6(3),e.AsE(" ",t.studyType," ",t.area," ")}}function W(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1,"\u{1f1e7}\u{1f1f7}"),e.qZA())}function B(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1,"\u{1f1fa}\u{1f1f8}"),e.qZA())}function P(i,n){if(1&i&&(e.TgZ(0,"div",81)(1,"p",82),e.YNc(2,W,2,0,"span",75),e.YNc(3,B,2,0,"span",75),e.TgZ(4,"span",83),e._uU(5),e.qZA(),e._uU(6,":\xa0 "),e.TgZ(7,"span"),e._uU(8),e.qZA()()()),2&i){const t=n.$implicit;e.xp6(2),e.Q6J("ngIf","Portugues"===t.language),e.xp6(1),e.Q6J("ngIf","English"===t.language),e.xp6(2),e.Oqu(t.language),e.xp6(3),e.Oqu(t.fluency)}}function E(i,n){if(1&i&&(e.TgZ(0,"div")(1,"h2",68),e._uU(2," Languages "),e.qZA(),e.YNc(3,P,9,4,"div",80),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("ngForOf",t.resume.languages)}}function G(i,n){if(1&i&&(e.TgZ(0,"div",74)(1,"div")(2,"h2",68),e._uU(3,"Education"),e.qZA(),e.YNc(4,$,15,12,"div",69),e.qZA(),e.YNc(5,E,4,1,"div",75),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.resume.education),e.xp6(1),e.Q6J("ngIf",t.resume.education)}}function H(i,n){if(1&i&&(e.TgZ(0,"div",87)(1,"h2",88),e._uU(2),e.qZA(),e.TgZ(3,"span",67),e._uU(4),e.qZA()()),2&i){const t=n.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.hij(" ",null==t.keywords?null:t.keywords.join(", ")," ")}}function X(i,n){if(1&i&&(e.TgZ(0,"div",84)(1,"h2",68),e._uU(2," Technical Skills "),e.qZA(),e.TgZ(3,"div",85),e.YNc(4,H,5,2,"div",86),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.resume.skills)}}const K=[{component:(()=>{class i{constructor(t){this.isWorkFiltered=!1,this.filteredWork=[],this.qrCode="";const o=new Date;o.setFullYear(o.getFullYear()-7);const a=`${o.getMonth()}`.padStart(2,"0"),c=`${o.getDate()}`.padStart(2,"0");this.dateFilter=`${o.getFullYear()}-${a}-${c}`,t.get("/assets/resume.json").subscribe(r=>{this.resume=r,this.filterWork()}),t.get("/assets/release.json").subscribe(r=>{this.release=r}),C.toDataURL(window.location.href,{errorCorrectionLevel:"low"},(r,g)=>{this.qrCode=g})}filterWork(){var t;this.isWorkFiltered=!1===this.isWorkFiltered,!1!==this.isWorkFiltered?this.resume&&this.resume.work&&(this.filteredWork=this.resume.work.filter(o=>o.endDate>this.dateFilter)):this.filteredWork=(null===(t=this.resume)||void 0===t?void 0:t.work)||[]}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.eN))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-resume"]],decls:20,vars:6,consts:[[1,"flex","flex-col","justify-between","p-2","space-y-2","min-h-screen","max-w-4xl"],[1,"print:hidden"],[1,"border-b-2","border-gray-300","font-bold","text-2xl","text-indigo-900","flex","justify-between","items-end"],[1,"text-gray-500","text-xs"],["class","p-2 rounded-lg bg-white shadow print:shadow-none flex sm:flex-row flex-col sm:space-x-4 print:flex-row print:space-x-4",4,"ngIf"],[1,"flex-grow","place-self-stretch"],["class","rounded-lg bg-white shadow p-2 mb-2 print:pt-0 print:mt-4 print:shadow-none",4,"ngIf"],["class","rounded-lg bg-white shadow p-2 mb-2 print:pt-0 print:-mt-2 print:shadow-none",4,"ngIf"],["class","rounded-lg bg-white shadow p-2 print:shadow-none",4,"ngIf"],[1,"rounded-lg","bg-white","shadow","p-2","flex","space-x-6","text-sm","text-indigo-600","font-bold","print:hidden"],["href","https://github.com/pitecus/meirelles","target","_blank","rel","noopener noreferrer",1,"whitespace-nowrap"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"inline","mr-1"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"],[1,"inline","align-middle"],[1,"flex","flex-col","justify-center"],["src","https://github.com/pitecus/meirelles/actions/workflows/node.js.yml/badge.svg","width","111","height","20","alt","GitHub actions build status badge"],[1,"p-2","rounded-lg","bg-white","shadow","print:shadow-none","flex","sm:flex-row","flex-col","sm:space-x-4","print:flex-row","print:space-x-4"],[1,"whitespace-nowrap","sm:border-r","sm:pr-2","text-center","sm:profile-card"],["width","200","height","200","alt","portrait","src","assets/leo-meirelles.jpeg",1,"rounded-full","shadow-md","border-indigo-200","print:hidden","m-auto","mt-2","border"],[1,"sm:pb-0","pb-4","print:pb-0"],[1,"font-semibold","text-2xl","text-indigo-900"],[1,"flex","justify-between"],[1,"text-gray-500"],[1,"text-gray-500","text-sm","mb-2"],[1,"flex","pb-1","text-indigo-600"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"],["rel","noopener noreferrer",1,"pl-2",3,"href"],["d","M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"],[1,"flex","text-indigo-600"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"inline","h-6","w-6","stroke-current","text-black"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"flex","flex-col","w-full","justify-between"],[1,"text-md","sm:text-xl","print:text-sm"],["width","50","height","50","alt","QR code",1,"float-right","hidden","print:inline",3,"src"],[1,"flex","flex-row","justify-between"],[1,"flex","flex-row","content-end","flex-wrap","text-indigo-600"],["class","whitespace-nowrap mr-6","rel","noopener noreferrer","target","_blank",3,"href",4,"ngFor","ngForOf"],["class","flex flex-grow items-end justify-end",4,"ngIf"],["rel","noopener noreferrer","target","_blank",1,"whitespace-nowrap","mr-6",3,"href"],["class","mr-1 inline","xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"mr-1","inline"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"],["d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"],["d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],[1,"flex","flex-grow","items-end","justify-end"],[1,"text-right","-mb-1","text-gray-500","text-xs","hidden","print:inline"],[1,"rounded-lg","bg-white","shadow","p-2","mb-2","print:pt-0","print:mt-4","print:shadow-none"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900","flex","justify-between"],[1,"flex","items-center","text-sm","print:hidden"],["type","checkbox",1,"form-checkbox","h-4","w-4","text-indigo-500",3,"ngModel","click"],[1,"ml-2"],["class","mt-4 print:mb-2",3,"ngClass",4,"ngFor","ngForOf"],[1,"mt-4","print:mb-2",3,"ngClass"],["width","24","height","24","alt","ADP Logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-adp.jpeg",4,"ngIf"],["width","24","height","24","alt","Google logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-google.png",4,"ngIf"],["width","24","height","24","alt","The New York Times logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-nyt.png",4,"ngIf"],[1,"flex","justify-between","space-x-2"],[1,"text-lg","flex-grow"],[1,"text-sm","pl-1","text-right","print:whitespace-nowrap"],["className","print:hidden"],["className","hidden print:inline"],[1,"bg-gray-100","rounded-lg","italic","p-1","mb-1","print:bg-white","print:px-0"],["class","text-sm print:text-xs",4,"ngFor","ngForOf"],["width","24","height","24","alt","ADP Logo","src","assets/logo-adp.jpeg",1,"float-left","rounded-full","w-6","shadow","mr-3"],["width","24","height","24","alt","Google logo","src","assets/logo-google.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],["width","24","height","24","alt","The New York Times logo","src","assets/logo-nyt.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],[1,"text-sm","print:text-xs"],[1,"border-b-2","border-gray-300","font-bold","text-xl","text-indigo-900"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"font-bold","text-lg","w-full"],[1,"text-sm","w-20","pl-1","sm:w-36","sm:text-right","print:w-36","print:text-right"],[1,"bg-gray-100","rounded-lg","italic","p-1","mb-1","print:mb-0","print:bg-white","print:px-0","flex","justify-between"],[1,"rounded-lg","bg-white","shadow","p-2","mb-2","print:pt-0","print:-mt-2","print:shadow-none"],[4,"ngIf"],["width","24","height","24","alt","ADP Logo","class","float-left rounded-full w-6 shadow mr-3","src","assets/logo-pucrs.png",4,"ngIf"],[1,"font-bold","text-lg","flex-grow"],[1,"p-1"],["width","24","height","24","alt","ADP Logo","src","assets/logo-pucrs.png",1,"float-left","rounded-full","w-6","shadow","mr-3"],["class","mt-2 flex flex-row flex-wrap",4,"ngFor","ngForOf"],[1,"mt-2","flex","flex-row","flex-wrap"],[1,"mr-4"],[1,"pl-2","font-bold"],[1,"rounded-lg","bg-white","shadow","p-2","print:shadow-none"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","print:grid-cols-2","gap-2","mt-2"],["class","border-b print:shadow-none",4,"ngFor","ngForOf"],[1,"border-b","print:shadow-none"],[1,"font-bold","rounded-lg","p-1","text-md","bg-gray-100","print:bg-white"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header",1)(2,"h1",2),e._uU(3," Resume "),e.TgZ(4,"span",3),e._uU(5),e.qZA()()(),e.YNc(6,R,36,16,"header",4),e.TgZ(7,"main",5),e.YNc(8,D,9,2,"div",6),e.YNc(9,z,5,1,"div",6),e.YNc(10,G,6,2,"div",7),e.YNc(11,X,5,1,"div",8),e.qZA(),e.TgZ(12,"footer",9)(13,"a",10),e.O4$(),e.TgZ(14,"svg",11),e._UZ(15,"path",12),e.qZA(),e.kcU(),e.TgZ(16,"p",13),e._uU(17,"Git Repo"),e.qZA()(),e.TgZ(18,"div",14),e._UZ(19,"img",15),e.qZA()()()),2&t&&(e.xp6(5),e.hij("v",null==o.release?null:o.release.version," "),e.xp6(1),e.Q6J("ngIf",o.resume&&o.resume.basics),e.xp6(2),e.Q6J("ngIf",o.resume&&o.resume.work),e.xp6(1),e.Q6J("ngIf",o.resume&&o.resume.publications),e.xp6(1),e.Q6J("ngIf",o.resume&&(o.resume.education||o.resume.languages)),e.xp6(1),e.Q6J("ngIf",o.resume&&o.resume.skills))},directives:[m.O5,m.sg,f.Wl,f.JJ,f.On,m.mk],pipes:[m.uU],styles:[".profile-card[_ngcontent-%COMP%]{min-width:224px}"]}),i})(),path:"resume",pathMatch:"full"},{component:A,path:"changelog",pathMatch:"full"},{path:"",pathMatch:"full",redirectTo:"resume"},{path:"**",pathMatch:"full",redirectTo:"resume"}];let V=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.Bz.forRoot(K,{useHash:!0})],h.Bz]}),i})();var ee=s(7481),te=s(8621);let ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i,bootstrap:[v]}),i.\u0275inj=e.cJS({providers:[],imports:[[u.b2,ee.PW,x.JF,V,f.u5,te.Wr.register("ngsw-worker.js",{enabled:true,registrationStrategy:"registerWhenStable:30000"})]]}),i})();var ne=s(9923);s.n(ne)().init("guwjhj/resume"),(0,e.G48)(),u.q6().bootstrapModule(ie).catch(i=>console.error(i))}},d=>{d.O(0,["vendor"],()=>d(d.s=4997)),d.O()}]);
//# sourceMappingURL=main.685b2543536f2628.js.map