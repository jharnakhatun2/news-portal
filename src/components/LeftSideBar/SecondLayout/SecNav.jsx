import React from "react"
import ReuseNav from "../../../util/ReuseNav/ReuseNav";

const navData = [
    {
        'id' : '1',
        'name' : 'Trump Transition'
    },
    {
        'id' : '2',
        'name' : 'Cabinet and Staff Picks'
    },
    {
        'id' : '3',
        'name' : 'Trump’s Conflicts of Interest'
    },
    {
        'id' : '4',
        'name' : 'Stephen Miller’s Influence'
    },
    {
        'id' : '5',
        'name' : 'How Thomas Homan Found MAGA'
    }
]

const SecNav = () => {
  return (
    <ReuseNav data={navData}></ReuseNav>
  )
};

export default SecNav;
