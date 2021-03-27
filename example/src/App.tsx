import { MaritimeLetterFlags } from 'maritime-letter-flags';
import 'maritime-letter-flags/dist/index.css';
import React from 'react';


const App = () => <MaritimeLetterFlags
    letters={true}
    text={'Hello, world!'}
/>;

export default App;