import React from "react";

import "../../css/style.css";
import { ResultData } from "../../data/ResultData";
import edit from "../../image/table/edit.svg";
var i = 0;

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            edit: [],
            n: -1,
            kpgz: "",
            code: "",
            name: "",
            spgz: "",
            measure: "",
            unit: "",
            singlecost: "",
            allcost: "",
            address: "",
        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({n : this.state.n + 1})
        i+=1;
        if (i>-1 && ResultData[i-1] === undefined) {
            i-=1;
        };
    }

    handleUpdateClick() {
        this.forceUpdate();
        this.setState({
            items: ResultData[i],
            edit: ResultData[i],
        });
        console.log(ResultData[i]);
    }

    handleClick(id) {
        var items = [...this.state.items];
        items[id-1].code = this.state.code || this.state.edit[id-1].code;
        items[id-1].kpgz = this.state.kpgz || this.state.edit[id-1].kpgz ;
        items[id-1].name = this.state.name || this.state.edit[id-1].name;
        items[id-1].spgz = this.state.spgz || this.state.edit[id-1].spgz;
        items[id-1].measure = this.state.measure || this.state.edit[id-1].measure;
        items[id-1].unit = this.state.unit || this.state.edit[id-1].unit;
        items[id-1].singlecost = this.state.singlecost || this.state.edit[id-1].singlecost;
        items[id-1].allcost = this.state.allcost || this.state.edit[id-1].allcost;
        items[id-1].addr = this.state.address || this.state.edit[id-1].addr;
        this.setState({items});
        console.log(typeof(this.state.items.singlecost));
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "kpgz":
                this.setState({kpgz: event.target.value});
                break;
            case "code":
                this.setState({code: event.target.value});
                break;
            case "name":
                this.setState({name: event.target.value});
                break;
            case "spgz":
                this.setState({spgz: event.target.value});
                break;
            case "measure":
                this.setState({measure: event.target.value});
                break;
            case "unit":
                this.setState({unit: event.target.value});
                break;
            case "singlecost":
                this.setState({singlecost: event.target.value});
                break;
            case "allcost":
                this.setState({allcost: event.target.value});
                break;
            case "address":
                this.setState({address: event.target.value});
                break;
        }
    }

    render() {
        
        if (ResultData[i] === undefined) { 
            return (
                <div className="table-start__content _container">
                    <div className="table-start " onClick={this.handleUpdateClick} id="update">?????????????? ??????????????</div>
                </div>
        )} else {
            return(
            <section className="table">
                <div className="table__content _container">
                    <div className="table__row">
                        <form className="table__form">
                            <label>
                                ???????? 
                                <input value={this.kpgz} onChange={this.handleChange} id="kpgz" placeholder="????????"/>
                            </label>
                            <label>
                                ????????
                                <input value={this.code} onChange={this.handleChange} id="code" placeholder="????????"/>
                            </label>
                            <label>
                                ????????. ??????????
                                <input value={this.spgz} onChange={this.handleChange} id="spgz" placeholder="????????"/>    
                            </label>
                            <label>
                                ????????
                                <input value={this.name} onChange={this.handleChange} id="name" placeholder="????????"/>
                            </label>
                            <label>
                                ????. ??????????????????
                                <input value={this.measure} onChange={this.handleChange} id="measure" placeholder="????????"/>
                            </label>
                            <label>
                                ????????????????????
                                <input value={this.unit} onChange={this.handleChange} id="unit" placeholder="????????"/>
                            </label>
                            <label>
                                ????????
                                <input value={this.singlecost} onChange={this.handleChange} id="singlecost" placeholder="????????"/>
                            </label>
                            <label>
                                ??????????????????
                                <input value={this.allcost} onChange={this.handleChange} id="allcost" placeholder="????????"/>
                            </label>
                            <label>
                                ??????????
                                <input value={this.address} onChange={this.handleChange} id="address" placeholder="????????"/>
                            </label>
                        </form>
                        <ul className="table__list">
                            <li className="table__block">
                                <div className="table__hat number">???</div>
                                <div className="table__hat id">ID</div>
                                <div className="table__hat kpgz">????????</div>
                                <div className="table__hat code">????????</div>
                                <div className="table__hat cpgz">???????????????????????? ??????????</div>
                                <div className="table__hat name">????????</div>
                                <div className="table__hat measure">?????????????? ??????????????????</div>
                                <div className="table__hat unit">????????????????????</div>
                                <div className="table__hat price">???????? ???? ????. ??????, ??????</div>
                                <div className="table__hat cost">?????????????????? <br/> ???? ??????, ??????</div>
                                <div className="table__hat address">??????????</div>
                            </li>
                        </ul>
                        <ul className="table__list">
                            {this.state.items.map(( item, index ) => {
                                return(
                                    <li className="table__block" key={index}>
                                        <div className="table__box number"><img onClick={() => this.handleClick(item.num)} src={edit}/> {item.num}</div>
                                        <div className="table__box id">{item.id}</div>
                                        <div className="table__box kpgz">{item.kpgz === undefined ? "????????" : item.kpgz}</div>
                                        <div className="table__box code">{item.code}</div>
                                        <div className="table__box cpgz" >{item.spgz === undefined ? "????????" : item.spgz}</div>
                                        <div className="table__box name">{item.name.length > 34 ? item.name.substring(0, 35).concat("...") : item.name}</div>
                                        <div className="table__box measure">{item.measure}</div>
                                        <div className="table__box unit">{item.unit}</div>
                                        <div className="table__box price">{item.singlecost === undefined ? "???????? ???? ????. ??????, ??????" : item.singlecost}</div>
                                        <div className="table__box cost">{item.allcost === undefined ? "?????????????????? ???? ??????, ??????" : item.allcost}</div>
                                        <div className="table__box address">{item.addr === " " ? "??????????" : item.addr}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    } 
}
}
