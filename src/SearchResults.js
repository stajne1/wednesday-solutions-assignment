import React from 'react';
import { Col, Row, Card } from 'antd';
const { Meta } = Card;

const SearchResults = props => {

  const playHandler = event => {
    const audio_elements = document.getElementsByTagName('audio');
    for (let i = 0; i < audio_elements.length; i++) {
      let audio_element = audio_elements[i];
      if (audio_element !== event.target) {
        audio_element.pause();
      }
    }
  }

   let songList = props.songs.map(song => (
    <Col key={song.trackId} span={6} >
      <Card
        hoverable
        style={{ width: 240, margin: '20px auto' }}
        cover={<img alt="example" src={song.artworkUrl100.replace('100x100', '1000x1000')} />}
      >
        <audio id="myAudio" onPlay={playHandler} controls style={{ width: '100%' }}>
          <source src={song.previewUrl} type="audio/ogg" />
              Your browser does not support the audio element.
        </audio>
        <Meta title={song.trackName} description={song.artistName} />
      </Card>
    </Col >
  ));

  return (
    <div style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
      <Row>
        {props.songs.length
          ? songList
          : <Col span={24}>No Results Found</Col>
        }
      </Row>
    </div>
  );
}

export default SearchResults;