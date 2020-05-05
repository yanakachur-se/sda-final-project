import React from "react";
import { Link } from 'react-router-dom'

function PostCard({post, onDeleteClick,currentEmail}) {
    const id = post.id;

    if(post.user.email === currentEmail){}
    return (
        <div className="card mt-3">
            <div className="card-body">
                
                  

                <p>Type of the event: {post.type}</p>
                <p>Activity Description :{post.body}</p>
                <p>Name of the Organizer :{post.name} </p>
                <p> Event Date :  {post.date}</p>
                <p> Location : {post.location} </p>
                <p>Allowed number of people : {post.attendeesLimit}</p>
                
                <p>
                 From : <u>{post.user.email}</u>
                </p>
                {(post.user.email === currentEmail) ? 
                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button> : null
                }
                {' '}
                <Link to={'/posts/' + id}>
                <button className="btn btn-primary" >View</button>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;