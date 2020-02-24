import React from 'react'
import * as rtl from '@testing-library/react'
import 'jest-dom/extend-expect'
import Player from './Player'

it('displays a player successfully', ()=> {
    const player = {name: "Kobe Bryant", country: "United States", searches: 9999 }
    const wrapper = rtl.render(<Player name={player.name} country={player.country} searches={player.searches}/>)
})
