import React from 'react';
import * as S from './styles';

const Bodylist = ({ types }) => (
  <S.BodyPartList>
    {types.map((type) => (
      <S.BodyPart key={type}>{type}</S.BodyPart>
    ))}
  </S.BodyPartList>
);

export default Bodylist;
