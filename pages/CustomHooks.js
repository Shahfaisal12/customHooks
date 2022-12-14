import React from "react";
import useFetch from "./useFetch";
import { useRouter } from 'next/router'

const CustomHooks = () => {
  const [data] = useFetch();
  const router = useRouter()

  return (
    <>
      <div className="container py-5">
<h1 className="mb-5">Welcome to Custome Hook Page</h1>

        {data &&
          data.slice(0, 10).map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}

          <button className="btn btn-outline-primary mx-2" onClick={() => router.push('/Home')}>Home Page</button>
          <button className="btn btn-outline-primary" onClick={() => router.push('/CovidData')}>Covid Data</button>
      </div>
    </>
  );
};

export default CustomHooks;
