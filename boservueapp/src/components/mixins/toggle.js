export  const  toggle = {
    //局部混入
    data(){
        return {
            isShowing:false,
        }
    },
    methods:{
        toggleShow(){
            this.isShowing = true;
            console.log(this.isShowing)
        }
    },
    created(){
        this.toggleShow()
    }
}