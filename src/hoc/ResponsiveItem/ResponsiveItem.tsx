// tsrfc
import React, { useState } from 'react'

type Props = {

    Component : React.FC,
    ComponentMobie : React.FC | undefined // có thể có hoặc không
}

type Screen = {

    width : number;
    height : number;
}

export const ResponsiveItem = ({Component,ComponentMobie}: Props):JSX.Element=>{
 
    const [screen, setScreen] = useState<Screen>({

        width : window.innerWidth,
        height : window.innerHeight,
    })

    if ( screen.width < 768 && ComponentMobie){
        Component = ComponentMobie;
    }
    return <>
        <Component/>
    </>
    
}




// Có 2 kiểu : 
//-- React.FC là react function component 
//-- JSX.element là component thể hiện dưới dạng thẻ 