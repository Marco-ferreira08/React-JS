import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import React, {useState, useEffect, useMemo, useCallback} from "react";

import RoutesApp from './routes/routes';

function App()
{
    return(
      <div>
        <RoutesApp />
      </div>
    );  
}

export default App;