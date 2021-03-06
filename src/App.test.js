import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { rootReducer } from './reducer';
import { Input, Spin, Alert } from 'antd';
import SearchResults from './SearchResults';

const { Search } = Input;

const songs = [
  {
    "trackId": 1440912109,
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/a0/e2/a3/a0e2a398-1a11-c406-70c5-2a99ea35c92e/mzaf_8342929405982836308.plus.aac.p.m4a",
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/100x100bb.jpg",
    "trackName": "ABC",
    "artistName": "Jackson 5"
  },
  {
    "trackId": 1440912109,
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/a0/e2/a3/a0e2a398-1a11-c406-70c5-2a99ea35c92e/mzaf_8342929405982836308.plus.aac.p.m4a",
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/100x100bb.jpg",
    "trackName": "ABC",
    "artistName": "Jackson 5"
  },
  {
    "trackId": 1440912109,
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/a0/e2/a3/a0e2a398-1a11-c406-70c5-2a99ea35c92e/mzaf_8342929405982836308.plus.aac.p.m4a",
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/100x100bb.jpg",
    "trackName": "ABC",
    "artistName": "Jackson 5"
  }
];

const initialState = {
  isFetching: false,
  songs,
  error: ''
}


const setup = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('App Component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('Should render Search Component without errors', () => {
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('Should render Alert only when there is an error in props', () => {
    expect(wrapper.find(Alert).length).toBe(0);
    wrapper = setup({ ...initialState, error: 'something went wrong' });
    expect(wrapper.find(Alert).length).toBe(1);
  });

  it("Should render Spinner only when the isFetching prop is true", () => {
    expect(wrapper.find(Spin).length).toBe(0);
    wrapper = setup({ ...initialState, isFetching: true });
    expect(wrapper.find(Spin).length).toBe(1);
  });

  it("Should render SearchResults Component when isFetching is false", () => {
    expect(wrapper.find(Spin).length).toBe(0);
    expect(wrapper.find(SearchResults).length).toBe(1);
  });
});