webpackJsonp([40],{168:function(a,t,e){"use strict";function n(a){l.ActionSheet.create({title:"Article Actions",gallery:a,actions:[{label:"Delete",icon:"delete",handler:function(){l.Toast.create("Deleted Article")}},{label:"Share",icon:"share",handler:function(){l.Toast.create("Shared!")}},{label:"Play",icon:"gamepad",handler:function(){l.Toast.create("Launched Game")}},{label:"Favorite",icon:"favorite",handler:function(){l.Toast.create("Added to favorites")}}],dismiss:{label:"Cancel",icon:"cancel",classes:"text-primary",handler:function(){l.Toast.create("Cancelled...")}}})}function i(a){l.ActionSheet.create({title:"Share to",gallery:a,actions:[{label:"Joe",avatar:"statics/linux-avatar.png",handler:function(){l.Toast.create("Shared to Joe!")}},{label:"John",avatar:"statics/boy-avatar.png",handler:function(){l.Toast.create("Shared to John!")}},{label:"Jim",avatar:"statics/linux-avatar.png",handler:function(){l.Toast.create("Shared to Jim!")}},{label:"Jack",avatar:"statics/guy-avatar.png",handler:function(){l.Toast.create("Shared to Jack!")}}],dismiss:{label:"Cancel",icon:"cancel",classes:"text-primary",handler:function(){l.Toast.create("Cancelled...")}}})}Object.defineProperty(t,"__esModule",{value:!0});var l=e(3);t.default={data:function(){return{types:[{label:"List with Icons",handler:function(){n()}},{label:"Gallery with Icons",handler:function(){n(!0)}},{label:"List with Avatars",handler:function(){i()}},{label:"Gallery with Avatars",handler:function(){i(!0)}}]}}}},328:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"layout-padding"},[a._m(0),a._v(" "),e("div",{staticClass:"list",staticStyle:{"max-width":"600px"}},a._l(a.types,function(t){return e("div",{staticClass:"item item-link",on:{click:function(a){t.handler()}}},[e("i",{staticClass:"item-primary"},[a._v("settings")]),a._v(" "),e("div",{staticClass:"item-content has-secondary"},[e("div",[a._v(a._s(t.label))])]),a._v(" "),e("i",{staticClass:"item-secondary"},[a._v("keyboard_arrow_right")])])}))])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"caption"},[e("span",{staticClass:"desktop-only"},[a._v("Click")]),a._v(" "),e("span",{staticClass:"mobile-only"},[a._v("Tap")]),a._v("\n      on each type to see an Action Sheet in action.\n    ")])}]}},90:function(a,t,e){var n=e(13)(e(168),e(328),null,null);a.exports=n.exports}});