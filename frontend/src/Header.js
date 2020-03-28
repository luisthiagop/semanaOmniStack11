import React from 'react';

export default function Header({children}){ //desestruturação  usa {}
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}