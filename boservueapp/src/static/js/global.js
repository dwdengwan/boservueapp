export default {
    randomColor:function () {
        let r,g,b,a;
        r = parseInt(Math.random()*255);
        g = parseInt(Math.random()*255);
        b = parseInt(Math.random()*255);
        a = (Math.random() + 0.2).toFixed(2);
        return `rgba(${r},${g},${b},${a})`
    },
    getTimeStr:function () {
        let today = new Date();
        let month = today.getMonth() + 1;
        month = month < 10 ? '0'+month : month;
        let day = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
        let hours = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
        let mins = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
        let secs = today.getSeconds() < 10 ? '0'+today.getSeconds() : today.getSeconds();
        // var now1 = today.getFullYear() + '/' + month + '/' + day;
        let now1 = today.getFullYear() + '/' + month + '/' + day + " " + hours + ":" + mins + ":" + secs ;
        return now1
    }
}