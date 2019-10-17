
    var Switch = function (status) {
        this.status = status;
        this.getStatus = function () {
            return this.status;
        }
        this.setStatus = function (newStatus) {
            this.status = newStatus
        }
        this.turnOn = function () {
            if (this.getStatus() == true) {
                alert("công tắc ON");
            }
        }
        this.turnOff = function () {
            if (this.getStatus() == false) {
                alert("công tắc OFF");
            }
        }
    };

    var Lamp = function () {
        this.onLight = function () {
            if (switch1.getStatus() == true) {
                alert("BẬT ĐÈN");
            }
            this.offLight = function () {
                if (switch1.getStatus() == false) {
                    alert('TẮT ĐÈN');
                }
            }
        }
    };
    var lamp1 = new Lamp(true);
    var switch1 = new Switch(false);




function showTrue() {
    switch1.setStatus(true);
    //switch1.turnOn();
    lamp1.onLight();
}
function  showFalse() {
    switch1.setStatus(false);
    //switch1.turnOff();
    lamp1.offLight();
}
