import React, {Component} from 'react'
import Deck from './CardSwipe/Deck'
import ActionCardSugest from './ActionCardSugest'


class CardSugestImage extends Component{

    render(){
        return(
            <div>
                    <div className="containerCardSwipe">
                        <Deck/>
                    </div>
                    <div style={{position: 'absolute', bottom: -680, left: '31%'}}>
                            <ActionCardSugest/>
                    </div>
            </div>
        )
    }
}

export default CardSugestImage