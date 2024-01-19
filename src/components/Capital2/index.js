import './index.css'

const Capital2 = props => {
  const {capitalDetails} = props
  const {capitalDisplayText, id} = capitalDetails

  return (
    <option key={id} value={id}>
      {capitalDisplayText}
    </option>
  )
}

export default Capital2
