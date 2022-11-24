const DessertsList = (props) => {
  const list = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort(function (a, b) {
      return a.calories - b.calories;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return <ul>{list}</ul>;
};

export default DessertsList;
