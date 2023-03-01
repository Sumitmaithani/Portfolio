import React from "react";
import styled from "styled-components";

//img
import meka1 from "../assets/work/meka (1).png";
import meka2 from "../assets/work/meka (2).png";
import meka3 from "../assets/work/meka (3).png";
import meka4 from "../assets/work/meka (4).png";
import meka5 from "../assets/work/meka (5).png";
import meka6 from "../assets/work/meka (6).png";

const Container = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  color: #fff;
`;

const Div = styled.div`
  padding: 20px 40px;
`;

const H = styled.h1`
  padding: 20px 0;
`;

const P = styled.p`
  letter-spacing: 0.1em;
  word-spacing: 0.3em;
  line-height: 1.3em;
  width: 95%;
  display: flex;
  @media (max-width: 608px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 30%;
  margin: auto;
  margin-top: 20px;
  @media (max-width: 608px) {
    display: block;
    width: 100%;
  }
`;

const Button = styled.button`

  background-color: #000; 
  border: 1px solid #fff;
  color: white;
  padding: 15px 52px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5%;
  font-weight: 600;

  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  cursor: pointer;
  @media (max-width: 608px) {
}
`

const Btn = styled.div`
margin: auto;
width: 20%;
align-items: center;
padding: 40px;


@media (max-width: 608px) {
width: 65%;
}
`

const Proj1 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>MekaVerse</H>
        <P>
          MekaVerse is the one place in which you get all cryptocurrency prices,
          details, history of coins, price charts, news with a filter option to
          get specific coin news and social media analysis in which you get top
          10 coins by the followers, mentions and sentiments. Plus the whole
          world of NFTs marketplace & more.
        </P>
        <P>
          <Img src={meka2} />
          <Img src={meka3} />
          <Img src={meka4} />
        </P>
        <P>
          <Img src={meka5} />
          <Img src={meka6} />
          <Img src={meka1} />
        </P>
        <H>Tech stack used</H>
        <P>
           npm React, redux-toolkit, react-redux, ant-design,
          chatjs, html-react-parser, millify, react-dom, react-router-dom,
          react-slick</P> 
          <H>API's</H> 
          <P>opensea Api, coingecko Api, crowdsense Api,
          bing-news-search Api </P>
          <H>Details</H> 
          <P>Metaverse is a multipage website which
          made with advanced React best practices, state management using Redux
          toolkit, UI creation using Ant design, creating Charts using chartjs
          and fetching data from multiple sources API's. </P>
          <H>Features : </H>
          <ul>
              <li><P>Homepage
          have cryptocurrency market details with top 10 currencies and some
          news. </P>
          <li><P>
          In cryptocurrencies page you get all 100 cryptocurrencies with
          sorted in ascending order with their price, market cap & daily change
          in percentage with a search input in which you can search coins and
          click of coin you get all data you need like price chart of 24h, 30d,
          1M, 1Y, 5Y by chartjs, coin stats and all external links with the help
          of api's.
          </P></li> 
          <li><P>In news section you get all news with a select option
          feature in which you can filter news with a specific coin news you
          select.</P></li> 
          <li><P>In analysis, you get top 10 coins by their social media
          followers, mentions and coins sentiments.</P></li> 
          <li><P>In NFT page you get all nfts
          with with a search input and in each nft have a nft detail page with
          prices, creator and all stats.</P></li> 
          <li><P>In NFT marketplace have a collection of
          nfts.</P></li>
        </li>
          </ul>
          <a href="https://github.com/Sumitmaithani/MekaVerse" target="_blank">
          <Btn>
          <Button>Visit website</Button>
          </Btn>
          </a>
      </Div>
    </Container>
  );
};

export default Proj1;
