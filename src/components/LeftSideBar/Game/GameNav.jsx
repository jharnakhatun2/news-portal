import React from "react"
import ReuseNav from "../../../util/ReuseNav/ReuseNav";

const navData = [
    {
        'id' : '1',
        'name' : 'N.F.L. Playoffs'
    },
    {
        'id' : '2',
        'name' : 'Super Bowl Projections'
    },
    {
        'id' : '3',
        'name' : 'Divisional Round Storylines'
    },
    {
        'id' : '4',
        'name' : 'Insider Predictions'
    },
    {
        'id' : '5',
        'name' : 'More From The Athletic'
    }
]

const GameNav = () => {
  return (
    <ReuseNav data={navData} />
  )
};

export default GameNav;
