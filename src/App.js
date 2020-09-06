import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Spin, Alert } from 'antd';
import SearchResults from './SearchResults';
import actions from './actions';

const { Search } = Input;

class App extends Component {
  fetchSongs = (value) => {
    console.log(value);
    if (value) {
      this.props.fetchSongs(value);
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '50%', margin: '40px auto' }}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={this.fetchSongs}
          />
        </div>
        {this.props.error && <Alert className="centered" message={this.props.error} type="error" />}
        {
          this.props.isFetching
            ? <div className="centered"><Spin size="large" /></div>
            : <SearchResults songs={this.props.songs} />
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: input => dispatch(actions.fetchSongs(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
