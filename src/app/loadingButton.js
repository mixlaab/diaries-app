import { useEffect } from "react";
import { Loader } from "./loader";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";

export default function LoadingButton({ onResponse, isLoading, setLoading }) {
  useEffect(() => {
    const callApi = () =>
      fetch("http://localhost:3333/api/diaries", { method: "GET" });

    if (isLoading) {
      callApi()
        .then((response) => response.json())
        .then((json) => onResponse(json))
        .catch((_error) => onResponse("Failed to fetch data from the API :("))
        .finally(() => setLoading(false));
    }
  }, [onResponse, isLoading, setLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className={styles.buttonContainer}>
      <Button
        color="primary"
        size="md"
        onClick={!isLoading ? handleClick : null}
        isDisabled={isLoading}
        fullWidth
      >
      {isLoading? <Loader/> : null}
      <div className={isLoading? styles.callApiText : null}>Get diaries</div>
      </Button>
    </div>
  );
}
