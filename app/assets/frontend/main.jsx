import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
    { id: 1, name: 'Gail Steiger', body: 'My #FirstTweet'},
    { id: 2, name: 'Gail Steiger', body: 'My #SecondTweet'},
    { id: 3, name: 'Gail Steiger', body: 'My #ThirdTweet'}
];

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweetsList: mockTweets };
    }
    addTweet(tweetToAdd) {
        let newTweetsList = this.state.tweetsList;
        newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

        this.setState({ tweetsList: newTweetsList });
    }
    render() {
        return (
            <div className="container">
                <TweetBox sendTweet={this.addTweet.bind(this)} />
                <TweetsList tweets={this.state.tweetsList} />
            </div>
        );
    }
}


let documentReady = () => {
    React.render(
        <Main />,
        document.getElementById('react')
    )
};

$(documentReady);