export default {
    randomColor:function () {
        let r,g,b,a;
        r = parseInt(Math.random()*255);
        g = parseInt(Math.random()*255);
        b = parseInt(Math.random()*255);
        a = Math.random();
        return `rgba(${r},${g},${b},${a})`
    }
}