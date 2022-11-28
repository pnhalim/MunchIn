import React, { useEffect, useState } from 'react'
import InfoIcon from '@mui/icons-material/InfoOutlined';


function Widgets() {
  const newsArticle = (heading, subtitle = '', link = '') => (
    <div onClick={() => (window.open(link))} className='flex items-start px-4 py-1 cursor-pointer hover:bg-neutral-100'>
      <div className='p-1 rounded-full bg-neutral-500 mt-2'></div>
      <div className='pl-3 w-60'>
        <h1 className='font-semibold text-neutral-700'>{heading}</h1>
        <p className='text-sm text-neutral-500'>{subtitle}</p>
      </div>
    </div>
  )

  const [joke, setJoke] = useState('hi');

  useEffect(() => {
    const getJoke = new Promise((resolve, reject) => {
      fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers: {
          'User-Agent': 'MunchIn: A LinkedIn Clone (https://github.com/pnhalim/linkedin-clone)', 
          'Accept': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          resolve(data.joke);
        })
        .catch(err => {
          console.log(err)
          reject('I am out of jokes...');
        })
    });
    getJoke
    .then(j => {
      setJoke(j)
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  return (
    <div className='w-72'>
      <div className='rounded-md bg-white shadow pb-3'>
        <div className='flex items-center justify-between p-3 pb-1'>
          <h1 className='text-lg font-semibold'>MunchIn News</h1> 
          <InfoIcon className='opacity-80 scale-75' />
        </div>
        <div onClick={() => (window.open('https://icanhazdadjoke.com/api'))} className='flex items-start px-4 py-1 cursor-pointer hover:bg-neutral-100'>
          <div className='p-1 rounded-full bg-neutral-500 mt-2'></div>
          <div className='pl-3 w-60'>
            <h1 className='font-semibold text-neutral-700'>Random Dad Joke</h1>
            <p className='text-sm text-neutral-500'>{joke}</p>
          </div>
        </div>
        {newsArticle('MunchIn: The Next Big Thing?', 'Could MunchIn surpass LinkedIn in average daily users?', 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_525041723_970647970450098_70024.jpg')}
        {newsArticle('Hummus is Banned in My Kitchen', 'Meet the chef bringing "the essence of Palestine" to London', 'https://www.theguardian.com/food/2022/nov/27/hummus-banned-kitchen-palestine-chef-fadi-kattan-london-restaurant')}
        {newsArticle('10 Hottest Food Trends', 'The top trends in 2022', 'https://www.touchbistro.com/blog/10-hottest-food-trends-this-season/')}
      </div>
    </div>
  )
}

export default Widgets