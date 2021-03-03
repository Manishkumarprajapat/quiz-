class Question {
    constructor() {
        this.input1=createInput("Name");
        this.options1=createButton("Enter the name");
        this.options2=createButton("Enter the correct option");
    }
hide() {
    this.options1.hide();
    this.options2.hide();
    this.input1.hide();
}
display() {
    this.title.html("My Quiz Game");
    this.title.position(350,0);

    this.question.html("Question: What starts and ends with letter'E' but has only one lettter? ");
    this.question.position(150,80);
    this.options1.html("1: Everyone");
    this.options1.position(150,100);
    this.options2.html("2: Envelope");
    this.options2.position(150,120);

    this.input1.position(150,230);
}
}
