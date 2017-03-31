"use strict";
/*
    Deip.oi - Open source Diep.io implementation
    Copyright (C) 2016 Andrew S & SharkFinPro
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var CliGui = require("cligui2")
var List = require("../commands")
module.exports = class ConsoleManager {
  
  constructor(main) {
      this.console = new CliGui()
      this.main = main;
      this.console.addListener("key",function() {
          this.onKey
      }.bind(this))
      this.logger = false;
      this.prop = false;
  }
    init() { // logo, etc
      this.logger = this.console.log("Welcome to Deip.oi!");
        logger.log("Starting Deip.oi");
        
        
    }
    log(a) {
    this.logger.log(a)
    }
  onKey(key) {
        
         this.promptStart();   
        
  }
  promptStart() {
         if (!this.prop) {
             
      this.prop = true
      this.console.gprompt("Enter a command","Type help for a list of commands",List.details,function(a,str) {
      this.input(str)
      }.bind(this))
         }
  }
    promptEnd() {
        if (this.prop) {
         this.prop = false;
            this.console.done();
        }
    }
    input(str) {
        str = str.split(" ")
        if (List.commands[str[0]]) {
            
            List.commands[str[0]](this.main,str,this.console);
        }
    }
  
  
  
}
