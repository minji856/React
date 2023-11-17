import * as React from 'react';

// type , interface 둘다 똑같아서 아무거나 써도 된다
type useToggleReturnType = [boolean, ()=>void];

function useToggle () : useToggleReturnType{
    const [hideCount, setHideCount] = React.useState(false);
    const toggle = () => setHideCount(!hideCount);
    
    return [ hideCount, toggle ];
}

export default useToggle;
