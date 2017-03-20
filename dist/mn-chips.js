"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnChips=function(_window$MnInput){function MnChips(self){var _this,_ret;return _classCallCheck(this,MnChips),self=_this=_possibleConstructorReturn(this,(MnChips.__proto__||Object.getPrototypeOf(MnChips)).call(this,self)),_this.input=_this.querySelector("input"),_this.name=_this.getAttribute("name"),_this.setAddEvents(),_this.chips=document.createElement("div"),_this.chips.classList.add("values"),_this.appendChild(_this.chips),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnChips,_window$MnInput),_createClass(MnChips,[{key:"addChip",value:function(value){if(value){var option='<mn-option class="natural" value="'+value+'" name="'+this.name+'" checked="checked">';this.chips.insertAdjacentHTML("beforeend",option),this.input.value=""}}},{key:"setAddEvents",value:function(){var _this2=this;this.input.addEventListener("blur",function(){_this2.addChip(_this2.input.value),_this2.classList.remove("has-value")}),this.input.addEventListener("keydown",function(event){["Enter",","," "].indexOf(event.key)>-1&&(_this2.addChip(_this2.input.value),event.preventDefault())})}}]),MnChips}(window.MnInput);window.customElements.define("mn-chips",MnChips);
//# sourceMappingURL=mn-chips.js.map
