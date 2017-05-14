import React from 'react'
import Navigation from './Navigation'

const Sidebar = ({ className }) => (
 <aside className={className}>
    <Navigation />
 </aside>
)

Sidebar.defaultProps = {
  className: '',
}

export default Sidebar