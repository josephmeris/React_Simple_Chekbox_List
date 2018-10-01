import React from 'react'; 
import CheckboxList from './CheckBoxList';

class CheckboxListContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            checkboxItems: {checkboxListItems:[]}
        }

        this.populateList = this.populateList.bind(this);
    }

    componentDidMount(){
        this.populateList();
    }

    populateList(){
        let items = []; 
        for(var i=0; i < 5; i++){
            items.push({
                item: `Item ${i}`,
                id: i
            });
        }

        const checkboxItems = this.state.checkboxItems;
        checkboxItems.checkboxListItems = items;
        this.setState(checkboxItems);
    }

    render(){
        return(
            <div> <CheckboxList checkBoxListItems={this.state.checkboxItems.checkboxListItems}/> </div>
        );
    }
}

export default CheckboxListContainer;