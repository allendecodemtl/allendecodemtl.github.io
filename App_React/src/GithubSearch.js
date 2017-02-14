import React from 'react';
import GithubSearchForm from './GithubSearchForm';
import GithubProfile from './GithubProfile';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  _onSearch = (searchTerm) => {
    this.setState({ user: searchTerm })
    //console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._onSearch}/>
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
};
