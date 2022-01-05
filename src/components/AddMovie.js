import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import styled from 'styled-components';
import { toast } from 'react-toastify'

const AddMovie = () => {
    const [name, setName] = useState('');
    const [producer, setProducer] = useState('');
    const [actor, setActor] = useState('');
    const [image, setImage] = useState('');
    const movies = useSelector((state) => state);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkActor = movies.find((movie) => movie.actor === actor);
        const checkProducer = movies.find((movie) => movie.producer === producer);

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
            id: movies[movies.length - 1].id + 1,
            name,
            actor,
            producer,
            image
    }

    dispatch({type: 'ADD_MOVIE', payload: data})
    toast.success("Movie added successfully");
    navigate('/');
}

    return (
        <div>
            <div>
                <H1>
                    Add Student
                </H1>
                <Form>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="Name" value={name} 
                            onChange={e => setName(e.target.value)} />
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
                        <div>
                            <input type="submit" value="Add Student" />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
            padding: 10px 20px;
        }

    }
`

const H1 = styled.h1`
    margin-left: 600px;
`


export default AddMovie 
