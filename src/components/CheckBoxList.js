import React from 'react'; 

class CheckboxList extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            selectedItems: {currSelectedItems: []}
        }

        this.checkAllItems = this.checkAllItems.bind(this);
    }
    
    createCheckListItems = (item) => {
        return(
            <ul>
                <li>
                    <label htmlFor={`item${item.id}`}>
                        <input id={`item${item.id}`} type= "checkbox" 
                               onChange = {(e) => this.checkItemOnChange(e, item)}
                               checked = {this.state.selectedItems.currSelectedItems.some((i) => i === item.id)}/>
                             {item["item"]} 
                     </label>
                </li>
            </ul>
        )

    }

    updateItemSelection(items){
        const selectedItems = this.state.selectedItems; 
        selectedItems.currSelectedItems = items;
        this.setState({selectedItems});
    }

    checkAllItems = (e) =>{
        if(e.target.checked){
            let items = this.props.checkBoxListItems;
            const allItems = [...this.state.selectedItems.currSelectedItems];

            for(var i=0; i <items.length; i++){
                allItems.push(items[i].id);
            }

            this.updateItemSelection(allItems);
        }
        else{
            this.updateItemSelection([]);
        }
    }

    checkItemOnChange = (e, item) =>{
        const selected = [...this.state.selectedItems.currSelectedItems];
        if(e.target.checked){
            selected.push(item["id"])
        }
        else{
            const index = selected.findIndex((i) => i === item.id);
            selected.splice(index, 1);
        }

        this.updateItemSelection(selected);
    }

    render(){
        return(
            <div>
                 <label> 
                     <input type="checkbox" onChange={this.checkAllItems}/>
                        Select All
                 </label>
                        {this.props.checkBoxListItems.map(this.createCheckListItems)}
            </div>
        );
    }
}

export default CheckboxList;