import React from 'react'
import { StyleTotal } from './cssLoadingComponent'
import { useSelector, useDispatch } from 'react-redux'

export default function LoadingComponent() {
    
    const {isLoading} = useSelector(state => state.LoadingReducer);
    
    if(isLoading){
        return (
            <StyleTotal>
                <div className='bgLoading'>
                    <img src={require('../../../assets/imgLoading/loading2.gif')} alt='loading' />
                </div>
            </StyleTotal>
        )
    } else {
        return '';
    }

    
}
