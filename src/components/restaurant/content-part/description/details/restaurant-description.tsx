"use client"
import {Component} from "react";

class RestaurantDescription extends Component<{ description: any }> {
    render() {
        // @ts-ignore
        let {description: string} = this.context;
        let {description} = this.props;
        return (
            <>
                <div className='mt-4'>
                    <p className='text-lg font-light'> {description}</p>
                </div>
            </>
        )
    }
}

export default RestaurantDescription