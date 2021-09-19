import './Input.css'

const Input = ({ nameText, valueText, onTextChange, nameCheckbox, valueCheckbox, onCheckboxChange }) => {
  return (
    <section className="Input">
      <input type="text" name={nameText} value={valueText} onChange={(e) => onTextChange(e)} />
      <input type="checkbox" name={nameCheckbox} value={valueCheckbox} onChange={(e) => onCheckboxChange(e)} />
    </section>
  )
}

export default Input
