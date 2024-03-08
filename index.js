class User {
    constructor(username) {
        this.username = username;
        this.messages = [];
    }

    sendMessage(receiver, content) {
        const message = {
            sender: this.username,
            receiver: receiver.username,
            content: content,
            timestamp: new Date().toLocaleString()
        };

        receiver.receiveMessage(message);
        this.messages.push(message);
    }

    receiveMessage(message) {
        this.messages.push(message);
    }
}

// Example usage
const user1 = new User("Alice");
const user2 = new User("Bob");

user1.sendMessage(user2, "Hey Bob, how's it going?");
user2.sendMessage(user1, "Hi Alice! I'm doing well, thanks!");

console.log(user1.messages);
console.log(user2.messages);

