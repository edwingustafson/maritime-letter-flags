import Alpha from 'flag/Alpha.svg';
import Bravo from 'flag/Bravo.svg';
import Charlie from 'flag/Charlie.svg';
import Delta from 'flag/Delta.svg';
import Echo from 'flag/Echo.svg';
import Foxtrot from 'flag/Foxtrot.svg';
import Golf from 'flag/Golf.svg';
import Hotel from 'flag/Hotel.svg';
import India from 'flag/India.svg';
import Juliet from 'flag/Juliet.svg';
import Kilo from 'flag/Kilo.svg';
import Lima from 'flag/Lima.svg';
import Mike from 'flag/Mike.svg';
import November from 'flag/November.svg';
import Oscar from 'flag/Oscar.svg';
import Papa from 'flag/Papa.svg';
import Quebec from 'flag/Quebec.svg';
import Romeo from 'flag/Romeo.svg';
import Sierra from 'flag/Sierra.svg';
import Tango from 'flag/Tango.svg';
import Uniform from 'flag/Uniform.svg';
import Victor from 'flag/Victor.svg';
import Whiskey from 'flag/Whisky.svg';
import Xray from 'flag/Xray.svg';
import Yankee from 'flag/Yankee.svg';
import Zulu from 'flag/Zulu.svg';
import * as React from 'react';
import styles from './styles.module.css';

const flags: Map<string, string> = new Map([
  ['A', Alpha],
  ['B', Bravo],
  ['C', Charlie],
  ['D', Delta],
  ['E', Echo],
  ['F', Foxtrot],
  ['G', Golf],
  ['H', Hotel],
  ['I', India],
  ['J', Juliet],
  ['K', Kilo],
  ['L', Lima],
  ['M', Mike],
  ['N', November],
  ['O', Oscar],
  ['P', Papa],
  ['Q', Quebec],
  ['R', Romeo],
  ['S', Sierra],
  ['T', Tango],
  ['U', Uniform],
  ['V', Victor],
  ['W', Whiskey],
  ['X', Xray],
  ['Y', Yankee],
  ['Z', Zulu],
]);

export const MaritimeLetterFlags: React.FC<{
  letters?: boolean;
  text?: string
}> = ({ 
  letters = false,
  text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}) => <div
  className={styles.test}
  data-letters={letters}
  style={{display: 'flex', alignItems: 'flex-start'}}
>
  {text
    .trim()
    .toLocaleUpperCase()
    .replaceAll(/\s+/g, ' ')
    .replaceAll(/[^A-Z ]/g, '')
    .split('')
    .map((letter, index) =>  
      <div data-letter={letter} key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {flags.has(letter) ? <React.Fragment>
          <img src={flags.get(letter)} alt={letter} title={letter} style={{width: '1.1rem'}}/>
          {letters ? <span style={{fontWeight: 'bold'}}>{letter}</span> : ''}
        </React.Fragment> : <div style={{width: '0.9rem'}}/>}
      </div>
    )
  }
</div>;