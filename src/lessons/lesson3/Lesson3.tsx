import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<any>('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<any>('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then((res) => {
                setSerachResult(res.data)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then( (res)=>{
                setSerachResultByType(res.data)
            })
    }
    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    <div>{serachResult.Title}</div>
                    <div> {serachResult.Year}</div>
                    <div>{serachResult.imdbRating}</div>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    <div>{serachResultByType.Title}</div>
                    <div> {serachResultByType.Year}</div>
                    <div>{serachResultByType.imdbRating}</div>
                </div>
            </div>
        </div>
    );
}
export default Lesson3;