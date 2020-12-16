const app = new Vue({
    el:'#app',
    data:{
        title: "To do App",
        newTodo: "",
        list: []
    },
    methods: {
        addTodo(){
            // this.list.push(newTodo.value);
            
            if(this.newTodo==""||this.newTodo==" "){
                alert("Insert a Task");
            }else{
            this.list.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo ="";
        }
        },
        remove(todo){
            const index = this.list.indexOf(todo);
            this.list.splice(index, 1);
        },
        allDone(){
            this.list.forEach(element => {
                element.done = true;
            });
        },
        notDone(){
            this.list.forEach(element =>{
                element.done = false;
            })
        },
        removeAll(){
            this.list = [];
        }
    }
});