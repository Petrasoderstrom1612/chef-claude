import React from 'react'
import chefClaudeLogo from "./assets/chef-claude-icon.png"

export const Header = () => {
  return (
    <header className="header">
      <img src={chefClaudeLogo}/>
      <h1>Chef Claude</h1>
    </header>
  )
}
