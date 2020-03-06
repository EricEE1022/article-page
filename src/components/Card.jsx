import React from 'react';

class Card extends React.Component{
    render(){
        const {post} = this.props;
        return (
            <div className="card">
                <h4>{post.title}</h4>
                    <img src={post.urlToImage} width="200" alt=""/>
                <p>{post.author}</p>
                <p>{post.description}</p>
            </div>
        );
    }
};

export default Card;