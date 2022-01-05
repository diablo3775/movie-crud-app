import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import React from 'react'

const Home = () => {
    const movies = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_MOVIE', payload: id });
        toast.success('Movie deleted successfully');
    }

    return (
            <div>
                <Grid>
                            {movies.map((movie,id) => (
                                <div key={id}>
                                    <img src={movie.image} alt="ok" />
                                    <li>Movie: {movie.name}</li>
                                    <li>Producer: {movie.producer}</li>
                                    <li>Actor: {movie.actor}</li>
                                    <p>
                                        <Link to={`/edit/${movie.id}`}><Button>Edit</Button></Link>
                                        <Button type="button" onClick={() => deleteContact(movie.id)}>Delete</Button>
                                    </p>
                                </div>
                            ))}
                </Grid>
            </div>
        
    )
}


const Grid = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin-left: 50px;
    margin-top: 30px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img {
        width: 200px;
        height: 300px;
        border-radius: 10px;
    }


    li {
        font-size: 20px;
        margin-top: 10px;
        list-style: none;
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



export default Home
