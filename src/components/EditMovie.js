import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const EditMovie = () => {
    const [name, setName] = useState('');
    const [producer, setProducer] = useState('');
    const [actor, setActor] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const movies = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentMovie = movies.find(movie => movie.id === parseInt(id));


    useEffect(() => {
        if(currentMovie) {
            setName(currentMovie.name);
            setActor(currentMovie.actor);
            setProducer(currentMovie.producer);
            setImage(currentMovie.image);
        }
        }, [currentMovie]);

        const handleSubmit = (e) => {
            e.preventDefault();
    
            const checkActor = movies.find((movie) => movie.id !== parseInt(id) &&  movie.actor === actor && movie);
            const checkProducer = movies.find((movie) =>  movie.id !== parseInt(id) && movie.producer === producer && movie);
    
            if(!producer || !name || !actor) {
                return toast.warning('Please fill all the fields');
            }
    
            if(checkActor) {
                return toast.warning('Actor already exists');
            }
    
            if(checkProducer) {
                return toast.warning('Producer already exists');
            }
    
            const data = {
                id: parseInt(id),
                name,
                actor,
                producer,
                image
        }
    
        dispatch({type: 'UPDATE_MOVIE', payload: data})
        toast.success("Movie added successfully");
        navigate('/');
    }

    return (
        <div>
            {currentMovie ? (
                 <div>
                 <H1>
                     Edit Movie {id}
                 </H1>
                 <Form>
                     <form onSubmit={handleSubmit}>
                         <div>
                             <input type="text" placeholder="Name" value={name} 
                             onChange={e => setName(e.target.value)}  />
                         </div>
                         <div>
                            <input type="text" placeholder="Actor" value={actor} 
                            onChange={e => setActor(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder="Producer" value={producer} 
                            onChange={e => setProducer(e.target.value)} />
                        </div>
                         <div>
                            <input type="text" placeholder="Image Url" value={image}
                            onChange={e => setImage(e.target.value)} />
                        </div>
                         <Buttons>
                             <input type="submit" value="Update Movie" />
                             <Link to="/"><Button>Cancel</Button></Link>
                         </Buttons>
                     </form>
                 </Form>
             </div>
            ):(<h1>Movie with id {id} not exists</h1>)}
           
        </div>
    )
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background: #333;
            color: #fff;
            border: none;
            /* margin-left: 10px; */
        }
    }
`

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-left: 25px;
    button {
        background: #333;
        color: #fff;
        border: none;
        padding: 10px 5px;
    }
`

const Button = styled.button`
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    margin-left: 10px;
    cursor: pointer;
`


export default EditMovie

