import React from 'react'

const Card = ({ title, text, imgPath }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <aside>
                    <img src={imgPath} alt="" />
                </aside>
            </div>
        </div>
    )
}

export default Card