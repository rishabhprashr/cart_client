import React from 'react';


class Categories extends React.Component {
  state = {
    categories: null,
  }

  UNSAFE_componentWillMount() {
    this.setState({categories: [
      "One",
      "Two",
      "Three"
    ]})
  }

  render () {
    const { categories } = this.state;
    return(
      <div>
        {categories?.map((category) =>
          <div>{category}</div>
        )}
      </div>
    );


  }
}

export default Categories;
