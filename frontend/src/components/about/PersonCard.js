import React from 'react';
import '../../style/PersonCard.css';

function PersonCard (props) {

    return (
        <div class="card person-card text-center">
           
            <div class="card-body">
                <img src={require(`../../assets/developers/${props.person.image}`)} alt="Viji" id="team" className="img-fluid rounded-circle w-50 mb-3" />
                <h3>{props.person.name}</h3>
                <h5>{props.person.title}</h5>
                <p>{props.person.description}</p>
            </div>
            
        </div>
    )
}

export default PersonCard;