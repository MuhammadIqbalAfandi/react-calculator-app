import './Operator.css'

const Operator = ({ operator, onClick }) => {
  return (
    <button className="Operator" type="button" onClick={() => onClick(operator)}>
      {operator}
    </button>
  )
}

export default Operator
