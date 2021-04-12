import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [sprite, setSprite] = useState(false)
  const { name, hp, sprites } = pokemon

 function handleClick(){
    setSprite((sprite) => !sprite)
 }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={sprite ? sprites.front : sprites.back } alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
