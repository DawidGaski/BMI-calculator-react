const Result = ({ result }) => {
  return (
    <p>
      Twoje BMI:{" "}
      {result !== undefined && (
        <>
          {result.height}
          {result.weight}
          {result.bmi}
        </>
      )}
    </p>
  );
};
export default Result;
