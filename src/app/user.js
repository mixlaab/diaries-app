'use client'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';
import LoadingButton from './loadingButton';
 
export default function User() {
  const [response, setResponse] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(response)
  }, [response]);

  const updateResponse = (data) => {
    setResponse(data);
    setLoading(false);
  };

  return (
    <div className={styles.description}>
      <LoadingButton onResponse={updateResponse} isLoading={isLoading} setLoading={setLoading}/>
      { Array.isArray(response) && !isLoading &&
        <div>
          {response.map((item) => (
            <div key={item.id}>
              <p>
                {`
                  Date: ${item.date} 
                  Weather: ${item.weather}
                  Visibility: ${item.visibility}
                  Comment: ${item.comment}
                `}
              </p>
            </div>
          ))}
        </div>
      }
      { console.log(typeof response) }
      { typeof response === 'string' && <p>{response}</p> }
    </div>
  )
}