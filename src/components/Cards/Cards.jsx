import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                   <CardContent>
                       <Typography color="text-secondary" gutterbottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                       </Typography>
                       <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography color="BODY-2">Number of active cases of Covid-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                   <CardContent>
                       <Typography color="text-secondary" gutterbottom>Recovered</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                       </Typography>
                       <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography color="BODY-2">Number of recoveries from Covid-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                   <CardContent>
                       <Typography color="text-secondary" gutterbottom>Deaths</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                       </Typography>
                       <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography color="BODY-2">Number of deaths caused by Covid-19</Typography>
                   </CardContent>
               </Grid>
           </Grid>
        </div>
    )
}

export default Cards;
