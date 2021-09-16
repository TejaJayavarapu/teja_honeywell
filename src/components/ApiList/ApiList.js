
import React from 'react';
import ApiCard from '../ApiCard/ApiCard';
import APIData from '../../FakeData/data';
import './ApiList.css';

class ApiList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            apis: APIData,
            inputSearch: '',
            selectedCategory: ''
        }
    }

    apiDataHandle = (type) => {
        console.log(type)
        const filterData = APIData.filter(data => data.apiType === type);
        this.setState({
            apis: filterData,
            selectedCategory: type
        })
        this.searchApi(this.state.inputSearch);
    }

    searchApi = (apiName) => {
        if (apiName) {
            let search = [];
            if (this.state.selectedCategory) {
                search = APIData.filter(data => data.apiName.includes(apiName) && data.apiType === this.state.selectedCategory)

            } else {
                search = APIData.filter(data => data.apiName.includes(apiName))

            }

            this.setState({
                apis: search,
                inputSearch: apiName
            });
        }
    }

    render() {
        const { apis } = this.state
        const apiTypes = ['API_ONE', 'API_TWO', 'API_THREE', 'API_FOUR'].map(type => {

            return (
                <a style={{ cursor: 'pointer' }} className={`btn item ${type === this.state.selectedCategory ? 'active' : ''}`} onClick={() => this.apiDataHandle(type)}>{type}</a>
            )
        })
        return (
            <div className="wrapper">
                <div className="header">
                    <div >
                        Explore By Type
                        {apiTypes}

                    </div>
                    <div class="ui category search">
                        <div class="ui icon input">
                            <input class="prompt" placeholder="Api Name..." type="text" onChange={(e) => this.searchApi(e.target.value)} value={this.state.inputSearch} />
                            <i class="search icon"></i>
                        </div>
                        <div class="results"></div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    background: '#1abc9c',
                    flexWrap: "wrap"
                }}>

                    {apis.map(eachApi => {
                        return (<ApiCard {...eachApi} key={eachApi.id}></ApiCard>);

                    })}
                </div>

            </div>

        )
    }
}


export default ApiList;