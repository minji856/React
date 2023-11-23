class todo {
    id: string;
    text: string;

    constructor(todoText: string){
        // this.id = new Date().toLocaleDateString(); 단순 날짜만
        this.id = performance.now().toString();
        this.text = todoText;
    }
}

export default todo;