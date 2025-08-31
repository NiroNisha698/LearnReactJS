interface Props{
    text:string
}

const Alert = ({text}: Props) => {
  return (
    <div className="alert alert-primary">{text}</div>
    //test1
  )
}

export default Alert