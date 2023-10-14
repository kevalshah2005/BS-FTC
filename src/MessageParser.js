// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {

        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowercase = message.toLowerCase();

        if (message.length === 0) {
            this.actionProvider.message("What, do you not have anything to say? Guess you're in awe of the great BS FTC's presense.");
        } else if (lowercase.includes("hello")) {
            this.actionProvider.message("You are not worthy of speaking like that to the great BS FTC.");
        } else {
            this.actionProvider.sendLink();
        }
    }
}

export default MessageParser;