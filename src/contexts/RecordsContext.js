import React from 'react';

const RecordsContext = React.createContext({
  records: [],
  updateRecord: () => {},
});

export default RecordsContext;
