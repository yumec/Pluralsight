interface IRectangle {
    height: number;
    width: number;
    getArea(): number;
}

namespace Shapes {
    export class Rectangle implements IRectangle {
        constructor(
            public height: number,
            public width: number) { }
        getArea() {
            return this.height * this.width;
        }
    }
}



window.onload = function () {
    var rect: IRectangle = new Shapes.Rectangle(2, 4);
    var area = rect.getArea();
    toastr.info("area = " + area);
}


namespace myProgarm {
    function run() {
        var rect: IRectangle = new Shapes.Rectangle(2, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }

    run();
}