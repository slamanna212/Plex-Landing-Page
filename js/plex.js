HTMLElement.prototype.hasClass = function (className) {
            if (this.classList) {
                return this.classList.contains(className);
            } else {
                return (-1 < this.className.indexOf(className));
            }
        };

        HTMLElement.prototype.addClass = function (className) {
            if (this.classList) {
                this.classList.add(className);
            } else if (!this.hasClass(className)) {
                var classes = this.className.split(" ");
                classes.push(className);
                this.className = classes.join(" ");
            }
            return this;
        };

        HTMLElement.prototype.removeClass = function (className) {
            if (this.classList) {
                this.classList.remove(className);
            } else {
                var classes = this.className.split(" ");
                classes.splice(classes.indexOf(className), 1);
                this.className = classes.join(" ");
            }
            return this;
        };

        function checkServer() {
            var p = new Ping();
            var server = "IP_OR_HOSTNMAME_HERE/" //Try to get it automagically, but you can manually specify this
            var timeout = 2000; //Milliseconds
            var body = document.getElementsByTagName("body")[0];
            p.ping(server+":32400", function(data) {
                var serverMsg = document.getElementById( "server-status-msg" );
                var serverImg = document.getElementById( "server-status-img" );
                if (data < 1000){
                    serverMsg.innerHTML ='Working';
                    serverImg.src = "img/ipad-hand-on.png";
                    body.addClass('online').removeClass("offline");
                }else{
                    serverMsg.innerHTML = 'Not Working';
                    serverImg.src = "img/ipad-hand-off.png";
                }
            }, timeout);
        }