import { useFEtch } from "../hooks/useFEtch";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFEtch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );
const {autor,quote}= !!data &&data[0]
  

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{autor}</p>
          <footer className="blockquote-footer">{quote}</footer>
        </blockquote>
      )}
    </>
  );
};
