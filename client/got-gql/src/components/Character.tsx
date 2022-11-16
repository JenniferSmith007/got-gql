export const Character = ({character} : any) => {
const {name,gender,died,culture,born,id} = character
return(
    <>
    <p>{name}</p>
    <p>{gender}</p>
    <p>{died}</p>
    <p>{culture}</p>
    <p>{born}</p>
    <p>{id}</p>

    </>
)
}