const nav = ['Home', 'Login', 'Signup' ];

const List = () => {
    const listItems = nav.map(nav =>
        <li>{nav}</li> 
        );
    return (
        <ul>{listItems}</ul>
    )
}

export default List;