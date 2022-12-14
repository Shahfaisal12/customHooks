import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const CovidData = () => {
  const [data, setData] = useState([]);
    const [query, setQuery] = useState();

  const mydata = data.Countries;
  console.log(mydata)

  const fetchData = () => {
    return fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((covidData) => setData(covidData));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="covid-data">
        <div className="container">
        <h1 className="my-5">Covid19 Daily Report</h1>

        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={((e)=> setQuery(e.target.value))} />

          <div className="row py-5">
            {mydata &&
              mydata.length > 0 &&
              mydata.filter(items=>items.Country.toLowerCase().includes(query)).map((items) => {
                return (
                  <>
                    <div className="col-md-3" key={items.id}>
                      <Card spacing={2} sx={{mb:3}}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          {items.Country}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Date: {items.Date}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          New Case: {items.NewConfirmed}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                         New Death:  {items.NewDeaths}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            New Recover : {items.NewRecovered}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total Confirmed : {items.TotalConfirmed}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total Deaths : {items.TotalDeaths}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total Recovered : {items.TotalRecovered}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidData;
