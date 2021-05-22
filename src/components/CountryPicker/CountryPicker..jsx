import React,{useState,useEffect} from 'react';
import {NativeSelect,formControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    return (
        <formControl className={styles.formControl}>
           <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
             <option value="">Global</option> 
             {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}  
            </NativeSelect> 
        </formControl>
    )
}

export default CountryPicker;