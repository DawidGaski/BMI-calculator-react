import { StyledResult } from "./styled";

const Result = ({ result }) => {
  return (
    <StyledResult>
      Twoje BMI:{" "}
      <strong>
        {result !== undefined && (
          <>
            {result.height}
            {result.weight}
            {result.bmi.toFixed(4)}
          </>
        )}
      </strong>
    </StyledResult>
  );
};
export default Result;
