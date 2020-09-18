import React from 'react';

import { Container, Star, FallingStar } from './styles';

let stars : any[] = []


const Stars: React.FC = () => {

  for (var i = 0; i < 50; i++) {
    stars.push(<Star key={i} />)
  }

  return (
      <Container>
          {stars}

          <FallingStar />
          <FallingStar />
          <FallingStar />
          <FallingStar />
          <FallingStar />
      </Container>
  )
}

export default Stars;