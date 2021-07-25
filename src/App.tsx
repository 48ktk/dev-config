import React from 'react'
import styled from 'styled-components'
// import axios from '../node_modules/axios/index'

const App: React.VFC = () => {
  // const NBA_SCORE_URL =
  //   'https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json'
  // axios.get(NBA_SCORE_URL).then((result) => console.log(result))

  return <StyledHelloDiv>Hello</StyledHelloDiv>
}

export default App

const StyledHelloDiv = styled.div`
  color: #c4c4c4;
`
