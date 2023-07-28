import React from 'react';

class SearchBox extends React.Component {
    render() {
        const { searchField, searchChange } = this.props;
        return (
            <div>
                <input type="search" placeholder='search robots' className='tc pa3 ba b--green bg-lightest-blue' onChange={searchChange} />
            </div>
        );
    }
}
export default SearchBox;