import React from 'react';
import { connect } from 'react-redux';
import { increaseCartCountAction } from '../../../store/store';

function ProductCard(props) {
    return (
        <div className="col-3 col-offset-2 card">
            <img src={props.item.img} className="card-img-top product-image" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <h3>${props.item.price}</h3>
                    {
                        props.item.active ? <a href="#" className="btn btn-primary" onClick={props.increaseCount}>Add to cart</a> : <span>Not Available </span>
                    }
                </div>


            </div>
        </div>
    )
}



const mapDispatchToProp = (dispatch) => {
    
    return {
        increaseCount: () => {
            dispatch(increaseCartCountAction())
        }
    }
}

export default connect(null, mapDispatchToProp)(ProductCard);