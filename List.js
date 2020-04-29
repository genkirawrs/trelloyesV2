import React from 'react';
import Card from './Card';

import './List.css';

export default function List(props){
    const listCards = props.cards;
    const cards = listCards.map( function(item){
        return <Card key={'card_'+item.id} title={item.title} content={item.content} onDeleteCard={props.onDeleteCard} item={item} listId={props.listId}/>
    });

    return (
	<section className='List'>
            <header className='List-header'>
              <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
		{cards}		
		<button type='button' className='List-add-button' onClick={()=>props.onAddNewCard(props.listId)}>
                    + Add Random Card
                </button>
	    </div>
	</section>
    );
}

List.defaultProps = {
  cards: [],
  header: '',
  onClick: () => {},
}
