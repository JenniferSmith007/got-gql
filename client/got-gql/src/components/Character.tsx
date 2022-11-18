export const Character = ({character} : any) => {
const {name,gender,died,culture,born,id} = character
return(
    <>
    <p>Name: {name}</p>
    <p>Gender: {gender}</p>
    <p>Died:{died}</p>
    <p>Culture:{culture}</p>
    <p>Born: {born}</p>
    <p>{id}</p>

    </>
)
}