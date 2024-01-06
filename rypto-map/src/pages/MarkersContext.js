import React, { createContext, useState } from 'react';

export const MarkersContext = createContext();

export const MarkersProvider = ({ children }) => {
    const [markers, setMarkers] = useState([]);

    const addMarker = (newMarker) => {
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };

    return (
        <MarkersContext.Provider value={{ markers, addMarker }}>
            {children}
        </MarkersContext.Provider>
    );
};
