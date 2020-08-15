import React from "react";

import "./TodoItem.sass";

const TodoItem = () => {
    const arrItems = ["Task1", "Task2", "Task3", "Task4", "Task5"];
    return arrItems.map((item, index) => {
        return (
            <div className="item" key={index}>
                <p>{item}</p>
                <div className="wrapperRemoveFavorites">
                    <button className="buttonRemove">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="buttonFavorites">
                        <i className="fas fa-star"></i>
                    </button>
                </div>
            </div>
        );
    });
};

export default TodoItem;
