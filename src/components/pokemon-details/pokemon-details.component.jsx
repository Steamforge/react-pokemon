import React from 'react';
import './pokemon-details.styles.scss';

import DetailsBanner from '../details-banner/details-banner.component';
import PokemonImageLarge from '../image-large/image-large.component';
import DetailsName from '../details-name/details-name.component';
import DetailsStats from '../details-stats/details-stats.component';

const PokemonDetails = ({ id, types, name, weight, height }) => {
  let typeMain, typeSecondary;

  // TODO: not super-happy with this approach. Think about refactor
  // Because the api has the types in reverse order

  for (let i in types) {
    switch(types[i].slot) {
      case 2:
        typeSecondary = types[i].type.name;
        break;
      case 1:
      default:
        typeMain = types[i].type.name;
    }
  }

  return (
    <div className={`pokemon-details-wrapper ${typeMain}`}>
      <div className="pokemon-details-container">
        <DetailsBanner typeMain={typeMain} />
        <PokemonImageLarge id={id} name={name} />
        <DetailsName name={name} />
        <DetailsStats typeMain={typeMain} typeSecondary={typeSecondary} weight={weight} height={height} />
      </div>
    </div>
  )
}

export default PokemonDetails;