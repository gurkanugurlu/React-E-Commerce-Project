import React from "react";
import { faEdit, faTimes, faInfo, faIdBadge, faCrop, faAudioDescription, faCalculator, faDollarSign, faTasks} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultAxios from '../../api/defaultServer'
import { Link } from 'react-router-dom';

import Modal from '../Other-Components/MyModal';
import matchSorter from 'match-sorter';
// Import React Table
import ReactTable from "react-table";
import 'react-table/react-table.css';


class MyReactTable extends React.Component {
  state = {
    data: [],
    isModalOpen: false,
    selectedData:null
    
  };
   onDeleteItem=  async (id) =>{
    await defaultAxios.delete(`/products/${id}`)

    this.takeData();
  }
  changeModalVisibility = () => {
    this.setState((prevState) => {
        return {
            isModalOpen: !prevState.isModalOpen
        }
    })
}

  addDataToState(selectedData){
    this.setState(()=>{
      return{
        selectedData:selectedData,
        isModalOpen:true
      }
    })
  }

  async takeData(){
    const answer= await defaultAxios.get('/products');
    console.log(answer);
    this.setState(()=>{
      return {
        data:answer.data.data,
        isModalOpen:false
      }
    })
  }
   componentDidMount(){
  this.takeData();  
  }  
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable className="products-table -highlight -striped"
          highlight
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {

              columns: [
                {
                  Header:() => (
                    <span>
                      <FontAwesomeIcon icon={faIdBadge} size="1x" color="gray" /> <b>Id</b>
                    </span>
                  ),
                  accessor: "id"
                },
                {
                  Header:() => (
                    <span>
                      <FontAwesomeIcon icon={faCrop} size="1x" color="gray" /> <b>Name</b>
                    </span>
                  ),
                  id: "productName",
                  accessor: d => d.productName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["productName"] }),
                  filterAll: true
                },
                {
                  Header: () => (
                    <span>
                    
                      <FontAwesomeIcon icon={faAudioDescription} size="1x" color="gray" /><b>Description</b>
                    </span>
                  ),
                  id: "description",
                  accessor: d => d.description,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["description"] }),
                  filterAll: true
                }, {
                  Header: () => (
                    <span>
                      <FontAwesomeIcon icon={faCalculator} size="1x" color="gray" /><b>Stock Count</b>
                    </span>
                  ),
                  accessor: 'stockCount',
                  Cell: row => (
  
                    <div
                      className="stock-count-container"
                    >
                      <div title={`${row.value} has left.`}
                        style={{
                          width: `${row.value >= 100 ? 100:row.value}%`,
                          height: '100%',
                          backgroundColor: row.value >=100 ? '#85cc00'
                            : row.value >=90 ? '#a3f30d'
                              : row.value>=80 ?  '#92ff04':row.value>=60 ? '#d1ff04': row.value>=50? '#8fac0f':row.value>40? '#ac680f': row.value>30 ?'#be5353' :row.value>=20? '#ff1c1c': row.value>=1? '#3a2424': '#ff2e00',
                          borderRadius: '2px',
                          transition: 'all .2s ease-out'
                        }}
                      />
                    </div>
                  )
                }
              ]
            },
            {
              Header:"Price",
              columns: [
                {
                
                  Header: () => (
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} size="1x" color="gray" /><b>Min</b>
                    </span>
                  ),
                  id:"price",
                  accessor:"price",
                  Filter: ({ filter, onChange }) =>
                    <input
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value:""}
                    />,
                    filterMethod: (filter, row) => {

                    if (filter.value  < row[filter.id]) {
                      return row[filter.id] 
                    }
                    
                  },
                  Cell:row => (
      <div
        style={{
          textAlign:"right",
          fontWeight:"bolder",
        
        }}
      > {`${row.value} TL`}</div>),
                
      width: 120
                
                },
                {
                  Header: () => (
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} size="1x" color="gray" /><b>Max</b>
                    </span>
                  ),
                  id:"price2",
                  accessor:"price",
                  Cell: ({ value }) => null,
                  Filter: ({ filter, onChange }) =>
                    <input
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value:""}
                    />,
                    filterMethod: (filter, row) => {

                    if (filter.value  > row[filter.id]) {
                      return row[filter.id] 
                    }
                    
                  },
                  width: 120 
                }  ]
            },
                
                {
                  Header: () => (
                    <span>
                      <FontAwesomeIcon icon={faTasks} color="gray" /> <b>Actions</b>
                    </span>
                  ),
                  Cell: props => {
                    return (
                      <div>
                        
                        <Link to={`/products/edit/${props.original.id}`} >
                          <button title="Info" className="btn btn-warning products-table-buttons" >
                            <FontAwesomeIcon icon={faEdit} className="info-icon" size="2x" />
                          </button>
                        </Link>
                        <button title="Delete " style={{ marginLeft: "1rem" }} className="btn btn-danger products-table-buttons" onClick={(e)=>{this.addDataToState(props.original)}} >
                          <FontAwesomeIcon icon={faTimes} size="2x" />
                        </button>

                        <Link to={`/products/${props.original.id}`}>
                          <button title="Info" style={{ marginLeft: "1rem" }} className="btn btn-primary products-table-buttons" >
                            <FontAwesomeIcon icon={faInfo} className="info-icon" size="2x" />
                          </button>
                        </Link>
                      </div>
                    )
                  },
                  sortable: false,
                  filterable: false,
                  width: 150

                }
            
          ]}
          defaultPageSize={20}

        />
        <br />
        <Modal isModalOpen={this.state.isModalOpen} changeModalVisibility={this.changeModalVisibility} onHandlerFunction={this.onDeleteItem} selectedData={this.state.selectedData} button1Text="Delete" button1Cs="my--modal__button--delete"
        operation="delete"

        />
      </div>
    );
  }
}


export default MyReactTable;