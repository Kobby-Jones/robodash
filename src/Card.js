import React, { Component } from 'react';

class Card extends Component {
    
    render() { 
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 ms-0'>
                        <div className='card my-5 bg-info'>
                            <img alt='robots' src='https://robohash.org/kobby' className='card-img top' />
                            <div className='text-center pt-2'>
                                <h4 className='card-title fw-bolder'>Kobby Jones</h4>
                            </div>
                            <div className='text-center pb-2'>
                                <p className='card-text'>kobby.jones@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Card;


