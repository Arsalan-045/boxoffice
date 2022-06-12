/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
import { useEffect, useReducer, useState } from "react";

function showsReducer(prevState, action)
{
    switch(action.type)
    {
        case 'ADD' : { return [...prevState, action.showId]; }

        case 'REMOVE' : { return prevState.filter(showId => showId !== action.showId); }

        default: return prevState;
     
    }
}

function usePersistedReducer(reducer, intialState, key)
{
        const [state, dispatch] = useReducer(reducer, intialState, intial =>{

        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : intial;
    });

    useEffect( ()=>{

        localStorage.setItem(key, JSON.stringify(state));
        
    }, [state, key]);

    return [state, dispatch];

}

export function useShows( key = 'shows')
{
    return usePersistedReducer(showsReducer, [], key);
}