import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import { EventEmitter } from 'events';

let _tweets = [];
const CHANCE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
    formattedTweets(tweetsList) {
        let formattedList = tweetsList.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });
        return {
            tweetsList: formattedList
        }
    }

    getAll() {
        return _tweets.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });
    }

    emitChange() {
        this.emit(CHANCE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANCE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeChangeListener(CHANCE_EVENT, callback);
    }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
    switch (action.actionType) {
        case ActionTypes.RECEIVED_TWEETS:
            _tweets = action.rawTweets;
            TweetStore.emitChange();
            break;
        case ActionTypes.RECEIVED_ONE_TWEET:
            _tweets.unshift(action.rawTweet);
            TweetStore.emitChange();
        
        default:
            // no op
            break;
    }
});

export default TweetStore;