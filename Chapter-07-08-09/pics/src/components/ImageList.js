import React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map(({ description, id, urls }) => {
        return (<div key={id} className="ui segment">
            <img className="ui centered medium image" alt={description} src={urls.regular} />

        </div>);
    });
    return <div>{images}</div>
}

export default ImageList;