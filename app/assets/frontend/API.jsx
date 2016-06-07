import ServerActions from "./actions/ServerActions"

export default {
    getAllTweets() {
        $.get("/tweets")
            .success( rawTweets => ServerAction.receivedTweets( rawTweets))
            .error(error -> console.log(error))
    }
}