// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    message = (userMessage) => {
        const chatbotMessage = this.createChatBotMessage(userMessage);
        this.addMessageToState(chatbotMessage);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }

    sendLink = () => {
        const message = this.createChatBotMessage(
            "Your query is not important enough for BS FTC to answer. Maybe this video will help.",
            {
                widget: "link",
                withAvatar: true,
            },
        )

        this.addMessageToState(message);
    }
}
 
export default ActionProvider;