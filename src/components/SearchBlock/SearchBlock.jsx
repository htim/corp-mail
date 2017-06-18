import * as React from "react";
import Label from "arui-feather/label";
import SlideDown from "arui-feather/slide-down";
import "./SearchBlock.css"
import Input from "arui-feather/input";
import Icon from "arui-feather/icon";
import Button from "arui-feather/button";
import CalendarInput from "arui-feather/calendar-input";
import Select from "arui-feather/select";
import {Col} from "react-flexbox-grid"

export default class SearchBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filtersExpanded: false
        }
    }

    handleShowFilters = () => {
        this.setState((prevState) => {
            return {filtersExpanded: !prevState.filtersExpanded}
        })
    };

    getClients = () => {
        return ([
            {
                type: "item",
                value: "client1",
                text: "Эльдорадо"
            },
            {
                type: "item",
                value: "client2",
                text: "БКМ"
            }
        ])
    };

    getCategories = () => {
        return ([
            {
                type: "item",
                value: "client1",
                text: "Валютный контроль"
            },
            {
                type: "item",
                value: "client2",
                text: "Уведомление"
            }
        ])
    };

    renderSearchBlock = () => {
        return (
            <Col>
                <div className="search__block">
                    <div className="search__input">
                        <Input width="available" icon={
                            <Icon icon="search"/>
                        }>
                        </Input>
                    </div>
                    <div className="show_filter__button">
                        <Button pseudo={true} onClick={this.handleShowFilters}
                                text={this.state.filtersExpanded ? "Скрыть фильтры" : "Показать фильтры"}/>
                    </div>
                </div>
                <SlideDown isExpanded={this.state.filtersExpanded}>
                    <div className="extra_filters__block">
                        <div>
                            <Label size="m">Дата получения документа с </Label>
                            <CalendarInput size="s" className="calendars__element"/>
                            <Label size="m">по </Label>
                            <CalendarInput size="s" className="calendars__element"/>
                        </div>
                        <div className="select__client">
                            <Select width="available" mode="radio-check" placeholder="Выберите организацию" options={
                                this.getClients()
                            }/>
                        </div>
                        <div className="select__category">
                            <Select width="available" mode="radio-check" placeholder="Выберите категорию" options={
                                this.getCategories()
                            }
                            />
                        </div>
                    </div>
                </SlideDown>
            </Col>
        )
    };

    render() {
        return this.renderSearchBlock()
    }
}