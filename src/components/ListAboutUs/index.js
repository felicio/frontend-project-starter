import React from 'react'

import ListAboutUsItem from './components/ListAboutUsItem'

import { IconBrush, IconLeaves, IconHeart } from '../ReactSVG'

const data = [
  {
    icon: <IconBrush />,
    title: 'Designed by 10 STRV Designers',
    text:
      'Every piece of this car is handmade. Our all 10 designers check Pinterest, Dribbble and Behance for inspirations',
  },
  {
    icon: <IconLeaves />,
    title: 'Designed by 10 STRV Designers',
    text:
      'Every piece of this car is handmade. Our all 10 designers check Pinterest, Dribbble and Behance for inspirations',
  },
  {
    icon: <IconHeart />,
    title: 'Designed by 10 STRV Designers',
    text:
      'Every piece of this car is handmade. Our all 10 designers check Pinterest, Dribbble and Behance for inspirations',
  },
]

const ListAboutUs = () =>
  <div className="box box-about-us">
    <ul className="list-about-us">
      {data.map(item => <ListAboutUsItem {...item} />)}
    </ul>
  </div>

export default ListAboutUs
