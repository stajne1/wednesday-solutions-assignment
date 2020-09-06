import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import { Col, Row, Card } from 'antd';
const { Meta } = Card;

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

const setup = () => {
  return shallow(<SearchResults songs={songs} />);
}

describe('SearchResults Comonent', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = setup();
  });
  
  it('Should render a row component without errors', () => {
    expect(wrapper.find(Row).length).toBe(1);
  });

  it('Should render the columns equal to the songs received in props', () => {
    expect(wrapper.find(Col).length).toBe(songs.length);
  });

  it('Should render the cards equal to the songs received in props', () => {
    expect(wrapper.find(Card).length).toBe(songs.length);
  });

  it('Should render the song metadata equal to the songs received in props', () => {
    expect(wrapper.find(Meta).length).toBe(songs.length);
  });
});