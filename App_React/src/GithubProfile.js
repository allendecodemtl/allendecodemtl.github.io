import React from 'react';

class GithubProfile extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired
  }
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.username}`)
    .then(response => response.json())
    .then(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    return ( < div className = "github-user" >
    {
      !this.state.data
        ? null
        : (
        <div> <img className = "github-user_avatar" src = {
        this.state.data.avatar_url}/>
          <div className = "github-user_info">
            <p> {this.state.data.login}({this.state.data.name}) </p>
            <p> {this.state.data.bio} </p>
          </div>
        </div>
          )
          } < /div>
    );
  }
};

export default GithubProfile;
