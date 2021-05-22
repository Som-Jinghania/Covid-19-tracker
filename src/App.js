import React from 'react'
// import Cards from './components/Cards/Cards';37:00
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaimg from './images/image.jpg';


class App extends React.Component{
state ={
    data:{},
    country:'',
}
    async componentDidMount (){
        const fetcheddata = await fetchData();
        this.setState({data:fetcheddata})
    }
    
    handleCountryChange = async (country)=>{
        const fetcheddata = await fetchData(country);
        this.setState({data:fetcheddata,country:country});

    }
    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaimg} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                

            </div>
        )
    }
}

export default App;