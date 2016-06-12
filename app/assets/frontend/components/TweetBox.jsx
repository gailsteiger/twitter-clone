import React from 'react';
import TweetActions from '../actions/TweetActions';

export default class TweetBox extends React.Component {
    sendTweet(event) {
        event.preventDefault();
        TweetActions.sendTweet(this.refs.tweetTextArea.value)
        this.refs.tweetTextArea.value = '';
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.sendTweet.bind(this)}>
                    <div className="input-field">
                        <textarea ref="tweetTextArea" className="materialize-textarea" name="" id="" cols="30" rows="10"></textarea>
                        <label htmlFor="">What's happening?</label>
                        <button type="submit" className="btn right">Tweet</button>
                    </div>
                </form>
            </div>
        )
    }
}