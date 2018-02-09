import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const ResponsiveFrameContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
  margin-bottom: 2rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const IndexPage = () => (
  <div>
    <ResponsiveFrameContainer>
      <iframe
        src="https://www.youtube.com/embed/1V0ImKoWkD8?rel=0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </ResponsiveFrameContainer>

    <h2>The Beelievers - Please Mr. Gove</h2>
    <p>Share the video: Twitter | Facebook | Email | WhatsApp | etc</p>

    <h3>Why did we make this video?</h3>
    <p>Short explanation of the problem and Mr. Gove's pesticide ban pledge.</p>

    <h3>Take action</h3>
    <p>
      Please sign this Buglife campaign:{' '}
      <a
        target="_blank"
        href="https://www.buglife.org.uk/campaigns-and-our-work/campaigns/help-europes-bees-and-wild-pollinators"
      >
        Help Europe's Bees and Wild Pollinators
      </a>
    </p>
    <p>
      Research into pesticides and their effects on bees:{' '}
      <a
        target="_blank"
        href="http://splash.sussex.ac.uk/blog/for/dg229/2017/06/01/pesticides-in-beefriendly-flowers"
      >
        Pesticides in “Bee-Friendly” flowers
      </a>
    </p>
    <p>
      Write to your MP:{' '}
      <a target="_blank" href="https://www.theyworkforyou.com/">
        https://www.theyworkforyou.com/
      </a>
    </p>
  </div>
);

export default IndexPage;
