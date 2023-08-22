import { StaticImageData } from 'next/image'
import rt1 from '../public/images/rt1.png'
import rt2 from '../public/images/rt2.png'
import rt3 from '../public/images/rt3.png'
import rt4 from '../public/images/rt4.png'
import f1 from '../public/images/f1.png'
import f2 from '../public/images/f2.png'
import f3 from '../public/images/f3.png'
import f4 from '../public/images/f4.png'
import m1 from '../public/images/m1.png'
import m2 from '../public/images/m2.png'
import m3 from '../public/images/m3.png'
import m4 from '../public/images/m4.png'
import m5 from '../public/images/m5.png'
import m6 from '../public/images/m6.png'
import p1 from '../public/images/p1.png'
import p2 from '../public/images/p2.png'
import p3 from '../public/images/p3.png'

type Product = {
  id: number
  title: string
  desc?: string
  img: StaticImageData
  price?: number
  rating: number
  location?: string
  mins: string
  people: string
  options?: { title: string; additionalPrice: number }[]
}

type Products = Product[]

export const restaurant: Products = [
  {
    id: 1,
    title: 'chicken lovers',
    img: rt1,
    price: 24.9,
    rating: 4.0,
    location: 'lagos, ikeja',
    mins: '20 mins',
    people: '150 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'chicken republic',
    img: rt2,
    price: 24.9,
    rating: 3.2,
    location: 'wuse, abuja',
    mins: '30 mins',
    people: '200 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'mr biggs',
    img: rt3,
    price: 24.9,
    rating: 4.5,
    location: 'iwo-road ibadan',
    mins: '40 mins',
    people: '300 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'sweet sensation',
    img: rt4,
    price: 24.9,
    rating: 4.8,
    location: 'sango, ogun',
    mins: '25 mins',
    people: '450 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

export const foods: Products = [
  {
    id: 1,
    title: 'chicken lovers',
    img: f1,
    price: 24.9,
    rating: 4.0,
    location: 'lagos, ikeja',
    mins: '20 mins',
    people: '150 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'chicken republic',
    img: f2,
    price: 24.9,
    rating: 3.2,
    location: 'wuse, abuja',
    mins: '30 mins',
    people: '200 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'mr biggs',
    img: f3,
    price: 24.9,
    rating: 4.5,
    location: 'iwo-road ibadan',
    mins: '40 mins',
    people: '300 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'sweet sensation',
    img: f4,
    price: 24.9,
    rating: 4.8,
    location: 'sango, ogun',
    mins: '25 mins',
    people: '450 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

export const personalised: Products = [
  {
    id: 1,
    title: 'Baked Pizza Wrap - Vegetarian',
    img: f3,
    price: 200,
    rating: 4.0,
    desc: 'Suren Pastries',
    mins: '20 mins',
    people: '150 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Butter Chicken Pizza - 8 serve',
    img: p1,
    price: 173,
    rating: 3.2,
    desc: 'subway',
    mins: '30 mins',
    people: '200 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Mexican Patty Signature Wraps',
    img: p2,
    price: 100,
    rating: 4.5,
    desc: 'Burgerito',
    mins: '40 mins',
    people: '300 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Southwest Chicken Salad',
    img: p3,
    price: 300,
    rating: 4.8,
    desc: 'Faasos - Wraps & Rolls',
    mins: '25 mins',
    people: '450 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

type Mind = {
  id: number
  title: string
  img: StaticImageData
}

type Minds = Mind[]

export const mind: Minds = [
  {
    id: 1,
    title: 'sandwich',
    img: m1,
  },
  {
    id: 2,
    title: 'North Indian Thali',
    img: m2,
  },
  {
    id: 3,
    title: 'Egg BreakFast',
    img: m3,
  },
  {
    id: 4,
    title: 'Rolls & Puffs',
    img: m4,
  },
  {
    id: 5,
    title: 'Salads',
    img: m5,
  },
  {
    id: 6,
    title: 'Biriyani Box',
    img: m6,
  },
]
