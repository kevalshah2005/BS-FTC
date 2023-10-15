// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

import PrankLink from "./PrankLink";

const config = {
    botName: "BS FTC",
    initialMessages: [
        createChatBotMessage("I am Better Sentience FTC, also known as BS FTC, the #1 FTC chatbot. It\'s true, check this very objective ranking:"),
        createChatBotMessage("1. BS FTC\n2. BS FTC\n3. BS FTC\n4. BS FTC\n5. FOSTER (just kidding, it's BS FTC)",
            {
                withAvatar: true,
                delay: 500,
            }
        )
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#0000FF',
        },
        chatButton: {
            backgroundColor: '#FF8800',
        },
    },
    widgets: [
        {
            widgetName: "link",
            widgetFunc: (props) => <PrankLink />
        },
    ]
}

export default config