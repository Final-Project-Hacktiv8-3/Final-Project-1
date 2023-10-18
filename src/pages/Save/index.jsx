import React from 'react'
import { useEffect,useState } from 'react'
import { newListSave,database } from '../../config/index.js'
import {onValue} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { Navbar, NewsCard } from '../../components/organisms/index.js'
import { Loading } from '../../components/molucules/index.js'


export const Save = () => {

    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        onValue(newListSave, function(snapshot) {
   
            if (snapshot.exists()) {
                let itemsArray = Object.entries(snapshot.val())
                setDatas(itemsArray)
                setIsLoading(false);
            
             
            }   
        })
    }, [])

    console.log(datas);
    


  return (
    <>
    <Navbar />
    <div className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen">
      <h1 className="-mt-60 capitalize text-4xl">Saved</h1>
      <div className="border-b-2 border-slate-900 w-[70%] m-[1rem]" />
      <div className=" flex flex-wrap justify-center items-center w-full">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {datas.map(news => (
              <NewsCard
              key={news[0]}
              title={news[1]?.title}
              description={news[1]?.description}
              author={news[1]?.author}
              url={news[1]?.url}
              />
            ))}
          </>
        )}
      </div>
    </div>
  </>
  )
}






