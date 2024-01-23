let data="Hey!! don't forget that you have me and i love you and i will always be your doraemon forever just don't leave me betu";
class user{
    constructor(name, email){
        this.name= name;
        this.email=email;
    }
    viewData(){
        console.log(data);
    }
}
class admin extends user{
     constructor(name, email){
        super(name, email); }
            edit() {
            data="hii";
         }}
     

let ujjwal= new user("ujjwal", "ujjwal@gmail.com")
let ujji= new user("ujji", "ujji@gmail.com")
let Admin= new user("Admin", "Admin@gmail.com")