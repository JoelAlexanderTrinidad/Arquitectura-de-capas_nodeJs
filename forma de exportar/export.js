class Say{
    async SayHello () {
        console.log("Hello");
    }
    
    async SayBye () {
        console.log("Bye");
    }
}



module.exports = new Say();