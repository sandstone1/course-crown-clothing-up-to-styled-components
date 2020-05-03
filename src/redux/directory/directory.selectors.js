

import { createSelector } from 'reselect';

// the below gives me the directory reducer
const selectDirectory = ( state ) => state.directory;

// the below gives me the directory sections array
export const selectDirectorySections = createSelector( 
    [ selectDirectory ],
    ( directory ) => directory.sections
);

