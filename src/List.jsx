import PropTypes from 'prop-types'

function List(props) {

    // const fruits = [
    //     {id: 1, name: "apple", calories: 95},
    //     {id: 2, name: "orange", calories: 45},
    //     {id: 3, name: "banana", calories: 105},
    //     {id: 3, name: "coconut", calories: 159},
    //     {id: 4, name: "pineapple", calories: 37},
    // ];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //sort alphabetically
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //sort reverse alphabetically
    //fruits.sort((a, b) => a.calories - b.calories); //sort numerically
    //fruits.sort((a, b) => b.calories - a.calories); //sort reverse alphabetically

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //filter low calories fruits
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100); //filter low calories fruits

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>
                                    <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.calories}
                                    </b></li>);

    return (
            <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>
    );
}

List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List