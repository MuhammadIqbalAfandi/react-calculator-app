import './Result.css'

const Result = ({ value }) => {
  return (
    <section className="Result">
      <p>Result:</p>
      <p>{value}</p>
    </section>
  )
}

export default Result
