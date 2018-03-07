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

const socialShareText = encodeURIComponent(
  'Listen to @TheBeelievers debut single asking #MrGove to keep his pledge to ban neonicotinoid #pesticides & help #SaveTheBees! https://www.thebeelievers.org'
);

const IndexPage = () => (
  <div>
    <ResponsiveFrameContainer>
      <iframe
        src="https://www.youtube.com/embed/Khed6Ea8QTA?rel=0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </ResponsiveFrameContainer>
    <h2>The Beelievers - Mr. Gove</h2>
    <p>
      Share the video:{' '}
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${socialShareText}`}
      >
        Twitter
      </a>{' '}
      |{' '}
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.thebeelievers.org"
      >
        Facebook
      </a>{' '}
      |{' '}
      <a
        target="_blank"
        href={`mailto:test@example.com?subject=Mr.%20Gove%20from%20The%20Beelievers&body=${socialShareText}`}
      >
        Email
      </a>{' '}
      |{' '}
      <a target="_blank" href={`whatsapp://send?text=${socialShareText}`}>
        WhatsApp
      </a>
    </p>
    <h3>Why did we make this video?</h3>
    <p>
      In November 2017, Michael Gove, Environment Secretary,{' '}
      <a
        target="_blank"
        href="https://www.theguardian.com/environment/2017/nov/09/the-evidence-points-in-one-direction-we-must-ban-neonicotinoids"
      >
        pledged
      </a>{' '}
      to prevent the use of a group of pesticides known as neonicotinoids. A
      restriction on their use had been placed on them by the EU in 2013 but,
      with Brexit and possible US trade deal deregulation ahead, we wanted to
      remind Mr Gove of his promise to care for the environment and to leave the
      pesticide controls in place.
    </p>
    <p>
      Please kindly consider signing and sharing the petition below and check
      out the links provided to see how you can join the continued fight to save
      these very very special creatures!
    </p>

    <h3>Take action</h3>
    <p>
      Sign this Friend of the Earth petition:{' '}
      <a
        target="_blank"
        href="https://act.friendsoftheearth.uk/act/support-tougher-restrictions-bee-harming-pesticides"
      >
        Support tougher restrictions on bee-harming pesticides
      </a>
    </p>
    <p>
      Write to your MP in your own words telling them how important it is to set
      tougher restrictions to curb the practice of routinely spraying chemicals
      everywhere:{' '}
      <a target="_blank" href="https://www.theyworkforyou.com/">
        https://www.theyworkforyou.com/
      </a>
    </p>
    <p>
      If you'd like to become a Beeliever and keep informed of news and any of
      our future endeavours please do subscribe to our mailing list!<br />
      YES! I'm a Beeliever! Subscribe
    </p>
    <p>
      If you seek any specific information please contact{' '}
      <a target="_blank" href="mailto:info@thebeelievers.org">
        info@thebeelievers.org
      </a>
    </p>
    <h3>More actions to take</h3>
    <p>
      Sign this Buglife campaign:{' '}
      <a
        target="_blank"
        href="https://www.buglife.org.uk/campaigns-and-our-work/campaigns/help-europes-bees-and-wild-pollinators"
      >
        Help Europe's Bees and Wild Pollinators
      </a>
    </p>
    <h3>More info</h3>
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
      Strongest evidence yet that neonicotinoids are killing bees (New
      Scientist)<br />
      <a
        href="https://www.newscientist.com/article/2139197-strongest-evidence-yet-that-neonicotinoids-are-killing-bees/"
        target="_blank"
      >
        https://www.newscientist.com/article/2139197-strongest-evidence-yet-that-neonicotinoids-are-killing-bees/
      </a>
    </p>
    <p>
      Farms could slash pesticide use without losses (The Guardian)<br />
      <a
        href="https://www.theguardian.com/environment/2017/apr/06/farms-could-slash-pesticide-use-without-losses-research-reveals"
        target="_blank"
      >
        https://www.theguardian.com/environment/2017/apr/06/farms-could-slash-pesticide-use-without-losses-research-reveals
      </a>
    </p>
    <p>
      Would we starve without bees? (BBC)<br />
      <a href="http://www.bbc.co.uk/guides/zg4dwmn" target="_blank">
        http://www.bbc.co.uk/guides/zg4dwmn
      </a>
    </p>
    <p>
      Attack of the bee killers: Documents show Bayer and Syngenta teamed up
      with farmers to get around bee-friendly regulation (Politico)<br />
      <a
        href="https://www.politico.eu/article/europes-lost-colonies-bees-neonicotinoids/"
        target="_blank"
      >
        https://www.politico.eu/article/europes-lost-colonies-bees-neonicotinoids/
      </a>
    </p>
    <p>
      Controversial pesticides can decimate honey bees, large study finds
      (Science)<br />
      <a
        href="http://www.sciencemag.org/news/2017/06/controversial-pesticides-can-decimate-honey-bees-large-study-finds"
        target="_blank"
      >
        http://www.sciencemag.org/news/2017/06/controversial-pesticides-can-decimate-honey-bees-large-study-finds
      </a>
    </p>
    <p>
      Pesticide Lobby Spends Millions To Defend Chemicals Tied To Bee Deaths
      (Huffington Post)<br />
      <a
        href="http://www.huffingtonpost.com/2013/03/29/pesticide-lobby-bees_n_2980870.html"
        target="_blank"
      >
        http://www.huffingtonpost.com/2013/03/29/pesticide-lobby-bees_n_2980870.html
      </a>
    </p>
    <p>
      Revealed: rightwing groups plot to ditch EU safety standards on food and
      drugs (Guardian)<br />
      <a
        href="https://www.theguardian.com/politics/2018/feb/17/revealed-us-uk-rightwing-thinktanks-talks-to-ditch-eu-safety-checks"
        target="_blank"
      >
        https://www.theguardian.com/politics/2018/feb/17/revealed-us-uk-rightwing-thinktanks-talks-to-ditch-eu-safety-checks
      </a>
    </p>
  </div>
);

export default IndexPage;
