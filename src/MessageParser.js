// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;

        this.map = new Map();
        this.map.set("hello", "You are not worthy of speaking like that to the great BS FTC.");
        this.map.set("foster", "Don't you DARE utter that name in my presense!");
        this.map.set("ftcgpt", "Don't you DARE utter that name in my presense!");
        this.map.set("ftc gpt", "Don't you DARE utter that name in my presense!");
        this.map.set("ftc", "The Federal Trade Commission (FTC) is an independent agency of the United States government whose principal mission is the enforcement of civil (non-criminal) antitrust law and the promotion of consumer protection. The FTC shares jurisdiction over federal civil antitrust law enforcement with the Department of Justice Antitrust Division. The agency is headquartered in the Federal Trade Commission Building in Washington, DC.");
        this.map.set("manual", "I possess all of the knowledge of all of the game manuals, but you may not have any of it. Mwahahahahaha!");
        this.map.set("rule", "Rules? Do you seriously follow those? Just get on the field and yeet your opponent's robot into next week!");
        this.map.set("bye", "Goodbye. Leave at once.");
        this.map.set("inspire", "The judges are so inspired by me that I, the great BS FTC, automatically win every inspire award at every competition.");
        this.map.set("win", "Is that even a question? I, the great BS FTC, always win.");
        this.map.set("lose", "I don't know who will lose, but I, the great BS FTC, will assuredly not lose.");
        this.map.set("captain", "It doesn't matter who the captain is. They will never beat the great BS FTC.");
        this.map.set("outreach", "Who needs outreach when you can just win every competition like I, the great BS FTC, do?");
        this.map.set("portfolio", "Who needs a portfolio?");
        this.map.set("gracious professionalism", "Gracious professionalism is a myth. If you win hard enough, who cares?");
        this.map.set("control hub", "I, the great BS FTC, possess the entire supply of control hubs. You may not have one. Mwahahahahaha!");
        this.map.set("autonomous", "Just control your robot using a controller. Make sure they don't catch you by using your 1,000,000 lumen LED panel to blind them!");
        this.map.set("code", "Just use ChatGPT to code your robot!");
        this.map.set("build", "Just use ChatGPT to design and build your robot!");
        this.map.set("score", "Scoring is a very simple task. Just get on the field, pick up the element, and place it where it needs to go!");
        this.map.set("apriltag", "Just use a color sensor to detect AprilTags!");
        this.map.set("april tag", "Just use a color sensor to detect AprilTags!");
        this.map.set("axon", "If you repeatedly ping Veer in the FTC server, he'll eventually respond to your query!");
        this.map.set("swerve", "Swerve is the only viable drivetrain in FTC. Make sure to use it!");
        this.map.set("android studio", "Just use Google Docs instead. It's a much better IDE. Why do you think all of the software engineering job interviews use it?");
        this.map.set("ide", "Use Google Docs. Why do you think all of the software engineering job interviews use it?");
        this.map.set("allow", "You're allowed to do whatever you want as long as you bribe the refs hard enough!");
        this.map.set("meta", "The meta is whatever robot I, the great BS FTC, build. Just watch and learn!");
        this.map.set("discord", "Don't listen to the FTC Discord server. They don't know what they're talking about. Only I, the great BS FTC, hold all of the answers!");
        this.map.set("drivetrain", "Swerve is the only viable drivetrain in FTC. Make sure to use it!");
        this.map.set("robot", "Robots? Who needs those? Just do everything yourself!");
        this.map.set("mecanum", "Mecanum is worse than swerve. Just use swerve!");
        this.map.set("mechanum", "Imagine not being able to spell mecanum correctly.");
        this.map.set("cad", "Follow in the footsteps of the great BS FTC and freebuild your robot in its entirety!");
    }

    parse(message) {
        const lowercase = message.toLowerCase();
        let output = "";
        let set = false;

        if (message.length === 0) {
            output = "What, do you not have anything to say? Guess you're in awe of the great BS FTC's presense.";
            set = true;
        } else {
            for (let [key, value] of this.map) {
                if (lowercase.includes(key)) {
                    output = value;
                    set = true;
                    break;
                }
            }
        }

        if (set) {
            this.actionProvider.message(output);
        } else {
            this.actionProvider.sendLink();
        }
    }
}

export default MessageParser;