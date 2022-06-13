import React, {useState} from 'react';
import TripCard from "./TripCard";
import * as trips from "../api/trips"
const Main = () => {
   let filtredTrips;
   let [filters, setFilters] =  useState({
        search: ``,
        duration: "",
        level: "",
    });
   console.log(filters)
   const filterHandler = (event, filterType) => {
       setFilters({
           ...filters,
           [filterType]: event.target.value,
       })
   }
   const getFiltredTrips = () => {
      let filtred =  Array.from(trips);
     if(!!filters.search){
         filtred =  filtred.filter(trip => trip.title.toLowerCase().includes(filters.search.toLowerCase()));
     }
     if(!!filters.duration){
             switch (filters.duration) {
                 case `0_x_5`:
                     filtred =  filtred.filter(trip => trip.duration <= 5);
                     break;
                 case `5_x_10`:
                     filtred =  filtred.filter(trip => trip.duration < 10);
                     break;
                 case `10_x`:
                     filtred = filtred.filter(trip => trip.duration >= 10);
                     break;
                 default:
                     break;
             }
     }
     if(!!filters.level){
         switch (filters.level) {
             case "easy":
                 filtred =  filtred.filter(trip => trip.level === "easy");
                 break;
             case "moderate":
                 filtred =  filtred.filter(trip => trip.level === "moderate");
                 break;
             case "difficult":
                 filtred =  filtred.filter(trip => trip.level === "difficult");
                 break;
             default:
                 break;
         }
     }
     return filtred;
   }
   filtredTrips = getFiltredTrips();
   console.log(filters.search)
    return (
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <form className="trips-filter__form" autoComplete="off">
                        <label className="trips-filter__search input">
                            <span className="visually-hidden">Search by name</span>
                            <input name="search" type="search"  value= {filters.search} onChange={(event) => {filterHandler(event,`search`)}} placeholder="search by title"/>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by duration</span>
                            <select name="duration" onChange={(event) => {
                                filterHandler(event,`duration`)
                            }}>
                                <option value="">duration</option>
                                <option value="0_x_5">&lt; 5 days</option>
                                <option value="5_x_10">&lt; 10 days</option>
                                <option value="10_x">&ge; 10 days</option>
                            </select>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by level</span>
                            <select name="level" value={filters.level} onChange={(event) => {
                                filterHandler(event,`level`)
                            }}>
                                <option value="">level</option>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="difficult">difficult</option>
                            </select>
                        </label>
                    </form>
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <ul className="trip-list">
                        {filtredTrips.map((value, index, array) => {
                            return <TripCard trip={value} key={value.id}></TripCard>
                        })}
                    </ul>
                </section>
            </main>
    );
};

export default Main;