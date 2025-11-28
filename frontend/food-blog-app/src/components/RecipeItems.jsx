import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { LuClock4 } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

function RecipeItems() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)

    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={foodImg} width="120px" height="100px" />

                                <div className='card-body'>
                                    <div className='title'>
                                        {item.title}
                                    </div>

                                    <div className='icons'>
                                        <LuClock4 /> {item.time} min
                                        <FaHeart />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecipeItems
